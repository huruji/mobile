window.onload=function(){
	var music_btn=document.getElementById("music");
	var music_img=music_btn.getElementsByTagName("img")[0];
    var audio=document.getElementsByTagName("audio")[0];
    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");

    /*当音乐停止时，自动停止旋转效果，增加时间监听*/
    audio.addEventListener("ended", function(){
    	music_img.setAttribute("class", " ")
    },false);

    /*点击音乐图标，停止音乐播放*/
   /* music_btn.onclick=function(){
    	if(audio.paused){
 	audio.play();
 	music_img.style.animationPlayState="running";
 	music_img.style.webkitAnimationPlayState="running";
 	music_img.className="play";因为安卓手机不支持animation-play-state属性，采用这种方法暂时解决
 }else{
 	audio.pause();
 	music_img.style.animationPlayState="paused";
 	music_img.style.webkitAnimationPlayState="paused";*/
 	/*music_img.className="";因为安卓手机不支持animation-play-state属性，采用这种方法暂时解决*/

 /*}
}click事件有300毫秒的延迟，为了手机端，利用touchstart事件代替*/
music_btn.addEventListener("touchstart", function(){
	if(audio.paused){
 	audio.play();
 	music_img.style.animationPlayState="running";
 	music_img.style.webkitAnimationPlayState="running";//兼容低版本的ios
 	/*music_img.className="play";因为安卓手机不支持animation-play-state属性，采用这种方法暂时解决*/
 }else{
 	audio.pause();
 	music_img.style.animationPlayState="paused";
 	music_img.style.webkitAnimationPlayState="paused";//兼容低版本的ios
 	/*music_img.className="";因为安卓手机不支持animation-play-state属性，采用这种方法暂时解决*/
 }
},false);

page1.addEventListener("touchstart", function(){
    this.style.display="none";
    page2.style.display="block";
    page3.style.display="block";
    page3.style.top="100%";
    setTimeout(function(){
       page2.setAttribute("class","page fadeOut");
       page3.setAttribute("class","page fadeIn");
   }
        , 5500)
},false);
}
