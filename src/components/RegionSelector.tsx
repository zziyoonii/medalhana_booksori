import React, { useState } from 'react';
import styled from 'styled-components';
import { LibraryAPIService } from '../services/LibraryAPI';

const RegionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
`;

const RegionTitle = styled.h3`
  font-size: 22px;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  font-weight: 600;
`;

const RegionInputRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    
    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

const RegionInput = styled.input`
  flex: 1;
  padding: 16px 18px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 15px;
    border-radius: 8px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const RegionButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 150px;
  
  &:hover {
    background: #3a7538;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 15px;
  border-radius: 8px;
  background: #e3f2fd;
  color: #1976d2;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 16px;
  text-align: center;
  padding: 15px;
  background: #ffebee;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;
`;

const GuideText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

interface Library {
  id: number;
  name: string;
  address: string;
  distance: number;
  phone: string;
  hours: string;
  status: string;
}

interface RegionSelectorProps {
  onLibrariesUpdate: (libraries: Library[]) => void;
  selectedRegion: string;
  onRegionUpdate: (region: string) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ 
  onLibrariesUpdate, 
  selectedRegion, 
  onRegionUpdate 
}) => {
  const [regionInput, setRegionInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // 경기데이터드림 API 서비스 인스턴스 생성
  const libraryAPI = new LibraryAPIService({
    baseURL: 'https://openapi.gg.go.kr',
    apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || 'demo_key'
  });

  const handleRegionSearch = async () => {
    if (!regionInput.trim()) {
      setError('지역을 입력해주세요.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // 실제 경기데이터드림 API 호출
      const apiLibraries = await libraryAPI.getLibraries();
      
      console.log('API에서 받은 도서관 데이터:', apiLibraries); // 디버깅
      
      // 주소 기반 필터링 - 더 유연한 매칭
      const filteredLibraries = apiLibraries
        .filter(lib => {
          // 주소에서 시/군/구 추출하여 매칭
          const addressKeywords = regionInput.split(' ').filter(keyword => keyword.length > 0);
          const searchText = regionInput.toLowerCase();
          const libraryText = (lib.address + ' ' + lib.name).toLowerCase();
          
          // 더 유연한 검색: 부분 문자열 매칭
          return addressKeywords.some(keyword => 
            libraryText.includes(keyword.toLowerCase())
          ) || libraryText.includes(searchText);
        })
        .map((lib, index) => ({
          id: index + 1,
          name: lib.name,
          address: lib.address,
          distance: lib.distance,
          phone: lib.phone,
          hours: lib.hours,
          status: '운영중'
        }));

      console.log('필터링된 도서관:', filteredLibraries); // 디버깅
      console.log('입력된 지역:', regionInput); // 디버깅

      // 필터링된 결과가 없거나 적은 경우 더 많은 도서관 표시
      const finalLibraries = filteredLibraries.length > 0 
        ? filteredLibraries 
        : apiLibraries.map((lib, index) => ({
            id: index + 1,
            name: lib.name,
            address: lib.address,
            distance: lib.distance,
            phone: lib.phone,
            hours: lib.hours,
            status: '운영중'
          }));

      console.log('최종 도서관 목록:', finalLibraries); // 디버깅
      
      onLibrariesUpdate(finalLibraries);
      onRegionUpdate(regionInput);
      
      // 성공 메시지 표시를 위한 간단한 알림
      if (finalLibraries.length > 0) {
        console.log(`✅ ${finalLibraries.length}개의 도서관을 찾았습니다!`);
      }
      
    } catch (error) {
      console.error('도서관 검색 중 오류 발생:', error);
      setError('도서관 검색 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRegionSearch();
    }
  };

  return (
    <RegionContainer>
      <RegionTitle>📍 지역 선택</RegionTitle>
      
      <GuideText>
        거주하시는 지역을 입력하시면 해당 지역 도서관들의<br/>
        도서 대출 현황을 확인할 수 있습니다.
        <br/><br/>
        <strong>💡 지역 검색 팁:</strong><br/>
        • 시 이름만 입력하셔도 됩니다 (예: 수원, 성남, 고양)<br/>
        • 전체 도서관을 보려면 "경기"를 입력하세요
      </GuideText>
      
      <RegionInputRow>
        <RegionInput
          type="text"
          placeholder="지역명 입력 (예: 수원시, 성남시, 부천시)"
          value={regionInput}
          onChange={(e) => setRegionInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <RegionButton 
          onClick={handleRegionSearch}
          disabled={loading}
        >
          {loading ? '검색중...' : '🔍 도서관 찾기'}
        </RegionButton>
      </RegionInputRow>
      
      {selectedRegion && (
        <StatusMessage>
          ✅ <strong>{selectedRegion}</strong> 지역의 도서관 정보를 불러왔습니다!<br/>
          위에서 각 도서관별 대출 현황을 확인해보세요 📚
        </StatusMessage>
      )}
      
      {error && (
        <ErrorMessage>
          ⚠️ {error}
        </ErrorMessage>
      )}
    </RegionContainer>
  );
};

export default RegionSelector; 