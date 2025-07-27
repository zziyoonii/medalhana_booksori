import React, { useState } from 'react';
import styled from 'styled-components';
import { LibraryAPIService } from '../services/LibraryAPI';

const RegionSelectorContainer = styled.div`
  margin-bottom: 20px;
`;

const RegionInputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const RegionInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }
  
  &::placeholder {
    color: #666;
  }
`;

const RegionButton = styled.button`
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
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

const StatusMessage = styled.div<{ isError?: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  background: ${props => props.isError ? '#fff3cd' : '#d4edda'};
  color: ${props => props.isError ? '#856404' : '#155724'};
  border: 1px solid ${props => props.isError ? '#ffeaa7' : '#c3e6cb'};
`;

const QuickRegionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const QuickButton = styled.button`
  padding: 8px 16px;
  background: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  color: #666;
`;

interface RegionSelectorProps {
  onLibrariesUpdate: (libraries: any[]) => void;
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
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  // API 서비스 인스턴스 생성
  const libraryAPI = new LibraryAPIService({
    baseURL: 'https://openapi.gg.go.kr',
    apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || 'demo_key'
  });

  // 인기 지역 버튼
  const popularRegions = ['경기도', '수원시', '성남시', '고양시', '용인시', '안산시', '가평군'];

  // 지역별 더미 도서관 데이터 생성
  const generateDummyLibraries = (region: string) => {
    const regionLower = region.toLowerCase();
    
    if (regionLower.includes('수원')) {
      return [
        { id: 1, name: '수원시립중앙도서관', address: '경기 수원시 영통구 광교로 183', phone: '031-228-4300', distance: 1.2, hours: '09:00-22:00', status: '운영중' },
        { id: 2, name: '경기도립중앙도서관', address: '경기 수원시 영통구 월드컵로 235', phone: '031-249-4800', distance: 0.8, hours: '09:00-18:00', status: '운영중' },
        { id: 3, name: '영통구립도서관', address: '경기 수원시 영통구 영통동 999-1', phone: '031-228-4350', distance: 1.5, hours: '09:00-20:00', status: '운영중' }
      ];
    } else if (regionLower.includes('성남')) {
      return [
        { id: 1, name: '성남시립중앙도서관', address: '경기 성남시 분당구 양현로 346', phone: '031-729-4600', distance: 2.5, hours: '09:00-18:00', status: '운영중' },
        { id: 2, name: '분당구립정자도서관', address: '경기 성남시 분당구 정자동 178-1', phone: '031-729-4650', distance: 2.8, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: '서현작은도서관', address: '경기 성남시 분당구 서현동 271-3', phone: '031-729-4670', distance: 3.1, hours: '10:00-18:00', status: '운영중' }
      ];
    } else if (regionLower.includes('고양')) {
      return [
        { id: 1, name: '고양시립중앙도서관', address: '경기 고양시 덕양구 고양대로 1955', phone: '031-8075-9300', distance: 4.2, hours: '09:00-18:00', status: '운영중' },
        { id: 2, name: '일산동구립도서관', address: '경기 고양시 일산동구 백석동 1256', phone: '031-8075-9350', distance: 4.5, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: '백석작은도서관', address: '경기 고양시 일산동구 백석동 1234-5', phone: '031-8075-9380', distance: 4.8, hours: '10:00-18:00', status: '운영중' }
      ];
    } else if (regionLower.includes('부천')) {
      return [
        { id: 1, name: '부천시립중앙도서관', address: '경기 부천시 원미구 길주로 1', phone: '032-625-4700', distance: 3.1, hours: '09:00-18:00', status: '운영중' },
        { id: 2, name: '원미구립도서관', address: '경기 부천시 원미구 중동 1033-3', phone: '032-625-4750', distance: 3.4, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: '중동작은도서관', address: '경기 부천시 원미구 중동 1178-1', phone: '032-625-4780', distance: 3.7, hours: '10:00-18:00', status: '운영중' }
      ];
    } else if (regionLower.includes('안양')) {
      return [
        { id: 1, name: '안양시립중앙도서관', address: '경기 안양시 만안구 문예로 30', phone: '031-389-0800', distance: 3.8, hours: '09:00-22:00', status: '운영중' },
        { id: 2, name: '만안구립도서관', address: '경기 안양시 만안구 안양동 678-49', phone: '031-389-0850', distance: 4.1, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: '안양동작은도서관', address: '경기 안양시 만안구 안양동 123-45', phone: '031-389-0880', distance: 4.4, hours: '10:00-18:00', status: '운영중' }
      ];
    } else if (regionLower.includes('용인')) {
      return [
        { id: 1, name: '용인시립중앙도서관', address: '경기 용인시 처인구 중부대로 1199', phone: '031-324-4800', distance: 4.8, hours: '09:00-18:00', status: '운영중' },
        { id: 2, name: '수지구립도서관', address: '경기 용인시 수지구 수지동 1234-1', phone: '031-324-4850', distance: 5.1, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: '기흥구립도서관', address: '경기 용인시 기흥구 구갈동 567-8', phone: '031-324-4880', distance: 5.4, hours: '09:00-20:00', status: '운영중' }
      ];
    } else {
      // 동 단위 처리
      if (regionLower.includes('동')) {
        const cityName = region.replace('동', '');
        return [
          { id: 1, name: `${cityName}동 주민센터 도서관`, address: `경기도 ${cityName}동 중앙로 123`, phone: '031-123-4567', distance: 0.5, hours: '09:00-18:00', status: '운영중' },
          { id: 2, name: `${cityName}동 구민회관 도서관`, address: `경기도 ${cityName}동 복합문화센터 2층`, phone: '031-234-5678', distance: 0.8, hours: '10:00-20:00', status: '운영중' },
          { id: 3, name: `${cityName}동 작은도서관`, address: `경기도 ${cityName}동 주택가 내 작은도서관`, phone: '031-345-6789', distance: 1.2, hours: '10:00-18:00', status: '운영중' }
        ];
      }
      
      // 기본 도서관
      return [
        { id: 1, name: `${region} 중앙도서관`, address: `경기도 ${region} 중앙로 123`, phone: '031-123-4567', distance: 1.0, hours: '09:00-18:00', status: '운영중' },
        { id: 2, name: `${region} 시립도서관`, address: `경기도 ${region} 시청로 456`, phone: '031-234-5678', distance: 1.5, hours: '09:00-20:00', status: '운영중' },
        { id: 3, name: `${region} 작은도서관`, address: `경기도 ${region} 문화로 789`, phone: '031-345-6789', distance: 2.0, hours: '10:00-18:00', status: '운영중' }
      ];
    }
  };

  const handleRegionSearch = async () => {
    if (!regionInput.trim()) {
      setStatusMessage('지역을 입력해주세요.');
      setIsError(true);
      return;
    }

    setLoading(true);
    setIsError(false);
    setStatusMessage('');
    
    // 단순히 지역명만 전달하고 BookSearchSection에서 처리하도록 변경
    console.log(`🗺️ RegionSelector: "${regionInput}" 지역 선택됨`);
    setStatusMessage(`📍 "${regionInput}" 지역이 선택되었습니다. 도서명을 검색해보세요.`);
    setIsError(false);
    
    // 지역명만 부모 컴포넌트로 전달
    console.log('🗺️ RegionSelector: onRegionUpdate 호출:', regionInput);
    onRegionUpdate(regionInput);
    onLibrariesUpdate([]); // 빈 배열로 초기화
    
    setLoading(false);
  };

  const handleQuickRegionSelect = (region: string) => {
    setRegionInput(region);
    // 자동으로 검색 실행
    setTimeout(() => {
      handleRegionSearch();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRegionSearch();
    }
  };

  return (
    <RegionSelectorContainer>
      <QuickRegionButtons>
        {popularRegions.map((region) => (
          <QuickButton
            key={region}
            onClick={() => handleQuickRegionSelect(region)}
            disabled={loading}
          >
            {region}
          </QuickButton>
        ))}
      </QuickRegionButtons>
      
      <RegionInputContainer>
        <RegionInput
          type="text"
          placeholder="지역을 입력하세요 (예: 기흥구, 수지구, 서천동, 광교동)"
          value={regionInput}
          onChange={(e) => setRegionInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <RegionButton onClick={handleRegionSearch} disabled={loading}>
          {loading ? '검색 중...' : '🔍 검색'}
        </RegionButton>
      </RegionInputContainer>

      {statusMessage && (
        <StatusMessage isError={isError}>
          {statusMessage}
        </StatusMessage>
      )}

      {loading && (
        <LoadingSpinner>
          📍 도서관 정보를 검색하고 있습니다...
        </LoadingSpinner>
      )}
    </RegionSelectorContainer>
  );
};

export default RegionSelector; 