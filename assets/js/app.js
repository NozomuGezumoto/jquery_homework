// $(function(){
//   $('#js-click-btn').on('click',
//   function() {
//     $(this).toggleClass('large-btn');
//   });
// });
$(function() {
  // alert()
  //ボタンのサイズ変更
  $("#js-click-btn").on("click", function() {
    $(this).addClass("large-btn");
  });

 //ボタンの色変更
 $("#js-hover-btn")
 .on("mouseover", function() {
   $(this).addClass("opacity");
 })
 .on("mouseleave", function() {
   $(this).removeClass("opacity");
 });
 //要素の表示切り替え
 $("#js-show-btn").on("click", function() {
  $("#js-target-element").fadeIn(1000);
});

$("#js-hide-btn").on("click", function() {
  $("#js-target-element").fadeOut(2000);
});

// 要素の追加
$('#js-add-btn').on('click',function() {
  let beforeBtn = $('<li>')
  .addClass('btn')
  .text('ボタンの前に追加');

  let afterBtn=$('<li>')
  .addClass('btn')
  .text('ボタンの後ろに追加');

  $(this).before(beforeBtn);
  $(this).after(afterBtn);

  // 要素の前後（中）に追加
  $('#js-add-btn2').on('click', function() {
    $(this).prepend('前');
  $(this).append('後');
  });

});
});