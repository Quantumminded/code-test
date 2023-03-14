// Define a function called `findAndFilterArray` that takes two parameters:
// 1. `checkObject`, which is an object of key-value pairs to match against
// 2. `unpredictableObject`, which is an object that may contain an array with the key "xyz"

function findAndFilterArray(checkObject, unpredictableObject) {

  // Initialize the `result` variable to `null`
  let result = null;

  // Define a nested function called `recursiveFind` that takes one parameter:
  // 1. `obj`, which is the current object being searched
  function recursiveFind(obj) {
  
    // If the current object is an array
    if (Array.isArray(obj)) {
    
      // Find the first object in the array that has a key "xyz"
      const xyzArray = obj.find((o) => o.xyz);

      // If an object with key "xyz" is found
      if (xyzArray) {
      
        // Filter the array to only include objects that match all key-value pairs in `checkObject`
        result = xyzArray.filter((o) =>
          Object.entries(checkObject).every(([key, value]) => o[key] === value)
        );
      }
    }
    // If the current object is an object (i.e., not an array or null)
    else if (typeof obj === "object" && obj !== null) {
    
      // Recursively call `recursiveFind` on each value in the object
      Object.values(obj).forEach(recursiveFind);
    }
  }

  // Call `recursiveFind` on the `unpredictableObject` parameter to start searching
  recursiveFind(unpredictableObject);

  // Return the resulting filtered array (or `null` if no array with key "xyz" is found)
  return result;
}
