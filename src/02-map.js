/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  const songTitles = songs.map((song) => song.title);
    return songTitles;
};

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
  const songDeets = songs.map((song) => `${song.title} by ${song.artist}`);
  return songDeets;
};

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  const titleAndArtistArray = songs.map((song) => { //creates new array by iterating through it and applying function to each element "song" within songs array
  const songTitle = song.title; // for the current song object song.title processed in .map() we assign const variable songTitle
  const songArtist = song.artist; // for the current song object song.artist processed in .map() we assign const variable songArtist
  return {[songTitle]:songArtist}; // returning object where property key is songTitle and value songArtist. The square brackets around songTitle are used to use the value of songTitle as the key (this is called computed property name syntax).
});
return titleAndArtistArray; //output of getTitleAndArtist function which should return the objects made in line 48 within an array (.map() makes an array)
};

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};