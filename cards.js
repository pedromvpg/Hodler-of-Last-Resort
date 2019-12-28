$(document).ready(function(e) {

  //console.log(jsonObject);
  var card, influence, price;



  $.each(cards, function(key, value) {


    influence = '';
    price = '';
    
    card  = '<div class="card card-'+key+' '+value.theme.replace(/\s+/g, '-').toLowerCase()+'">';
        
      card += '<div class="card-front '+value.theme.replace(/\s+/g, '-').toLowerCase()+'_back"><div class="card-category"><span>'+value.theme+'<br><div class="price">'+value.price+'</div></span></div></div>';
    
      card += '<div class="card-back">';
        
            card += '<div class="card-id">'+(key+1)+'</div>';
            card += '<div class="title">'+value.title+'</div>';
            card += '<div class="card-illus"><img alt="'+value.title.replace(/\s+/g, '-').toLowerCase()+'" src="images/card-illus/'+value.title.replace(/\s+/g, '-').toLowerCase()+'@2x.png"></div>';
    
                  influence += '<div class="influence">';
                    //influence += '<div class="influence-theme '+value.influence.themeEffected.replace(/\s+/g, '-').toLowerCase()+'">'+value.influence.themeEffected.replace(/\s+/g, '-').toLowerCase()+'</div>';
                    //influence += '<div class="influence-effect '+value.influence.effect+'">'+value.influence.effect+'</div>';
                    //influence += '<div class="influence-description">'+value.influence.description+'</div>';
                    influence += '<div class="">Make any</div>';
                    influence += '<div class="influence-theme circle '+value.influence.themeEffected.replace(/\s+/g, '-').toLowerCase()+'_back"></div> <div class="influence-theme-text '+value.influence.themeEffected.replace(/\s+/g, '-').toLowerCase()+'_color">'+value.influence.themeEffected+'</div>';
                    influence += '<br> <div class="influence-effect circle '+value.influence.effect+'_back"></div> <div class="influence-effect '+value.influence.effect+'">'+value.influence.effect+'</div>';
                  influence += '</div>';
                  
                  price = '<div class="price"><div class="">Price</div>'+value.price+' BTC</div>';
    
            card += '<div class="description">'+value.description+influence+price+'</div>';
            
            
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
