/* 쉐어 버튼 클릭 */
const share=document.querySelector('.share');
console.log(share);
share.addEventListener('click',()=>{
    window.alert('링크가 복사되었습니다.')
})

/* 섬네일 반응 */
const thumbnail = document.querySelectorAll('.thumbnail a img');
const bigImage = document.querySelector('.photo .big img');
console.log(thumbnail[0].src);
function bigSrc(num){
    return bigImage.src=`./images/b${num}.jpg`
}
thumbnail[0].addEventListener('mouseover',()=>{
    bigSrc(1);
});
thumbnail[1].addEventListener('mouseover',()=>{
    bigSrc(2);
});
thumbnail[2].addEventListener('mouseover',()=>{
    bigSrc(3);
});
thumbnail[3].addEventListener('mouseover',()=>{
    bigSrc(4);
});
thumbnail[4].addEventListener('mouseover',()=>{
    bigSrc(5);
});

/* 셀렉트 옵션 */
const selectOption = document.querySelector('#capacity');
const blue=document.querySelector('.c_blue');
const pink=document.querySelector('.c_pink');
blue.style.display='none';
pink.style.display='none';

selectOption.addEventListener('change',function(){
    let selectedValue = selectOption.value;
    if (selectedValue == 'blue') {
        blue.style.display='block'
    }else if (selectedValue == 'pink'){
        pink.style.display='block'
    }
})

/* close 눌렀을 때 옵션닫기-제이쿼리 */
$('.close').click(function(){
    $(this).parent().parent().hide();
})

/* 총금액 */
let priceB = 59500; //주문금액
let numberB = 1; //주문수량
const plusBtnB = document.querySelector('.c_blue .plusB');//수량증가DOM
const minusBtnB = document.querySelector('.c_blue .minusB');//수량감소DOM
const orderPriceB = document.querySelector('.op_blue')//최종주문표시DOM
let opNumB=document.querySelector('#blue_num');

console.log(plusBtnB,minusBtnB,orderPriceB)

let priceP = 59500; //주문금액
let numberP = 1; //주문수량
const plusBtnP = document.querySelector('.c_pink .plusP');//수량증가DOM
const minusBtnP = document.querySelector('.c_pink .minusP');//수량감소DOM
const orderPriceP = document.querySelector('.op_pink')//최종주문표시DOM
let opNumP=document.querySelector('#pink_num');


plusBtnB.addEventListener('click',()=>{
    numberB++; // 수량 증가
    opNumB.value = numberB; // input 값 업데이트
    let totalB = numberB * priceB; // 총 금액 계산
    orderPriceB.innerText = totalB.toLocaleString('ko-kr');
})
minusBtnB.addEventListener('click',()=>{
    if(numberB==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        numberB--;
        opNumB.value = numberB;
        let totalB=innerText=numberB*priceB;
        orderPriceB.innerText=totalB.toLocaleString('ko-kr');
    }
})
plusBtnP.addEventListener('click',()=>{
    numberP++; // 수량 증가
    opNumP.value = numberP; // input 값 업데이트
    let totalP = numberP * priceP; // 총 금액 계산
    orderPriceP.innerText = totalP.toLocaleString('ko-kr');
})
minusBtnP.addEventListener('click',()=>{
    if(numberP==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        numberP--;
        opNumP.value = numberP;
        let totalP=innerText=numberP*priceP;
        orderPriceP.innerText=totalP.toLocaleString('ko-kr');
    }
})

/* 장바구니 버튼 동작 */
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');

console.log(shoppingBtn)
//1. 초기값 : 팝업 숨기기
cartPopup.style.display = 'none';
//2. 장바구니 클릭시
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'
});
//4. 팝업 내 '쇼핑 계속하기' 클릭 시
shoppingBtn.addEventListener('click',(e)=>{
    //5. 팝업 숨기기
    e.preventDefault();
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})

/* 탭메뉴 상단 닿을 시 고정하기 */
const pageTap = document.querySelector('.page_tap');
const tapBarOffset = pageTap.offsetTop;
// 스크롤 이벤트 감지
window.addEventListener('scroll', function() {
    if (window.scrollY >= tapBarOffset) {
        pageTap.classList.add('page_tap_fixed'); // 고정 클래스 추가
    } else {
        pageTap.classList.remove('page_tap_fixed'); // 고정 클래스 제거
    }
});

const tapAll = document.querySelectorAll('.page_tapbar li');
const tapImg = document.querySelector('.page_tapbar .page_img');
const tapReview = document.querySelector('.page_tapbar .page_review');
const tapPageBuy = document.querySelector('.page_tapbar .page_buy');
const tapPageQnA = document.querySelector('.page_tapbar .page_qna');
console.log (tapImg,tapReview,tapPageBuy,tapPageQnA)

const tapView = document.querySelectorAll('.tabview')
console.log (tapView[3])

function removeActiveClass() {
    tapAll.forEach(tap => tap.classList.remove('active')); // 모든 탭에서 'active' 클래스 제거
}

tapImg.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({left:0, top:tapView[0].offsetTop - 100, behavior:'smooth'});
    removeActiveClass();
    tapImg.classList.add('active');
})
tapReview.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({left:0, top:tapView[1].offsetTop - 100, behavior:'smooth'});
    removeActiveClass();
    tapReview.classList.add('active');
})
tapPageBuy.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({left:0, top:tapView[2].offsetTop - 100, behavior:'smooth'});
    removeActiveClass();
    tapPageBuy.classList.add('active');
})
tapPageQnA.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({left:0, top:tapView[3].offsetTop - 100, behavior:'smooth'});
    removeActiveClass();
    tapPageQnA.classList.add('active');
})
