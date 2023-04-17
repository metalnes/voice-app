var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()

function start(){
    document.getElementById("textbox_speech").innerHTML="Please speak system is listening"
    recognition.start()
}
 recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("textbox_speech").innerHTML=content
 if(content=="take my selfie"||content=="take my selfie."||content=="selfie"){
    speak()
 } 

 }
 Webcam.set({
    width:350,
    height:400,
    image_format:"jpeg",
    jpeg_quality:100
 });
camera=document.getElementById("camera")
Webcam.attach(camera)
function speak(){
    var synth=window.speechSynthesis;
    speakdata="taking selfie in 5 seconds, PLease give a nice pose"
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
setTimeout(function(){
    takesnapshot()
  save()
},5000)
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='img1'src='"+data_uri+"'>"
    })
}
function save(){
link=document.getElementById("link")
image=document.getElementById("img1").src
link.href=image
link.click()
}


