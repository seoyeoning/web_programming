window.onload = getMyLocation;

// 목적지 좌표
var ourCoords = {
  latitude: 37.477128,
  longitude: 126.981734,
};

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert('Oops, no geolocation support');
  }
}

function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var div = document.getElementById('location');
  div.innerHTML =
    'You are at Latitude: ' + latitude + ', Longitude: ' + longitude;

  var km = computeDistance(position.coords, ourCoords);
  var distance = document.getElementById('distance');
  distance.innerHTML = 'You are ' + km + ' km from the WickedlySmart HQ';
}

function displayError(error) {
  var errorType = {
    0: 'Unknown error',
    1: 'Permission denied by user',
    2: 'position is not available',
    3: 'Request timed out',
  };

  var errorMessage = errorType[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + ' ' + error.message;
  }
  var div = document.getElementById('location');
  div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
  // 라디안으로 변환
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);

  var Radius = 6371; // radius of the Earth in km
  var distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;

  return distance;
}

// 라디안 변환 함수
function degreesToRadians(degrees) {
  radians = (degrees * Math.PI) / 180;
  return radians;
}
