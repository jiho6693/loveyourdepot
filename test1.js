const container = document.querySelector('#container');
const SQUARE_NUM = 50;
const colors = ['#c6045a', '#35a052', '#73965e', '#494b4a', '#a6a6a6', '#7d7a73', '#efeb5b', '#000000', '#fffcfb'];

for(let i=0; i<SQUARE_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColorToEl(square);
  });
  square.addEventListener('mouseout', () => {
    removeColorFromEl(square);
  });
  container.appendChild(square);
}

function setColorToEl(element) {
  //set random color
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0  0 10px ${color}`; //(쉼표를 사용해 여러 그림자를 겹칠 수 있음, 겹치면 불이 빛나는 네온 느낌 낼 수 있다!)
  //(수평그림자(필수), 수직그림자(필수), 흐림정보(선택), 그림자가 드리우는 정도(선택))

}

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}
