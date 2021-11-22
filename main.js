status="";
img1="";
function preload()
{
    img1=loadImage('img1.jpeg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}
function modelLoaded()
{
    console.log("Model loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
if(error){
    console.log(error);
}    
console.log(results);
}