function handleClearButtonClick() {
  localStorage.clear();

  var ul = document.getElementById('playlist');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}
