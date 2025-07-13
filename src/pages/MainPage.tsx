import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BookSearchSection from '../components/BookSearchSection';
import ReadingGroupSection from '../components/ReadingGroupSection';
import PromotionBanner from '../components/PromotionBanner';
import PopularBooksSection from '../components/PopularBooksSection';

// Library 인터페이스 제거 (사용하지 않음)

const PageContainer = styled.div`
  min-height: 100vh;
  font-size: 16px;
  background: var(--background-color);
  color: #333;
  
  /* 시니어 친화적 기본 설정 */
  line-height: 1.6;
  
  * {
    font-size: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.4;
  }
  
  button {
    font-size: 16px;
    min-height: 44px; /* 터치하기 쉬운 최소 크기 */
  }
  
  input {
    font-size: 16px;
    min-height: 44px;
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const Section = styled.div`
  background: var(--white);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 6px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 12px 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 8px 0;
  }
`;

const MainPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleBookClick = (title: string) => {
    setSearchQuery(title);
    // 페이지 최상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalSearchComplete = () => {
    setSearchQuery('');
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        
        <Section>
          <SectionTitle>📚 원하는 책을 검색해보세요!</SectionTitle>
          <BookSearchSection 
            externalSearchQuery={searchQuery}
            onExternalSearchComplete={handleExternalSearchComplete}
            selectedRegion={selectedRegion}
            onRegionUpdate={setSelectedRegion}
          />
        </Section>
        
        <Section>
          <SectionTitle>🗺️ 우리 동네 도서관 대출 현황이 한눈에!</SectionTitle>
          <PopularBooksSection 
            onBookClick={handleBookClick}
            selectedRegion={selectedRegion}
          />
        </Section>
        
        <Section>
          <SectionTitle>🤝 읽고 싶은 책이 있다면, 함께 읽을 이웃도 찾아보세요</SectionTitle>
          <ReadingGroupSection 
            libraries={[]}
            selectedRegion={selectedRegion}
          />
        </Section>
        
        <PromotionBanner />
      </ContentContainer>
    </PageContainer>
  );
};

export default MainPage; 