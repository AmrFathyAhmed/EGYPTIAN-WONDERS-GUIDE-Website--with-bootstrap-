$(document).ready(function() {
    $('.title').hover(
      function() {
        $(this).css('color', 'red');
      },
      function() {
        $(this).css('color', 'white');
      }
    );
  });


   


$(document).ready(function() {
   $("#myElement").click(function() {
      $(this).animate({ left: '250px' }, 1000);
   });
});
