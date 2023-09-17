window.onload = init;

function init() {
  var button = document.getElementById('addButton');
  button.onclick = handleButtonClick;
  loadPlaylist();

  var clearButton = document.getElementById('clearAllButton');
  clearButton.onclick = handleClearButtonClick;
}

function handleButtonClick() {
  var textInput = document.getElementById('songTextInput');
  var songName = textInput.value;

  var li = document.createElement('li');
  li.innerHTML = songName;

  var ul = document.getElementById('playlist');
  ul.appendChild(li);

  save(songName);
}
