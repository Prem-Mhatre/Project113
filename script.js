function preload(){

}

function setup(){
    canvas = createCanvas(800, 640);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 200, 165, 400, 300);

    fill("green");
    rect( 75, 50, 650, 40);

    rect( 75, 540, 650, 40);

    rect( 40, 90, 40, 450);

    rect( 720, 90, 40, 450);

    fill("red");
    circle(80, 80, 150);
    circle(80, 560, 150);
    circle(720, 80, 150);
    circle(720, 560, 150);
}

function take_snapshot(){
    save("img_frame.png");
}