$(document).ready(function(){


// 메뉴 토글
$('.menu .menu-bt').click(function(){
    $('.menu').toggleClass('on');
});

// 메뉴
$('.gnb li').click(function(){
    $('.gnb li').removeClass();
    $(this).addClass('on');
    
});







});