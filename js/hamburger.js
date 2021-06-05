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
        headerHeight = 550;
      } else {
        // 境目より狭ければレスポンシブの幅を適用する
        headerHeight = 550;
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





/* dropアニメーション */

;(function($) {
    $.fn.letterDrop = function() {
      // Chainability
      return this.each( function() { 
      var obj = $( this );
      var drop = {
        arr : obj.text().split( '' ),
        range : {
          min : 1,
          max : 9
        },
        styles : function() {
          var dropDelays = '\n', addCSS;
           for ( i = this.range.min; i <= this.range.max; i++ ) {
             dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
           }
            addCSS = $( '<style>' + dropDelays + '</style>' );
            $( 'head' ).append( addCSS );
        },
        main : function() {
          var dp = 0;
          obj.text( '' );
          $.each( this.arr, function( index, value ) {
            dp = dp.randomInt( drop.range.min, drop.range.max );
            if ( value === ' ' )
              value = '&nbsp'; //Add spaces
              obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
          });
        }
      };
      Number.prototype.randomInt = function ( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) + min );
      };
      // Create styles
      drop.styles();
        // Initialise
        drop.main();
      });
    
    };
}(jQuery));
    
    // USAGE
    $( 'h1' ).letterDrop();
    $( '.ken' ).letterDrop();
    