import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { fetchPopularBooks, PopularBookData, checkApiConfiguration } from '../services/LibraryAPI';

const PopularBooksContainer = styled.div`
  width: 100%;
`;

const BookTable = styled.div`
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  margin-top: 25px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-top: 20px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    margin-top: 15px;
    border-radius: 8px;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 80px 100px;
  background: var(--primary-color);
  color: white;
  padding: 16px 20px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: 50px 1fr 100px 80px 70px;
    padding: 12px 15px;
    font-size: 14px;
    gap: 8px;
    
    .desktop-only {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 40px 1fr 80px 60px;
    padding: 10px 12px;
    font-size: 13px;
    gap: 6px;
    
    .tablet-hide {
      display: none;
    }
  }
`;

const HeaderCell = styled.div`
  text-align: center;
  
  &:nth-child(2) {
    text-align: left;
  }
`;

const BookRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 80px 100px;
  padding: 16px 20px;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fbff;
    border-left: 4px solid var(--primary-color);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 50px 1fr 100px 80px 70px;
    padding: 12px 15px;
    gap: 8px;
    
    .desktop-only {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 40px 1fr 80px 60px;
    padding: 10px 12px;
    gap: 6px;
    
    .tablet-hide {
      display: none;
    }
  }
`;

const RankCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`;

const BookInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

const BookTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BookAuthor = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const DataCell = styled.div`
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const LoanCountCell = styled(DataCell)`
  font-weight: 600;
  color: var(--primary-color);
`;

const Description = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #7f8c8d;
  font-size: 16px;
`;

const ApiStatus = styled.div<{ isError?: boolean }>`
  font-size: 12px;
  color: ${props => props.isError ? '#dc3545' : '#6c757d'};
  text-align: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  background: ${props => props.isError ? '#f8d7da' : '#f8f9fa'};
  border-radius: 4px;
  border: 1px solid ${props => props.isError ? '#f5c6cb' : '#e9ecef'};
`;

const ClickGuide = styled.p`
  font-size: 14px;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  background: #f0f8f0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e6f3e6;
`;

interface PopularBooksSectionProps {
  onBookClick: (bookData: PopularBookData) => void;
  selectedRegion?: string;
}

const PopularBooksSection: React.FC<PopularBooksSectionProps> = ({ onBookClick, selectedRegion }) => {
  const [popularBooks, setPopularBooks] = useState<PopularBookData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiEnabled, setApiEnabled] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const loadPopularBooks = useCallback(async () => {
    try {
      setIsLoading(true);
      setApiError(null);
      
      const apiConfig = checkApiConfiguration();
      console.log('🔧 API 설정 확인:', apiConfig);
      setApiEnabled(apiConfig);
      
      if (!apiConfig) {
        console.error('❌ API 키가 설정되지 않았습니다.');
        setApiError('API 키가 설정되지 않았습니다.');
        return;
      }
      
      // 이번주(월요일부터 일요일까지) 기준으로 계산
      const today = new Date();
      
      // 이번주 월요일 계산
      const monday = new Date(today);
      const dayOfWeek = today.getDay(); // 0=일요일, 1=월요일, ..., 6=토요일
      const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 월요일까지의 일수
      monday.setDate(today.getDate() - daysToMonday);
      
      // 이번주 일요일 계산 (오늘이 일요일이면 오늘, 아니면 다음 일요일)
      const sunday = new Date(today);
      if (dayOfWeek !== 0) { // 오늘이 일요일이 아니면
        const daysToSunday = 7 - dayOfWeek;
        sunday.setDate(today.getDate() + daysToSunday);
      }
      
      const startDate = monday.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      const endDate = sunday.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      
      console.log(`📅 이번주(${monday.toLocaleDateString()} ~ ${sunday.toLocaleDateString()}) 기준 인기도서 조회: ${startDate} ~ ${endDate}`);
      console.log('🔑 API 키:', process.env.REACT_APP_LIBRARY_API_KEY ? '설정됨' : '설정되지 않음');
      
      const books = await fetchPopularBooks(startDate, endDate);
      console.log('📚 받아온 인기도서:', books);
      setPopularBooks(books.slice(0, 5)); // Top 5만 표시
    } catch (error) {
      console.error('인기 도서 로딩 실패:', error);
      setApiError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPopularBooks();
  }, [loadPopularBooks]);

  return (
    <PopularBooksContainer>
      <Description>
        📊 이번주 대출 인기 순위 TOP 5 (성인 대상)
      </Description>
      
      <ApiStatus isError={!!apiError}>
        {apiError ? (
          apiError.includes('활성화') ? 
          '⚠️ API 키가 아직 활성화되지 않았습니다. 도서관 정보나루에서 승인을 기다려주세요.' :
          apiError.includes('IP 등록') ?
          '⚠️ IP 제한으로 인해 더미 데이터를 표시합니다. (실제 API 사용을 위해 IP 등록이 필요합니다)' :
          `⚠️ API 오류: ${apiError}`
        ) : 
         apiEnabled ? '🔗 실제 도서관 API 연결 준비됨' : '📋 더미 데이터 사용 중 (API 키 설정 필요)'}
      </ApiStatus>
      
      <ClickGuide>
        💡 책 제목을 클릭하면 바로 검색할 수 있어요!
      </ClickGuide>
      
      {isLoading ? (
        <LoadingContainer>
          📚 인기 도서를 불러오는 중...
        </LoadingContainer>
      ) : (
        <BookTable>
          <TableHeader>
            <HeaderCell>순위</HeaderCell>
            <HeaderCell>도서 정보</HeaderCell>
            <HeaderCell className="desktop-only">출판사</HeaderCell>
            <HeaderCell className="tablet-hide">출간년도</HeaderCell>
            <HeaderCell>대출횟수</HeaderCell>
          </TableHeader>
          
          {popularBooks.map((book, index) => (
            <BookRow key={book.id} onClick={() => onBookClick(book)}>
              <RankCell>{index + 1}</RankCell>
              <BookInfoCell>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
              </BookInfoCell>
              <DataCell className="desktop-only">{book.publisher}</DataCell>
              <DataCell className="tablet-hide">{book.publishYear}년</DataCell>
              <LoanCountCell>{(book.loanCount || 0).toLocaleString()}회</LoanCountCell>
            </BookRow>
          ))}
        </BookTable>
      )}
    </PopularBooksContainer>
  );
};

export default PopularBooksSection; 