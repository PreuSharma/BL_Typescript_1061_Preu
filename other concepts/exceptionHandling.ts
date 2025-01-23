/*

It's how we handle runtime errors gracefully without crashing the program. 
In TypeScript, we use try, catch, and finally blocks.

*/


try {
    // Code that might throw an error
    const num = parseInt("abc"); // This will throw an error
    console.log(num);
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
  } finally {
    // Always executes
    console.log("Done with error handling");
  }
  


// Custom Error Classes
class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  try {
    throw new ValidationError("Invalid input!");
  } catch (error) {
    console.error(error.name, ":", error.message);
  }
  