function funny() {
 var random = Math.floor(Math.random() * 3) + 1;
if (random == 1) {
   var sound = document.getElementById("1");
   sound.play();
} else {
   if (random == 2) {
      var sound = document.getElementById("2");
      sound.play();
   } else {
      if (random == 3) {
         var sound = document.getElementById("3");
         sound.play();
      }
   }
   
}  
}

