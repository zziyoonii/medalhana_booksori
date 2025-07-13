import React, { useState } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  background: #f0f8ff;
  border: 3px solid #4a90e2;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  min-height: 400px;
  overflow: hidden;
`;

const MapTitle = styled.h3`
  text-align: center;
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
`;

const MapArea = styled.div`
  background: linear-gradient(135deg, #e8f4fd 0%, #c3e9ff 100%);
  border: 2px solid #b3d9ff;
  border-radius: 12px;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const UserLocation = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #ff4757;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(255, 71, 87, 0.4);
  }
`;

const LibraryMarker = styled.div<{ distance: number }>`
  position: absolute;
  width: 35px;
  height: 35px;
  background: #2ecc71;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 6px 16px rgba(46, 204, 113, 0.4);
    z-index: 10;
  }
`;

const LibraryTooltip = styled.div`
  position: absolute;
  background: white;
  border: 2px solid #2ecc71;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  color: #2c3e50;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: #2ecc71;
  }
`;

const MapLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #555;
  font-weight: 600;
`;

const LegendMarker = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background: ${props => props.color};
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const MapInstructions = styled.div`
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-top: 15px;
  padding: 10px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
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

interface MapSectionProps {
  libraries: Library[];
  userLocation: {lat: number, lng: number} | null;
}

const MapSection: React.FC<MapSectionProps> = ({ libraries, userLocation }) => {
  const [hoveredLibrary, setHoveredLibrary] = useState<number | null>(null);

  // 간단한 위치 계산 (실제 지도에서는 좌표 변환이 필요)
  const getMarkerPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 80 + (index % 2) * 40; // 다양한 거리감 연출
    const centerX = 50; // 중앙 기준 퍼센트
    const centerY = 50;
    
    const x = centerX + Math.cos(angle) * (radius / 3);
    const y = centerY + Math.sin(angle) * (radius / 3);
    
    return {
      left: `${Math.max(5, Math.min(95, x))}%`,
      top: `${Math.max(5, Math.min(95, y))}%`
    };
  };

  if (!userLocation) {
    return (
      <MapContainer>
        <MapTitle>📍 내 주변 도서관 지도</MapTitle>
        <MapArea>
          <div style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>
            위치를 확인하면 주변 도서관을 지도에서 보여드려요!
          </div>
        </MapArea>
        <MapInstructions>
          💡 위에서 "내 위치 확인하기" 버튼을 눌러주세요
        </MapInstructions>
      </MapContainer>
    );
  }

  return (
    <MapContainer>
      <MapTitle>📍 내 주변 도서관 지도</MapTitle>
      <MapArea>
        {/* 사용자 위치 */}
        <UserLocation style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          👤
        </UserLocation>
        
        {/* 도서관 마커들 */}
        {libraries.map((library, index) => {
          const position = getMarkerPosition(index, libraries.length);
          return (
            <LibraryMarker
              key={library.id}
              distance={library.distance}
              style={position}
              onMouseEnter={() => setHoveredLibrary(library.id)}
              onMouseLeave={() => setHoveredLibrary(null)}
            >
              📚
              {hoveredLibrary === library.id && (
                <LibraryTooltip>
                  <strong>{library.name}</strong><br/>
                  📏 {library.distance}km<br/>
                  📞 {library.phone}<br/>
                  🕐 {library.hours}
                </LibraryTooltip>
              )}
            </LibraryMarker>
          );
        })}
      </MapArea>
      
      <MapLegend>
        <LegendItem>
          <LegendMarker color="#ff4757" />
          <span>내 위치</span>
        </LegendItem>
        <LegendItem>
          <LegendMarker color="#2ecc71" />
          <span>도서관</span>
        </LegendItem>
      </MapLegend>
      
      <MapInstructions>
        💡 도서관 마커에 마우스를 올려보세요! 자세한 정보를 확인할 수 있어요
      </MapInstructions>
    </MapContainer>
  );
};

export default MapSection; 