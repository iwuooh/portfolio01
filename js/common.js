$(function(){
  /* product script 영역 */

  //클릭시 서브메뉴 class 추가
  $(".container .s_wrap span").click(function(){
    $(".container .s_wrap span").removeClass("on")
    $(this).addClass("on")
  });

  $(".container .s_wrap span:nth-child(1)").click(function(){
    $(".row_wrap .row").removeClass("disabled");
  });

  $(".container .s_wrap span:nth-child(2)").click(function(){
    $(".row_wrap .row").removeClass("disabled");
    $(".row_wrap .row:nth-child(2)").addClass("disabled");
    $(".row_wrap .row:nth-child(3)").addClass("disabled");
  });
  $(".container .s_wrap span:nth-child(3)").click(function(){
    $(".row_wrap .row").removeClass("disabled");
    $(".row_wrap .row:nth-child(1)").addClass("disabled");
    $(".row_wrap .row:nth-child(3)").addClass("disabled");
  });
  $(".container .s_wrap span:nth-child(4)").click(function(){
    $(".row_wrap .row").removeClass("disabled");
    $(".row_wrap .row:nth-child(1)").addClass("disabled");
    $(".row_wrap .row:nth-child(2)").addClass("disabled");
  });


  /* product detail script 영역 */
  /*$("#table_wrap table tr td span:nth-child(odd)").click(function(){
    alert("해당 상품은 임시품절되었습니다.")
  });*/

  /* company script 영역 */
  $(".container .s_wrap span").click(function(){
    var indexNum = $(this).index();
    var widthNum = parseInt($(".container .inner_wrap .article").css("width"));
    $(this).addClass("on");
    if( indexNum == 0 ){
      $("#navi .inner_wrap").animate({marginLeft:-(widthNum*indexNum) +"px"},"fast")
    }else if( indexNum == 1 ){
      $("#navi .inner_wrap").animate({marginLeft:-(widthNum*indexNum) +"px"},"fast")
    }else if( indexNum == 2 ){
      $("#navi .inner_wrap").animate({marginLeft:-(widthNum*indexNum) +"px"},"fast")
    }
  });

  /* contact script 영역 */
  $(".container .input_wrap .common_btn a").click(function(){
    alert("메세지가 전송되었습니다.")
  });

});// document ready
