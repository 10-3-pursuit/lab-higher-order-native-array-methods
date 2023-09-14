/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  const shortestToLongest = songs.sort((a, b) => {
    if(a.runtimeInSeconds < b.runtimeInSeconds){
      return -1;
    }
    else if(a.runtimeInSeconds > b.runtimeInSeconds){
      return 1;
    }
    else{
      return 0;
    }
  });
  return shortestToLongest;
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  const artistNameSort = songs.sort((a, b) => {
    const lowerArtist1 = a.artist.toLowerCase();
    const lowerArtist2 = b.artist.toLowerCase();
    if(lowerArtist1 > lowerArtist2){
      return -1;
    }
    else if(lowerArtist1 < lowerArtist2){
      return 1;
    }
    else{
      return 0;
    }
  });
  return artistNameSort;
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  const songsAscending = songs.sort((a,b) => {
    const songTitle1 = a.title.toLowerCase();
    const songTitle2 = b.title.toLowerCase();

    if(songTitle1 > songTitle2){
      return 1;
    }
    else if(songTitle1 < songTitle2){
      return -1;
    }
    else{
      return 0;
    }
  });
  return songsAscending;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
