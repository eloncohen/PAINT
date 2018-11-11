var canvas = document.getElementById("canvas");
var colors = document.getElementById("colors");
var thicknesS = document.getElementById("thicknesS");
var color = "black";
var pixel;
var thickness = parseInt("5");

function draw() {
    pixel = document.createElement("div");
    canvas.appendChild(pixel);
    pixel.style.height = thickness + "px";
    pixel.style.width = thickness + "px";
    pixel.style.backgroundColor = color;
    pixel.style.position = "absolute";
    pixel.style.top = event.clientY + "px";
    pixel.style.left = event.clientX + "px";
}

function changeColor() {
    color = event.target.id;
}

function changeThickness() {
    thickness = event.target.id;
}


canvas.addEventListener('mousedown', function () {
    canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener('click', function () {
    canvas.removeEventListener("mousemove", draw);

});

colors.addEventListener("click", changeColor);
thicknesS.addEventListener("click", changeThickness);