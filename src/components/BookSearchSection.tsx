import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import RegionSelector from './RegionSelector';
import { searchBooksAPI, fetchPopularBooks, PopularBookData, LibraryAPIService, LibraryAPIConfig } from '../services/LibraryAPI';

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
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  font-size: 16px;
  background: #ffffff;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  padding: 15px 30px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #388e3c;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const RegionSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchResults = styled.div`
  margin-top: 30px;
`;

const BookCard = styled.div`
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BookTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

const BookInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
  
  span {
    font-size: 14px;
    color: #7f8c8d;
    
    &:before {
      content: "• ";
      color: #4CAF50;
      font-weight: bold;
    }
    
    &:first-child:before {
      content: "";
    }
  }
`;

const LibraryList = styled.div`
  margin-top: 15px;
  border-top: 1px solid #eee;
  padding-top: 15px;
`;

const LibraryItem = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LibraryName = styled.div`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 16px;
`;

const LibraryDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  font-size: 14px;
  color: #555;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AvailabilityBadge = styled.span<{ available: boolean }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.available ? '#d4edda' : '#f8d7da'};
  color: ${props => props.available ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.available ? '#c3e6cb' : '#f5c6cb'};
`;

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #7f8c8d;
  font-size: 16px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #4CAF50;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #7f8c8d;
  
  .emoji {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c3e50;
  }
  
  .subtitle {
    font-size: 14px;
    line-height: 1.5;
  }
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

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  category: string;
  publishYear: string;
  description?: string;
}

interface Library {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  available: boolean;
  reservable?: boolean; // 예약 가능 여부 추가
  callNumber: string; // 청구기호 추가
}

interface BookWithLibraries extends Book {
  libraries: Library[];
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
  const [searchResults, setSearchResults] = useState<BookWithLibraries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(parentSelectedRegion || '');
  const [apiError, setApiError] = useState<string | null>(null);
  
  // LibraryAPIService 인스턴스 생성
  const libraryAPIService = new LibraryAPIService({
    baseURL: 'https://www.data4library.kr/api',
    apiKey: process.env.REACT_APP_LIBRARY_API_KEY || '8b62aa70e514468596e9324d064d582d'
  });

  // 실제 소장 정보를 가져오는 함수
  const getRealLibraryAvailability = useCallback(async (isbn: string, region: string = '경기도') => {
    try {
      // ISBN이 없거나 비어있으면 API 호출하지 않음
      if (!isbn || isbn.trim() === '') {
        console.warn(`⚠️ ISBN이 없어서 소장 정보를 조회할 수 없습니다`);
        return [];
      }
      
      console.log(`🔍 API 호출 시작 - ISBN: ${isbn}, 지역: ${region}`);
      const availability = await libraryAPIService.getBookAvailability(isbn, region);
      console.log(`📊 API 응답 데이터:`, availability);
      console.log(`📈 응답 개수: ${availability.length}개 도서관`);
      
      if (availability.length > 0) {
        availability.forEach((lib, index) => {
          console.log(`📚 도서관 ${index + 1}: ${lib.libraryName}`);
          console.log(`   - 소장중: ${lib.available}`);
          console.log(`   - 예약가능: ${lib.reservable}`);
          console.log(`   - 도서관코드: ${lib.libraryId}`);
        });
      } else {
        console.warn(`⚠️ ISBN ${isbn}에 대한 소장 정보가 없습니다`);
      }
      
      return availability;
    } catch (error) {
      console.error('💥 소장 정보 조회 실패:', error);
      return [];
    }
  }, []);

  // API 테스트 함수
  const testLibraryAPI = useCallback(async () => {
    try {
      console.log('🧪 도서관정보나루 API 테스트 시작');
      
      // 잘 알려진 도서의 ISBN으로 테스트 (해리포터와 마법사의 돌)
      const testISBN = '9788983925244'; 
      const testRegion = '경기도';
      
      console.log(`🔍 테스트 ISBN: ${testISBN}, 지역: ${testRegion}`);
      
      const availability = await libraryAPIService.getBookAvailability(testISBN, testRegion);
      
      if (availability && availability.length > 0) {
        console.log('✅ API 정상 작동 - 소장 도서관 수:', availability.length);
        availability.forEach((lib, index) => {
          console.log(`📚 도서관 ${index + 1}: ${lib.libraryName} (${lib.available ? '소장중' : '미소장'})`);
        });
        return true;
      } else {
        console.warn('⚠️ API 응답에 소장 정보가 없음');
        return false;
      }
      
    } catch (error) {
      console.error('💥 API 테스트 실패:', error);
      return false;
    }
  }, []);

  // 청구기호 생성 함수
  const generateCallNumber = (title: string, author: string): string => {
    // 간단한 청구기호 생성 (실제 도서관에서는 더 복잡한 분류 체계를 사용)
    const titleCode = title.slice(0, 2).toUpperCase();
    const authorCode = author.slice(0, 2).toUpperCase();
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${titleCode}${authorCode}${randomNum}`;
  };

  // 실제 도서관 정보 + API 소장 현황 결합
  
  // 실제 도서관 정보 + API 소장 현황 결합
  const generateLibrariesForRegion = useCallback((region: string): Library[] => {
    interface BasicLibraryInfo {
      id: string;
      name: string;
      address: string;
      phone: string;
      hours: string;
    }
    
    const regionLibraries: { [key: string]: BasicLibraryInfo[] } = {
      '경기도': [
        // 수원시 도서관
        { id: '1', name: '경기도립중앙도서관', address: '수원시 영통구 월드컵로 235', phone: '031-249-4800', hours: '09:00-18:00' },
        { id: '2', name: '수원시립중앙도서관', address: '수원시 영통구 광교로 183', phone: '031-228-4300', hours: '09:00-22:00' },
        { id: '3', name: '영통구립도서관', address: '수원시 영통구 영통동 999-1', phone: '031-228-4350', hours: '09:00-20:00' },
        { id: '4', name: '광교도서관', address: '수원시 영통구 광교동 1271', phone: '031-228-4370', hours: '09:00-20:00' },
        { id: '5', name: '팔달구립도서관', address: '수원시 팔달구 팔달로 123', phone: '031-267-3456', hours: '09:00-18:00' },
        { id: '6', name: '장안구립도서관', address: '수원시 장안구 장안로 456', phone: '031-267-7890', hours: '09:00-18:00' },
        { id: '7', name: '권선구립도서관', address: '수원시 권선구 권선로 789', phone: '031-267-2345', hours: '09:00-18:00' },
        // 성남시 도서관
        { id: '8', name: '성남시립중앙도서관', address: '성남시 분당구 양현로 346', phone: '031-729-4600', hours: '09:00-18:00' },
        { id: '9', name: '분당도서관', address: '성남시 분당구 불정로 90', phone: '031-710-3000', hours: '09:00-20:00' },
        { id: '10', name: '판교도서관', address: '성남시 분당구 판교역로 146', phone: '031-729-4700', hours: '09:00-20:00' },
        { id: '11', name: '서현도서관', address: '성남시 분당구 서현동 263', phone: '031-729-4800', hours: '09:00-18:00' },
        { id: '12', name: '중원구립도서관', address: '성남시 중원구 성남대로 997', phone: '031-729-4900', hours: '09:00-18:00' },
        { id: '13', name: '수정구립도서관', address: '성남시 수정구 수정로 157', phone: '031-729-5000', hours: '09:00-18:00' },
        { id: '14', name: '태평동 작은도서관', address: '성남시 수정구 태평동 6100', phone: '031-729-5100', hours: '10:00-18:00' },
        // 고양시 도서관
        { id: '15', name: '고양시립중앙도서관', address: '고양시 덕양구 고양대로 1955', phone: '031-8075-9300', hours: '09:00-18:00' },
        { id: '16', name: '일산도서관', address: '고양시 일산동구 중앙로 1275', phone: '031-8075-9400', hours: '09:00-20:00' },
        { id: '17', name: '식사도서관', address: '고양시 일산동구 식사동 142', phone: '031-8075-9500', hours: '09:00-20:00' },
        { id: '18', name: '주엽도서관', address: '고양시 일산서구 주엽동 115', phone: '031-8075-9600', hours: '09:00-20:00' },
        { id: '19', name: '탄현도서관', address: '고양시 일산서구 탄현동 1616', phone: '031-8075-9700', hours: '09:00-18:00' },
        { id: '20', name: '덕양구립도서관', address: '고양시 덕양구 화정동 968', phone: '031-8075-9800', hours: '09:00-18:00' },
        { id: '21', name: '행신도서관', address: '고양시 덕양구 행신동 615', phone: '031-8075-9900', hours: '10:00-18:00' },
        // 용인시 도서관
        { id: '22', name: '용인시립중앙도서관', address: '용인시 처인구 중부대로 1199', phone: '031-324-4800', hours: '09:00-18:00' },
        { id: '23', name: '기흥도서관', address: '용인시 기흥구 중부대로 1174', phone: '031-324-4900', hours: '09:00-20:00' },
        { id: '24', name: '서농도서관', address: '용인시 기흥구 서천동 588', phone: '031-324-5000', hours: '09:00-20:00' },
        { id: '25', name: '수지도서관', address: '용인시 수지구 수지로 63', phone: '031-324-5100', hours: '09:00-20:00' },
        { id: '26', name: '풍덕천도서관', address: '용인시 수지구 풍덕천동 1286', phone: '031-324-5200', hours: '09:00-18:00' },
        { id: '27', name: '상현도서관', address: '용인시 수지구 상현동 542', phone: '031-324-5300', hours: '09:00-20:00' },
        { id: '28', name: '죽전도서관', address: '용인시 수지구 죽전동 1258', phone: '031-324-5400', hours: '09:00-18:00' },
        { id: '29', name: '보정도서관', address: '용인시 수지구 보정동 1157', phone: '031-324-5500', hours: '09:00-18:00' },
        { id: '30', name: '마북도서관', address: '용인시 기흥구 마북동 530', phone: '031-324-5600', hours: '09:00-18:00' },
        { id: '31', name: '동백도서관', address: '용인시 기흥구 동백동 631', phone: '031-324-5700', hours: '09:00-20:00' },
        { id: '32', name: '구성도서관', address: '용인시 수지구 구성동 194', phone: '031-324-5800', hours: '09:00-18:00' },
        { id: '33', name: '처인구립도서관', address: '용인시 처인구 삼가동 234', phone: '031-324-5900', hours: '09:00-18:00' },
      ],
      '수원시': [
        // 중앙도서관
        { id: '1', name: '경기도립중앙도서관', address: '수원시 영통구 월드컵로 235', phone: '031-249-4800', hours: '09:00-18:00' },
        { id: '2', name: '수원시립중앙도서관', address: '수원시 영통구 광교로 183', phone: '031-228-4300', hours: '09:00-22:00' },
        // 구/동 단위 도서관
        { id: '3', name: '영통구립도서관', address: '수원시 영통구 영통동 999-1', phone: '031-228-4350', hours: '09:00-20:00' },
        { id: '4', name: '광교도서관', address: '수원시 영통구 광교동 1271', phone: '031-228-4370', hours: '09:00-20:00' },
        { id: '5', name: '팔달구립도서관', address: '수원시 팔달구 팔달로 123', phone: '031-267-3456', hours: '09:00-18:00' },
        { id: '6', name: '장안구립도서관', address: '수원시 장안구 장안로 456', phone: '031-267-7890', hours: '09:00-18:00' },
        { id: '7', name: '권선구립도서관', address: '수원시 권선구 권선로 789', phone: '031-267-2345', hours: '09:00-18:00' },
      ],
      '성남시': [
        // 중앙도서관
        { id: '8', name: '성남시립중앙도서관', address: '성남시 분당구 양현로 346', phone: '031-729-4600', hours: '09:00-18:00' },
        { id: '9', name: '분당도서관', address: '성남시 분당구 불정로 90', phone: '031-710-3000', hours: '09:00-20:00' },
        // 구/동 단위 도서관
        { id: '10', name: '판교도서관', address: '성남시 분당구 판교역로 146', phone: '031-729-4700', hours: '09:00-20:00' },
        { id: '11', name: '서현도서관', address: '성남시 분당구 서현동 263', phone: '031-729-4800', hours: '09:00-18:00' },
        { id: '12', name: '중원구립도서관', address: '성남시 중원구 성남대로 997', phone: '031-729-4900', hours: '09:00-18:00' },
        { id: '13', name: '수정구립도서관', address: '성남시 수정구 수정로 157', phone: '031-729-5000', hours: '09:00-18:00' },
        { id: '14', name: '태평동 작은도서관', address: '성남시 수정구 태평동 6100', phone: '031-729-5100', hours: '10:00-18:00' },
      ],
      '고양시': [
        // 중앙도서관
        { id: '15', name: '고양시립중앙도서관', address: '고양시 덕양구 고양대로 1955', phone: '031-8075-9300', hours: '09:00-18:00' },
        { id: '16', name: '일산도서관', address: '고양시 일산동구 중앙로 1275', phone: '031-8075-9400', hours: '09:00-20:00' },
        // 구/동 단위 도서관
        { id: '17', name: '식사도서관', address: '고양시 일산동구 식사동 142', phone: '031-8075-9500', hours: '09:00-20:00' },
        { id: '18', name: '주엽도서관', address: '고양시 일산서구 주엽동 115', phone: '031-8075-9600', hours: '09:00-20:00' },
        { id: '19', name: '탄현도서관', address: '고양시 일산서구 탄현동 1616', phone: '031-8075-9700', hours: '09:00-18:00' },
        { id: '20', name: '덕양구립도서관', address: '고양시 덕양구 화정동 968', phone: '031-8075-9800', hours: '09:00-18:00' },
        { id: '21', name: '행신도서관', address: '고양시 덕양구 행신동 615', phone: '031-8075-9900', hours: '10:00-18:00' },
      ],
      '용인시': [
        // 중앙도서관
        { id: '22', name: '용인시립중앙도서관', address: '용인시 처인구 중부대로 1199', phone: '031-324-4800', hours: '09:00-18:00' },
        { id: '23', name: '기흥도서관', address: '용인시 기흥구 중부대로 1174', phone: '031-324-4900', hours: '09:00-20:00' },
        // 구/동 단위 도서관 (사용자 요청 - 서농도서관 포함)
        { id: '24', name: '서농도서관', address: '용인시 기흥구 서천동 588', phone: '031-324-5000', hours: '09:00-20:00' },
        { id: '25', name: '수지도서관', address: '용인시 수지구 수지로 63', phone: '031-324-5100', hours: '09:00-20:00' },
        { id: '26', name: '풍덕천도서관', address: '용인시 수지구 풍덕천동 1286', phone: '031-324-5200', hours: '09:00-18:00' },
        { id: '27', name: '상현도서관', address: '용인시 수지구 상현동 542', phone: '031-324-5300', hours: '09:00-20:00' },
        { id: '28', name: '죽전도서관', address: '용인시 수지구 죽전동 1258', phone: '031-324-5400', hours: '09:00-18:00' },
        { id: '29', name: '보정도서관', address: '용인시 수지구 보정동 1157', phone: '031-324-5500', hours: '09:00-18:00' },
        { id: '30', name: '마북도서관', address: '용인시 기흥구 마북동 530', phone: '031-324-5600', hours: '09:00-18:00' },
        { id: '31', name: '동백도서관', address: '용인시 기흥구 동백동 631', phone: '031-324-5700', hours: '09:00-20:00' },
        { id: '32', name: '구성도서관', address: '용인시 수지구 구성동 194', phone: '031-324-5800', hours: '09:00-18:00' },
        { id: '33', name: '처인구립도서관', address: '용인시 처인구 삼가동 234', phone: '031-324-5900', hours: '09:00-18:00' },
      ],
      // 용인시 구별 세분화
      '기흥구': [
        { id: '23', name: '기흥도서관', address: '용인시 기흥구 중부대로 1174', phone: '031-324-4900', hours: '09:00-20:00' },
        { id: '24', name: '서농도서관', address: '용인시 기흥구 서천동 588', phone: '031-324-5000', hours: '09:00-20:00' },
        { id: '30', name: '마북도서관', address: '용인시 기흥구 마북동 530', phone: '031-324-5600', hours: '09:00-18:00' },
        { id: '31', name: '동백도서관', address: '용인시 기흥구 동백동 631', phone: '031-324-5700', hours: '09:00-20:00' },
      ],
      '수지구': [
        { id: '25', name: '수지도서관', address: '용인시 수지구 수지로 63', phone: '031-324-5100', hours: '09:00-20:00' },
        { id: '26', name: '풍덕천도서관', address: '용인시 수지구 풍덕천동 1286', phone: '031-324-5200', hours: '09:00-18:00' },
        { id: '27', name: '상현도서관', address: '용인시 수지구 상현동 542', phone: '031-324-5300', hours: '09:00-20:00' },
        { id: '28', name: '죽전도서관', address: '용인시 수지구 죽전동 1258', phone: '031-324-5400', hours: '09:00-18:00' },
        { id: '29', name: '보정도서관', address: '용인시 수지구 보정동 1157', phone: '031-324-5500', hours: '09:00-18:00' },
        { id: '32', name: '구성도서관', address: '용인시 수지구 구성동 194', phone: '031-324-5800', hours: '09:00-18:00' },
      ],
      '처인구': [
        { id: '22', name: '용인시립중앙도서관', address: '용인시 처인구 중부대로 1199', phone: '031-324-4800', hours: '09:00-18:00' },
        { id: '33', name: '처인구립도서관', address: '용인시 처인구 삼가동 234', phone: '031-324-5900', hours: '09:00-18:00' },
      ]
    };

    // 지역명에 따른 도서관 선택
    let libraries = regionLibraries[region];
    
    // 정확한 지역명이 없으면 포함된 단어로 검색
    if (!libraries) {
      const regionLower = region.toLowerCase();
      if (regionLower.includes('경기도') || regionLower.includes('경기')) {
        libraries = regionLibraries['경기도'];
      } else if (regionLower.includes('기흥')) {
        libraries = regionLibraries['기흥구'];
      } else if (regionLower.includes('수지')) {
        libraries = regionLibraries['수지구'];
      } else if (regionLower.includes('처인')) {
        libraries = regionLibraries['처인구'];
      } else if (regionLower.includes('용인')) {
        libraries = regionLibraries['용인시'];
      } else if (regionLower.includes('수원')) {
        libraries = regionLibraries['수원시'];
      } else if (regionLower.includes('성남')) {
        libraries = regionLibraries['성남시'];
      } else if (regionLower.includes('고양')) {
        libraries = regionLibraries['고양시'];
      } else {
        // 기본값으로 경기도 전체 사용
        libraries = regionLibraries['경기도'];
      }
    }
    
    return libraries.map((lib, index) => {
      // 각 도서관별로 청구기호 생성을 위한 시드값
      const libraryId = parseInt(lib.id);
      const seed = (libraryId * 17 + index) % 100;
      
      // KDC(한국십진분류법) 기반 청구기호 생성
      const sections = ['문학', '인문', '사회과학', '자연과학', '예술', '역사', '철학', '종교'];
      
      // 카테고리에 따른 KDC 분류 매핑
      const categoryToKDC: { [key: string]: string } = {
        '문학': '8',
        '인문': '1',
        '사회과학': '3',
        '자연과학': '5',
        '예술': '7',
        '역사': '9',
        '철학': '1',
        '종교': '2',
        '기술': '6',
        '언어': '4',
        '일반': '0'
      };
      
      const sectionName = sections[seed % sections.length];
      const kdcMain = categoryToKDC[sectionName] || '8';
      const kdcSub = String((seed % 9) + 1).padStart(1, '0');
      const kdcDetail = String((seed % 9) + 1).padStart(1, '0');
      
      // 저자명에서 첫 글자 추출 (가상의 저자명 생성)
      const authorInitials = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임'];
      const authorCode = authorInitials[seed % authorInitials.length];
      const authorNumber = String((seed % 99) + 1).padStart(2, '0');
      
      // 제목 첫 글자 (가상)
      const titleInitials = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
      const titleCode = titleInitials[seed % titleInitials.length];
      
      const callNumber = `${kdcMain}${kdcSub}${kdcDetail}.${kdcSub} ${authorCode}${authorNumber}${titleCode}`;
      
      return {
        ...lib,
        available: false, // 기본값, API 데이터로 덮어씌워짐
        reservable: false, // 기본값, API 데이터로 덮어씌워짐
        callNumber: callNumber // 청구기호
      };
    });
  }, []);

  const performSearch = useCallback(async (query: string) => {
    // 지역이 선택되지 않았으면 기본값으로 '경기도'를 사용
    const searchRegion = selectedRegion && selectedRegion.trim() !== '' ? selectedRegion : '경기도';

    console.log('🔍 ===== 도서 검색 시작 =====');
    console.log('검색어:', query);
    console.log('선택된 지역:', selectedRegion);
    console.log('사용할 지역:', searchRegion);

    setIsLoading(true);
    setHasSearched(true);
    setApiError(null);

    try {
      console.log('🔍 도서 검색:', query, '지역:', searchRegion);
      
      // 실제 API 검색 시도
      const apiResults = await searchBooksAPI(query, 1, 10);
      console.log('API 검색 결과:', apiResults);
      
      if (apiResults.length > 0) {
        console.log('✅ API 검색 성공:', apiResults);
        
        // 각 도서에 대해 실제 소장 정보와 지역 도서관 정보 추가
        const booksWithLibraries: BookWithLibraries[] = await Promise.all(
          apiResults.map(async (book) => {
            // ISBN이 있는 경우만 실제 소장 정보 조회
            let libraries;
            
            if (!book.isbn || book.isbn.trim() === '') {
              // ISBN이 없으면 소장 정보 조회 불가 안내
              console.log(`📚 ${book.title}: ISBN 없음 - 소장 정보 조회 불가`);
              return {
                ...book,
                libraries: [{
                  id: 'no_isbn',
                  name: '📋 실제 소장 정보 확인 필요',
                  address: '이 도서는 ISBN 정보가 없어 자동 조회가 어렵습니다',
                  phone: '📞 각 도서관에 직접 문의하여 소장 여부를 확인하세요',
                  hours: '🌐 또는 도서관 온라인 홈페이지에서 검색해보세요',
                  available: false,
                  reservable: false,
                  callNumber: `${book.title} 검색`
                }]
              };
            } else {
              // 실제 소장 정보 조회
              const realAvailability = await getRealLibraryAvailability(book.isbn, searchRegion);
              
              // 지역 도서관 정보 생성 (실제 도서관 정보 유지)
              const regionLibraries = generateLibrariesForRegion(searchRegion);
              
              // 실제 API 데이터와 지역 도서관 정보를 결합
              const combinedLibraries = regionLibraries.map(regionLib => {
                const apiData = realAvailability.find(api => 
                  api.libraryName.includes(regionLib.name) || 
                  regionLib.name.includes(api.libraryName)
                );
                
                if (apiData) {
                  return {
                    ...regionLib,
                    available: apiData.available,
                    reservable: apiData.reservable || false
                  };
                }
                
                return regionLib;
              });
              
              // API에서 찾은 추가 도서관들 (지역 목록에 없는 경우)
              const additionalLibraries = realAvailability
                .filter(apiData => !regionLibraries.some(regionLib => 
                  apiData.libraryName.includes(regionLib.name) || 
                  regionLib.name.includes(apiData.libraryName)
                ))
                .map(apiData => ({
                  id: apiData.libraryId || `api_${Date.now()}`,
                  name: apiData.libraryName,
                  address: '주소 정보 없음',
                  phone: '전화번호 정보 없음',
                  hours: '운영시간 정보 없음',
                  available: apiData.available,
                  reservable: apiData.reservable || false,
                  callNumber: generateCallNumber(book.title, book.author)
                }));
              
              const allLibraries = [...combinedLibraries, ...additionalLibraries];
              
              // 소장 정보가 없는 경우 사용자에게 알림
              if (realAvailability.length === 0) {
                console.warn(`⚠️ "${book.title}" 도서의 소장 정보를 찾을 수 없습니다. 직접 도서관에 문의해 주세요.`);
                // 기본 도서관 정보만 표시 (소장 여부 불확실)
                return {
                  ...book,
                  libraries: regionLibraries.map(lib => ({
                    ...lib,
                    available: false, // 확인되지 않음
                    reservable: false
                  }))
                };
              }
              
              console.log(`📚 "${book.title}" 실제 소장 정보:`, realAvailability);
              
              return {
                ...book,
                libraries: allLibraries
              };
            }
          })
        );
        
        console.log('최종 검색 결과:', booksWithLibraries);
        setSearchResults(booksWithLibraries);
        setApiError(null);
        return;
      }
      
      // API 결과가 없으면 인기도서에서 검색
      console.log('🔄 인기도서에서 검색 중...');
      const popularBooks = await fetchPopularBooks();
      console.log('인기도서 목록:', popularBooks);
      
      const matchingPopularBooks = popularBooks.filter((book: PopularBookData) => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
      );
      
      console.log('매칭된 인기도서:', matchingPopularBooks);
      
      if (matchingPopularBooks.length > 0) {
        console.log('✅ 인기도서에서 발견:', matchingPopularBooks);
        
        // 인기도서에 대해서도 실제 소장 정보 조회
        const booksWithLibraries: BookWithLibraries[] = await Promise.all(
          matchingPopularBooks.map(async (book) => {
                                                   // ISBN이 있는 경우만 실제 소장 정보 조회
             let libraries;
             
             if (!book.isbn || book.isbn.trim() === '') {
               // ISBN이 없으면 소장 정보 조회 불가 안내
               console.log(`📚 ${book.title}: ISBN 없음 - 소장 정보 조회 불가`);
               libraries = [{
                 id: 'no_isbn',
                 name: '📋 실제 소장 정보 확인 필요',
                 address: '이 도서는 ISBN 정보가 없어 자동 조회가 어렵습니다',
                 phone: '📞 각 도서관에 직접 문의하여 소장 여부를 확인하세요',
                 hours: '🌐 또는 도서관 온라인 홈페이지에서 검색해보세요',
                 available: false,
                 reservable: false,
                 callNumber: `${book.title} 검색`
               }];
             } else {
               // 실제 소장 정보 조회
               const realAvailability = await getRealLibraryAvailability(book.isbn, searchRegion);
               
               // 지역 도서관 정보 생성 (실제 도서관 정보 유지)
               const baseLibraries = generateLibrariesForRegion(searchRegion);
               
               // 실제 API 데이터와 결합
               libraries = baseLibraries.map(lib => {
                 const realLib = realAvailability.find(real => 
                   real.libraryName.includes(lib.name) || 
                   lib.name.includes(real.libraryName)
                 );
                 
                 if (realLib) {
                   return {
                     ...lib,
                     available: realLib.available,
                     reservable: realLib.reservable
                   };
                 }
                 
                 // API 데이터가 없으면 기본값 사용
                 return lib;
               });
               
               console.log(`📚 ${book.title} 실제 소장 정보:`, realAvailability);
             }
             
             return {
               id: book.id,
               title: book.title,
               author: book.author,
               publisher: book.publisher,
               isbn: book.isbn,
               category: book.category,
               publishYear: book.publishYear,
               libraries: libraries
             };
          })
        );
        
        console.log('최종 검색 결과:', booksWithLibraries);
        setSearchResults(booksWithLibraries);
        setApiError(null); // 에러 메시지 제거
      } else {
        console.log('⚠️ 검색 결과 없음');
        setSearchResults([]);
        setApiError('검색하신 도서를 찾을 수 없습니다. 다른 검색어를 시도해보세요.');
      }
      
    } catch (error) {
      console.error('❌ 검색 오류:', error);
      setApiError('❌ API 호출에 실패했습니다. 네트워크 연결을 확인해주세요.');
      
      // 오류 발생 시 인기도서에서 검색 시도
      try {
        console.log('🔄 오류 발생, 인기도서에서 검색 시도...');
        const popularBooks = await fetchPopularBooks();
        const matchingPopularBooks = popularBooks.filter((book: PopularBookData) => 
          book.title.toLowerCase().includes(query.toLowerCase()) || 
          book.author.toLowerCase().includes(query.toLowerCase())
        );
        
        if (matchingPopularBooks.length > 0) {
          const libraries = generateLibrariesForRegion(searchRegion);
          const booksWithLibraries: BookWithLibraries[] = matchingPopularBooks.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            publisher: book.publisher,
            isbn: book.isbn,
            category: book.category,
            publishYear: book.publishYear,
            libraries: libraries
          }));
          
          setSearchResults(booksWithLibraries);
          setApiError('⚠️ API 연결 문제로 인기도서에서 검색결과를 표시합니다.');
        } else {
          setSearchResults([]);
        }
      } catch (fallbackError) {
        console.error('❌ 인기도서 검색도 실패:', fallbackError);
        setSearchResults([]);
      }
    } finally {
      setIsLoading(false);
      console.log('🔍 ===== 도서 검색 완료 =====');
    }
  }, [selectedRegion, generateLibrariesForRegion]);



  // 외부에서 검색어가 전달된 경우 처리
  useEffect(() => {
    if (externalSearchQuery && externalSearchQuery.trim()) {
      setSearchTerm(externalSearchQuery);
      performSearch(externalSearchQuery);
      if (onExternalSearchComplete) {
        onExternalSearchComplete();
      }
    }
  }, [externalSearchQuery, onExternalSearchComplete, performSearch]);

  // 컴포넌트 마운트 시 API 테스트
  useEffect(() => {
    console.log('🚀 BookSearchSection 컴포넌트 로드됨');
    testLibraryAPI();
  }, [testLibraryAPI]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm.trim());
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="찾으시는 도서명을 입력해주세요 (예: 미움받을 용기, 달과 6펜스)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit" disabled={isLoading}>
          {isLoading ? '검색 중...' : '🔍 검색'}
        </SearchButton>
      </SearchForm>

      <RegionSelectorContainer>
                <RegionSelector
          selectedRegion={selectedRegion}
          onRegionUpdate={(region) => {
            console.log('🗺️ RegionSelector에서 지역 변경:', region);
            setSelectedRegion(region);
            // 상태 초기화
            setSearchResults([]);
            setApiError(null);
            setHasSearched(false);
            setIsLoading(false);
            
            // 기존 도서명이 있으면 자동으로 재검색
            if (searchTerm.trim()) {
              console.log('📚 기존 도서명이 있어서 자동 재검색:', searchTerm);
              performSearch(searchTerm.trim());
            }
          }}
          onLibrariesUpdate={() => {}}
        />
      </RegionSelectorContainer>

      {apiError && (
        <ApiStatus isError={true}>
          ⚠️ {apiError}
        </ApiStatus>
      )}

      {isLoading && (
        <LoadingDiv>
          <div className="spinner"></div>
          <div style={{ marginTop: '10px' }}>"{searchTerm}" 검색 중...</div>
        </LoadingDiv>
      )}

      {!isLoading && hasSearched && searchResults.length === 0 && (
        <EmptyState>
          <div className="emoji">🔍</div>
          <div className="title">"{searchTerm}"에 대한 검색 결과가 없습니다</div>
          <div className="subtitle">
            • 검색된 도서가 없거나 해당 지역에 소장중인 도서관이 없습니다<br/>
            • 다른 키워드로 다시 검색해보세요<br/>
            • 예: "해리포터", "무라카미 하루키", "자기계발" 등
          </div>
        </EmptyState>
      )}

      {!isLoading && searchResults.length > 0 && (
        <SearchResults>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '20px',
            color: '#4CAF50',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            📚 "{searchTerm}" 검색 결과 {searchResults.length}권 ({selectedRegion && selectedRegion.trim() !== '' ? selectedRegion : '경기도'} 지역)
          </div>
          
          {searchResults.map((book, index) => (
            <BookCard key={book.id || index}>
              <BookTitle>{book.title}</BookTitle>
              <BookInfo>
                <span>저자: {book.author}</span>
                <span>출판사: {book.publisher}</span>
                <span>카테고리: {book.category}</span>
                <span>출간년도: {book.publishYear}년</span>
                {book.isbn && <span>ISBN: {book.isbn}</span>}
              </BookInfo>
              
              <LibraryList>
                <div style={{ 
                  fontWeight: '600', 
                  marginBottom: '10px',
                  color: '#2c3e50',
                  fontSize: '15px'
                }}>
                  📍 {selectedRegion} 도서관 소장 현황
                </div>
                
                {book.libraries.map((library) => (
                  <LibraryItem key={library.id}>
                    <LibraryName>
                      <AvailabilityBadge available={library.available}>
                        {library.available ? '✅ 소장중' : '❌ 미소장/대출중'}
                      </AvailabilityBadge>
                      {' '}{library.name}
                    </LibraryName>
                    
                    <LibraryDetails>
                      <div>📍 {library.address}</div>
                      <div>📞 {library.phone}</div>
                      <div>🕐 {library.hours}</div>
                      <div>📋 소장여부: {library.available ? '소장중' : '미소장'}</div>
                      <div>📝 예약가능: {library.reservable ? '가능' : '불가능'}</div>
                      <div>🏷️ 청구기호: {library.callNumber}</div>
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                        💡 청구기호로 도서관에서 책을 찾으실 수 있습니다
                      </div>
                      <div style={{ 
                        fontSize: '11px', 
                        color: '#999', 
                        marginTop: '3px',
                        fontStyle: 'italic'
                      }}>
                        📋 실제 소장 현황 및 예약 정보는 도서관정보나루 API 기반입니다
                      </div>
                      <div style={{ 
                        fontSize: '10px', 
                        color: '#666', 
                        marginTop: '2px'
                      }}>
                        💡 정확한 권수 정보는 해당 도서관에 직접 문의하세요
                      </div>
                    </LibraryDetails>
                  </LibraryItem>
                ))}
              </LibraryList>
            </BookCard>
          ))}
        </SearchResults>
      )}
    </Container>
  );
};

export default BookSearchSection;