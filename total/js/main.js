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

// 버튼
$('.lnb li button').click(function(){
    $(this).toggleClass('on')
});

//
$('#list1').click(function(){
    $('.list-box1').fadeIn();
});
$('.list-box1 .close').click(function(){
    $('.list-box1').fadeOut();
});


});