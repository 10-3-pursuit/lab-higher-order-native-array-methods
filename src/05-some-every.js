/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(songs) {
  let songsOverTwoMins = songs.every((song) =>{
    return song.runtimeInSeconds > 120;
  })
    return songsOverTwoMins;
};

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  let songsOverFourMins = songs.some((song) =>{
    return song.runtimeInSeconds > 240;
  })
    return songsOverFourMins;
};

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  let peanutInSong = songs.some((song) =>{
    return song.artist === "Peanut";
  })
    return peanutInSong;
};

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
