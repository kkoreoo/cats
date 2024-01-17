// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackfn) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // will pass data into the callbackfn
    console.log("In readFile's Callback: it has the data.");
    if (!error) return callbackfn(data);
    if (error) return callbackfn(undefined);
  
  });
};

module.exports = breedDetailsFromFile;

const printOutCatBreed = breed => console.log('Return Value:', breed);

breedDetailsFromFile('Bombay', printOutCatBreed);
