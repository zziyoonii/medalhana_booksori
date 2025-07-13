import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, #3a7538 100%);
  border-radius: 16px;
  padding: 24px;
  margin: 32px 0;
  box-shadow: 0 4px 16px rgba(76, 140, 74, 0.2);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 20px;
    margin: 24px 0;
    border-radius: 12px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const BannerText = styled.div`
  flex: 1;
  color: white;
`;

const BannerTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: white;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 16px;
  margin: 0 0 16px 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const BannerButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: var(--accent-color);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard', 'Arita Dotum', 'Noto Sans KR', sans-serif;
  
  &:hover {
    background: #d67821;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(242, 140, 40, 0.3);
  }
  
  &:visited {
    color: white;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    width: 100%;
    justify-content: center;
  }
`;

const BannerIcon = styled.div`
  font-size: 48px;
  margin-right: 16px;
  
  @media (max-width: 768px) {
    font-size: 40px;
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: -75px;
    right: -75px;
  }
`;

const PromotionBanner: React.FC = () => {
  return (
    <BannerContainer>
      <BackgroundPattern />
      <BannerContent>
        <BannerIcon>📚</BannerIcon>
        <BannerText>
          <BannerTitle>경기도 북포인트 서비스</BannerTitle>
          <BannerSubtitle>
            도서 대출로 포인트를 적립하고 다양한 혜택을 받아보세요!<br/>
            경기도 공공도서관 통합 서비스로 더욱 편리하게 이용하실 수 있습니다.
          </BannerSubtitle>
        </BannerText>
        <BannerButton 
          href="https://ggpoint.kdot.cloud/bookpoint/main/homemain" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          🌟 북포인트 바로가기
        </BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default PromotionBanner; 