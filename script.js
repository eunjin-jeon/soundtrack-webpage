// recommendation soundtrack

var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 280,
    slideMargin = 60,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for(var i = 0; i < slideCount; i++){
      // a.cloneNode() <- a 요소를 그대로 복사
      // a.cloneNode(true) <- a의 자식요소까지 복사
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.appendChild(b) <- a뒤에 b의 내용 추가
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount -1; i>=0; i--){
      // a.cloneNode() <- a 요소를 그대로 복사
      // a.cloneNode(true) <- a의 자식요소까지 복사
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b) <- a앞에 b의 내용 추가
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
      slides.classList.add('animated');
    },100);
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)* slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
}

nextBtn.addEventListener('click',function(){
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click',function(){
    moveSlide(currentIdx - 1);
});

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){

      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px';
        currentIdx = 0;
      }, 500);

      setTimeout(function(){
        slides.classList.add('animated');
      }, 600);
    }
}

// 중간 이미지 외에 양쪽 이미지는 opacity를 0.6정도로 두고 싶습니다. 센터로 와야 이미지의 opacity가 1이 되는 구성이었으면 좋겠습니다.
// 자바스크립트에서 제어해야될 것 같은데 어디에 넣어야할지 잘 모르겠어요.


// audio play

function ppp(){document.getElementById("sound1").onplay();}
function sss(){document.getElementById("sound1").onpause();}

// 이미지에 마우스오버하면 오디오 플레이어가 뜨게끔 구현하고 싶은데 어떻게 해야할까요?


// categorized menu

const allItems = document.querySelectorAll('.category-menu ul li a');

allItems.forEach(item => {
  item.addEventListener("click", function(e){
    for(var i = 0; i < allItems.length; i++){
      allItems[i].classList.remove('active');
    }
    this.classList.add("active");
  });
});

const menuOne = document.querySelector('.category-menu ul li:nth-child(1)');
const menuOnePic = document.querySelector('.con2');

const menuTwo = document.querySelector('.category-menu ul li:nth-child(2)');
const menuTwoPic = document.querySelector('.con3');

console.log(menuOne);
console.log(menuOnePic);
console.log(menuTwo);
console.log(menuTwoPic);

menuOne.addEventListener("click", function(){
  menuOnePic.classList.remove('hidden');
  menuTwoPic.classList.add('hidden');
})

menuTwo.addEventListener("click", function(){
  menuOnePic.classList.add('hidden');
  menuTwoPic.classList.remove('hidden');
});

// 국가별, 장르별, 분위기를 위한. 등등 메뉴를 클릭할때마다 다른 이미지와 텍스트가 나오길 원하는데
// 위처럼 일일히 지정해야하는지.. 다른 방법이 있는지 궁금합니다. 
