"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Footer01",
      img: "category/img_footer01.svg",
      html: `
      <footer>
      <div class="s__container">
          <div class="s__row">
              <img class="footer__logo" src="/icon_footer_logo.svg" alt="logo">
              <ul class="footer__link-list">
                  <li><a href="#">이용약관</a></li>
                  <li><a href="#">개인정보처리방침</a></li>
              </ul>
              <div class="footer__right-wrap">
                  <select name="" id="footerSelect" class="footer__select">
                      <option value="" selected>관련사이트 바로가기</option>
                      <option value="option1">111 바로가기</option>
                      <option value="option2">222 바로가기</option>
                  </select>
                  <div class="footet__link-icon-list">
                      <a href="#" title="유튜브">
                          <img src="/icon_youtube_w.svg" alt="유튜브">
                      </a>
                      <a href="#" title="인스타그램">
                          <img src="/icon_instar_w.svg" alt="인스타그램">
                      </a>
                      <a href="#" title="카카오톡">
                          <img src="/icon_kakao_w.svg" alt="카카오톡">
                      </a>
                      <a href="#" title="블로그">
                          <img src="/icon_blog_w.svg" alt="블로그">
                      </a>
                  </div>
              </div>

              <ul class="footer__info-list">
                  <li>상호명: 가나다</li>
                  <li>대표이사: 홍길동</li>
                  <li>개인정보책임자: 홍길동</li>
                  <li>사업자등록번호: 123-12-12345</li>
                  <li>주소: 블라블라</li>
                  <li>전화번호: 02-1234-1234</li>
                  <li>FAX: 02-1234-1234</li>
              </ul>
              <p class="footer__copy">COPYRIGHT@2023 BRAND.ALL RIGHTS RESERVED.</p>
          </div>
      </div>

  </footer>
      `,
      css: `
      
footer {
  background-color: var(--footer-bg);
  padding: 36px 0;
  width: 100%;
}

footer a, footer p, footer span, footer li {
  color: var(--footer-text);
}
footer .s__row {
  position: relative;
}
.footer__logo {
  margin-bottom: 16px;
}
.footer__link-list{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.footer__link-list a {
  font-size: 14px;
  margin-right: 16px;
}
.footer__info-list {
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.footer__info-list li{
  font-size: 14px;
  font-weight: 100;
  margin-right: 16px;
  opacity: 0.7;
}
.footer__copy{
  font-size: 12px;
  font-weight: 100;
  opacity: 0.5;
}
.footer__right-wrap{
  position: absolute;
  right: 16px;
  top: 0;
}
.footer__select{

  border: 1px solid #535353;
  color: #fff;
  padding: 8px 32px 8px 12px;
  font-size: 14px;

  -webkit-appearance:none; /* for chrome */
  -moz-appearance:none; /*for firefox*/
  appearance:none;

  background: url(/icon_down_arrow_w.svg) no-repeat  95% 50%/15px auto;
  background-color: var(--footer-bg);
}
.footer__select::-ms-expand{
  display:none;/*for IE10,11*/
}
.footet__link-icon-list{
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
}
.footet__link-icon-list a img {
  width: 30px;
  height: 30px;
  opacity: 0.6;
}
@media (max-width: 1024px) {

}
@media (max-width: 768px) {
  .footer__right-wrap {
    position: relative;
    right: auto;
  }
  .footet__link-icon-list{
    justify-content: flex-start;

  }
}
      `,
      js: () => {},
    },
    {
      title: "Footer02",
      img: "category/img_footer02.svg",
      html: `
<footer>
  <div class="s__container">
      <div class="s__row">
          <ul class="footer__link-list">
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
          </ul>
          <ul class="footer__info-list">
              <li>상호명: 가나다</li>
              <li>대표이사: 홍길동</li>
              <li>개인정보책임자: 홍길동</li>
              <li>사업자등록번호: 123-12-12345</li>
              <li>주소: 블라블라</li>
              <li>전화번호: 02-1234-1234</li>
              <li>FAX: 02-1234-1234</li>
          </ul>
          <div class="footet__link-icon-list">
              <a href="#" title="유튜브">
                  <img src="/icon_youtube_w.svg" alt="유튜브">
              </a>
              <a href="#" title="인스타그램">
                  <img src="/icon_instar_w.svg" alt="인스타그램">
              </a>
              <a href="#" title="카카오톡">
                  <img src="/icon_kakao_w.svg" alt="카카오톡">
              </a>
              <a href="#" title="블로그">
                  <img src="/icon_blog_w.svg" alt="블로그">
              </a>
          </div>
          <p class="footer__copy">COPYRIGHT@2023 BRAND.ALL RIGHTS RESERVED.</p>
      </div>
  </div>
</footer>
      `,
      css: `
footer {
  background-color: var(--footer-bg);
  padding: 36px 0;
  width: 100%;
}

footer a,
footer p,
footer span,
footer li {
  color: var(--footer-text);
}
footer .s__row {
  position: relative;
}
.footer__logo {
  margin-bottom: 16px;
}
.footer__link-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.footer__link-list a {
  font-size: 14px;
  margin-right: 16px;
}
.footer__info-list {
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.footer__info-list li {
  font-size: 14px;
  font-weight: 100;
  margin-right: 16px;
  opacity: 0.7;
}
.footer__copy {
  font-size: 12px;
  font-weight: 100;
  opacity: 0.5;
  text-align: center;
}
.footer__right-wrap {
  position: absolute;
  right: 16px;
  top: 0;
}
.footer__select {
  border: 1px solid #535353;
  color: #fff;
  padding: 8px 32px 8px 12px;
  font-size: 14px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  background: url(/icon_down_arrow_w.svg) no-repeat 95% 50%/15px auto;
  background-color: var(--footer-bg);
}
.footer__select::-ms-expand {
  display: none; /*for IE10,11*/
}
.footet__link-icon-list {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.footet__link-icon-list a img {
  width: 30px;
  height: 30px;
  opacity: 0.6;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .footer__right-wrap {
    position: relative;
    right: auto;
  }
}

      `,
      js: () => {},
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
