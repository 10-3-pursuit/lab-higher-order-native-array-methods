/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

// SYNTAX: 
// const newArray = originalArray.map(function(item) {
//   Do something with item and return a new value
//  });

// Higher Order Functions SYNTAX: 
// Usage of the higher-order function
// higherOrderFunction(function(parameter) {
//   // This is the callback function
//   // It can take arguments and perform some action
//   // ...
// });
/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  return songs.map(function(song) {
    return song.title
  });
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
    return songAndArtist = songs.map(function(song) {
      return `${song.title} by ${song.artist}`
    });
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */

// TASK: 
// Create an object & create an array 
function getTitleAndArtist(songs) {
  return songs.map((song) => {
   let songDeet = {} 
   songDeet[song.title] = song.artist 
   return songDeet
  });
}

// NOTE: Review how to access objects in an array! 

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
