const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("returns the event's partition key if it is valid" , () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "121"})
    expect(trivialKey).toBe("121")
  })

  it("returns the event's partition key if key is an array" , () => {
    const trivialKey = deterministicPartitionKey({partitionKey: [123]})
    expect(trivialKey).not.toBe(null);
    expect(trivialKey.length).toBeLessThan(256);
  })

  it("returns a valid key if key is a number" , () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 123})
    expect(trivialKey).not.toBe(null);
    expect(trivialKey.length).toBeLessThan(256);
  })

  it("returns a valid partition key if the input is empty" , () => {
    const trivialKey = deterministicPartitionKey({})
    expect(trivialKey).not.toBe(null);
    expect(trivialKey.length).toBeLessThan(256);
  })

  it("returns partition key not longer than 256" , () => {
    const longPartitionKey = "8f0e7148b2b35b92bfbd8a176629829b10971ff00357fe088f108f02a0b8062e663f5e17fc753fede8bdc5c763471b806d9d3deac0ecd28a304f66c078f5686daasa"
    const trivialKey = deterministicPartitionKey({partitionKey: longPartitionKey + longPartitionKey })
    expect(trivialKey.length).toBeLessThan(256)
  })
});
