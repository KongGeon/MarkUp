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
  --backgroun: #F5F5F6;
  --footer-bg: #191919;
  --footer-text: #fff;
}
body {
  /* font-family: "Noto Sans KR", "Helvetica Neue", Helvetica, Arial, sans-serif; */
  font-family: "Pretendard", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--black);
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
              <LangTitle>CSS</LangTitle>
              <div className="Code">
                <pre className="line-numbers">
                  <code className={`language-css`}>{componentsCss}</code>
                </pre>
              </div>
              <LangTitle>Javascript</LangTitle>
              <div className="Code">
                <pre className="line-numbers">
                  {/* <code className={`language-javascript`} dangerouslySetInnerHTML={{ __html: componentsJs }}></code> */}
                  <code className={`language-javascript`}>{componentsJs}</code>
                </pre>
              </div>
            </div>
          )
        )}
    </>
  );
}
