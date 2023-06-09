# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
My version is more readable because:
- If event is null, the code returns the trivial partition key. This makes the code more performant and reduces the work it has to do

- the repetitive calls to createHash have been extracted into a method. The code is cleaner that way since the main method is not clogged

- the code uses the conditional assignment(||) feature in JavaScript. This replaces the use of the candidate variable and multiple if statements to assign the value

- extra logic to check if candidate is a string is extracted into a function. The code assumes that partitionKey might be an invalid input and handles it correctly. 

- it has fewer if statements

 

