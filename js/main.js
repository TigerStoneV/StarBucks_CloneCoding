const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // searchEl 안에서 input Tag 찾음

searchEl.addEventListener('click', function(){    
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

// scroll 될때마다 숫자가 늘어남
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})
// _.throttle(함수,시간) 부화 주기. 
// 300 은 0.3s 의미 하는데 0.3초 부하를 줘서 동시에 함수 호출시 충돌 방지

const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach( function (fadeEl,index) {
    gsap.to(fadeEl, .9 , {
        delay: (index + 1) * .7, // 0.7 -> 1.4 -> 2.1 -> 2.7 s
        opacity: 1,
    } );
});

// Swiper(선택자 ,옵션)
new Swiper('.notice-line .swiper-container' , {
    direction: 'vertical',
    autoplay:true,
    loop:true,
    overflow:'hidden'
});
new Swiper('.promotion .swiper-container', {
    slidesPerView:3 , //한번에 보여줄 슬라이드 개수
    spaceBetween:10 , //슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop:true,
    autoplay:{
        delay:5000, //5s
    },
    pagination:{
        el:'.promotion .swiper-pagination', // 페이지 번호요소 선택자
        clickable:true, // 사용자의 페이지 번호 요소 제어
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  })

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        // 숨김 처리
        promotionEl.classList.add('hide');
    }else{
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
})
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector,delay,size){
    // gsap.to(요소,시간,옵션);
    gsap.to(selector,random(1.5,2.5) , {
        y:size,
        repeat:-1,
        yoyo:true ,// 리벌스해서 나타내기
        ease:Power1.easeInOut,
        delay:random(0,delay),
    });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,9);
floatingObject('.floating3',1.5,20);

// scrollmagic
const spyEls =document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl, //보여짐에 여유를 감시할 요소를 선택
        triggerHook:.8, //
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});


/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()

