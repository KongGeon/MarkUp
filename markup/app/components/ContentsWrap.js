"use client";

import Link from "next/link";
import styled from "styled-components";
import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";

export default function ContentsWrap(props){
  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const [thisPage, setThisPage] = useState("1");
      // thisPage의 값이 바뀌면 thisCategory 값이 해당 내용으로 지정
  useEffect(() => {
    setThisPage(props.props.params.id);
    // console.log("현재페이지", props.props.params.id);
  }, [thisPage]); 
    
  const Title = styled.h2`
  color: var(--black, #181818);
  font-family: GmarketSansBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`;
const Body = styled.div`
  margin-top: 40px;
`;
const TabImgWrap = styled.ul`
display: flex;
gap:12px;
margin-bottom: 24px;
`
    
return (
    <Body>

      <TabImgWrap>
        {props.data.map((num, index) => (
          <li key={index} style={{'border': thisPage == index ? '1px solid var(--black)' : '1px solid var(--boarder)' }}>
            <Link href={String(index)}>
              <img src={'/'+num.img} alt={num.title} />
            </Link>
          </li>
        ))}
      </TabImgWrap>
      <Title>{props.data[thisPage].title}</Title>
      <Contents
        contentsHtml={props.data[thisPage].html}
        contentsCss={props.data[thisPage].css}
        contentsJs={props.data[thisPage].js}
        contentsDownload={props.data[thisPage].download}
      ></Contents>
    </Body>
  ); 
}