//footer 동원그룹 클릭시 그룹 리스트 보이기 + 마우스 뺐을 때 꺼지기
const dongwonGroup = document.querySelector('footer .dongwon_group');
const groupList = document.querySelector('footer .group_list')

dongwonGroup.addEventListener('click',function(e){
    e.preventDefault();
    groupList.classList.toggle('active');
})
groupList.addEventListener('mouseleave',function(){
    groupList.classList.remove('active');
})

/* 전체 a태그 새로고침 안되게 하기 */
const aTag=document.querySelectorAll('body a')
console.log(aTag[1]);

aTag.forEach(item => {
    item.addEventListener('click',function(e){
        e.preventDefault();
    })
});