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
  grid-template-columns: 60px 1fr 120px 100px 80px;
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
  grid-template-columns: 60px 1fr 120px 100px 80px;
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
  font-weight: 600;
  color: var(--primary-color);
  text-align: center;
  font-size: 18px;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const BookInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BookTitle = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 16px;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BookAuthor = styled.div`
  color: #666;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const DataCell = styled.div`
  text-align: center;
  color: #555;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const LoanCountCell = styled.div`
  text-align: center;
  font-weight: 600;
  color: #e74c3c;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ApiStatus = styled.div<{ isError: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 15px;
  background: ${props => props.isError ? '#fff3cd' : '#d1ecf1'};
  color: ${props => props.isError ? '#856404' : '#0c5460'};
  border: 1px solid ${props => props.isError ? '#ffeaa7' : '#bee5eb'};
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 12px;
  }
`;

const ClickGuide = styled.div`
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 15px;
  border: 1px solid #c3e6c3;
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 16px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 30px 15px;
  }
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
        console.log('⚠️ API 키가 설정되지 않았습니다. 더미 데이터를 로드합니다.');
        setApiError(null);
        // API 키가 없어도 더미 데이터를 표시하기 위해 계속 진행
      }
      
      // 지난주(월요일부터 일요일까지) 기준으로 계산
      const today = new Date();
      
      // 지난주 월요일 계산
      const lastMonday = new Date(today);
      const dayOfWeek = today.getDay(); // 0=일요일, 1=월요일, ..., 6=토요일
      const daysToLastMonday = dayOfWeek === 0 ? 13 : dayOfWeek + 6; // 지난주 월요일까지의 일수
      lastMonday.setDate(today.getDate() - daysToLastMonday);
      
      // 지난주 일요일 계산
      const lastSunday = new Date(lastMonday);
      lastSunday.setDate(lastMonday.getDate() + 6); // 월요일 + 6일 = 일요일
      
      const startDate = lastMonday.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      const endDate = lastSunday.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      
      console.log(`📅 지난주(${lastMonday.toLocaleDateString()} ~ ${lastSunday.toLocaleDateString()}) 기준 인기도서 조회: ${startDate} ~ ${endDate}`);
      console.log('🔑 API 키:', process.env.REACT_APP_LIBRARY_API_KEY ? '설정됨' : '설정되지 않음');
      
      const books = await fetchPopularBooks(startDate, endDate);
      console.log('📚 받아온 인기도서:', books);
      console.log('📚 인기도서 개수:', books.length);
      console.log('📚 인기도서 상세:', JSON.stringify(books, null, 2));
      setPopularBooks(books.slice(0, 5)); // Top 5만 표시
      console.log('📚 설정된 인기도서:', books.slice(0, 5));
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
        📊 지난주 대출 인기 순위 TOP 5 (성인 대상)
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
        <>
          {console.log('🎨 렌더링 - popularBooks:', popularBooks)}
          {console.log('🎨 렌더링 - popularBooks 길이:', popularBooks.length)}
          <BookTable>
            <TableHeader>
              <HeaderCell>순위</HeaderCell>
              <HeaderCell>도서 정보</HeaderCell>
              <HeaderCell className="desktop-only">출판사</HeaderCell>
              <HeaderCell className="tablet-hide">출간년도</HeaderCell>
              <HeaderCell>대출횟수</HeaderCell>
            </TableHeader>
            
            {popularBooks.length > 0 ? (
              popularBooks.map((book, index) => {
                console.log('📖 렌더링 도서:', book);
                return (
                  <BookRow key={book.id || `book-${index}-${book.isbn}`} onClick={() => onBookClick(book)}>
                    <RankCell>{index + 1}</RankCell>
                    <BookInfoCell>
                      <BookTitle>{book.title}</BookTitle>
                      <BookAuthor>{book.author}</BookAuthor>
                    </BookInfoCell>
                    <DataCell className="desktop-only">{book.publisher}</DataCell>
                    <DataCell className="tablet-hide">{book.publishYear}년</DataCell>
                    <LoanCountCell>{(book.loanCount || 0).toLocaleString()}회</LoanCountCell>
                  </BookRow>
                );
              })
            ) : (
              <BookRow key="no-data">
                <div style={{ 
                  gridColumn: '1 / -1', 
                  textAlign: 'center', 
                  padding: '20px',
                  color: '#666'
                }}>
                  📚 인기 도서를 불러올 수 없습니다.
                </div>
              </BookRow>
            )}
          </BookTable>
        </>
      )}
    </PopularBooksContainer>
  );
};

export default PopularBooksSection; 