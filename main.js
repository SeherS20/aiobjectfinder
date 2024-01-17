video = "";
status = ""
function preload(){
}
function setup(){
canvas = createCanvas(380, 320);
canvas.center();
video = createCapture(VIDEO)
video.hide()
}
function draw(){
    image(video, 0, 0, 380, 320)
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}
function modelLoaded(){
    console.log("model loaded! 🌈🌈🌈")
    status = true;
    video.loop()
    video.speed(1)
    video.volume(0);
}