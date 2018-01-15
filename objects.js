<<<<<<< HEAD
var playlist = { 'fakeArtist': 'notASong' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}
=======
var playlist = {};
>>>>>>> 18a70c6d1dc0477e4c232d06fdfdf763fdeb2481
