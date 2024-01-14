"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Swiper01",
      img: "category/img_swiper01.svg",
      cssFile: ["css/swiper-bundle.min.css"],
      jsFile: ["js/swiper-bundle.min.js"],
      html: `
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide01">
            <div class="s__container">
                <div class="s__row">
                    Slide 1
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide02">
            <div class="s__container">
                <div class="s__row">
                    Slide 2
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide03">
            <div class="s__container">
                <div class="s__row">
                    Slide 3
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
      `,
      css: `
      /* swiper */
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide01 {
  background-color: #a7a7a7;
}
.swiper-slide02 {
  background-color: #828282;
}
.swiper-slide03 {
  background-color: #5b5b5b;
}
.swiper-slide .s__container{
  height: 100%;
}
.swiper-slide .s__row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.swiper-button-prev:after, .swiper-button-next:after{
  content: '';
  width: 40px;
  height: 40px;
}
.swiper-button-prev:after{
  background: url(/icon_left_arrow_w.svg) no-repeat;
  background-size: contain;
}
.swiper-button-next:after{
  background: url(/icon_right_arrow_w.svg) no-repeat;
  background-size: contain;
}
.swiper-pagination-bullet-active{
  background-color: #fff;
}
.swiper-pagination-bullet{
  width: 80px;
  border-radius: 0;
  height: 3px;
}
/* swiper 끝 */
      `,
      js: () => {
        const swiper = new Swiper(".swiper", {
          // Optional parameters
          // direction: 'vertical',
          loop: true,

          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
          },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        });
      },
      download: [{ name: "Swiper", link: "/download/swiper.zip" }],
    },
    {
      title: "Swiper02",
      img: "category/img_swiper02.svg",
      cssFile: ["css/swiper-bundle.min.css"],
      jsFile: ["js/swiper-bundle.min.js"],
      html: `
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide01">
            <div class="s__container">
                <div class="s__row">
                    Slide 1
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide02">
            <div class="s__container">
                <div class="s__row">
                    Slide 2
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide03">
            <div class="s__container">
                <div class="s__row">
                    Slide 3
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="autoplay-progress">
        <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span></span>
    </div>
    <a href="javascript:void(0)" class="autoplay-play-stop">
        <img src="/icon_play_w.svg" alt="재생" class="autoplay-play">
        <img src="/icon_play_stop_w.svg" alt="일시정지" class="autoplay-stop">
    </a>
</div>
      `,
      css: `
/* swiper */
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide01 {
  background-color: #a7a7a7;
}
.swiper-slide02 {
  background-color: #828282;
}
.swiper-slide03 {
  background-color: #5b5b5b;
}
.swiper-slide .s__container{
  height: 100%;
}
.swiper-slide .s__row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.swiper-button-prev:after, .swiper-button-next:after{
  content: '';
  width: 40px;
  height: 40px;
}
.swiper-button-prev:after{
  background: url(/icon_left_arrow_w.svg) no-repeat;
  background-size: contain;
}
.swiper-button-next:after{
  background: url(/icon_right_arrow_w.svg) no-repeat;
  background-size: contain;
}
.autoplay-play-stop{
  cursor: pointer;
  position: absolute;
  bottom: 4px;
  z-index: 10;
  width: 24px;
  left: calc(50% + 140px);
}
.autoplay-play-stop .autoplay-play{
  display: none;
}
.autoplay-play-stop.stop .autoplay-play{
  display: block;
}
.autoplay-play-stop.stop .autoplay-stop{
  display: none;
}
.swiper-pagination-bullet-active{
  background-color: #fff;
}
.swiper-pagination-bullet{
  width: 80px;
  border-radius: 0;
  height: 3px;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: #fff;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 2px;
  stroke: #fff;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

@media (max-width: 768px) {
  .autoplay-progress{
    bottom: 35px;
  }
}
/* swiper 끝 */
      `,
      js: () => {
        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(
          ".autoplay-progress span"
        );
        const autoPlayBtn = document.querySelector(".autoplay-play-stop");

        const swiper = new Swiper(".swiper", {
          // Optional parameters
          // direction: 'vertical',
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
          on: {
            //프로그래스바(원형)
            autoplayTimeLeft(s, time, progress) {
              progressCircle.style.setProperty("--progress", 1 - progress);
              progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
          },
        });

        autoPlayBtn.addEventListener("click", (e) => {
          const btn = e.currentTarget;
          if (btn.classList.contains("stop")) {
            //일시정지중일 경우
            swiper.autoplay.resume();
            btn.classList.remove("stop");
          } else {
            //재생중일경우
            swiper.autoplay.pause();
            btn.classList.add("stop");
          }
        });
      },
      download: [{ name: "Swiper", link: "/download/swiper.zip" }],
    },
    {
      title: "Swiper03",
      img: "category/img_swiper03.svg",
      cssFile: ["css/swiper-bundle.min.css"],
      jsFile: ["js/swiper-bundle.min.js"],
      html: `
<div class="swiper visual-sec">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide01">
            <div class="s__container">
                <div class="s__row">
                    Slide 1
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide02">
            <div class="s__container">
                <div class="s__row">
                    Slide 2
                </div>
            </div>
        </div>
        <div class="swiper-slide swiper-slide03">
            <div class="s__container">
                <div class="s__row">
                    Slide 3
                </div>
            </div>
        </div>
    </div>
    <div class="all-box">
        <div class="progress-box">
            <div class="swiper-pagination"></div>
            <div class="autoplay-progress">
                <svg viewBox="0 0 100 10">
                    <line x1="0" y1="0" x2="100" y2="0">
                </svg>
            </div>
        </div>
        <div class="arrow-box">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <a href="javascript:void(0)" class="autoplay-play-stop">
                <img src="/icon_play_w.svg" alt="재생" class="autoplay-play">
                <img src="/icon_play_stop_w.svg" alt="일시정지" class="autoplay-stop">
            </a>
        </div>
    </div>
</div>
      `,
      css: `
      
/* swiper */
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide01 {
  background-color: #a7a7a7;
}
.swiper-slide02 {
  background-color: #828282;
}
.swiper-slide03 {
  background-color: #5b5b5b;
}
.swiper-slide .s__container{
  height: 100%;
}
.swiper-slide .s__row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.swiper-button-prev:after, .swiper-button-next:after{
  content: '';
  width: 40px;
  height: 40px;
}
.swiper-button-prev:after{
  background: url(/icon_left_arrow_w.svg) no-repeat;
  background-size: contain;
}
.swiper-button-next:after{
  background: url(/icon_right_arrow_w.svg) no-repeat;
  background-size: contain;
}
.autoplay-play-stop{
  cursor: pointer;
    position: absolute;
    right: -33px;
    bottom: 22px;
}
.autoplay-play-stop .autoplay-play{
  display: none;
}
.autoplay-play-stop.stop .autoplay-play{
  display: block;
}
.autoplay-play-stop.stop .autoplay-stop{
  display: none;
}
.swiper-pagination-bullet-active{
  background-color: #fff;
}
.swiper-pagination-bullet{
  width: 80px;
  border-radius: 0;
  height: 3px;
}
.visual-sec .all-box {
	position: absolute;
	display: inline-flex;
	width: 90%;
	height: 50px;
	left: 50%;
	bottom: 10px;
	box-sizing: border-box;
	padding: 0 20px;
	transform: translate(-50%, -50%);
	z-index: 20;
}
.visual-sec .progress-box {
	position: relative;
	width: 170px;
	height: 50px;
	z-index: 11;
}
.visual-sec .all-box {
  position: absolute;
  display: inline-flex;
  width: 90%;
  height: 50px;
  left: 50%;
  bottom: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  z-index: 20;
}
.autoplay-progress {
	position: absolute;
	left: 30px;
	top: 10px;
	z-index: 10;
	width: 100px;
	height: 3px;
	background-color: rgba(0, 0, 0, 0.1);
}
.autoplay-progress svg {
	--progress: 0;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	width: 100%;
	stroke-width: 4px;
	stroke: #fff;
	fill: none;
	stroke-dashoffset: calc(100 * (1 - var(--progress)));
	stroke-dasharray: 100;
}
.visual-sec .swiper-pagination {
  display: flex;
  color: #fff;
  justify-content: space-between;
  position: static;
  text-align: left;
}
.visual-sec .arrow-box {
  position: relative;
  width: 80px;
  height: 50px;
}
.visual-sec .swiper-button-next,
.visual-sec .swiper-button-prev {
  width: 21px;
  height: 21px;
  top: 0;
  margin-top: 0;
}
@media (max-width: 768px) {
  .autoplay-progress{
    bottom: 35px;
  }
}
/* swiper 끝 */
      `,
      js: () => {
        const progressLine = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(
          ".autoplay-progress span"
        );
        const autoPlayBtn = document.querySelector(".autoplay-play-stop");

        const swiper = new Swiper(".swiper", {
          // Optional parameters
          // direction: 'vertical',
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },

          // bullet
          pagination: {
            el: ".swiper-pagination",
            clickable: false,
            type: "custom",
            renderCustom: function (swiper, current, total) {
              const currentSpan = document.createElement("span");
              currentSpan.className = "current";
              currentSpan.textContent = "0" + current;
              const totalSpan = document.createElement("span");
              totalSpan.className = "total";
              totalSpan.textContent = "0" + total;
              return currentSpan.outerHTML + totalSpan.outerHTML;
            },
          },
          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
          on: {
            //프로그래스바(원형)
            autoplayTimeLeft(s, time, progress) {
              progressLine.style.setProperty("--progress", 1 - progress);
            },
          },
        });

        autoPlayBtn.addEventListener("click", (e) => {
          const btn = e.currentTarget;
          if (btn.classList.contains("stop")) {
            //일시정지중일 경우
            swiper.autoplay.resume();
            btn.classList.remove("stop");
          } else {
            //재생중일경우
            swiper.autoplay.pause();
            btn.classList.add("stop");
          }
        });
      },
      download: [{ name: "Swiper", link: "/download/swiper.zip" }],
    },
    {
      title: "Swiper04",
      img: "category/img_swiper04.svg",
      cssFile: ["css/swiper-bundle.min.css"],
      jsFile: ["js/swiper-bundle.min.js"],
      html: `
<section>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide01">
          <div class="s__container">
              <div class="s__row">
                  Slide 1
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide02">
          <div class="s__container">
              <div class="s__row">
                  Slide 2
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide03">
          <div class="s__container">
              <div class="s__row">
                  Slide 3
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide03">
          <div class="s__container">
              <div class="s__row">
                  Slide 4
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide03">
          <div class="s__container">
              <div class="s__row">
                  Slide 5
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide03">
          <div class="s__container">
              <div class="s__row">
                  Slide 6
              </div>
          </div>
      </div>
      <div class="swiper-slide swiper-slide03">
          <div class="s__container">
              <div class="s__row">
                  Slide 7
              </div>
          </div>
      </div>
    </div>
  </div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</section>
      `,
      css: `
      /* swiper */
.swiper {
  width: calc(100% - 100px);
  height: 60px;
}
.swiper04 > .s__container > .s__row {
  position: relative;
}
.swiper-slide01 {
  background-color: #a7a7a7;
}
.swiper-slide02 {
  background-color: #828282;
}
.swiper-slide03 {
  background-color: #5b5b5b;
}
.swiper-slide .s__container{
  height: 100%;
}
.swiper-slide .s__row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.swiper-button-prev:after, .swiper-button-next:after{
  content: '';
  width: 40px;
  height: 40px;
}
.swiper-button-prev:after{
  background: url(/icon_left_arrow.svg) no-repeat;
  background-size: contain;
}
.swiper-button-next:after{
  background: url(/icon_right_arrow.svg) no-repeat;
  background-size: contain;
}
.swiper-pagination-bullet-active{
  background-color: #fff;
}
.swiper-pagination-bullet{
  width: 80px;
  border-radius: 0;
  height: 3px;
}
/* swiper 끝 */
      `,
      js: () => {
        const swiper = new Swiper(".swiper", {
          // Optional parameters
          // direction: 'vertical',
          // loop: true,

          // If we need pagination
          // pagination: {
          //   el: '.swiper-pagination',
          // },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView: 5,
          spaceBetween: 30,
          // centeredSlides: true,
          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
          breakpoints: {
            360: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          },
        });
      },
      download: [{ name: "Swiper", link: "/download/swiper.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
