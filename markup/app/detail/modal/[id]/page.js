"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Modal01",
      cssFile: [],
      jsFile: [],
      img: "category/img_modal01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__btn-center-wrap s__btn-wrap">
        <button class="s__btn s__btn-line js-popup-open" data-popid="popupModal02">기본모달</button>
        <button class="s__btn s__btn-line js-popup-open" data-popid="popupModal03">작은모달</button>
      </div>
    </div>
  </div>
</section>
<div id="popupModal02" class="popup__section">
  <div class="popup__dim"></div>
  <div class="popup__inner">
        <div class="popup__container__group --popup">
          <div class="popup__header__group">
              <h2 class="popup__header__title">title</h2>
              <button class="popup__header__close js-popup-close">
                  <span class="screen-out">닫기</span>
              </button>
          </div>

          <div class="popup__contents__group js-popup-scroll ps">
              <p>내용입니다.</p>
          </div>
          <div class="popup__button__group js-popup-btn">
              <button class="js-popup-close">닫기</button>
          </div>
      </div>
  </div>
</div>
<div id="popupModal03" class="popup__section">
    <div class="popup__dim"></div>
    <div class="popup__inner popup-sm">
        <div class="popup__container__group">
            <div class="popup__header__group">
                <h2 class="popup__header__title">title</h2>
                <button class="popup__header__close js-popup-close">
                    <span class="screen-out">닫기</span>
                </button>
            </div>
            <div class="popup__contents__group js-popup-scroll ps">
                <p>내용입니다.</p>
            </div>
            <div class="popup__button__group js-popup-btn">
                <button class="js-popup-close">닫기</button>
            </div>
        </div>
    </div>
</div>
      `,
      css: `
      
/* popup */
@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes popupDimbg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}
.screen-out {
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  overflow: hidden !important;
  text-indent: -9999px !important;
}
.popup__section {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
}
.popup__section.is-open {
  display: block;
}
.popup__dim {
  background: #000;
  opacity: 0;
}
.is-open .popup__dim {
  opacity: 0.4;
  animation: popupDimbg 0.5s;
}
.popup__inner,
.popup__dim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.popup__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__container__group {
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  max-width: 980px;
  max-height: 60%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  animation: fade 0.5s;
}
.popup__container__group {
  max-height: 80%;
}
.popup__header__group {
  height: 77px;
  padding: 24px;
  flex-shrink: 0;
}
.popup__header__title {
  font-size: 20px;
  font-weight: 700;
  color: #222;
  line-height: 29px;
  letter-spacing: -0.8px;
}
.popup__header__close {
  width: 24px;
  height: 24px;
  background: url(/icon_close.svg) no-repeat center/contain;
  position: absolute;
  top: 24px;
  right: 24px;
}
.popup__contents__group {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  overflow-y: auto;
  max-height: calc(80vh - 174px);
  margin-bottom: 40px;
}
.popup__button__group {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
  height: 56px;
}
.popup__button__group > button + button {
  margin-left: 10px;
}
.alert {
  display: none;
  margin-top: 10px;
  margin-left: 25px;
  color: #f04c23;
  font-size: 18px;
  line-height: 1;
}
.alert.on,
.alert2.on {
  display: block;
}

.popup-sm .popup__container__group {
  max-width: 400px;
}
/* popup 끝 */
@media all and (max-width: 767px) {
  /* popup */
  .popup__container__group {
    width: 100%;
    max-height: 90%;
    border-radius: 20px 20px 0 0;
    animation-name: popupYmove;
  }
  @-webkit-keyframes popupYmove {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 0.4;
      transform: translateY(0);
    }
  }

  .popup__inner {
    align-items: flex-end;
  }
  .popup-sm .popup__container__group {
    max-width: initial;
    animation-name: popupYmove;
    width: calc(100% - 32px);
    border-radius: 20px;
  }
  .popup__inner.popup-sm {
    align-items: center;
  }
  /* popup 끝 */
}

      `,
      js: () => {
        const popOpenBtns = document.querySelectorAll(".js-popup-open");

        function popClose(popup) {
          const popCloseBtns = popup.querySelectorAll(".js-popup-close");

          popCloseBtns.forEach((popCloseBtn) => {
            popCloseBtn.addEventListener("click", function () {
              popup.classList.remove("is-open");
              document.body.classList.remove("scroll-off");
            });
          });
        }

        popOpenBtns.forEach((popOpenBtn) => {
          popOpenBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const popID = this.dataset.popid;
            const popup = document.querySelector(`#${popID}`);

            popup.classList.add("is-open");
            document.body.classList.add("scroll-off");

            popClose(popup);
          });
        });
      },
    },
    {
      title: "Modal02",
      cssFile: [],
      jsFile: [],
      img: "category/img_modal02.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__btn-center-wrap s__btn-wrap">
        <button class="s__btn s__btn-line js-popup-open" data-popid="popupModal01">검색모달</button>
      </div>
    </div>
  </div>
</section>
<div id="popupModal01" class="popup__section search-popup">
  <div class="popup__dim"></div>
  <div class="popup__inner">
      <div class="popup__container__group --popup">
          <div class="popup__header__group">
              <h2 class="popup__header__title"></h2>
              <button class="popup__header__close js-popup-close">
                  <span class="screen-out">닫기</span>
              </button>
          </div>
          <div class="popup__contents__group js-popup-scroll ps">
              <div class="top-search-box">
                  <form>
                      <div class="top-search">
                          <input type="text">
                          <button><img src="/icon_search.svg" alt="검색" title="검색"></button>
                      </div>
                      
                  </form>
              </div>
              <div class="top-search-pop">
                  <p>인기검색어 : </p>
                  <a href="">aaaaa</a>
                  <a href="">bbbbb</a>
                  <a href="">ccccc</a>
              </div>
          </div>
      </div>
  </div>
</div>
      `,
      css: `
      
/* 검색 popup */
@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes popupDimbg {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}
.screen-out {
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  line-height: 0 !important;
  overflow: hidden !important;
  text-indent: -9999px !important;
}
.popup__section {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
}
.popup__section.is-open {
  display: block;
}
.popup__dim {
  background: #000;
  opacity: 0;
}
.is-open .popup__dim {
  opacity: 0.4;
  animation: popupDimbg 0.5s;
}
.popup__inner,
.popup__dim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.popup__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__container__group {
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  max-width: 980px;
  max-height: 60%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  animation: fade 0.5s;
}
.popup__container__group {
  max-height: 80%;
}
.popup__header__group {
  height: 77px;
  padding: 24px;
  flex-shrink: 0;
}
.popup__header__title {
  font-size: 20px;
  font-weight: 700;
  color: #222;
  line-height: 29px;
  letter-spacing: -0.8px;
}
.popup__header__close {
  width: 24px;
  height: 24px;
  background: url(/icon_close.svg) no-repeat center/contain;
  position: absolute;
  top: 24px;
  right: 24px;
}
.popup__contents__group {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  overflow-y: auto;
  max-height: calc(80vh - 174px);
  margin-bottom: 40px;
}
.popup__button__group {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
  height: 56px;
}
.search-popup .popup__inner {
  align-items: flex-start;
}
.search-popup .popup__container__group {
  width: 100%;
  max-width: inherit;
  border-radius: 0;
}
.top-search-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-search{
  position: relative;
  width: 40vw;
}
.top-search-box input{
  border: none;
  border-bottom: 1px solid var(--black);
  padding: 12px 16px;
  width: 100%;
}
.top-search-box button{
  position: absolute;
  top: 8px;
  right: 0;
}
.top-search-pop{
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 100px;
}
.top-search-pop p {
  margin-right: 18px;
}
.top-search-pop a{
  border: 1px solid var(--border);
  padding: 8px 16px;
  display: block;
  border-radius: 100px;
  transition: all 0.3s;
}
.top-search-pop a:hover{
  background-color: var(--main);
  color: #fff;
}
.top-search-pop a + a {
  margin-left: 8px;
}
/* 검색 popup 끝 */

@media all and (max-width: 767px) {
/* 검색 popup */
.top-search{
  width: calc(100vw - 36px);
}
.top-search-pop{
  padding: 0 16px;
}
/* 검색 popup 끝*/
}

      `,
      js: () => {
        const popOpenBtns = document.querySelectorAll(".js-popup-open");

        function popClose(popup) {
          const popCloseBtns = popup.querySelectorAll(".js-popup-close");

          popCloseBtns.forEach((popCloseBtn) => {
            popCloseBtn.addEventListener("click", function () {
              popup.classList.remove("is-open");
              document.body.classList.remove("scroll-off");
            });
          });
        }

        popOpenBtns.forEach((popOpenBtn) => {
          popOpenBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const popID = this.dataset.popid;
            const popup = document.querySelector(`#${popID}`);

            popup.classList.add("is-open");
            document.body.classList.add("scroll-off");

            popClose(popup);
          });
        });
      },
    },
    {
      title: "Modal03",
      cssFile: ["css/swiper-bundle.min.css"],
      jsFile: ["js/swiper-bundle.min.js"],
      img: "category/img_modal03.svg",
      html: `
<div class="popup-slider active-on">
    <button class="popup-slider-close-btn"><img src="/icon_close_w.svg" alt="닫기" title="닫기"></button>
    <!-- Slider main container -->
    <div class="swiper" id="popupSlider">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
        </div>

    </div>
    <div class="swiper-pagination popup-slide-pagination"></div>
    <div class="swiper-button-prev popup-slide-prev"></div>
    <div class="swiper-button-next popup-slide-next"></div>
</div>
      `,
      css: `
.popup-slider.active-on {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
}
.popup-slider {
    display: none;
}
.popup-slider .swiper{
    width: 60%;
}
.popup-slider-close-btn{
    position: absolute;
    right: 16px;
    top: 16px;
}
.popup-slider-close-btn img {
    width: 48px;
}
.popup-slider .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    overflow: auto;
}
.popup-slider .swiper-slide img {
    object-fit: contain;
}
.popup-slider .swiper-slide .s__container {
  height: 100%;
}
.popup-slider .swiper-slide .s__row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.popup-slider .swiper-button-prev:after,
.swiper-button-next:after {
  content: "";
  width: 40px;
  height: 40px;
}
.popup_slider-btn-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
}
.popup_slider-btn-wrap button + button{
    margin-left: 8px;
}
.popup_slider-btn-wrap button {
    padding: 12px 24px;
    font-weight: 600;
    border-radius: 32px;
    background-color: #fff;
    font-size: 16px;
}
.popup_slider-btn-wrap button.today-display-none{
    background-color: #3c3c3c;
    color: #fff;
}
.popup-slider .swiper-button-prev:after {
  background: url(/icon_left_arrow_w.svg) no-repeat;
  background-size: contain;
}
.popup-slider .swiper-button-next:after {
  background: url(/icon_right_arrow_w.svg) no-repeat;
  background-size: contain;
}
.popup-slider .swiper-pagination-bullet-active {
  background-color: #fff;
}
.popup-slider .swiper-pagination-bullet {
  width: 80px;
  border-radius: 0;
  height: 3px;
}

/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (max-width: 1023px) {
}
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
    .popup-slider .swiper{
        width: 80%;
    }
}
      `,
      js: () => {
        const popupSliderCloseBtn = document.querySelector(
          ".popup-slider-close-btn"
        );
        const popupSlider = document.querySelector(".popup-slider");

        // 광고팝업닫기
        popupSliderCloseBtn.addEventListener("click", () => {
          popupSlider.classList.remove("active-on");
        });

        function toggleMainPopup() {
          // 스토리지 제어 함수 정의
          const handleStorage = {
            // 스토리지에 데이터 쓰기(이름, 만료일)
            setStorage: function (name, exp) {
              // 만료 시간 구하기(exp를 ms단위로 변경)
              const date = new Date();
              date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

              // 로컬 스토리지에 저장하기
              // (값을 따로 저장하지 않고 만료 시간을 저장)
              localStorage.setItem(name, date);
            },
            // 스토리지 읽어오기
            getStorage: function (name) {
              const now = new Date();
              // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
              // 시간이 남아 있으면 true, 아니면 false 리턴
              const dateString = localStorage.getItem(name);
              const dateObject = new Date(dateString);
              const timestamp = dateObject.getTime();
              return timestamp > now.getTime();
            },
          };

          //데이터 불러오기 샘플
          const data = [
            {
              id: "data01",
              img: "/img_test.png",
              link: "https://www.naver.com/",
              title: "공지1",
            },
            {
              id: "data02",
              img: "/img_test.png",
              link: "https://www.naver.com/",
              title: "공지2",
            },
            {
              id: "data03",
              img: "/img_test.png",
              link: "https://www.naver.com/",
              title: "공지3",
            },
          ];
          let popupList = "";
          let popupNum = 0;

          for (let i = 0; i < data.length; i++) {
            //광고팝업 슬라이드 데이터 노출
            const d = data[i];
            const thisData = handleStorage.getStorage(d.id);
            if (!thisData) {
              const swiperSlide = document.createElement("div");
              swiperSlide.className = "swiper-slide swiper-slide01";

              // a 태그 생성
              const link = document.createElement("a");
              link.href = d.link;

              // img 태그 생성
              const img = document.createElement("img");
              img.src = d.img;
              img.alt = d.title;

              // div.popup_slider-btn-wrap 생성
              const btnWrap = document.createElement("div");
              btnWrap.className = "popup_slider-btn-wrap";

              // button 생성
              const button = document.createElement("button");
              button.id = d.id;
              button.textContent = "오늘 하루 보지 않기";

              // 각각의 요소를 조립
              btnWrap.appendChild(button);
              link.appendChild(img);
              swiperSlide.appendChild(link);
              swiperSlide.appendChild(btnWrap);

              // 스트링으로 변환
              const tempContainer = document.createElement("div");
              tempContainer.appendChild(swiperSlide);

              // HTML 문자열로 변환
              const newPopupItem = tempContainer.innerHTML;

              // popupList에 추가
              popupList += newPopupItem;
              popupNum += 1;
            }
          }
          const popupSwiperWrap = document.querySelector(
            ".popup-slider .swiper-wrapper"
          );
          popupSwiperWrap.innerHTML = popupList;

          //스와이퍼
          if (popupNum !== 0) {
            //팝업이 하나이상 있으면
            const popupSwiper = new Swiper("#popupSlider", {
              //   loop: true, //루프켜면 popupSlideBtns.length == popupSlideclickBtns.length 수정해야함

              pagination: {
                el: ".popup-slide-pagination",
              },

              navigation: {
                nextEl: ".popup-slide-next",
                prevEl: ".popup-slide-prev",
              },
            });

            // 오늘하루 보지 않기 버튼
            const popupSlideBtns = document.querySelectorAll(
              ".popup_slider-btn-wrap button"
            );
            for (let i = 0; i < popupSlideBtns.length; i++) {
              const p = popupSlideBtns[i];
              p.addEventListener("click", function (event) {
                const target = event.target;
                // 로컬 스토리지에 id 이름으로 1일(24시간 뒤) 동안 보이지 않게

                handleStorage.setStorage(target.id, 1);
                p.classList.add("today-display-none");
                const popupSlideclickBtns = document.querySelectorAll(
                  ".popup_slider-btn-wrap button.today-display-none"
                );

                if (popupSlideBtns.length == popupSlideclickBtns.length) {
                  popupSlider.classList.remove("active-on");
                } else {
                  popupSwiper.slideNext();
                }
              });
            }
          } else {
            //팝업이 하나도 없으면 공지팝업 html 삭제
            document.querySelector(".popup-slider").remove();
          }
        }

        // document.addEventListener("DOMContentLoaded", function () { //화면로드 후 적용하려면 사용
        toggleMainPopup();
        // });
      },
      download: [{ name: "Modal03", link: "/download/modal03.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
