//메인 배너 스와이퍼 슬라이드
const mainSlide = new Swiper('.main_bnr .main_swiper',{
    autoplay:{delay:3500,},
    loop:true, //무한반복설정
    speed:1200,//애니메이션 전환시 걸리는 시간
    slidesPerView:1.7,
    spaceBetween:50,
    centeredSlides:true,
    pagination:{
        el:'.main_swiper .swiper-pagination',
        type:'bullets',
        clickable:true,
    },
});

//New item 스와이퍼 슬라이드
const newItemSlide = new Swiper ('.new_item_wrap .new_item',{
    autoplay:{delay:5000,},
    loop:true, //무한반복설정
    speed:1200,//애니메이션 전환시 걸리는 시간
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'.new_item_wrap .container .new_item_box .swiper-scrollbar',
    },
})

//Md Pick 스와이퍼 슬라이드
const mdPickSlide = new Swiper ('.md_pick_wrap .md_swiper',{
    autoplay:{delay:5000,},
    loop:true, //무한반복설정
    speed:1200,//애니메이션 전환시 걸리는 시간
    slidesPerView:3,
    spaceBetween:30,
    scrollbar:{
        el:'.md_pick_wrap .container .pick_box .swiper-scrollbar',
    },
    navigation:{
        nextEl:'.md_pick_wrap .next', //다음 버튼(CSS선택자 작성방식으로)
        prevEl:'.md_pick_wrap .prev', //이전 버튼
    }
})

/* best item 탭 클릭 시 클래스 이동 */
$('.best_item_wrap .bi_menu li').click(function(e){
    e.preventDefault();
    $('.best_item_wrap .bi_menu li').removeClass("active");
    $(this).addClass("active");
})

/* best item 탭 클릭 시 해당 상품 보이기 */
const bestTap = document.querySelectorAll('.best_item_wrap .bi_wrap .bi_menu li');
const bestItem = document.querySelectorAll('.best_item_wrap .bi_wrap .item');

function bestHide(){
    bestItem.forEach( view => {
        view.style.display='none';
    });
};
bestTap.forEach((item, index)=>{
    item.addEventListener('click', function(){
        bestHide();
        bestItem[index].style.display='flex';
    });
});
