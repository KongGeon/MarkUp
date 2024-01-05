"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
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

  const Body = styled.div`
    margin-top: 40px;
  `;
  const Title = styled.h2`
    color: var(--black, #181818);
    font-family: Gmarket Sans TTF;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 24px;
  `;

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
    padding: 16px;
    min-height: 500px;
    display: flex;
    align-items: center;
    transition: all 0.7s;
    margin: 0 auto;
    overflow: hidden;
  `;
  const HtmlInner = styled.div`
    width: 100%;
    position: relative;
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
    &:hover{
      background-color: #3559E0;
    }
  `
  const componentsHtml = DOMPurify.sanitize(props.contentsHtml);
  const componentsCss = DOMPurify.sanitize(props.contentsCss);

  const firstJs = props.contentsJs.toString();
  const startIndex = firstJs.indexOf('{') + 1; // '{' 다음 위치부터
  const endIndex = firstJs.lastIndexOf('}'); // '}' 직전까지
  const innerData = firstJs.substring(startIndex, endIndex).trim();
  const componentsJs = DOMPurify.sanitize(innerData);

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
  useEffect(() => {
    Prism.highlightAll();
  }, [index]);

  return (
    <Body>
      <Title>{props.name}</Title>
      <TabWrap>
        {data.map((item) => (
          <Tab
            href="#"
            key={item.id}
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
        .map((item, index) =>
          item.id === 0 ? (
            <HtmlWrap key={index} className="components-html-wrap">
              <HtmlInner
                dangerouslySetInnerHTML={{ __html: componentsHtml }}
              ></HtmlInner>
            </HtmlWrap>
          ) : (
              <div>
                {props.contentsDownload && (
                  props.contentsDownload.map((item, index) => (
                    <DownBtn key={index} href={item.link} download>{item.name} 다운로드</DownBtn>
                  ))
                  
                )} 
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
    </Body>
  );
}
