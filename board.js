$(document).ready(function(e) {

  //console.log(jsonObject);
  var space, open_row, close_row;
  var rows = '';
  var row_id = 1;



  $.each(spaces, function(key, value) {

    if(key%8 == 0){

      console.log('open');
      console.log(value.title);

      open_row = '<div class="row row-'+row_id+'">';
      close_row = '';

    }else if(key%8 == 7){
      console.log('close');
      open_row = '';
      close_row = '</div>';
      row_id = row_id + 1;
    }else{
      open_row = '';
      close_row = '';
    }

    space  = open_row;
    space += '<div class="space space-'+key+' '+value.theme.replace(/\s+/g, '-').toLowerCase()+'">';
    space += '<div class="color-top">'+value.theme+'</div>';
      space += '<div class="space-inner">';
        space += '<div class="title">'+value.title+'</div>';
        space += '<div class="description">'+value.description+'</div>';
        space += '<div class="space-id">'+key+'</div>';
      space += '</div>';
    space += '</div>';
    space += close_row;

    rows += space;


  });

  $('#board').append(rows);


  var space_side = 600;
  var spaces_per_row = 8;
  var board_side = space_side*(spaces_per_row+1);


  $('#board').css({"width": board_side, "height": board_side});
  $('.space').css({"width": space_side, "height": space_side});

  $('.row-1, .row-3').css({"width": board_side-space_side, "height": space_side});
  $('.row-2, .row-4').css({"height": board_side-space_side, "width": space_side});




  $('#debug').click( function(){
    $('body').toggleClass('debug');
  });




  var currentZoom = 0.25;

  $('#zoomin').click(
      function () {
          $('#board-outer').css({ 'zoom': currentZoom += 0.1 });
      });
  $('#zoomout').click(
      function () {
          $('#board-outer').css({ 'zoom': currentZoom -= 0.1 });
      });
  /*
  $('#zoomReset').click(
      function () {
          currentZoom = 1.0
          $('#board-outer').animate({ 'zoom': 1 }, 'slow');
  })
  */


});
