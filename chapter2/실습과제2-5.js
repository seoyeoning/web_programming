var word1 = 'a';
var word2 = 'name';
var word3 = 'nal p';
var word4 = 'lan a c';
var word5 = 'a man a p';
// 5 4 1 3  1 3 1
var phrase = '';

for (var i = 0; i < 4; i++) {
  if (i == 0) {
    phrase = word5;
  } else if (i == 1) {
    phrase = phrase + word4;
  } else if (i == 2) {
    phrase = phrase + word1 + word3;
  } else if (i == 3) {
    phrase = phrase + word1 + word2 + word1;
  }
}

alert(phrase + ' 박서연_2020710026');
