noseX=0
noseY=0
function preload(){
 clownNose=loadImage("https://i.postimg.cc/Kz569B3g/14-145189-chicago-city-estates-of-mexican-mustache-clip-art.jpg")
}
    function setup(){
        canvas=createCanvas(300,300)
        canvas.center()
        video=createCapture(VIDEO)
        video.size(300,300)
        video.hide()
        poseNet=ml5.poseNet(video,modelLoaded)
        poseNet.on('pose',gotPoses)
    }

    

function modelLoaded(){
    console.log("poseNet is initialized")
}

    function takeSnapshot(){
        save("myFilteredImage.png")
    }

function gotPoses(result){
  if (result.length>0)  {
      console.log(result)
      noseX=result[0].pose.nose.x
      noseY=result[0].pose.nose.y
      console.log("nose x"+ noseX)
      console.log("nose y"+ noseY)
  }
}

function draw() {
    image(video,0,0,300,300)
    //fill(255,0,0)
    //stroke(255,0,0)
    // circle(noseX,noseY,20)
    image(clownNose,noseX+8,noseY+3,30,30)
}

