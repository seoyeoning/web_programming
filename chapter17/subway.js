window.onload = init;

function init() {
  let subwayForm = document.getElementById('subwayForm');
  subwayForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let _date = document.getElementById('date').value;
    let date = _date.replace(/-/g, '');
    let line = document.getElementById('line').value;
    getSubway(date, line);
  });
}

const url =
  'https://seoyeon.onrender.com/' +
  'http://openapi.seoul.go.kr:8088/494d4e63516d696e3131345876464e65/json/CardSubwayStatsNew/1/1000/';
async function getSubway(date, line) {
  const response = await fetch(url + date);
  var data = await response.json();

  updateSubway(data, line);
}

function updateSubway(subways, line) {
  let subwayDiv = document.getElementById('subway');
  subwayDiv.innerHTML = '';
  let subwayList = subways.CardSubwayStatsNew.row;
  for (let index = 0; index < subwayList.length; index++) {
    let subway = subwayList[index];
    if (subway.LINE_NUM === line) {
      let div = document.createElement('div');
      div.setAttribute('class', 'dataItem');
      div.innerHTML =
        '날짜: ' +
        +subway.USE_DT +
        '\t호선: ' +
        subway.LINE_NUM +
        '\t역 이름: ' +
        subway.SUB_STA_NM +
        '\t탑승승객: ' +
        subway.RIDE_PASGR_NUM +
        '\t하차승객: ' +
        subway.ALIGHT_PASGR_NUM;
      subwayDiv.appendChild(div);
    }
  }
}
