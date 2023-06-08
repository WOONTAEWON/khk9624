$(document).ready(function(){
    let gridImgs = $('.swiper-slide > div')
        
    console.log(gridImgs)
    gridImgs.click(function(e){
        e.preventDefault();
        let idx = $(e.target).index();
        let source = $(this).find('img').attr('src')
        $('.window-content img').attr('src',source)

        $('.window-content, .window').fadeIn(500);
        $('.window-content').append("<iframe src='https://www.youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1'frameborder='0' allowfullscreen></iframe>")
    })

    //팝업종료
    $('.window, .close').click(function(){
        $('.window, .window-content').fadeOut(500)
        $('.window-content iframe').remove();
    })


    // gridImgs.mouseover(function(){
    //     $(this).find('img').attr('src',$(this).find('img').data("animated"))
    // })

    // gridImgs.mouseover(function(){
    //     $(this).find('img').attr('src',$(this).find('img').data("static"))
    // })
})
