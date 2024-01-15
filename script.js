function chunkString(str, chunkLength) {
  // Check if the input string is null
  if (str === null) {
    return [];
  }

  // Initialize an array to store the chunks
  const result = [];

  // Iterate through the string and create chunks of the specified length
  for (let i = 0; i < str.length; i += chunkLength) {
    const chunk = str.substr(i, chunkLength);
    result.push(chunk);
  }

  return result;
}
		
	// Do not change the code below
const str = prompt("Enter String.");
const chunkLength = prompt("Enter Chunk Size.");
alert(stringChop(str, chunkLength ));
