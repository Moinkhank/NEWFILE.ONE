let cnt =1;
function slideChange(x){
    cnt +=x;
    
    photoChange(cnt);
}
photoChange(cnt);
function photoChange(num){
    let slides=document.getElementsByClassName('pics');
    if (num == slides.length){
        num=0;
        cnt=0;
    }
    if(num==-1){
        num=slides.length-1;
        cnt=slides.length - 1;
    }
      for (let y of slides) {
        y.style.display = "none";
      }
    slides[num].style.display="block"
}