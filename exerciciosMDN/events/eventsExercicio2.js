const $container = document.querySelector(".container");

const $canvas = document.createElement("canvas");
$canvas.classList.add("canvas");
$canvas.width = window.innerWidth;
$canvas.height = window.innerHeight;

$container.appendChild($canvas);

const $ctx = $canvas.getContext("2d");

const size = 60;
let x = size;
let y = size;

const drawCircle = (x, y, size) => {
  $ctx.fillStyle = "white";
  $ctx.clearRect(0, 0, $ctx.canvas.width, $ctx.canvas.height);
  $ctx.beginPath();
  $ctx.fillStyle = "black";
  $ctx.arc(x, y, size, 0, 2 * Math.PI);
  $ctx.fill();
};

const limitToWalk = (xx, yy, size) => {
  if (xx > $canvas.width - size - 8) x = $canvas.width - size;
  if (xx < 0 + size + 8) x = 0 + size;
  if (yy > $canvas.height - size - 8) y = $canvas.height - size;
  if (yy < 0 + size + 8) y = 0 + size;
};

const walk = (key) => {
  if (key === "d" || key === "ArrowRight") x += 24;
  if (key === "a" || key === "ArrowLeft") x -= 24;
  if (key === "w" || key === "ArrowUp") y -= 24;
  if (key === "s" || key === "ArrowDown") y += 24;
};

document.addEventListener("keydown", (event) => {
  walk(event.key);
  limitToWalk(x, y, size);
  drawCircle(x, y, size);
});

window.addEventListener("resize", () => {
  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
  limitToWalk(x, y, size);
  drawCircle(x, y, size);
});

drawCircle(x, y, size);
