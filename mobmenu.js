$(function(){
 function menuPoyavlyaetsa()
 {
  $('#menuu').toggleClass('true');
  $('#menuu').removeClass('animation'); 
  $('#burgermenu').toggleClass('active');   
 } 
 
 function animaciyaPriIscheznovenii()
 {
  $('#menu').toggleClass('animation'); 
 }
 
 $('#burgermenu').on('click', function(){  

animaciyaPriIscheznovenii(); 
  setTimeout(menuPoyavlyaetsa, 500); 
 });
 
 $('#close').on('click', function(){  
  animaciyaPriIscheznovenii(); 
  setTimeout(menuPoyavlyaetsa, 2000); 

  
 });
 
});
