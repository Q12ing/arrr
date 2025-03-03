/* 탭메뉴 클릭시 클래스 이동 */
const tapMenu = document.querySelectorAll('.category_btn li')
console.log(tapMenu)

tapMenu.forEach(item => {
    item.addEventListener('click', function () {
        tapMenu.forEach(menu => menu.classList.remove('active'));
        this.classList.add('active');
    });
});

/* 상품 더보기 로드 */
const productItem = document.querySelectorAll('.sub_wrap .product_list li');
const itemMore = document.querySelector('.sub_wrap .container .more_product');
let visibleCount = 8; // 처음에 보이는 개수

console.log(productItem,itemMore)

// 기본셋팅 : 8개만 보이게 설정
for (let i = 0; i < visibleCount; i++) {
    if (productItem[i]) productItem[i].style.display = "block";
}
itemMore.addEventListener('click',function(e){
    e.preventDefault();
    let nextCount = visibleCount + 4;
    for (let i = visibleCount; i < nextCount; i++) {
        if (productItem[i]) {
            productItem[i].style.display = "block";
        }
        visibleCount = nextCount;
        if (visibleCount >= productItem.length) {
            itemMore.style.display = "none";
        }
    }
});