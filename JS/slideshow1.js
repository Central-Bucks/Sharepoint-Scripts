var timer = setInterval(autoscroll,6000);

function autoscroll(){
   fnMove(1);
}

function fnMove(dir){
   var dots = $("li.dot");
   var slides = $("img.slides");
   
   var curSlide;
   var curLeft;
   var nextSlide;
   var pos;
   var epos;
   
   pos = $("div.sshow-img").position();
   var i = 0;
   
   $("li.dot").each(function() {
       if (this.className.indexOf(" active") > -1) {
           curSlide = i;
           this.classList.remove("active");
           console.log(curSlide);       
       }
       i = i + 1;
   });   

   if(dir == -1){
     if(curSlide == 0){
       nextSlide = dots.length + dir;
     }  
     else{
       nextSlide = curSlide + dir;
     }
     
     epos = 823 * nextSlide;

   }
   else{
     if(curSlide + dir == dots.length){
        nextSlide = 0;
     }     
     else{
        nextSlide = curSlide + dir;
     }
     
     epos = 823 * nextSlide;
         
   }   
   
   if (pos.left <= epos){
       //moveFrame(dir,pos.left,epos);
       epos = (epos * -1);
   }   
   $('div.sshow-img').css('transform','translateX( ' + epos + 'px )');
   dots[nextSlide].classList.add("active");

   clearInterval(timer);
   timer = setInterval(autoscroll,6000);
}

function changeSlide(slide){
   var dots = $("li.dot");
   var pos = $("div.sshow-img").position();
   var i = 0;
   var epos = (823 * (slide - 1)) * -1;
   
   $("li.dot").each(function() {
       if (this.className.indexOf(" active") > -1) {
           curSlide = i;
           this.classList.remove("active");
           console.log(curSlide);       
       }
       i = i + 1;
   });

   $('div.sshow-img').css('transform','translateX( ' + epos + 'px )');
   dots[(slide - 1)].classList.add("active");

   clearInterval(timer);
   timer = setInterval(autoscroll,6000);
}