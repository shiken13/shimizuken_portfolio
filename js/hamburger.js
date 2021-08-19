// ハンバーガーメニュー
var mediaQuery = window.matchMedia('(min-width: 768px)');
handle(mediaQuery);
mediaQuery.addListener(handle);

function handle(mq) {
    if (mq.matches) {
        $("#nav-content").show();
        $(".nav_btn").on("click", function () {
            $("#nav-content").show();
        });
    } else {
        $("#nav-content").hide();
        $(".nav_btn").on("click", function () {
            $("#nav-open").removeClass("active");
            $("#nav-content").removeClass("open").fadeOut(0);
        });
    }
}

$(function () {
    $("#nav-open").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#nav-content").removeClass("open").fadeOut(0);
        } else {
            $(this).addClass("active");
            $("#nav-content").fadeIn(0).addClass("open");
            $("#nav-content").show();
        }
    });
});



// スクロールしたときにheaderの色を変更する
    $(function() {

      //レスポンシブ対応の境目がwidth = 670 のため。 
      const spBreakPoint = 768;
      let headerHeight = 0;

      // 開いている状態のwindow幅を取得し、レスポンシブ境目かどうか
      if ($(window).width() > spBreakPoint) {
        // 境目より大きいならばheaderの高さは620で固定
        headerHeight = 50;
      } else {
        // 境目より狭ければレスポンシブの幅を適用する
        headerHeight = 50;
      }

      // windowがスクロールされたときに以下関数が発動
      $(window).on('scroll', function () {
        // scrollの距離がheaderの画像よりも大きくなる時に色を替えてる
        if ($(this).scrollTop() > headerHeight) {
          $('.header').addClass('color-chnage');
        } else {
          $('.header').removeClass('color-chnage');
        }
      });

     

    });



    // トップへのスクロールアニメ
$(function() {
      var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});


$(function(){
    new WOW().init();
});


