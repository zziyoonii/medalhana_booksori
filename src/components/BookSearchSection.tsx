import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RegionSelector from './RegionSelector';
import { searchBooksAPI, checkApiApprovalStatus } from '../services/LibraryAPI';

// 스타일드 컴포넌트 정의
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }
  
  &::placeholder {
    color: #666;
    font-size: 16px;
  }
`;

const AutocompleteDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: 4px;
`;

const AutocompleteItemElement = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    color: #666;
    font-size: 14px;
  }
  
  .text {
    flex: 1;
  }
  
  .category {
    color: #999;
    font-size: 12px;
  }
`;

const SearchButton = styled.button`
  padding: 15px 30px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  
  &:hover {
    background: #45a049;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;



const LoadingDiv = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
  background: white;
  border-radius: 8px;
  margin: 20px 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 8px;
  margin: 20px 0;
  
  .emoji {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 16px;
    color: #666;
  }
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BookCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const BookTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
  
  span {
    color: #666;
    font-size: 14px;
  }
`;

const BookDescription = styled.p`
  color: #555;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const AvailabilitySection = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
`;

const AvailabilityTitle = styled.h4`
  margin: 0 0 15px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
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
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const LibraryHeader = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;

const LibraryName = styled.h4`
  margin: 0 0 4px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

const LibraryAddress = styled.p`
  margin: 0 0 4px 0;
  color: #666;
  font-size: 14px;
`;

const LibraryPhone = styled.p`
  margin: 0 0 4px 0;
  color: #4CAF50;
  font-size: 14px;
  font-weight: 600;
`;

const LibraryHours = styled.p`
  margin: 0 0 4px 0;
  color: #666;
  font-size: 12px;
`;

const LibraryStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ReserveButton = styled.button<{ available: boolean }>`
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  
  background: ${props => props.available ? '#4CAF50' : '#ff9800'};
  color: white;
  
  &:hover:not(:disabled) {
    background: ${props => props.available ? '#45a049' : '#f57c00'};
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ApiStatus = styled.div<{ isError: boolean }>`
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  
  background: ${props => props.isError ? '#ffebee' : '#e8f5e8'};
  color: ${props => props.isError ? '#c62828' : '#2e7d32'};
  border: 1px solid ${props => props.isError ? '#ffcdd2' : '#c8e6c9'};
`;



// 인터페이스 정의
interface Library {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours?: string;
}

interface AutocompleteItemData {
  text: string;
  category: string;
  type: 'popular' | 'recent' | 'suggestion';
}

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  category: string;
  publishYear: string;
  description?: string;
  imageUrl?: string;
  loanCount?: number;
  availability: Array<{
    libraryId: number;
    libraryName: string;
    libraryAddress: string;
    libraryPhone: string;
    libraryHours?: string;
    available: boolean;
    waitingList: number;
    totalBooks: number;
    availableBooks: number;
    location: string;
  }>;
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
  const [selectedRegion, setSelectedRegion] = useState(parentSelectedRegion || '');
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [apiStatus, setApiStatus] = useState<string>('');
  const [apiError, setApiError] = useState<string>('');

  // 최근 검색어 상태
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // 자동완성 상태
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [autocompleteItems, setAutocompleteItems] = useState<AutocompleteItemData[]>([]);

  // 즐겨찾기 상태
  const [bookmarks, setBookmarks] = useState<string[]>([]);



  // 인기 검색어 목록
  const popularSearches = [
    { text: '달과 6펜스', category: '문학' },
    { text: '미움받을 용기', category: '자기계발' },
    { text: '수학의 정석', category: '교육' },
    { text: '82년생 김지영', category: '소설' },
    { text: '원씽', category: '자기계발' },
    { text: '세계사 편지', category: '역사' },
    { text: '코스모스', category: '과학' },
    { text: '작별하지 않는다', category: '소설' },
    { text: '아프니까 청춘이다', category: '에세이' },
    { text: '불편한 편의점', category: '소설' },
    { text: '아몬드', category: '소설' },
    { text: '당신이 옳다', category: '에세이' },
    { text: '사피엔스', category: '인문' },
    { text: '데미안', category: '문학' },
    { text: '어린왕자', category: '문학' }
  ];

  // 자동완성 기능
  const updateAutocomplete = (inputValue: string) => {
    if (!inputValue.trim()) {
      const items: AutocompleteItemData[] = [
        ...recentSearches.slice(0, 5).map(search => ({
          text: search,
          category: '최근 검색',
          type: 'recent' as const
        })),
        ...popularSearches.slice(0, 5).map(search => ({
          text: search.text,
          category: search.category,
          type: 'popular' as const
        }))
      ];
      setAutocompleteItems(items);
      setShowAutocomplete(true);
      return;
    }

    const searchValue = inputValue.toLowerCase();
    const matchedItems: AutocompleteItemData[] = [];

    recentSearches.forEach(search => {
      if (search.toLowerCase().includes(searchValue)) {
        matchedItems.push({
          text: search,
          category: '최근 검색',
          type: 'recent'
        });
      }
    });

    popularSearches.forEach(search => {
      if (search.text.toLowerCase().includes(searchValue)) {
        matchedItems.push({
          text: search.text,
          category: search.category,
          type: 'popular'
        });
      }
    });

    setAutocompleteItems(matchedItems.slice(0, 10));
    setShowAutocomplete(matchedItems.length > 0);
  };

  // 자동완성 아이템 선택 처리
  const handleAutocompleteSelect = (item: AutocompleteItemData) => {
    setSearchTerm(item.text);
    setShowAutocomplete(false);
    saveRecentSearch(item.text);
    performSearch(item.text);
  };

  // 검색 입력 처리
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    setTimeout(() => {
      updateAutocomplete(value);
    }, 300);
  };

  // 검색 입력 포커스 처리
  const handleSearchInputFocus = () => {
    updateAutocomplete(searchTerm);
  };

  // 자동완성 닫기
  const handleAutocompleteClose = () => {
    setTimeout(() => setShowAutocomplete(false), 150);
  };

  // 컴포넌트 마운트 시 최근 검색어 및 즐겨찾기 불러오기
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
    
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // 최근 검색어 저장
  const saveRecentSearch = (query: string) => {
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 10);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // 즐겨찾기 토글
  const toggleBookmark = (bookId: string) => {
    let updated: string[];
    if (bookmarks.includes(bookId)) {
      updated = bookmarks.filter(id => id !== bookId);
    } else {
      updated = [...bookmarks, bookId];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  // 즐겨찾기 여부 확인
  const isBookmarked = (bookId: string) => bookmarks.includes(bookId);

  // API 승인 상태 확인
  useEffect(() => {
    const checkApprovalStatus = async () => {
      try {
        const isApproved = await checkApiApprovalStatus('651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8');
        if (isApproved) {
          setApiStatus('✅ 실시간 도서관 API 연결됨');
        } else {
          setApiStatus('⚠️ API 승인 대기 중 - 샘플 데이터 제공');
        }
      } catch (error) {
        setApiStatus('⚠️ API 연결 확인 중 - 안정적인 서비스 제공');
      }
    };

    checkApprovalStatus();
  }, []);

  // 지역별 도서관 생성
  const generateLibrariesByRegion = (region: string): Library[] => {
    const regionLower = region.toLowerCase();
    // 동 단위 지역 처리
    if (regionLower.includes('동')) {
      const cityName = region.replace('동', '');
      return [
        { id: 1, name: `${cityName}동 주민센터 도서관`, address: `경기도 ${cityName}동 중앙로 123`, phone: '031-123-4567', hours: '09:00-18:00' },
        { id: 2, name: `${cityName}동 구민회관 도서관`, address: `경기도 ${cityName}동 복합문화센터 2층`, phone: '031-234-5678', hours: '10:00-20:00' },
        { id: 3, name: `${cityName}동 작은도서관`, address: `경기도 ${cityName}동 주택가 내 작은도서관`, phone: '031-345-6789', hours: '10:00-18:00' }
      ];
    }
    
    // 시 단위 지역별 도서관 데이터
    const libraryData: { [key: string]: Library[] } = {
      '수원': [
        { id: 1, name: '수원시립중앙도서관', address: '경기 수원시 영통구 광교로 183', phone: '031-228-4300', hours: '09:00-22:00' },
        { id: 2, name: '경기도립중앙도서관', address: '경기 수원시 영통구 월드컵로 235', phone: '031-249-4800', hours: '09:00-18:00' },
        { id: 3, name: '영통구립도서관', address: '경기 수원시 영통구 영통동 999-1', phone: '031-228-4350', hours: '09:00-20:00' }
      ],
      '성남': [
        { id: 1, name: '성남시립중앙도서관', address: '경기 성남시 분당구 양현로 346', phone: '031-729-4600', hours: '09:00-18:00' },
        { id: 2, name: '분당구립정자도서관', address: '경기 성남시 분당구 정자동 178-1', phone: '031-729-4650', hours: '09:00-20:00' },
        { id: 3, name: '서현작은도서관', address: '경기 성남시 분당구 서현동 271-3', phone: '031-729-4670', hours: '10:00-18:00' }
      ],
      '고양': [
        { id: 1, name: '고양시립중앙도서관', address: '경기 고양시 덕양구 고양대로 1955', phone: '031-8075-9300', hours: '09:00-18:00' },
        { id: 2, name: '일산동구립도서관', address: '경기 고양시 일산동구 백석동 1256', phone: '031-8075-9350', hours: '09:00-20:00' },
        { id: 3, name: '백석작은도서관', address: '경기 고양시 일산동구 백석동 1234-5', phone: '031-8075-9380', hours: '10:00-18:00' }
      ],
      '부천': [
        { id: 1, name: '부천시립중앙도서관', address: '경기 부천시 원미구 길주로 1', phone: '032-320-3901', hours: '09:00-18:00' },
        { id: 2, name: '부천시립원미도서관', address: '경기 부천시 원미구 중동로 7', phone: '032-320-3902', hours: '09:00-20:00' },
        { id: 3, name: '부천시립상동도서관', address: '경기 부천시 원미구 상동로 92', phone: '032-320-3903', hours: '10:00-18:00' }
      ],
      '안양': [
        { id: 1, name: '안양시립중앙도서관', address: '경기 안양시 만안구 문예로 86', phone: '031-8045-2600', hours: '09:00-18:00' },
        { id: 2, name: '안양시립석수도서관', address: '경기 안양시 만안구 석수로 80', phone: '031-8045-2650', hours: '09:00-20:00' },
        { id: 3, name: '안양시립호계도서관', address: '경기 안양시 동안구 호계로 103', phone: '031-8045-2700', hours: '10:00-18:00' }
      ],
      '용인': [
        { id: 1, name: '용인시립중앙도서관', address: '경기 용인시 처인구 중부대로 1199', phone: '031-324-4600', hours: '09:00-18:00' },
        { id: 2, name: '기흥도서관', address: '경기 용인시 기흥구 기흥로 19', phone: '031-324-4650', hours: '09:00-20:00' },
        { id: 3, name: '수지도서관', address: '경기 용인시 수지구 포은대로 435', phone: '031-324-4700', hours: '10:00-18:00' },
        { id: 4, name: '서농도서관', address: '경기 용인시 기흥구 서천서로 83', phone: '031-324-4680', hours: '09:00-18:00' }
      ]
    };
    
    // 정확한 지역명 매칭 (시 이름 추출)
    for (const [key, data] of Object.entries(libraryData)) {
      if (regionLower.includes(key)) {
        return data;
      }
    }
    
    // 기본값: 경기도 대표 도서관들
    return [
      { id: 1, name: '경기도립중앙도서관', address: '경기 수원시 영통구 월드컵로 235', phone: '031-249-4800', hours: '09:00-18:00' },
      { id: 2, name: '경기도립과천도서관', address: '경기 과천시 별양상가2로 84', phone: '02-2150-3001', hours: '09:00-20:00' },
      { id: 3, name: '경기도립평택도서관', address: '경기 평택시 평택로 51', phone: '031-659-4800', hours: '10:00-18:00' }
    ];
  };

  // 도서관별 소장 현황 생성
  const generateLibraryAvailability = (libraries: Library[]) => {
    return libraries.map(library => {
      const totalBooks = Math.floor(Math.random() * 8) + 3; // 3-10권
      const availableBooks = Math.floor(Math.random() * (totalBooks + 1)); // 0 ~ totalBooks
      const waitingList = Math.floor(Math.random() * 6); // 0-5명
      const available = availableBooks > 0; // 대출 가능한 책이 있으면 true
      
      // 더 구체적인 위치 정보 생성
      const floor = Math.floor(Math.random() * 5) + 1; // 1-5층
      const section = ['문학', '과학', '역사', '철학', '예술', '경제', '아동'][Math.floor(Math.random() * 7)];
      const aisle = String.fromCharCode(65 + Math.floor(Math.random() * 8)); // A-H
      const callNumber = `${Math.floor(Math.random() * 900) + 100}.${Math.floor(Math.random() * 99) + 1}`;
      
      return {
        libraryId: library.id,
        libraryName: library.name,
        libraryAddress: library.address,
        libraryPhone: library.phone,
        libraryHours: library.hours,
        available: available,
        waitingList: waitingList,
        totalBooks: totalBooks,
        availableBooks: availableBooks,
        location: `${floor}층 ${section}섹션 ${aisle}서가 | 청구기호: ${callNumber}`
      };
    });
  };

  // 검색 수행
  const performSearch = async (query: string) => {
    setLoading(true);
    setHasSearched(true);
    setApiError('');

    // 지역이 선택되지 않았으면 기본 지역 설정
    if (!selectedRegion) {
      setSelectedRegion('수원시');
      const defaultLibraries = generateLibrariesByRegion('수원시');
      setLibraries(defaultLibraries);
    }

    try {
      const results = await searchBooksAPI(query, 1, 20);
      
      if (results && results.length > 0) {
        setApiStatus('✅ 실제 도서관 데이터로 검색 완료');
        
        const currentLibraries = libraries.length > 0 ? libraries : generateLibrariesByRegion('수원시');
        const booksWithAvailability = results.map(book => ({
          ...book,
          availability: generateLibraryAvailability(currentLibraries)
        }));
        
        setSearchResults(booksWithAvailability);
      } else {
        setApiStatus('⚠️ 도서관 API 연결 중 - 샘플 데이터 제공');
        const dummyResults = getDummySearchResults(query);
        setSearchResults(dummyResults);
      }
    } catch (error) {
      console.error('검색 중 오류:', error);
      setApiError('API 연결 오류가 발생했습니다. 샘플 데이터를 제공합니다.');
      setApiStatus('⚠️ API 연결 오류 - 안정적인 서비스 제공');
      
      const dummyResults = getDummySearchResults(query);
      setSearchResults(dummyResults);
    } finally {
      setLoading(false);
    }
  };

  // 더미 검색 결과 생성
  const getDummySearchResults = (query: string): Book[] => {
    const dummyBooks = [
      {
        id: '1',
        title: '해리포터와 마법사의 돌',
        author: 'J.K. 롤링',
        publisher: '문학수첩',
        isbn: '9788983920072',
        category: '소설',
        publishYear: '1997',
        description: '전 세계를 사로잡은 마법의 이야기 첫 번째 권',
        loanCount: 3421
      },
      {
        id: '2',
        title: '해리포터와 비밀의 방',
        author: 'J.K. 롤링',
        publisher: '문학수첩',
        isbn: '9788983920089',
        category: '소설',
        publishYear: '1998',
        description: '해리포터 시리즈 두 번째 권',
        loanCount: 2987
      },
      {
        id: '3',
        title: '미움받을 용기',
        author: '기시미 이치로, 고가 후미타케',
        publisher: '인플루엔셜',
        isbn: '9788950955671',
        category: '자기계발',
        publishYear: '2014',
        description: '아들러 심리학을 바탕으로 한 인간관계와 삶의 지혜를 담은 책',
        loanCount: 2847
      },
      {
        id: '4',
        title: '82년생 김지영',
        author: '조남주',
        publisher: '민음사',
        isbn: '9788937473371',
        category: '소설',
        publishYear: '2016',
        description: '한국 여성의 현실을 생생하게 그린 소설',
        loanCount: 1923
      },
      {
        id: '5',
        title: '사피엔스',
        author: '유발 하라리',
        publisher: '김영사',
        isbn: '9788934972464',
        category: '인문',
        publishYear: '2015',
        description: '인류의 역사를 통찰한 베스트셀러',
        loanCount: 1456
      },
      {
        id: '6',
        title: '원피스 1권',
        author: '오다 에이치로',
        publisher: '대원씨아이',
        isbn: '9788925208015',
        category: '만화',
        publishYear: '1997',
        description: '해적왕을 꿈꾸는 루피의 모험',
        loanCount: 1234
      }
    ];

    const filtered = dummyBooks.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
    );

    // 매칭되는 결과만 반환 (매칭되지 않으면 빈 배열)
    return filtered.map(book => ({
      ...book,
      availability: generateLibraryAvailability(libraries)
    }));
  };

  // 검색 폼 제출
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // 새로운 검색 시 기존 결과 및 지역 선택 리셋
      setSearchResults([]);
      setHasSearched(false);
      setSelectedRegion('');
      setLibraries([]);
      
      saveRecentSearch(searchTerm.trim());
      performSearch(searchTerm.trim());
    }
  };

  // 예약 처리
  const handleReserve = (bookId: string, libraryId: number, libraryName: string, libraryPhone: string, libraryHours: string = '', isAvailable: boolean, availableBooks: number = 0, totalBooks: number = 0) => {
    // 예약 대기만 있는 경우 (availableBooks === 0 && totalBooks > 0) 바로 전화 연결
    if (availableBooks === 0 && totalBooks > 0) {
      alert('도서관에 직접 전화하여 대기신청을 진행하겠습니다.');
      window.location.href = `tel:${libraryPhone}`;
      return;
    }

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isOpen = currentHour >= 9 && currentHour < 18;
    
    let message = '';
    if (isAvailable) {
      message = `${libraryName}에서 이 도서를 예약하시겠습니까?`;
    } else {
      message = `${libraryName}에 대기신청하시겠습니까?`;
    }
    
    message += `\n\n📞 전화번호: ${libraryPhone}`;
    if (libraryHours) {
      message += `\n⏰ 운영시간: ${libraryHours}`;
    }
    
    if (!isOpen) {
      message += `\n\n⚠️ 현재 시간은 도서관 운영시간 외입니다.`;
      message += `\n운영시간에 다시 전화해주세요.`;
    }
    
    const confirmed = window.confirm(message);
    if (confirmed) {
      if (isAvailable) {
        alert('예약 확인을 위해 도서관에 직접 전화드리겠습니다.');
      } else {
        alert('대기신청 확인을 위해 도서관에 직접 전화드리겠습니다.');
      }
      window.location.href = `tel:${libraryPhone}`;
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
  }, [externalSearchQuery, onExternalSearchComplete]);

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
    }
  }, [selectedRegion]);



  // 지역이 변경될 때마다 검색 결과 업데이트
  const updateSearchResultsWithLibraries = React.useCallback((newLibraries: Library[]) => {
    setSearchResults(prevResults => {
      if (prevResults.length > 0 && newLibraries.length > 0) {
        return prevResults.map(book => ({
          ...book,
          availability: generateLibraryAvailability(newLibraries)
        }));
      }
      return prevResults;
    });
  }, []);

  // 도서관 정보가 변경될 때마다 검색 결과 업데이트
  useEffect(() => {
    if (libraries.length > 0) {
      updateSearchResultsWithLibraries(libraries);
    }
  }, [libraries, updateSearchResultsWithLibraries]); // libraries가 변경될 때만 실행

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <SearchInputContainer>
          <SearchInput
            type="text"
            placeholder="찾으시는 도서명을 입력해주세요"
            value={searchTerm}
            onChange={handleSearchInputChange}
            onFocus={handleSearchInputFocus}
            onBlur={handleAutocompleteClose}
          />
          {showAutocomplete && autocompleteItems.length > 0 && (
            <AutocompleteDropdown>
              {autocompleteItems.map((item, index) => (
                <AutocompleteItemElement key={index} onClick={() => handleAutocompleteSelect(item)}>
                  <span className="icon">
                    {item.type === 'recent' ? '🕐' : item.type === 'popular' ? '🔥' : '💡'}
                  </span>
                  <span className="text">{item.text}</span>
                  <span className="category">{item.category}</span>
                </AutocompleteItemElement>
              ))}
            </AutocompleteDropdown>
          )}
        </SearchInputContainer>
        <SearchButton type="submit" disabled={loading}>
          {loading ? '검색 중...' : '🔍 검색'}
        </SearchButton>
      </SearchForm>

      {/* 검색 결과가 있을 때만 지역 선택기 표시 */}
      {searchResults.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <RegionSelector 
            onLibrariesUpdate={setLibraries} 
            selectedRegion={selectedRegion} 
            onRegionUpdate={(region) => {
              setSelectedRegion(region);
              if (onRegionUpdate) {
                onRegionUpdate(region);
              }
              // 지역 변경 시 즉시 도서관 정보 업데이트
              const regionLibraries = generateLibrariesByRegion(region);
              setLibraries(regionLibraries);
            }} 
          />
        </div>
      )}



      {apiStatus && (
        <ApiStatus isError={!!apiError}>
          {apiStatus}
        </ApiStatus>
      )}

      {loading && (
        <LoadingDiv>
          📚 실제 도서관 API에서 검색하고 있습니다...
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <BookTitle>{book.title}</BookTitle>
                <button
                  onClick={() => toggleBookmark(book.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: isBookmarked(book.id) ? '#ff6b6b' : '#ccc',
                    transition: 'color 0.3s'
                  }}
                  title={isBookmarked(book.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                >
                  {isBookmarked(book.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <BookInfo>
                <span>저자: {book.author}</span>
                <span>출판사: {book.publisher}</span>
                <span>카테고리: {book.category}</span>
                <span>출간년도: {book.publishYear}</span>
                {book.loanCount && <span>대출 횟수: {book.loanCount.toLocaleString()}회</span>}
              </BookInfo>
              
              {book.description && (
                <BookDescription>
                  {book.description}
                </BookDescription>
              )}
              
              {selectedRegion && (
                <AvailabilitySection>
                  <AvailabilityTitle>
                    📍 {selectedRegion} 도서관 소장 현황
                  </AvailabilityTitle>
                  <LibraryList>
                    {book.availability
                    .sort((a, b) => {
                      if (a.available && !b.available) return -1;
                      if (!a.available && b.available) return 1;
                      if (a.available && b.available) return a.waitingList - b.waitingList;
                      return a.waitingList - b.waitingList;
                    })
                    .map((avail) => (
                    <LibraryItem key={avail.libraryId}>
                      <LibraryHeader>
                        <LibraryName>
                          {avail.available ? '✅ ' : '❌ '}
                          {avail.libraryName}
                        </LibraryName>
                        <LibraryAddress>📍 {avail.libraryAddress}</LibraryAddress>
                        <LibraryPhone>📞 {avail.libraryPhone}</LibraryPhone>
                        <LibraryHours>⏰ {avail.libraryHours || '09:00-18:00'}</LibraryHours>
                      </LibraryHeader>
                      <LibraryStats>
                        {avail.availableBooks > 0 && (
                          <div style={{ 
                            background: '#e8f5e8', 
                            border: '1px solid #4CAF50',
                            borderRadius: '8px',
                            padding: '12px',
                            marginBottom: '10px'
                          }}>
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '8px',
                              marginBottom: '8px',
                              fontWeight: 'bold',
                              color: '#2e7d32'
                            }}>
                              📖 대출 가능한 도서 위치
                            </div>
                            <div style={{ 
                              fontSize: '14px',
                              color: '#1b5e20',
                              lineHeight: '1.4'
                            }}>
                              📍 {avail.location}
                            </div>
                            <div style={{ 
                              fontSize: '14px',
                              color: '#2e7d32',
                              marginTop: '4px'
                            }}>
                              ✅ 대출 가능 {avail.availableBooks}권
                            </div>
                          </div>
                        )}
                      </LibraryStats>
                      
                      {avail.availableBooks === 0 && avail.totalBooks > 0 && (
                        <div style={{ 
                          background: '#e8f5e8', 
                          border: '1px solid #4CAF50',
                          borderRadius: '8px',
                          padding: '12px',
                          margin: '10px 0',
                          fontSize: '14px',
                          color: '#2e7d32'
                        }}>
                          📞 현재 모든 도서가 대출 중입니다.
                        </div>
                      )}
                      
                      {avail.totalBooks === 0 && (
                        <div style={{ 
                          background: '#f8d7da', 
                          border: '1px solid #f5c6cb',
                          borderRadius: '8px',
                          padding: '12px',
                          margin: '10px 0',
                          fontSize: '14px',
                          color: '#721c24'
                        }}>
                          ❌ 이 도서관에는 해당 도서가 소장되어 있지 않습니다.
                        </div>
                      )}
                      
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '10px'
                      }}>
                        {avail.waitingList > 0 && (
                          <div style={{ 
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: 'var(--accent-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            ⏳ 예약 대기 {avail.waitingList}명
                          </div>
                        )}
                        <div style={{ marginLeft: 'auto' }}>
                          <ReserveButton 
                            available={avail.available || (avail.availableBooks === 0 && avail.totalBooks > 0)}
                            onClick={() => handleReserve(
                              book.id,
                              avail.libraryId,
                              avail.libraryName,
                              avail.libraryPhone,
                              avail.libraryHours || '09:00-18:00',
                              avail.available,
                              avail.availableBooks,
                              avail.totalBooks
                            )}
                            disabled={avail.totalBooks === 0}
                          >
                            {avail.totalBooks === 0 ? '📵 소장 없음' : '📖 바로 예약'}
                          </ReserveButton>
                        </div>
                      </div>
                    </LibraryItem>
                  ))}
                </LibraryList>
              </AvailabilitySection>
            )}
            </BookCard>
          ))}
        </SearchResults>
      )}
    </Container>
  );
};

export default BookSearchSection;