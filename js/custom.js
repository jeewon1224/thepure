$(function(){

  let current = 0;
  let timer;
  const imgs = $(".img");
  let indicators = [];
  //console.log(imgs);

  //인디케이터 생성
  for(let i = 0; i < imgs.length; i++){
    indicators = `<a href="#"></a>`;
    $(".indicator").append(indicators);
  }

  //슬라이드 실행 함수
  function slider(eq){
    $(".img_box").animate({left : -100 * eq + "%"}, 400);
    current = eq;

    $(".indicator").find("a").removeClass("active");
    $(".indicator").find("a").eq(current).addClass("active");
  }

  //자동 실행 함수
  function autoPlay(){
    timer = setInterval(function(){
      let slideIdx = (current + 1) % imgs.length;
      slider(slideIdx);
    }, 4000);
    //$(".indicator").find("a").eq(0).addClass("active");
  }

  //슬라이드 멈춤 함수
  function stopSlider(){
    clearInterval(timer);
  }

  //----------------------------

  //네비게이션 클릭 시 슬라이드 이동
  // $("button").click(function(){
  //   if($(this).hasClass("prev")){
  //     if(current == 0){
  //       return false;
  //     } else {
  //       slider(current - 1);
  //     }    
  //   } else {
  //     if(current >= imgs.length - 1){
  //       return false;
  //     } else {
  //       slider(current + 1);
  //     }   
  //   }
  // });

  //이미지에 마우스 오버 시 자동 슬라이드 멈춤
  $(".img_box").on("mouseenter", function(){
    stopSlider();
  })

  //이미지에 마우스 아웃 시 자동 슬라이드 시작
  $(".img_box").on("mouseleave", function(){
    autoPlay();
  });

  $(".indicator a").click(function(){
    let indicatorIdx = $(this).index();
    $(this).removeClass('active');
    slider(indicatorIdx);
  });

  autoPlay(0);
  slider(0);







//마우스 오버 시 서브 메뉴 열기
  $(document).ready(function(){
    $(".main_list>li").mouseover(function(){
        $(this).children(".sub_list").stop().slideDown(200);
    });
    $(".main_list>li").mouseleave(function(){
        $(this).children(".sub_list").stop().slideUp(200);
    });
});








var offset = $( '.header_bottom' ).offset();
  console.log(offset);

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > offset.top ) {
      $( '.header_bottom' ).addClass( 'fixed' );
    }else {
      $( '.header_bottom' ).removeClass( 'fixed' );
    }
  });




  // 모바일 아코디언 메뉴
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i=0; i<acc.length; i++){
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if(panel.style.maxHeight){
        panel.style.maxHeight = null;

      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }



});




$(document).ready(function() {
  $(".accordion").on("click", function() {
    //alert('abc');
    // $(this).addClass('active');

    /*if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      // $(this).siblings(".panel").slideUp(200);
      
    } else {
     
      $(".accordion").removeClass("active");
      $(this).addClass("active");
      $(".panel").slideDown(200);
      $(this).siblings(".panel").addClass('on');
      console.log($this);
    }*/
  });
});


