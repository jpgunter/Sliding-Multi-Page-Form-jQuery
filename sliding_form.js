function makeForm(form_name){
  $(".form-box").hide();
  $("#form-prev").hide();
  $("#first").show();
  var current_box = $("#first");
  var inMove = false;

  function moveDone(){
    inMove = false;
  }

  $("#form-next").click(function () {
	  event.preventDefault();
    if(!inMove){
   	  inMove = true;   	
      if(current_box.attr("id") == "last"){
        $("#"+form_name).submit();
      } else {
        if(current_box.attr("id") == "first"){
          $("#form-prev").show();
        }
        var next = $(current_box).next();
        if(next.attr("id") == "last"){
          $("#form-next").val("Submit");
        }
	      $(current_box).hide('slide', {direction: 'left'}, 500);
	      next.show('slide', {direction: 'right'}, 500, moveDone);
	      current_box = next;
	    }
	  }
  });
  $("#form-prev").click(function () {
    event.preventDefault();
    if(!inMove){
   	  inMove = true;
   	  if(current_box.attr("id") == "last"){
        $("#form-next").val("Next");
      }
      var prev = $(current_box).prev();
      if(prev.attr("id") == "first"){
          $("#form-prev").hide();
        }
	    $(current_box).hide('slide', {direction: 'right'}, 500);
	    prev.show('slide', {direction: 'left'}, 500, moveDone);
	    current_box = prev;
	  }
  });
}
