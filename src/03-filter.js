/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsBySaib(songs) {
  const saibSongs = songs.filter(function(song){
    if (song.artist === "Saib"){
      return true
    }
  })
  return saibSongs
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsOverThreeMinutes(songs) {
  const over3Mins = songs.filter(function(song){
    if (song.runtimeInSeconds > 180){
      return true
    }
  })
  return over3Mins
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  const titleSameAsAlbum = songs.filter(function(song){
    if (song.title === song.album){
      return true
    }
  })
  return titleSameAsAlbum
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
