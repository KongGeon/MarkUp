"use client";

import Link from "next/link";
import styled from "styled-components";
import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";

export default function ContentsWrap(props) {
  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const thisPage = props.props.params.id;
  const Title = styled.h2`
    color: var(--black, #181818);
    font-family: GmarketSansBold;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  `;
  const SubTitle = styled.p`
    color: var(--gray);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 16px;
  `;
  const Body = styled.div`
    margin-top: 40px;
    width: calc(100% - 216px);
  `;
  const TabImgWrap = styled.ul`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    height: 62px;
  `;

  return (
    <Body>
      <TabImgWrap>
        {props.data.map((num, index) => (
          <li
            key={index}
            style={{
              border:
                thisPage == index
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
          >
            <Link href={String(index)}>
              <img src={"/" + num.img} alt={num.title} />
            </Link>
          </li>
        ))}
      </TabImgWrap>
      <Title>{props.data[thisPage].title}</Title>
      {props.data[thisPage].subTitle && (
        <SubTitle>{props.data[thisPage].subTitle}</SubTitle>
      )}
      <Contents
        contentsCssFile={props.data[thisPage].cssFile}
        contentsJsFile={props.data[thisPage].jsFile}
        contentsHtml={props.data[thisPage].html}
        contentsCss={props.data[thisPage].css}
        contentsJs={props.data[thisPage].js}
        contentsDownload={props.data[thisPage].download}
      ></Contents>
    </Body>
  );
}
