function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coins=loadSound("coin.wav");
	setSprites();
	MarioAnimation();
	mario_gameover = loadSound("gameover.wav");
	mario_kick= loadSound("kick.wav");
	mario_die= loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
  video.parent('game_console');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
} 

function draw() {
	game()
	if(noseX<300){
		marioX
	}
}
function modelLoaded(){
	console.log('ModelLoaded')
}
function gotPoses(results){
if(results.lenghth>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}




