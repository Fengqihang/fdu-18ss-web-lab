window.onload=function(){
var img=document.getElementsByTagName("img");

  var a=document.getElementById('a');
var images=["images/medium/5855774224.jpg",
    "images/medium/5856697109.jpg","images/medium/6119130918.jpg",
    "images/medium/8711645510.jpg","images/medium/9504449928.jpg"];
    img[2].onclick=function () {
            img[1].src=images[0];
            img[1].title=img[2].title;
           a.innerText=img[2].title;
        };
    img[3].onclick=function () {
        img[1].src=images[1];
        img[1].title=img[3].title;
        a.innerText=img[3].title;
    };
    img[4].onclick=function () {
        img[1].src=images[2];
        img[1].title=img[4].title;
        figcaption.innerText=img[4].title;
    };
    img[5].onclick=function () {
        img[1].src=images[3];
        img[1].title=img[5].title;
       a.innerText=img[5].title;
    };
    img[6].onclick=function () {
        img[1].src=images[4];
        img[1].title=img[6].title;
      a.innerText=img[6].title;
    };

   document.getElementById("featured").onmouseover=function(){
       fade(4,80);
   };
    document.getElementById("featured").onmouseout=function(){
        fade(-4,0);
    }
};

function fade(speed,opacity) {
    var time=setInterval(aa,50);
    function aa() {
        var opa=(document.getElementById("a").style.opacity)*100;
          opa+=speed;
        if(opa!==opacity){
            document.getElementById("a").style.opacity=opa/100;
        }else {
            clearInterval(time);
        }
    }
}





