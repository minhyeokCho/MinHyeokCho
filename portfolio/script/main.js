$(document).ready(function(){
	var winWidth = window.innerWidth || document.documentElement.clientWidth;
    
    $('.projectInner a').on('click', function(){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth > 768){
            var projectCnt = $(this).parent().index();
            if($('.projectInner').hasClass('on')){
                $('.projectInner').removeClass('on').addClass('unable').removeClass('able');
                $(this).parent().addClass('able');
                for(var i=0;i<3;i++){
                    $('.projectInner').eq(projectCnt + i*3).addClass('on'); 
                }
                $(this).parent().addClass('on');
                $('.projectGroup').removeClass('on');
                $(this).parent().parent().addClass('on');
            }else{
                $('.projectInner').addClass('active').addClass('unable').removeClass('able');
                $(this).parent().addClass('able');
                for(var i=0;i<3;i++){
                    $('.projectInner').eq(projectCnt + i*3).addClass('on'); 
                }
                $('.projectGroup').addClass('active');
                $(this).parent().parent().addClass('on');
            }
        }
        return false;
    });

    $('body').click(function(e){
        winWidth = window.innerWidth || document.documentElement.clientWidth;
        if(winWidth > 768){
            if(!$('.projectList').has(e.target).length){
                $('.projectGroup').removeClass('on').removeClass('active');
                $('.projectInner').removeClass('on').removeClass('active').removeClass('able').removeClass('unable');
            }
        }
	});

    $(window).on('load',function(){
        $('.about').addClass('on');
    });

    $(window).on('load scroll',function(){
        var currentScroll = $(this).scrollTop();
        // var about = $('.about').offset().top;
        var skill = $('.skill').offset().top;
        var project = $('.project').offset().top;
        var content = $('.content').offset().top;
        if(currentScroll > skill*0.7){
            $('.skill').addClass('on')
        }
        if(currentScroll > project*0.7){
            $('.project').addClass('on')
        }
        if(currentScroll > content*0.7){
            $('.content').addClass('on')
        }
    });


});