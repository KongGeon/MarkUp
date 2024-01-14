"use client";

import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

require("prismjs/plugins/line-numbers/prism-line-numbers");
require("prismjs/plugins/toolbar/prism-toolbar");
require("prismjs/plugins/show-language/prism-show-language"); //언어노출
require("prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"); //복사버튼

export default function Contents(props) {
  const [index, setIndex] = useState(0);

  const TabWrap = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--boarder);
    margin-top: 16px;
    margin-bottom: 16px;
  `;
  const Tab = styled.a`
    display: block;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    padding: 8px 16px 12px 16px;
    transform: translateY(1px);
  `;
  const HtmlWrap = styled.div`
    border: 1px solid var(--boarder);
    border-radius: 16px;
    padding: 12px;
    height: 650px;
    display: flex;
    align-items: center;
    transition: all 0.7s;
    margin: 0 auto;
    overflow: hidden;
    background-color: #323232;
  `;
  const HtmlInner = styled.iframe`
    width: 100%;
    position: relative;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
  `;
  const LangTitle = styled.li`
    font-size: 20px;
    font-weight: 700;
    margin-top: 36px;
    margin-bottom: 4px;
  `;
  const DownBtn = styled.a`
    display: inline-block;
    padding: 8px 24px;
    border-radius: 100px;
    font-size: 14px;
    background-color: var(--black);
    color: #fff;
    margin-right: 8px;
    margin-top: 24px;
    &:hover {
      background-color: #3559e0;
    }
  `;
  const componentsHtml = DOMPurify.sanitize(props.contentsHtml); //html
  const componentsCss = DOMPurify.sanitize(props.contentsCss); //css
  const firstJs = props.contentsJs.toString();
  const startIndex = firstJs.indexOf("{") + 1; // '{' 다음 위치부터
  const endIndex = firstJs.lastIndexOf("}"); // '}' 직전까지
  const innerData = firstJs.substring(startIndex, endIndex).trim();
  const componentsJs = DOMPurify.sanitize(innerData); //js

  //style reset
  const resetCss = `

* {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}
*,
:after,
:before {
  box-sizing: border-box;
  flex-shrink: 0;
}
:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-break: break-word;
  tab-size: 4;
}
html,
body {
  height: 100%;
}
section{
  width: 100%;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
}
iframe{
  border: 0;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
button {
  background: none;
  border: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ul,
ol {
  list-style: none;
}

/* 추가 */
*::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

*::-webkit-scrollbar-thumb {
  background-color: #585e8a4c;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}


/* skip */
.skip {
  display: block;
  height: 1px;
  width: 1px;
  margin: 0 -1px -1px 0;
  padding: 0;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  background-color: #fff;
  z-index: 9999;
  position: relative;
}
.skip:hover,
.skip:active,
.skip:focus {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 5px 0;
  text-indent: 10px;
  font-weight: bold;
  font-size: 12px;
  color: #333;
  line-height: 1;
  text-decoration: none !important;
  position: relative;
  text-align: center;
  box-shadow: 0 0 0 1px #000 inset;
}
/* 스크롤 */

.s__container {
  height: inherit;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.s__row {
  padding: 0 16px;
}

:root {
  --black: #181818;
  --main: #3559E0;
  --secondary-color: #000000;
  --border: #E6E8EC;
  --gray: #BABABA;
  --backgroun: #F5F5F6;
  --footer-bg: #191919;
  --footer-text: #fff;
}
body {
  /* font-family: "Noto Sans KR", "Helvetica Neue", Helvetica, Arial, sans-serif; */
  font-family: "Pretendard", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--black);
}

/* input */
.s__input {
  padding: 11px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 48px;
  margin: 2px;
}
.s__input-small{
    padding: 8px 14px;
    font-size: 14px;
    min-height: 40px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.s__input::placeholder{
  color: var(--gray);
}
/* select */
.s__select {
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url("/icon_down_arrow.svg") no-repeat 95% 50%/18px auto;
  background-color: #fff;
  padding: 12px 54px 12px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 50px;
  margin: 2px;

}
.s__select::-ms-expand {
  display: none; /*for IE10,11*/
}

/* button */
.s__btn {
  margin: 2px;
  font-size: 16px;
  padding: 6px 20px 4px;
  border-radius: 4px;
  transition: filter 0.3s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.s__btn img {
    width: 24px;
    margin-bottom: 2px;
}
.s__btn-img-left{
    margin-right: 4px;
}
.s__btn-img-right{
    margin-left: 4px;
}
.s__btn-sm {
  font-size: 14px;
  padding: 4px 12px;
  height: 30px;
}
.s__btn-lg {
  font-size: 18px;
  padding: 10px 20px;
  height: 48px;
}
.s__btn-main {
  color: #fff;
  background-color: var(--main);
}
.s__btn-red {
  color: #fff;
  background-color: #dc3545;
}
.s__btn-line {
  border: 1px solid var(--border);
}
.s__btn:disabled {
  opacity: 0.2;
  pointer-events: none;
}
.s__btn-line:hover{
  background-color: #fefefe;
}
.s__btn:hover {
  filter: brightness(0.9);
}
.s__btn:active {
  filter: brightness(0.8);
}
.s__btn-wrap{
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.s__btn-left-wrap {
  justify-content: flex-start;
}
.s__btn-center-wrap {
  justify-content: center;
}
.s__btn-right-wrap {
  justify-content: flex-end;
}
.s__btn-between-wrap{
  justify-content: space-between;
}
.s__btn-between-wrap > div{
  display: flex;
  align-items: center;
  gap: 4px;
}
.s__btn-row-wrap {
  flex-direction: column;
  align-items: stretch;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (max-width: 1023px) {
}
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .s__btn-wrap {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }
  .s__btn-between-wrap > div{
    flex-direction: column;
    align-items: stretch;
  }
}
  `;

  const data = [
    {
      id: 0,
      title: "Preview",
      description: "0",
    },
    {
      id: 1,
      title: "Code",
      description: "1",
    },
  ];

  const iframeRef = useRef();

  useEffect(() => {
    Prism.highlightAll(); //코드박스 생성

    // iframe 생성
    // iframe의 document에 접근하여 HTML, CSS, JS를 넣습니다.
    const encodeHTML = (str) => {
      if (str !== undefined && str !== null && str !== "") {
        str = String(str);

        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
        var element = document.createElement("div");
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = "";
      }
      return str;
    };

    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      iframeDocument.open();
      iframeDocument.write(componentsHtml); //html
      iframeDocument.close();

      //reset css
      const styleElement = iframeDocument.createElement("style");
      styleElement.innerHTML = resetCss + componentsCss;
      iframeDocument.head.appendChild(styleElement);

      const scriptElement = iframeDocument.createElement("script");
      if (props.contentsCssFile && props.contentsCssFile.length !== 0) {
        //css 파일 첨부되어있을때
        props.contentsCssFile.forEach((e) => {
          const link = iframeDocument.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = "/" + e;
          iframeDocument.head.appendChild(link);
        });
      }
      if (props.contentsJsFile && props.contentsJsFile.length !== 0) {
        //js 파일 첨부되어있을때
        props.contentsJsFile.forEach((e) => {
          const script = iframeDocument.createElement("script");
          script.src = "/" + e;
          iframeDocument.head.appendChild(script);
        });
      }
      //style css
      const styleElement2 = iframeDocument.createElement("style");
      styleElement2.innerHTML = componentsCss;
      iframeDocument.head.appendChild(styleElement2);

      setTimeout(() => {
        scriptElement.innerHTML = encodeHTML(componentsJs); //js
        iframeDocument.body.appendChild(scriptElement);
      }, 100);
    }
  }, [index]);
  return (
    <>
      <TabWrap>
        {data.map((item, innerIndex) => (
          <Tab
            href="#"
            key={innerIndex}
            style={{
              color: index === item.id ? "var(--black)" : "var(--gray)",
              borderBottom:
                index === item.id
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </Tab>
        ))}
      </TabWrap>
      {data
        .filter((item) => index === item.id)
        .map((item, innerIndex) =>
          item.id === 0 ? (
            <HtmlWrap key={innerIndex} className="components-html-wrap">
              <HtmlInner ref={iframeRef} title="example-iframe"></HtmlInner>
            </HtmlWrap>
          ) : (
            <div>
              {props.contentsDownload &&
                props.contentsDownload.map((item, index) => (
                  <DownBtn key={index} href={item.link} download>
                    {item.name} 다운로드
                  </DownBtn>
                ))}
              <LangTitle>HTML</LangTitle>
              <div className="Code">
                <pre className="line-numbers">
                  <code className={`language-html`}>{componentsHtml}</code>
                </pre>
              </div>
              {componentsCss && (
                <>
                  <LangTitle>CSS</LangTitle>
                  <div className="Code">
                    <pre className="line-numbers">
                      <code className={`language-css`}>{componentsCss}</code>
                    </pre>
                  </div>
                </>
              )}

              {componentsJs && (
                <>
                  <LangTitle>Javascript</LangTitle>
                  <div className="Code">
                    <pre className="line-numbers">
                      {/* <code className={`language-javascript`} dangerouslySetInnerHTML={{ __html: componentsJs }}></code> */}
                      <code className={`language-javascript`}>
                        {componentsJs}
                      </code>
                    </pre>
                  </div>
                </>
              )}
            </div>
          )
        )}
    </>
  );
}
