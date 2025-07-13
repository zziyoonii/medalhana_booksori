import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: transparent;
  padding: 12px 20px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  /* 데스크톱: 왼쪽 정렬 */
  justify-content: flex-start;
  
  /* 모바일: 중앙 정렬 */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: auto;
  transition: all 0.3s ease;
  
  /* 데스크톱: 작은 크기로 왼쪽 상단 */
  width: 120px;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    width: 100px;
  }
  
  /* 모바일: 중간 크기로 중앙 */
  @media (max-width: 768px) {
    width: 140px;
  }
  
  /* 작은 모바일 */
  @media (max-width: 480px) {
    width: 120px;
  }
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo 
          src="/img/booksori_logo.png" 
          alt="북소리 로고" 
        />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 