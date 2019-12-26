$(document).ready(function(e) {

  //console.log(jsonObject);
  var card;



  $.each(cards, function(key, value) {



    card  = '<div class="card card-'+key+' '+value.theme.replace(/\s+/g, '-').toLowerCase()+'">';
        
      card += '<div class="card-front"><div class="card-category">'+value.theme+'</div></div>';
    
      card += '<div class="card-back">';
        
            card += '<div class="card-id">'+(key+1)+'</div>';
            card += '<div class="title">'+value.title+'</div>';
            card += '<div class="description">'+value.description+'</div>';
            
      card += '</div>';
    
    card += '</div>';
    
    $('#cards').append(card);

  });
  
  
  
  

  






  $('#debug').click( function(){
    $('body').toggleClass('debug');
  });




  var currentZoom = 0.25;

  $('#zoomin').click(
      function () {
          $('#cards-outer').css({ 'zoom': currentZoom += 0.1 });
      });
  $('#zoomout').click(
      function () {
          $('#cards-outer').css({ 'zoom': currentZoom -= 0.1 });
      });
  /*
  $('#zoomReset').click(
      function () {
          currentZoom = 1.0
          $('#cards-outer').animate({ 'zoom': 1 }, 'slow');
  })
  */


});
