$(document).ready(function(){
    let tabAnchor = $('.tabMenu li'),
        tabPanel = $('.tabs > div')
    tabAnchor.click(function(){
        tabAnchor.removeClass("active")
        $(this).addClass("active")
        tabPanel.hide();
        let target = $(this).find('a').attr('href')
        $(target).show();
    })
    tabAnchor.eq(0).trigger("click")
    
})

new Swiper(".sw-tabslider", {
    autoplay: false,
    // loop:true,
    slidesPerView: 1,
    spaceBetween:30,
    slidesPerGroup:1,
    navigation: {
        nextEl:".btn-prev",
        prevEl:".btn-next"
    }
})


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
    new YT.Player('player', {
    videoId: 'QDYBvCZEPi8',
    playerVars: {
        autoplay: true,
        loop: true,
        playList: 'QDYBvCZEPi8'
    },
    events: {
        onReady: function(event){
            event.target.mute();
        }
    }

});

}

