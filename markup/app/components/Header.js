"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  const Container = styled.div`
    width: 100%;
    max-width: 1532px;
    margin: 0 auto;
  `;
  const Row = styled.div`
    padding: 0 16px;
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
  `;
  const DiviceBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: calc(100% - 70px);
  `;
  const Header = styled.header`
    border-bottom: 1px solid var(--boarder);
  `;
  return (
    <Header>
      <Container>
        <Row>
          <Link href="/">
            <img src="/img_logo.svg" alt="마크업로고" title="마크업로고" />
          </Link>
          <DiviceBtn>
            <button>
              <img src="/icon_mobile.svg" alt="모바일사이즈" />
            </button>
            <button>
              <img src="/icon_tablet.svg" alt="모바일사이즈" />
            </button>
            <button>
              <img src="/icon_pc.svg" alt="모바일사이즈" />
            </button>
          </DiviceBtn>
        </Row>
      </Container>
    </Header>
  );
}
