$(function(){
 $('.text').html( '2' ).delay(100);
    $('.layer1').animate({
          
     //        top: "+=2",
        height:"+=570"
  
    }, 60000, function() {
         $('.text').html( '1' ).delay(100);
        $('.layer1').animate({
//       top: "-=50",
        height:"-=570"
 
    }, 60000, function() {
            $('.text').html( '0' ).delay(100);
    // Animation complete.
  })}
        ) ;
        
   
    
})