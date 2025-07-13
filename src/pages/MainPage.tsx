import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BookSearchSection from '../components/BookSearchSection';
import ReadingGroupSection from '../components/ReadingGroupSection';
import PromotionBanner from '../components/PromotionBanner';
import PopularBooksSection from '../components/PopularBooksSection';

interface Library {
  id: number;
  name: string;
  address: string;
  distance: number;
  phone: string;
  hours: string;
  status: string;
  type?: string;
}

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
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
  const [libraries, setLibraries] = useState<Library[]>([]);
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
            libraries={libraries}
            selectedRegion={selectedRegion}
          />
        </Section>
        
        <PromotionBanner />
      </ContentContainer>
    </PageContainer>
  );
};

export default MainPage; 