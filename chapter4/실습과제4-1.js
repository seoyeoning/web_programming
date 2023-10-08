function dogAge(age) {
  return age * 7;
}

var myDogAge = dogAge(4);

function rectangleArea(width, height) {
  var area = width * height;
  return area;
}

var recArea = rectangleArea(3, 4);

function addUp(numArray) {
  var total = 0;
  for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total;
}

var theTotal = addUp([1, 5, 3, 9]);

function getAvatar(points) {
  var avatar;
  if (points < 100) {
    avatar = 'Mouse';
  } else if (points > 100 && points < 1000) {
    avatar = 'Cat';
  } else {
    avatar = 'Ape';
  }
  return avatar;
}

var myAvatar = getAvatar(335);

console.log('박서연_2020710026');

console.log('myDogAge = ' + myDogAge);
console.log('rectArea = ' + recArea);
console.log('theTotal = ' + theTotal);
console.log('myAvatar = ' + myAvatar);
