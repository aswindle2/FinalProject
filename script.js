//Console is ready message
$(function(){
  $('#consolebox').append('Console is ready'); 
  
  
  //Prints the selections of the drop-down boxes
  $("#Center").on("change",function(){
	  $('#consolebox').append('<br>Center is:'+$("#Center").selected("option"));
  });
  
  $("#Choice").on("change",function(){
	  $('#consolebox').append('<br>Choice is:' + $("#Choice").attr("option"))
  });
  
  
  $("#Location").on("change",function(){
	  $('#consolebox').append('<br>Location is:'+$("#Lcoation").attr("option"))
  });


  $("#Class").on("change",function(){
	  $('#consolebox').append('<br>Location is:' +$("#Class").attr("option"))
  });


  $("#Dates").on("change",function(){
	  $('#consolebox').append('<br>Start:' +$("#Dates").attr("option"))
  });


  $("#FinalDate").on("change",function(){
	  $('#consolebox').append('<br>Final Date:' +$("#FinalDate").attr("option"))
  });
});
  