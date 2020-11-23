$(document).ready(function() {
  $('#open0').hover(function() {
    $('#mainimg').attr('src','sprites/room_movie.png');
  }, function() {
    $('#mainimg').attr('src','sprites/room.png');
  });

  $('#open1').hover(function() {
    $('#mainimg').attr('src','sprites/room_Trip.png');
  }, function() {
    $('#mainimg').attr('src','sprites/room.png');
  });

  $('#open2').hover(function() {
    $('#mainimg').attr('src','sprites/room_Bed.png');
  }, function() {
    $('#mainimg').attr('src','sprites/room.png');
  });

  $('#open3').hover(function() {
    $('#mainimg').attr('src','sprites/room_Cafe.png');
  }, function() {
    $('#mainimg').attr('src','sprites/room.png');
  });
});
