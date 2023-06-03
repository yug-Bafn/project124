function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(760,150);
    video.position(200,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log(modelLoaded);
}
function gotPoses(results){
if(results.lenght>0){
    console.log(results);
}
}