function setup() {
    video = createCapture(VIDEO);
    video.position(560,240);
    video.size(490, 440);

    canvas = createCanvas(490, 440);
    canvas.position(560,240);

    pose=ml5.poseNet(video, model_loaded);
    pose.on('pose', got_result);
}

function model_loaded() {
    console.log("PoseNet is Loaded");
}

function got_result(results){
    if(results.length>0){
        console.log(results);
    }

}

function draw(){
    background(video);
}