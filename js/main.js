$(document).ready(function(){


    // 메뉴 토글
    $('.menu .menu-bt').click(function(){
        $('.menu').toggleClass('on');
    });
    
    // 메뉴
    $('.gnb li').click(function(){
        $('.gnb li').removeClass();
        $(this).addClass('on');
        
        $('.pop').hide();
    });
    
    // 버튼
    $('.lnb li button').click(function(){
        $(this).toggleClass('on')
    });
    
    //3d에셋 팝업창
    $('.asset').click(function(){
        $('.list-box1').fadeIn();
    });
    $('.list-box1 .close').click(function(){
        $('.list-box1').fadeOut();
    });
    
    // 3d에셋 드롭다운
    $('.list-box1 .list-wrap .box .title i').click(function(){
    $('.list-box1 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    //360vr 팝업창
    $('.vr').click(function(){
        $('.list-box2').fadeIn();
    });
    $('.list-box2 .close').click(function(){
        $('.list-box2').fadeOut();
    });
    
    // 360vr 드롭다운
    $('.list-box2 .list-wrap .box .title i').click(function(){
        $('.list-box2 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    // 페이지네이션 버튼
    $('.page-nav.mo ul li').click(function(){
    
        $('.page-nav.mo ul li').removeAttr('id', 'on');
        $('.page-nav.mo ul li div').removeAttr('id', 'on');
        $('.page-nav.mo ul li p').removeAttr('id', 'on');
    
        //눌렀을때 계속 보이게 하는거
        $(this).attr('id', 'on');
        $(this).find('div').attr('id', 'on');
        $(this).find('p').attr('id', 'on');
    });

    // 페이지네이션 버튼
    // $('.page-nav.mo ul li').click(function(){
    
    //     $('.page-nav.mo ul li').removeClass('on');
    //     $('.page-nav.mo ul li div').removeClass('on');
    //     $('.page-nav.mo ul li p').removeClass('on');
    
    //     //눌렀을때 계속 보이게 하는거
    //     $(this).addClass('on');
    //     $(this).find('div').addClass('on');
    //     $(this).find('p').addClass('on');
    // });
    
    
    
    // video-pop
    $('.pop .list-wrap .box ul li').click(function(){
        $('.video-pop-bg').fadeIn();
    });
    
    $('.video-pop-bg i').click(function(){
        $('.video-pop-bg').fadeOut();
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    
});//요기까지 제이쿼리

    
function cssbutton(num) {
     gameInstance.SendMessage('MouseWheelMove', 'CSSButton', num);
     console.log("버튼클릭");
}

var PageNav = document.getElementsByClassName("pagenav");
var PageNavDiv = document.getElementsByClassName("pagenavdiv");
var PageNavP = document.getElementsByClassName("pagenavp");

function CamPositionToPageNav(x){
        console.log("CamPositionToPageNav : " + x);
        selectPagNav(x);
}

function selectPagNav(num)
{
        console.log("selectPagNav");
        
        for(let i=0;i < PageNav.length;i++)
        {
               if(i == num) 
               { 
                       PageNav[i].classList.add('on');
                       PageNavDiv[i].classList.add('on');
                       PageNavP[i].classList.add('on');

                }
               else 
               {
                       PageNav[i].classList.remove('on');
                       PageNavDiv[i].classList.remove('on');
                       PageNavP[i].classList.remove('on');
               }
        }
        
}


const boxbg = document.getElementsByClassName("conbutton-bg");
var box = document.getElementsByClassName("url2");
//con 버튼
function Asset3DButtonJs(str){ //3D Asset버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        console.log("Asset3DButtonJs : " + str);

        switch(str)
        {
            case "택견":
                box[0].src = "https://sketchfab.com/models/04158af4fcdb4d6db43fd6ca4e575779/embed";

                break;
            case "판소리":
                box[0].src ="https://sketchfab.com/models/984551b1a1ca4dea87550380d34c11a0/embed";
                break;
            case "굿":
                box[0].src ="https://sketchfab.com/models/befd77162b034a82b35aeb0f373be3b4/embed";
                break;
            case "처용무":
                box[0].src = "https://sketchfab.com/models/1bf7dae097a949a89fa20e398e4a8856/embed";
                break;
            case "수문장":
                box[0].src = "https://sketchfab.com/models/176856191dde4bc2b497e5a0277b34b7/embed";
                break;     
            case "6.25":
                box[0].src = "https://sketchfab.com/models/0ac0fc2c5a434f54bb50260741d214c8/embed";
                break;
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("Asset3DButtonJs isImmersive 아님");
        console.log("Asset3DButtonJs In VR :" + str);
        switch(str)
        {
            case "택견":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','Model3DViewer');
                break;
            case "판소리":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;
            case "판소리":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;
            case "만구대탁굿":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;
            case "처용무":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;
            case "수문장":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;
            //유형
            case "6.25":
                var url = "택견/scene.gltf";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;    
            default:
                console.log("디폴트 입니다");
                break;    
        }
        
    }
}

function VR360ButtonJs(str){ //360VR 버튼
    console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        console.log("VR360ButtonJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("VR360ButtonJs isImmersive 아님");
        console.log("VR360ButtonJs In VR :" + str);
        switch(str)
        {
            case "택견":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            case "판소리":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            case "굿":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            case "처용무":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            case "수문장":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            default:
                console.log("디폴트 입니다");
                break;    
        }
        
    }

}

function ThreeFaceVideoJs(str){ //3면 버튼
    console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        console.log("ThreeFaceVideoJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("ThreeFaceVideoJs isImmersive 아님");
        console.log("ThreeFaceVideoJs In VR :" + str);
        switch(str)
        {
            case "첩종의식":
                var url =  "택견 VR.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;

            //자연
            case "설악산 꽃자리":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break;
            case "반딧불이와 춤을":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break; 
            case "을숙도 대탐험":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break; 
            case "조선왕릉숲길":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break; 
            case "한반도 자연유산":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break; 
            case "디지털 병풍":
                var url = "0sound.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break;

        }
    }

}

function MediaArtJs(str){//미디어아트 버튼
    console.log("MediaArtJs : " + str);

}

function VideoJs(str){//동영상버튼
    console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        console.log("VideoJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("VideoJs isImmersive 아님");
        console.log("VideoJs In VR :" + str);
        switch(str)
        {
            //유형
            case "6.25":
                var url = "6.25.mp4";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;

            default:
                console.log("디폴트 입니다");
                break;    
        }
        
    }

}

function ASMRJs(str){//디지털병풍버튼
    console.log("ASMRJs : " + str);
}

function ARJs(str){//디지털병풍버튼
    console.log("ARUnityJs : " + str);
}
function RealVRJs(str){//디지털병풍버튼
    console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        console.log("RealVRUnityJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("RealVRUnityJs isImmersive 아님");
        console.log("RealVRUnityJs In VR :" + str);
        switch(str)
        {
            //유형
            case "6.25":
                var url = "택견 VR.mp4";//test
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;

            default:
                console.log("디폴트 입니다");
                break;    
        }
        
    }
}

function closeConButton(){
    boxbg[0].style.display="none";
    box[0].src ="";
    console.log("close")
}



//메뉴버튼
function IntangibleButtonJs(){
    //getURL("무형유산");
    location.href= "intangible.html";
}

function NaturalButtonJs(){
    //getURL("자연유산");
    location.href= "natural.html";
    //location.herf ="natural.html";

}
function TangibleButtonJs(){
    //getURL("유형유산");
    location.href= "tangible.html";

    //location.herf ="tangible.html";

}
function Menu3DAssetButtonJs(){
    
}
function Menu360VRButtonJs(){
    
}
function MainLobbyButtonJs(){
    location.href= "index.html";

}
function SoundButtonJs(){
    
}
function VoiceButtonJs(){
    
}
function CCButtonJs(){
    
}
function VROffButtonJs(){
    console.log("vr off button");
    //window.xrManager.onEndSession();
    window.xrManager.toggleVR();
}
function KRButtonJs(){
    
}
function ENButtonJs(){
    
}



