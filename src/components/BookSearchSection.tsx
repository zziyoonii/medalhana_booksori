import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RegionSelector from './RegionSelector';

// 스타일드 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  background: white;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const SearchButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:hover {
    background: #3a7538;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

const LoadingDiv = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  .emoji {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }
  
  .subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BookCard = styled.div`
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(76, 140, 74, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const BookTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  line-height: 1.4;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BookInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const AvailabilitySection = styled.div`
  margin-top: 16px;
`;

const AvailabilityTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LibraryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LibraryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const LibraryInfo = styled.div`
  flex: 1;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  .name {
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
  }
  
  .address {
    font-size: 13px;
    color: #666;
  }
`;

const StatusButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &.available {
    background: var(--primary-color);
    color: white;
  }
  
  &.unavailable {
    background: var(--accent-color);
    color: white;
  }
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-self: stretch;
  }
`;

// 타입 정의
interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  availability: LibraryAvailability[];
}

interface LibraryAvailability {
  libraryId: number;
  libraryName: string;
  libraryAddress: string;
  libraryPhone: string;
  available: boolean;
  waitingList: number;
}

interface Library {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface BookSearchSectionProps {
  externalSearchQuery?: string;
  onExternalSearchComplete?: () => void;
  selectedRegion?: string;
  onRegionUpdate?: (region: string) => void;
}

const BookSearchSection: React.FC<BookSearchSectionProps> = ({ 
  externalSearchQuery, 
  onExternalSearchComplete,
  selectedRegion: parentSelectedRegion,
  onRegionUpdate 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>(parentSelectedRegion || '');
  const [libraries, setLibraries] = useState<Library[]>([]);

  // 지역별 도서관 데이터 생성
  const generateLibrariesByRegion = (region: string): Library[] => {
    const regionLower = region.toLowerCase();
    
    // 동 단위 입력 처리
    if (regionLower.includes('동')) {
      const cityName = region.replace('동', '');
      return [
        { id: 1, name: `${cityName}동 주민센터 도서관`, address: `경기도 ${cityName}동 중앙로 123`, phone: '031-123-4567' },
        { id: 2, name: `${cityName}동 구민회관 도서관`, address: `경기도 ${cityName}동 복합문화센터 2층`, phone: '031-234-5678' },
        { id: 3, name: `${cityName}동 작은도서관`, address: `경기도 ${cityName}동 주택가 내 작은도서관`, phone: '031-345-6789' }
      ];
    }
    
    // 기존 지역 처리
    if (regionLower.includes('수원')) {
      return [
        { id: 1, name: '수원시립도서관', address: '경기도 수원시 영통구 광교산로 17', phone: '031-228-4311' },
        { id: 2, name: '수원영통도서관', address: '경기도 수원시 영통구 센트럴타운로 22', phone: '031-228-4350' },
        { id: 3, name: '수원망포도서관', address: '경기도 수원시 영통구 망포로 37', phone: '031-228-4360' }
      ];
    } else if (regionLower.includes('성남')) {
      return [
        { id: 1, name: '성남시립도서관', address: '경기도 성남시 수정구 태평로 55', phone: '031-729-4600' },
        { id: 2, name: '성남분당도서관', address: '경기도 성남시 분당구 불정로 90', phone: '031-729-4700' },
        { id: 3, name: '성남수정도서관', address: '경기도 성남시 수정구 수정로 201', phone: '031-729-4800' }
      ];
    } else if (regionLower.includes('안양')) {
      return [
        { id: 1, name: '안양시립도서관', address: '경기도 안양시 만안구 문화로 53', phone: '031-389-0300' },
        { id: 2, name: '안양평촌도서관', address: '경기도 안양시 동안구 평촌대로 389', phone: '031-389-0400' },
        { id: 3, name: '안양석수도서관', address: '경기도 안양시 만안구 석수로 12', phone: '031-389-0500' }
      ];
    } else if (regionLower.includes('서울')) {
      return [
        { id: 1, name: '서울시립중앙도서관', address: '서울시 서초구 남부순환로 2423', phone: '02-2133-0300' },
        { id: 2, name: '강남구립도서관', address: '서울시 강남구 테헤란로 123', phone: '02-2133-0400' },
        { id: 3, name: '마포구립도서관', address: '서울시 마포구 홍익로 45', phone: '02-2133-0500' }
      ];
    } else {
      return [
        { id: 1, name: `${region} 중앙도서관`, address: `${region} 중앙로 123`, phone: '031-123-4567' },
        { id: 2, name: `${region} 시립도서관`, address: `${region} 시청로 456`, phone: '031-234-5678' },
        { id: 3, name: `${region} 구립도서관`, address: `${region} 문화로 789`, phone: '031-345-6789' }
      ];
    }
  };

  // 도서관 가용성 데이터 생성
  const generateLibraryAvailability = (libraryList: Library[]): LibraryAvailability[] => {
    return libraryList.map(lib => ({
      libraryId: lib.id,
      libraryName: lib.name,
      libraryAddress: lib.address,
      libraryPhone: lib.phone,
      available: Math.random() > 0.3,
      waitingList: Math.floor(Math.random() * 5) + 1
    }));
  };

  // 검색 실행
  const performSearch = (query: string) => {
    setLoading(true);
    setHasSearched(true);

    // 키워드에 따른 실제 책 데이터 생성
    const getBooksByKeyword = (keyword: string) => {
      const keywordLower = keyword.toLowerCase();
      
      if (keywordLower.includes('소설') || keywordLower.includes('문학')) {
        return [
          { id: 1, title: '82년생 김지영', author: '조남주', publisher: '민음사' },
          { id: 2, title: '봄날은 간다', author: '김유정', publisher: '문학과지성사' },
          { id: 3, title: '채식주의자', author: '한강', publisher: '창비' }
        ];
      } else if (keywordLower.includes('역사') || keywordLower.includes('한국사')) {
        return [
          { id: 1, title: '한국사 편지', author: '박은봉', publisher: '웅진지식하우스' },
          { id: 2, title: '총, 균, 쇠', author: '재레드 다이아몬드', publisher: '문학사상' },
          { id: 3, title: '조선왕조실록', author: '국사편찬위원회', publisher: '한국학중앙연구원' }
        ];
      } else if (keywordLower.includes('과학') || keywordLower.includes('기술')) {
        return [
          { id: 1, title: '코스모스', author: '칼 세이건', publisher: '사이언스북스' },
          { id: 2, title: '이기적 유전자', author: '리처드 도킨스', publisher: '을유문화사' },
          { id: 3, title: '사피엔스', author: '유발 하라리', publisher: '김영사' }
        ];
      } else {
        return [
          { id: 1, title: `${query}의 이해`, author: '김민수', publisher: '학문사' },
          { id: 2, title: `${query} 완전정복`, author: '이영희', publisher: '교육출판' },
          { id: 3, title: `${query} 입문서`, author: '박철수', publisher: '지식공방' }
        ];
      }
    };

    setTimeout(() => {
      const searchBooks = getBooksByKeyword(query);
      const currentLibraries = libraries.length > 0 ? libraries : generateLibrariesByRegion(selectedRegion || '서울');
      
      const results = searchBooks.map(book => ({
        ...book,
        availability: generateLibraryAvailability(currentLibraries)
      }));
      
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  };

  // 검색 폼 제출
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm.trim());
    }
  };

  // 예약 처리
  const handleReserve = (bookId: number, libraryId: number, libraryName: string, libraryPhone: string, isAvailable: boolean) => {
    if (isAvailable) {
      const confirmed = window.confirm(`${libraryName}에서 예약하시겠습니까?`);
      if (confirmed) {
        alert('예약이 완료되었습니다!');
        window.location.href = `tel:${libraryPhone}`;
      }
    } else {
      const confirmed = window.confirm(`${libraryName}에 대기신청하시겠습니까?`);
      if (confirmed) {
        alert('대기신청이 완료되었습니다!');
        window.location.href = `tel:${libraryPhone}`;
      }
    }
  };

  // 외부 검색어 처리
  useEffect(() => {
    if (externalSearchQuery && externalSearchQuery.trim()) {
      setSearchTerm(externalSearchQuery);
      performSearch(externalSearchQuery);
      if (onExternalSearchComplete) {
        onExternalSearchComplete();
      }
    }
  }, [externalSearchQuery]);

  // 부모에서 전달받은 지역 정보 동기화
  useEffect(() => {
    if (parentSelectedRegion !== undefined) {
      setSelectedRegion(parentSelectedRegion);
    }
  }, [parentSelectedRegion]);

  // 지역 선택 처리
  useEffect(() => {
    if (selectedRegion) {
      const regionLibraries = generateLibrariesByRegion(selectedRegion);
      setLibraries(regionLibraries);
      
      // 검색 결과가 있으면 새로운 지역 도서관으로 업데이트
      if (searchResults.length > 0) {
        const updatedResults = searchResults.map(book => ({
          ...book,
          availability: generateLibraryAvailability(regionLibraries)
        }));
        setSearchResults(updatedResults);
      }
    }
  }, [selectedRegion]);

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="찾으시는 도서명을 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit" disabled={loading}>
          {loading ? '검색 중...' : '🔍 검색'}
        </SearchButton>
      </SearchForm>

      <RegionSelector 
        onLibrariesUpdate={setLibraries} 
        selectedRegion={selectedRegion} 
        onRegionUpdate={(region) => {
          setSelectedRegion(region);
          if (onRegionUpdate) {
            onRegionUpdate(region);
          }
        }} 
      />

      {loading && (
        <LoadingDiv>
          📚 도서를 검색하고 있습니다...
        </LoadingDiv>
      )}

      {!loading && hasSearched && searchResults.length === 0 && (
        <EmptyState>
          <div className="emoji">📖</div>
          <div className="title">검색 결과가 없습니다</div>
          <div className="subtitle">다른 키워드로 검색해보세요</div>
        </EmptyState>
      )}

      {!loading && searchResults.length > 0 && (
        <SearchResults>
          {searchResults.map((book) => (
            <BookCard key={book.id}>
              <BookTitle>{book.title}</BookTitle>
              <BookInfo>
                <span>저자: {book.author}</span>
                <span>출판사: {book.publisher}</span>
              </BookInfo>
              
              <AvailabilitySection>
                <AvailabilityTitle>
                  📍 {selectedRegion || '서울'} 도서관 대출 현황
                </AvailabilityTitle>
                <LibraryList>
                  {book.availability.map((avail) => (
                    <LibraryItem key={avail.libraryId}>
                      <LibraryInfo>
                        <div className="name">{avail.libraryName}</div>
                        <div className="address">{avail.libraryAddress}</div>
                      </LibraryInfo>
                      <StatusButton
                        className={avail.available ? 'available' : 'unavailable'}
                        onClick={() => handleReserve(book.id, avail.libraryId, avail.libraryName, avail.libraryPhone, avail.available)}
                      >
                        {avail.available ? '✓ 예약하기' : `💤 대기신청 (${avail.waitingList}명)`}
                      </StatusButton>
                    </LibraryItem>
                  ))}
                </LibraryList>
              </AvailabilitySection>
            </BookCard>
          ))}
        </SearchResults>
      )}
    </Container>
  );
};

export default BookSearchSection;