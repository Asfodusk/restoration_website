let line = document.querySelector('#ourrange')
let arrow = document.querySelector('.test')
line.addEventListener('input', function (event) {
  console.log(event.srcElement.value)
arrow.style.transform = `rotate(${event.srcElement.value}deg)`;
});
