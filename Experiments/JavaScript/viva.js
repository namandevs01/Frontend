// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received!");
//   }, 1000);
// }

// fetchData((msg) => console.log(msg));

console.log(z); // ReferenceError (TDZ)
var z = 5;

let x = 100, y = 100;
const emoji = document.getElementById('emoji');

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') y -= 20;
  if (e.key === 'ArrowDown') y += 20;
  if (e.key === 'ArrowLeft') x -= 20;
  if (e.key === 'ArrowRight') x += 20;
  emoji.style.top = y + 'px';
  emoji.style.left = x + 'px';
});
