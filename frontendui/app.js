//setup canvas

canvas = document.querySelector("#icanvas");

console.log(canvas);

const ctx = canvas.getContext("2d");

directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function randomDirection(dir = directions) {
  return dir[Math.floor(Math.random() * dir.length)];
}

function drawShape(ctx, x, y) {
  ctx.fillStyle = "rgba(17, 17, 16, 1)";
  ctx.fillRect(x, y, 3, 3);
}

class Person{
  constructor(x,y)
}

let james = new Person(0,0);

console.log(james)

let x = 0;
let y = 0;

let runs = 100;
for (i = 0; i < runs; i++) {
  let d = randomDirection();
  x += d[0];
  y += d[1];
  drawShape(ctx, new_x, new_y);
}

//get coordinates of click in canvas
canvas.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  ctx.fillStyle = "rgba(17, 17, 16, 1)";
  ctx.fillRect(x, y, 3, 3);
  let steps = 20;
  let count = 0;
  const drop = setInterval(() => {
    while (count < steps) {
      count += 1;
      ctx.clearRect(x, y, 3, 3);
      let direction = randomDirection();
      console.log(direction);
      ctx.fillStyle = "rgba(17, 17, 16, 1)";
      ctx.fillRect(x, y, 3, 3);
      setTimeout(() => {
        ctx.cleraRect((x += direction[0]), (y += direction[1]), 3, 3);
      }, 1000);
    }
  }, 1000);
  while (count >= steps) {
    drop.clearInterval();
  }
});

//create matrix

//draw matrix to canvas

//update matrix
