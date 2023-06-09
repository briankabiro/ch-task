const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let partitionKey = event.partitionKey || createHash(stringifyData(event));

  console.log("===== ghapa", partitionKey)
  partitionKey = validEventPartitionKey(partitionKey);

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createHash(partitionKey);
  }

  return partitionKey;
}

function validEventPartitionKey(partitionKey) {
  if (typeof(partitionKey) !== "string") {
    return createHash(stringifyData(partitionKey))
  }

  return partitionKey;
}

function createHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function stringifyData(data) {
  return JSON.stringify(data);
}