import React, { useState } from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 12px;
    flex-wrap: nowrap;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 15px;
    padding-bottom: 4px;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--primary-color)' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#555'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : '#e9ecef'};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${props => props.active ? '#3a7538' : '#e9ecef'};
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid rgba(76, 140, 74, 0.3);
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 14px;
    border-radius: 6px;
  }
`;

const GroupForm = styled.form`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    min-height: 100px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    min-height: 90px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const Select = styled.select`
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(76, 140, 74, 0.1);
  }
  
  option {
    padding: 8px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
    
    option {
      font-size: 15px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 15px;
    
    option {
      font-size: 15px;
    }
  }
`;

const CreateButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #218838;
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: 3px solid rgba(40, 167, 69, 0.3);
    outline-offset: 2px;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;

const GuideContainer = styled.div`
  background: #f0f8f0;
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
`;

const GuideTitle = styled.h4`
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-size: 18px;
`;

const GuideStep = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  border-left: 4px solid var(--primary-color);
`;

const GuideStepTitle = styled.h5`
  color: var(--primary-color);
  margin: 0 0 8px 0;
  font-size: 16px;
`;

const GuideStepContent = styled.div`
  color: #555;
  line-height: 1.6;
  font-size: 14px;
`;

const LinkExample = styled.div`
  background: #f5f5f5;
  padding: 10px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  color: #333;
  margin-top: 8px;
  word-break: break-all;
`;

const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupCard = styled.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6f42c1;
    box-shadow: 0 4px 15px rgba(111, 66, 193, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

const GroupTitle = styled.h4`
  font-size: 22px;
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const GroupInfo = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const GroupDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
    
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

const JoinButton = styled.button`
  background: #6f42c1;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #5a2d91;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid #b8a4d9;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const ViewBoardButton = styled.button`
  background: #17a2b8;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #138496;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 3px solid #7dd3fc;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const BoardContainer = styled.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const BoardTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-size: 24px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin: 0 0 15px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PostCard = styled.div`
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #6f42c1;
    box-shadow: 0 2px 8px rgba(111, 66, 193, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const PostTitle = styled.h4`
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 18px;
`;

const PostContent = styled.div`
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const PostMeta = styled.div`
  color: #999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  
  &:hover {
    background: #5a6268;
    transform: translateY(-1px);
  }
`;

const MyGroupCard = styled.div`
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #28a745;
    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
    margin-bottom: 12px;
  }
`;

const ProgressSection = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

const ProgressLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #2c3e50;
`;

const ProgressInput = styled.input`
  width: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const MemoTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`;

const UpdateButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  
  &:hover {
    background: #218838;
  }
`;

const ScheduleInfo = styled.div`
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
`;

const QuickActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
    
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

const AuthContainer = styled.div`
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
`;

const AuthTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`;

const AuthStep = styled.div`
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

const AuthStepTitle = styled.h4`
  color: var(--primary-color);
  margin: 0 0 15px 0;
  font-size: 18px;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

const AuthInput = styled.input`
  padding: 15px;
  font-size: 18px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

const AuthButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: #3a7538;
    box-shadow: 0 4px 12px rgba(76, 140, 74, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const AuthStatus = styled.div<{ verified: boolean }>`
  background: ${props => props.verified ? '#d4edda' : '#f8d7da'};
  color: ${props => props.verified ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.verified ? '#c3e6cb' : '#f5c6cb'};
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const AuthGuide = styled.div`
  background: #f0f8f0;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  color: var(--primary-color);
  font-size: 14px;
  line-height: 1.6;
`;

const RequiredBadge = styled.span`
  background: #dc3545;
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 3px 6px;
    font-size: 11px;
    margin-left: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 2px 5px;
    font-size: 10px;
    margin-left: 5px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 25px;
    width: 95%;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    width: 95%;
    margin: 10px;
  }
`;

const ModalTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-size: 22px;
`;

const ModalMessage = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 30px 0;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    
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

const ModalButton = styled.button<{ primary?: boolean }>`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  
  &:hover {
    background: ${props => props.primary ? '#0056b3' : '#5a6268'};
    transform: translateY(-1px);
  }
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

interface ReadingGroupSectionProps {
  libraries: Library[];
  selectedRegion: string;
}

const ReadingGroupSection: React.FC<ReadingGroupSectionProps> = ({ libraries, selectedRegion }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'board' | 'mygroups' | 'auth'>('list');
  const [createStep, setCreateStep] = useState<'basic' | 'detail'>('basic'); // 생성 단계 추가
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null); // 선택된 모임 ID
  const [joinedGroups, setJoinedGroups] = useState<number[]>([]); // 참여한 모임 ID 목록
  const [readingProgress, setReadingProgress] = useState<{ [key: number]: { chapter: number; memo: string } }>({}); // 독서 진도
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // 본인인증 상태
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false); // 확인 모달 표시 상태
  const [confirmMessage, setConfirmMessage] = useState<string>(''); // 확인 메시지
  const [confirmTitle, setConfirmTitle] = useState<string>('확인'); // 모달 제목
  const [confirmCallback, setConfirmCallback] = useState<(() => void) | null>(null); // 확인 시 실행할 함수
  const [userProfile, setUserProfile] = useState<{
    name: string;
    phone: string;
    nickname: string;
    age: string;
    location: string;
    interests: string;
  }>({
    name: '',
    phone: '',
    nickname: '',
    age: '',
    location: '',
    interests: ''
  });
  
  // 더미 게시판 데이터
  const [boardPosts] = useState([
    {
      id: 1,
      groupId: 1,
      title: "첫 번째 모임 후기",
      content: "오늘 첫 만남이었는데 정말 좋았어요! 다음에는 2장부터 읽어오기로 했습니다.",
      author: "김독서",
      date: "2024-01-22",
      time: "15:30"
    },
    {
      id: 2,
      groupId: 1,
      title: "책 읽기 진도표",
      content: "매주 2-3장씩 읽어서 총 6주 완독 목표로 합니다. 궁금한 점이나 감상은 여기에 올려주세요!",
      author: "김독서",
      date: "2024-01-20",
      time: "10:00"
    },
    {
      id: 3,
      groupId: 2,
      title: "다음 모임 날짜 조정",
      content: "1월 25일이 어려운 분들이 계셔서 1월 27일 토요일로 변경 제안드립니다.",
      author: "이문학",
      date: "2024-01-23",
      time: "14:20"
    },
    {
      id: 4,
      groupId: 3,
      title: "수원시립중앙도서관 모임실 예약 완료",
      content: "1월 30일 오후 3시 도서관 세미나실 예약 완료했습니다. 2층 안내데스크에서 수원 북클럽으로 문의하시면 됩니다.",
      author: "박수원",
      date: "2024-01-25",
      time: "11:45"
    }
  ]);
  
  const [groups, setGroups] = useState([
    {
      id: 1,
      title: '함께 읽는 추리소설',
      description: '추리소설을 좋아하는 분들과 함께 읽고 토론해요',
      book: '그리고 아무도 없었다',
      author: '애거서 크리스티',
      meetingType: 'library',
      library: '강남구립도서관',
      onlineLink: '',
      offlineLocation: '',
      date: '2024-01-20',
      time: '14:00',
      maxMembers: 10,
      currentMembers: 6,
      organizer: '김독서',
      status: 'complete',
      region: '강남구'
    },
    {
      id: 2,
      title: '시니어 문학 모임',
      description: '인생의 깊이를 더해주는 문학 작품들을 함께 읽어요',
      book: '82년생 김지영',
      author: '조남주',
      meetingType: 'offline',
      library: '',
      onlineLink: '',
      offlineLocation: '서초구 스타벅스',
      date: '2024-01-25',
      time: '10:00',
      maxMembers: 8,
      currentMembers: 4,
      organizer: '이문학',
      status: 'complete',
      region: '서초구'
    },
    {
      id: 3,
      title: '수원 북클럽',
      description: '수원 지역 주민들과 함께하는 독서 모임',
      book: '미드나잇 라이브러리',
      author: '매트 헤이그',
      meetingType: 'library',
      library: '수원시립중앙도서관',
      onlineLink: '',
      offlineLocation: '',
      date: '2024-01-30',
      time: '15:00',
      maxMembers: 12,
      currentMembers: 8,
      organizer: '박수원',
      status: 'complete',
      region: '수원시'
    },
    {
      id: 4,
      title: '성남 독서 동아리',
      description: '성남 지역 독서 애호가들의 모임',
      book: '완전한 행복',
      author: '정유정',
      meetingType: 'offline',
      library: '',
      onlineLink: '',
      offlineLocation: '성남시 카페',
      date: '2024-02-05',
      time: '13:00',
      maxMembers: 6,
      currentMembers: 3,
      organizer: '최성남',
      status: 'complete',
      region: '성남시'
    },
    {
      id: 5,
      title: '부천 문학 살롱',
      description: '부천시 문학 동호회입니다',
      book: '인간 실격',
      author: '다자이 오사무',
      meetingType: 'library',
      library: '부천시립도서관',
      onlineLink: '',
      offlineLocation: '',
      date: '2024-02-10',
      time: '16:00',
      maxMembers: 15,
      currentMembers: 10,
      organizer: '김부천',
      status: 'complete',
      region: '부천시'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    book: '',
    author: '',
    meetingType: 'offline', // online, offline, library
    onlineLink: '',
    offlineLocation: '',
    libraryId: '',
    date: '',
    time: '',
    maxMembers: 10
  });

  // 기본 생성 (1단계)
  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      showConfirm(
        '모임 생성을 위해 본인인증이 필요합니다.\n지금 인증하시겠습니까?',
        () => setActiveTab('auth'),
        '🔒 본인인증 필요'
      );
      return;
    }
    
    const newGroup = {
      id: groups.length + 1,
      title: formData.title,
      description: formData.description,
      book: formData.book,
      author: '',
      meetingType: formData.meetingType,
      library: formData.meetingType === 'library' ? 
        (libraries.find(lib => lib.id === parseInt(formData.libraryId))?.name || '') : '',
      onlineLink: formData.meetingType === 'online' ? formData.onlineLink : '',
      offlineLocation: formData.meetingType === 'offline' ? formData.offlineLocation : '',
      date: '',
      time: '',
      maxMembers: 0,
      currentMembers: 1,
      organizer: '나',
      status: 'draft', // 임시 저장 상태
      region: selectedRegion || '지역 미선택' // 현재 선택된 지역 사용
    };

    setGroups([...groups, newGroup]);
    
    // 기본 정보는 유지하고 세부 설정으로 이동
    setCreateStep('detail');
    alert('모임이 생성되었습니다! 이제 세부 정보를 설정해주세요.');
  };

  // 세부 설정 완료 (2단계)
  const handleDetailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 마지막으로 생성된 모임 업데이트
    const lastGroupId = groups[groups.length - 1].id;
    
    setGroups(groups.map(group => 
      group.id === lastGroupId 
        ? { 
            ...group, 
            author: formData.author,
            date: formData.date,
            time: formData.time,
            maxMembers: formData.maxMembers,
            status: 'complete'
          }
        : group
    ));
    
    // 폼 초기화
    setFormData({
      title: '',
      description: '',
      book: '',
      author: '',
      meetingType: 'offline',
      onlineLink: '',
      offlineLocation: '',
      libraryId: '',
      date: '',
      time: '',
      maxMembers: 10
    });
    
    setCreateStep('basic');
    setActiveTab('list');
    alert('독서 모임 설정이 완료되었습니다!');
  };

  const handleJoin = (groupId: number) => {
    if (!isAuthenticated) {
      showConfirm(
        '모임 참여를 위해 본인인증이 필요합니다.\n지금 인증하시겠습니까?',
        () => setActiveTab('auth'),
        '🔒 본인인증 필요'
      );
      return;
    }
    
    setGroups(groups.map(group => 
      group.id === groupId 
        ? { ...group, currentMembers: group.currentMembers + 1 }
        : group
    ));
    
    // 참여한 모임 목록에 추가
    setJoinedGroups([...joinedGroups, groupId]);
    
    // 독서 진도 초기화
    setReadingProgress(prev => ({
      ...prev,
      [groupId]: { chapter: 0, memo: '' }
    }));
    
    alert('독서 모임에 참여하셨습니다! "내 모임" 탭에서 확인해보세요.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 탭 변경 시 생성 단계 초기화
  const handleTabChange = (tab: 'list' | 'create' | 'board' | 'mygroups' | 'auth') => {
    setActiveTab(tab);
    setCreateStep('basic');
    setSelectedGroupId(null);
  };
  
  // 모임 게시판 보기
  const handleViewBoard = (groupId: number) => {
    if (!isAuthenticated) {
      showConfirm(
        '게시판 이용을 위해 본인인증이 필요합니다.\n지금 인증하시겠습니까?',
        () => setActiveTab('auth'),
        '🔒 본인인증 필요'
      );
      return;
    }
    setSelectedGroupId(groupId);
    setActiveTab('board');
  };
  
  // 독서 진도 업데이트
  const handleProgressUpdate = (groupId: number, chapter: number, memo: string) => {
    setReadingProgress(prev => ({
      ...prev,
      [groupId]: { chapter, memo }
    }));
  };
  
  // 프로필 입력 핸들러
  const handleProfileChange = (field: string, value: string) => {
    if (field === 'phone') {
      // 휴대폰 번호 자동 하이픈 추가
      const phoneNumber = value.replace(/[^\d]/g, '');
      let formattedPhone = '';
      
      if (phoneNumber.length <= 3) {
        formattedPhone = phoneNumber;
      } else if (phoneNumber.length <= 7) {
        formattedPhone = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
      } else {
        formattedPhone = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
      }
      
      setUserProfile(prev => ({
        ...prev,
        [field]: formattedPhone
      }));
    } else {
      setUserProfile(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };
  
  // 커스텀 확인 모달 표시
  const showConfirm = (message: string, callback: () => void, title: string = '확인') => {
    setConfirmMessage(message);
    setConfirmTitle(title);
    setConfirmCallback(() => callback);
    setShowConfirmModal(true);
  };

  // 모달 확인 처리
  const handleConfirm = () => {
    if (confirmCallback) {
      confirmCallback();
    }
    setShowConfirmModal(false);
    setConfirmCallback(null);
    setConfirmTitle('확인');
    setConfirmMessage('');
  };

  // 모달 취소 처리
  const handleCancel = () => {
    setShowConfirmModal(false);
    setConfirmCallback(null);
    setConfirmTitle('확인');
    setConfirmMessage('');
  };

  // 휴대폰 인증 시뮬레이션
  const handlePhoneAuth = () => {
    if (!userProfile.name || !userProfile.phone) {
      alert('이름과 휴대폰 번호를 입력해주세요.');
      return;
    }
    
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(userProfile.phone)) {
      alert('휴대폰 번호를 010-0000-0000 형식으로 입력해주세요.');
      return;
    }
    
    // 커스텀 모달로 확인 받기
        showConfirm(
      `${userProfile.phone}로 인증번호를 발송하겠습니다. 계속하시겠습니까?`,
      () => {
        // 인증번호 확인 시뮬레이션
        const authCode = window.prompt('인증번호 6자리를 입력해주세요: (테스트: 123456)');
        if (authCode === '123456') {
          setIsAuthenticated(true);
          alert('본인인증이 완료되었습니다! 🎉\n이제 모든 기능을 이용하실 수 있습니다.');
          setActiveTab('mygroups'); // 인증 완료 후 내 모임 탭으로 이동
        } else {
          alert('인증번호가 일치하지 않습니다. 다시 시도해주세요.');
        }
      },
      '📱 인증번호 발송'
    );
  };
  
  // 온라인 링크 생성 가이드 컴포넌트
  const OnlineLinkGuide = () => (
    <GuideContainer>
      <GuideTitle>💻 온라인 모임 링크 생성 방법</GuideTitle>
      
      <GuideStep>
        <GuideStepTitle>1. 구글 미트 (Google Meet) 사용하기</GuideStepTitle>
        <GuideStepContent>
          <div>• 구글 계정으로 로그인 후 <strong>meet.google.com</strong> 접속</div>
          <div>• "새 회의 시작" 클릭</div>
          <div>• 생성된 링크를 복사해서 아래에 붙여넣기</div>
          <LinkExample>예: https://meet.google.com/abc-defg-hij</LinkExample>
        </GuideStepContent>
      </GuideStep>
      
      <GuideStep>
        <GuideStepTitle>2. 줌 (Zoom) 사용하기</GuideStepTitle>
        <GuideStepContent>
          <div>• 줌 앱 설치 후 로그인</div>
          <div>• "회의 예약" 또는 "즉석 회의" 선택</div>
          <div>• 생성된 회의 링크를 복사해서 아래에 붙여넣기</div>
          <LinkExample>예: https://zoom.us/j/123456789</LinkExample>
        </GuideStepContent>
      </GuideStep>
      
      <GuideStep>
        <GuideStepTitle>3. 카카오톡 오픈채팅 사용하기</GuideStepTitle>
        <GuideStepContent>
          <div>• 카카오톡에서 "오픈채팅" 검색</div>
          <div>• "오픈채팅방 만들기" 선택</div>
          <div>• 채팅방 이름을 독서모임으로 설정</div>
          <div>• 생성된 링크를 복사해서 아래에 붙여넣기</div>
          <LinkExample>예: https://open.kakao.com/o/sAbCdEfG</LinkExample>
        </GuideStepContent>
      </GuideStep>
      
      <GuideStep>
        <GuideStepTitle>💡 도움이 필요하시면?</GuideStepTitle>
        <GuideStepContent>
          <div>• 가족이나 지인에게 도움 요청</div>
          <div>• 근처 도서관 사서에게 문의</div>
          <div>• 일단 "미정"으로 적고 나중에 모임원들과 상의</div>
        </GuideStepContent>
      </GuideStep>
    </GuideContainer>
  );

  // 지역에 따라 독서모임 필터링
  const filteredGroups = groups.filter(group => {
    if (!selectedRegion) return true; // 지역이 선택되지 않으면 모든 모임 표시
    return group.region === selectedRegion && group.status === 'complete';
  });

  return (
    <GroupContainer>
      <TabContainer>
        <TabButton 
          active={activeTab === 'list'} 
          onClick={() => handleTabChange('list')}
        >
          👥 목록 {selectedRegion && `(${selectedRegion})`}
        </TabButton>
        
        {/* 본인인증 탭 - 항상 표시 */}
        <TabButton 
          active={activeTab === 'auth'} 
          onClick={() => handleTabChange('auth')}
        >
          {isAuthenticated ? '✅ 인증완료' : '🔒 본인인증'}
        </TabButton>
        
        {/* 인증 후에만 표시되는 탭들 */}
        {isAuthenticated && (
          <>
            <TabButton 
              active={activeTab === 'create'} 
              onClick={() => handleTabChange('create')}
            >
              ➕ 만들기 {createStep === 'detail' && '(세부설정)'}
            </TabButton>
            <TabButton 
              active={activeTab === 'mygroups'} 
              onClick={() => handleTabChange('mygroups')}
            >
              📖 내 모임 {joinedGroups.length > 0 && `(${joinedGroups.length})`}
            </TabButton>
            <TabButton 
              active={activeTab === 'board'} 
              onClick={() => handleTabChange('board')}
            >
              💬 게시판 {selectedGroupId && `(${filteredGroups.find(g => g.id === selectedGroupId)?.title})`}
            </TabButton>
          </>
        )}
      </TabContainer>

              {activeTab === 'list' && (
        <GroupList>
          {!isAuthenticated && (
            <div className="bg-green-50 border-2 border-primary rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌟</span>
                  <span className="text-primary font-semibold">본인인증으로 모든 기능 이용하기</span>
                </div>
                <button 
                  onClick={() => setActiveTab('auth')}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium whitespace-nowrap"
                >
                  본인인증 하기
                </button>
              </div>
            </div>
          )}
          
          {!selectedRegion ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="text-xl font-bold text-text mb-3">독서모임을 찾으려면?</h3>
              <p className="text-gray-600">
                위의 "도서 검색" 섹션에서 지역을 선택해주세요!
              </p>
            </div>
          ) : filteredGroups.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-text mb-3">
                {selectedRegion}에는 아직 독서모임이 없어요
              </h3>
              <p className="text-gray-600 mb-6">
                새로운 모임을 만들어서 첫 번째 독서모임을 시작해보세요!
              </p>
              <button 
                onClick={() => setActiveTab('create')}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
              >
                모임 만들기
              </button>
            </div>
          ) : (
            filteredGroups.map(group => (
              <GroupCard key={group.id}>
                <GroupTitle>{group.title}</GroupTitle>
                <GroupInfo>{group.description}</GroupInfo>
                <GroupDetails>
                  <DetailItem>📚 {group.book}{group.author && ` - ${group.author}`}</DetailItem>
                  <DetailItem>
                    {group.meetingType === 'online' && '💻 온라인'}
                    {group.meetingType === 'offline' && `📍 ${group.offlineLocation}`}
                    {group.meetingType === 'library' && `🏛️ ${group.library}`}
                  </DetailItem>
                  {group.date && <DetailItem>📅 {group.date}</DetailItem>}
                  {group.time && <DetailItem>🕐 {group.time}</DetailItem>}
                  {group.maxMembers > 0 && <DetailItem>👥 {group.currentMembers}/{group.maxMembers}명</DetailItem>}
                                  <DetailItem>👤 주최자: {group.organizer}</DetailItem>
              </GroupDetails>
              <ButtonGroup>
                <JoinButton 
                  onClick={() => handleJoin(group.id)}
                  disabled={
                    (group.maxMembers > 0 && group.currentMembers >= group.maxMembers) ||
                    joinedGroups.includes(group.id)
                  }
                >
                  {joinedGroups.includes(group.id) ? '✅ 참여중' : 
                   group.maxMembers > 0 && group.currentMembers >= group.maxMembers ? '완료' : '참여'}
                </JoinButton>
                <ViewBoardButton onClick={() => handleViewBoard(group.id)}>
                  💬 게시판
                </ViewBoardButton>
              </ButtonGroup>
              </GroupCard>
            ))
          )}
        </GroupList>
      )}

      {activeTab === 'create' && createStep === 'basic' && (
        <GroupForm onSubmit={handleBasicSubmit}>
          <FormGroup>
            <Label>모임 이름</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="예: 함께 읽는 추리소설"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>모임 설명</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="모임에 대한 간단한 설명을 써주세요"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>읽을 책</Label>
            <Input
              type="text"
              name="book"
              value={formData.book}
              onChange={handleInputChange}
              placeholder="책 제목을 입력하세요"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>모임 방식</Label>
            <Select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleInputChange}
              required
            >
              <option value="offline">📍 오프라인 (직접 만남)</option>
              <option value="online">💻 온라인 (화상 회의)</option>
              <option value="library">🏛️ 도서관 (도서관에서 만남)</option>
            </Select>
          </FormGroup>

          {formData.meetingType === 'online' && (
            <>
              <OnlineLinkGuide />
              <FormGroup>
                <Label>온라인 링크 (선택사항)</Label>
                <Input
                  type="url"
                  name="onlineLink"
                  value={formData.onlineLink}
                  onChange={handleInputChange}
                  placeholder="예: https://meet.google.com/abc-123 또는 '미정'"
                />
              </FormGroup>
            </>
          )}

          {formData.meetingType === 'offline' && (
            <FormGroup>
              <Label>만날 장소 (선택사항)</Label>
              <Input
                type="text"
                name="offlineLocation"
                value={formData.offlineLocation}
                onChange={handleInputChange}
                placeholder="예: 스타벅스 강남점, 동네 카페 등"
              />
            </FormGroup>
          )}

          {formData.meetingType === 'library' && (
            <FormGroup>
              <Label>도서관 선택</Label>
              <Select
                name="libraryId"
                value={formData.libraryId}
                onChange={handleInputChange}
                required
              >
                <option value="">도서관을 선택하세요</option>
                {libraries.map(library => (
                  <option key={library.id} value={library.id}>
                    {library.name}
                  </option>
                ))}
              </Select>
            </FormGroup>
          )}

                      {(formData.meetingType === 'library' && libraries.length === 0) && (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🏛️</div>
                <h3 className="text-xl font-bold text-text mb-3">도서관 모임을 만들려면?</h3>
                <p className="text-gray-600 mb-4">
                  위의 "도서 검색" 섹션에서 거주 지역을 선택해주세요!
                </p>
              </div>
            )}

          <CreateButton 
            type="submit" 
            disabled={
              (formData.meetingType === 'library' && libraries.length === 0) ||
              !isAuthenticated
            }
          >
            {!isAuthenticated ? '🔒 본인인증 후 이용 가능' : '👥 모임 생성하기'}
          </CreateButton>
        </GroupForm>
      )}

      {activeTab === 'create' && createStep === 'detail' && (
        <GroupForm onSubmit={handleDetailSubmit}>
          <div style={{ padding: '15px', background: '#e3f2fd', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)' }}>✨ 세부 정보 설정</h4>
            <p style={{ margin: 0, color: '#666' }}>
              모임이 생성되었습니다! 이제 추가 정보를 설정해주세요. (선택사항)
            </p>
          </div>

          <FormGroup>
            <Label>저자 (선택사항)</Label>
            <Input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="저자명을 입력하세요"
            />
          </FormGroup>

          <FormGroup>
            <Label>모임 날짜 (선택사항)</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>모임 시간 (선택사항)</Label>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>모집 인원 (선택사항)</Label>
            <Select
              name="maxMembers"
              value={formData.maxMembers}
              onChange={handleInputChange}
            >
              <option value={0}>인원 제한 없음</option>
              <option value={5}>5명</option>
              <option value={8}>8명</option>
              <option value={10}>10명</option>
              <option value={15}>15명</option>
              <option value={20}>20명</option>
            </Select>
          </FormGroup>

          <div style={{ display: 'flex', gap: '10px' }}>
            <CreateButton 
              type="button" 
              onClick={() => setCreateStep('basic')}
              style={{ background: '#6c757d' }}
            >
              ← 이전
            </CreateButton>
            <CreateButton type="submit">
              ✅ 완료
            </CreateButton>
          </div>
        </GroupForm>
      )}

      {activeTab === 'board' && (
        <BoardContainer>
          <BackButton onClick={() => setActiveTab('list')}>
            ← 목록으로 돌아가기
          </BackButton>
          
          {selectedGroupId ? (
            <>
              <BoardTitle>
                💬 {filteredGroups.find(g => g.id === selectedGroupId)?.title} 게시판
              </BoardTitle>
              <PostList>
                {boardPosts
                  .filter(post => post.groupId === selectedGroupId)
                  .sort((a, b) => new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime())
                  .map(post => (
                    <PostCard key={post.id}>
                      <PostTitle>{post.title}</PostTitle>
                      <PostContent>{post.content}</PostContent>
                      <PostMeta>
                        <span>👤 {post.author}</span>
                        <span>📅 {post.date} {post.time}</span>
                      </PostMeta>
                    </PostCard>
                  ))}
                                  {boardPosts.filter(post => post.groupId === selectedGroupId).length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-6">📝</div>
                      <h3 className="text-xl font-bold text-text mb-3">아직 게시글이 없어요</h3>
                      <p className="text-gray-600 mb-4">
                        모임 참여 후 첫 번째 글을 작성해보세요!
                      </p>
                    </div>
                  )}
              </PostList>
            </>
                      ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">💬</div>
                <h3 className="text-xl font-bold text-text mb-3">게시판을 보려면 모임을 선택해주세요!</h3>
                <p className="text-gray-600 mb-4">
                  목록에서 "게시판" 버튼을 클릭하세요.
                </p>
              </div>
            )}
         </BoardContainer>
       )}

       {activeTab === 'mygroups' && (
         <div>
           {!isAuthenticated ? (
             <div className="text-center py-16">
               <div className="text-6xl mb-6">🔒</div>
               <h3 className="text-xl font-bold text-text mb-3">본인인증이 필요해요</h3>
               <p className="text-gray-600 mb-6">
                 내 모임을 확인하려면 먼저 본인인증을 완료해주세요.
               </p>
               <button 
                 onClick={() => setActiveTab('auth')}
                 className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
               >
                 본인인증 하기
               </button>
             </div>
           ) : joinedGroups.length === 0 ? (
             <div className="text-center py-16">
               <div className="text-6xl mb-6">📖</div>
               <h3 className="text-xl font-bold text-text mb-3">참여한 독서모임이 없어요</h3>
               <p className="text-gray-600 mb-6">
                 목록에서 마음에 드는 모임에 참여해보세요!
               </p>
               <button 
                 onClick={() => setActiveTab('list')}
                 className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
               >
                 모임 찾기
               </button>
             </div>
           ) : (
             <div>
               <h3 style={{ marginBottom: '25px', color: '#2c3e50' }}>
                 📖 내가 참여한 독서모임 ({joinedGroups.length}개)
               </h3>
               
               {joinedGroups.map(groupId => {
                 const group = groups.find(g => g.id === groupId);
                 if (!group) return null;
                 
                 const progress = readingProgress[groupId] || { chapter: 0, memo: '' };
                 
                 return (
                   <MyGroupCard key={groupId}>
                     <GroupTitle>{group.title}</GroupTitle>
                     <GroupInfo>📚 {group.book} {group.author && `- ${group.author}`}</GroupInfo>
                     
                     {group.date && (
                       <ScheduleInfo>
                         <strong>📅 다음 모임 일정</strong><br/>
                         {group.date} {group.time} | 
                         {group.meetingType === 'online' && ' 💻 온라인'}
                         {group.meetingType === 'offline' && ` 📍 ${group.offlineLocation}`}
                         {group.meetingType === 'library' && ` 🏛️ ${group.library}`}
                       </ScheduleInfo>
                     )}
                     
                     <ProgressSection>
                       <ProgressLabel>📖 내 독서 진도</ProgressLabel>
                       <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                         <ProgressInput
                           type="number"
                           value={progress.chapter}
                           onChange={(e) => handleProgressUpdate(groupId, parseInt(e.target.value) || 0, progress.memo)}
                           min="0"
                           placeholder="장"
                         />
                         <span>장까지 읽음</span>
                       </div>
                       
                       <MemoTextArea
                         value={progress.memo}
                         onChange={(e) => handleProgressUpdate(groupId, progress.chapter, e.target.value)}
                         placeholder="독서 메모나 토론 주제를 적어보세요..."
                       />
                       
                       <UpdateButton onClick={() => alert('독서 진도가 저장되었습니다!')}>
                         💾 저장
                       </UpdateButton>
                     </ProgressSection>
                     
                     <QuickActions>
                       <ViewBoardButton onClick={() => handleViewBoard(groupId)}>
                         💬 게시판 보기
                       </ViewBoardButton>
                       <JoinButton 
                         onClick={() => alert(`${group.title} 모임원들과 연락할 수 있는 기능은 준비 중입니다!`)}
                         style={{ background: '#17a2b8' }}
                       >
                         👥 모임원 보기
                       </JoinButton>
                     </QuickActions>
                   </MyGroupCard>
                 );
               })}
             </div>
           )}
         </div>
       )}

       {activeTab === 'auth' && (
         <AuthContainer>
           <AuthTitle>🔒 본인인증</AuthTitle>
           
           <AuthStatus verified={isAuthenticated}>
             {isAuthenticated ? 
               `✅ 인증 완료 - ${userProfile.name}님 (${userProfile.phone})` : 
               '❌ 인증이 필요합니다'
             }
           </AuthStatus>
           
           {!isAuthenticated && (
             <>
               <AuthGuide>
                 <strong>💡 본인인증이 필요한 이유</strong><br/>
                 • 안전한 독서모임 환경 조성<br/>
                 • 신뢰할 수 있는 모임원들과의 만남<br/>
                 • 무책임한 참여나 노쇼 방지<br/>
                 • 시니어 층을 위한 안전장치
               </AuthGuide>
               
               <AuthStep>
                 <AuthStepTitle>1단계: 기본 정보 입력</AuthStepTitle>
                 <AuthForm onSubmit={(e) => { e.preventDefault(); handlePhoneAuth(); }}>
                   <div>
                     <Label>
                       <span>실명</span>
                       <RequiredBadge>필수</RequiredBadge>
                     </Label>
                     <AuthInput
                       type="text"
                       value={userProfile.name}
                       onChange={(e) => handleProfileChange('name', e.target.value)}
                       placeholder="홍길동"
                       required
                     />
                   </div>
                   
                   <div>
                     <Label>
                       <span>휴대폰 번호</span>
                       <RequiredBadge>필수</RequiredBadge>
                     </Label>
                     <AuthInput
                       type="tel"
                       value={userProfile.phone}
                       onChange={(e) => handleProfileChange('phone', e.target.value)}
                       placeholder="010-0000-0000"
                       maxLength={13}
                       required
                     />
                   </div>
                   
                   <AuthButton type="submit">
                     📱 휴대폰 인증하기
                   </AuthButton>
                 </AuthForm>
               </AuthStep>
             </>
           )}
           
           {isAuthenticated && (
             <AuthStep>
               <AuthStepTitle>추가 프로필 정보 (선택사항)</AuthStepTitle>
               <AuthForm onSubmit={(e) => { e.preventDefault(); alert('프로필이 업데이트되었습니다!'); }}>
                 <div>
                   <Label>닉네임</Label>
                   <AuthInput
                     type="text"
                     value={userProfile.nickname}
                     onChange={(e) => handleProfileChange('nickname', e.target.value)}
                     placeholder="독서왕"
                   />
                 </div>
                 
                 <div>
                   <Label>나이대</Label>
                   <Select
                     value={userProfile.age}
                     onChange={(e) => handleProfileChange('age', e.target.value)}
                     style={{ padding: '15px', fontSize: '18px' }}
                   >
                     <option value="">선택하세요</option>
                     <option value="50대">50대</option>
                     <option value="60대">60대</option>
                     <option value="70대">70대</option>
                     <option value="기타">기타</option>
                   </Select>
                 </div>
                 
                 <div>
                   <Label>관심 분야</Label>
                   <AuthInput
                     type="text"
                     value={userProfile.interests}
                     onChange={(e) => handleProfileChange('interests', e.target.value)}
                     placeholder="문학, 추리소설, 역사책 등"
                   />
                 </div>
                 
                 <AuthButton type="submit">
                   💾 프로필 업데이트
                 </AuthButton>
               </AuthForm>
               
               <AuthGuide style={{ marginTop: '20px' }}>
                 <strong>🎉 인증이 완료되었습니다!</strong><br/>
                 이제 모든 기능을 자유롭게 이용하실 수 있습니다.
               </AuthGuide>
             </AuthStep>
           )}
         </AuthContainer>
       )}
       
       {/* 확인 모달 */}
                {showConfirmModal && (
           <ModalOverlay onClick={handleCancel}>
             <ModalContent onClick={(e) => e.stopPropagation()}>
               <ModalTitle>{confirmTitle}</ModalTitle>
               <ModalMessage>{confirmMessage}</ModalMessage>
               <ModalButtons>
                 <ModalButton onClick={handleCancel}>
                   취소
                 </ModalButton>
                 <ModalButton primary onClick={handleConfirm}>
                   확인
                 </ModalButton>
               </ModalButtons>
             </ModalContent>
           </ModalOverlay>
         )}
    </GroupContainer>
  );
};

export default ReadingGroupSection; 