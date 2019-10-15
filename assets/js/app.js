// $(function(){
//   $('#js-click-btn').on('click',
//   function() {
//     $(this).toggleClass('large-btn');
//   });
// });
$(function() {
 //要素の表示切り替え
 $("#js-show-btn").on("click", function() {
  $("#js-target-element").fadeIn(1000);
});

$("#js-hide-btn").on("click", function() {
  $("#js-target-element").fadeOut(2000);
});
});