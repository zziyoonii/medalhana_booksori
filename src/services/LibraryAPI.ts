import { LatLng } from 'leaflet';

// 더미 데이터 - 경기도 도서관 (시립 중앙도서관 + 동네 작은도서관)
export const dummyLibraries = [
  // 수원시 도서관들
  {
    id: '1',
    name: '경기도립중앙도서관',
    address: '경기 수원시 영통구 월드컵로 235',
    phone: '031-249-4800',
    hours: '09:00-18:00',
    website: 'https://www.library.kr/',
    distance: 0.8,
    coordinates: { lat: 37.299, lng: 127.070 },
    type: '공공도서관'
  },
  {
    id: '2',
    name: '수원시립중앙도서관',
    address: '경기 수원시 영통구 광교로 183',
    phone: '031-228-4300',
    hours: '09:00-22:00',
    website: 'https://www.suwonlib.go.kr/',
    distance: 1.2,
    coordinates: { lat: 37.295, lng: 127.075 },
    type: '공공도서관'
  },
  {
    id: '3',
    name: '영통구립도서관',
    address: '경기 수원시 영통구 영통동 999-1',
    phone: '031-228-4350',
    hours: '09:00-20:00',
    website: 'https://www.suwonlib.go.kr/',
    distance: 1.5,
    coordinates: { lat: 37.293, lng: 127.073 },
    type: '구립도서관'
  },
  {
    id: '4',
    name: '광교작은도서관',
    address: '경기 수원시 영통구 광교동 1275',
    phone: '031-228-4380',
    hours: '10:00-18:00',
    website: '',
    distance: 1.8,
    coordinates: { lat: 37.291, lng: 127.077 },
    type: '작은도서관'
  },
  {
    id: '5',
    name: '망포작은도서관',
    address: '경기 수원시 영통구 망포동 578-2',
    phone: '031-228-4390',
    hours: '10:00-18:00',
    website: '',
    distance: 2.1,
    coordinates: { lat: 37.285, lng: 127.065 },
    type: '작은도서관'
  },
  
  // 성남시 도서관들
  {
    id: '6',
    name: '성남시립중앙도서관',
    address: '경기 성남시 분당구 양현로 346',
    phone: '031-729-4600',
    hours: '09:00-18:00',
    website: 'https://www.snlib.go.kr/',
    distance: 2.5,
    coordinates: { lat: 37.350, lng: 127.105 },
    type: '공공도서관'
  },
  {
    id: '7',
    name: '분당구립정자도서관',
    address: '경기 성남시 분당구 정자동 178-1',
    phone: '031-729-4650',
    hours: '09:00-20:00',
    website: 'https://www.snlib.go.kr/',
    distance: 2.8,
    coordinates: { lat: 37.365, lng: 127.110 },
    type: '구립도서관'
  },
  {
    id: '8',
    name: '서현작은도서관',
    address: '경기 성남시 분당구 서현동 271-3',
    phone: '031-729-4670',
    hours: '10:00-18:00',
    website: '',
    distance: 3.1,
    coordinates: { lat: 37.348, lng: 127.123 },
    type: '작은도서관'
  },
  {
    id: '9',
    name: '야탑작은도서관',
    address: '경기 성남시 분당구 야탑동 344-10',
    phone: '031-729-4680',
    hours: '10:00-18:00',
    website: '',
    distance: 3.3,
    coordinates: { lat: 37.341, lng: 127.128 },
    type: '작은도서관'
  },
  
  // 고양시 도서관들
  {
    id: '10',
    name: '고양시립중앙도서관',
    address: '경기 고양시 덕양구 고양대로 1955',
    phone: '031-8075-9300',
    hours: '09:00-18:00',
    website: 'https://www.goyanglib.go.kr/',
    distance: 4.2,
    coordinates: { lat: 37.650, lng: 126.830 },
    type: '공공도서관'
  },
  {
    id: '11',
    name: '일산동구립도서관',
    address: '경기 고양시 일산동구 백석동 1256',
    phone: '031-8075-9350',
    hours: '09:00-20:00',
    website: 'https://www.goyanglib.go.kr/',
    distance: 4.5,
    coordinates: { lat: 37.670, lng: 126.775 },
    type: '구립도서관'
  },
  {
    id: '12',
    name: '백석작은도서관',
    address: '경기 고양시 일산동구 백석동 1234-5',
    phone: '031-8075-9380',
    hours: '10:00-18:00',
    website: '',
    distance: 4.8,
    coordinates: { lat: 37.675, lng: 126.780 },
    type: '작은도서관'
  },
  {
    id: '13',
    name: '마두작은도서관',
    address: '경기 고양시 일산동구 마두동 775-2',
    phone: '031-8075-9390',
    hours: '10:00-18:00',
    website: '',
    distance: 5.1,
    coordinates: { lat: 37.655, lng: 126.785 },
    type: '작은도서관'
  },
  
  // 부천시 도서관들
  {
    id: '14',
    name: '부천시립중앙도서관',
    address: '경기 부천시 원미구 길주로 1',
    phone: '032-625-4700',
    hours: '09:00-18:00',
    website: 'https://www.bclib.go.kr/',
    distance: 3.1,
    coordinates: { lat: 37.490, lng: 126.783 },
    type: '공공도서관'
  },
  {
    id: '15',
    name: '원미구립도서관',
    address: '경기 부천시 원미구 중동 1033-3',
    phone: '032-625-4750',
    hours: '09:00-20:00',
    website: 'https://www.bclib.go.kr/',
    distance: 3.4,
    coordinates: { lat: 37.485, lng: 126.788 },
    type: '구립도서관'
  },
  {
    id: '16',
    name: '중동작은도서관',
    address: '경기 부천시 원미구 중동 1178-1',
    phone: '032-625-4780',
    hours: '10:00-18:00',
    website: '',
    distance: 3.7,
    coordinates: { lat: 37.488, lng: 126.791 },
    type: '작은도서관'
  },
  {
    id: '17',
    name: '역곡작은도서관',
    address: '경기 부천시 원미구 역곡동 201-8',
    phone: '032-625-4790',
    hours: '10:00-18:00',
    website: '',
    distance: 4.0,
    coordinates: { lat: 37.486, lng: 126.794 },
    type: '작은도서관'
  },
  
  // 안양시 도서관들
  {
    id: '18',
    name: '안양시립중앙도서관',
    address: '경기 안양시 만안구 문예로 30',
    phone: '031-389-0800',
    hours: '09:00-22:00',
    website: 'https://www.aylib.go.kr/',
    distance: 3.8,
    coordinates: { lat: 37.400, lng: 126.950 },
    type: '공공도서관'
  },
  {
    id: '19',
    name: '만안구립도서관',
    address: '경기 안양시 만안구 안양동 678-49',
    phone: '031-389-0850',
    hours: '09:00-20:00',
    website: 'https://www.aylib.go.kr/',
    distance: 4.1,
    coordinates: { lat: 37.395, lng: 126.955 },
    type: '구립도서관'
  },
  {
    id: '20',
    name: '안양동작은도서관',
    address: '경기 안양시 만안구 안양동 123-45',
    phone: '031-389-0880',
    hours: '10:00-18:00',
    website: '',
    distance: 4.4,
    coordinates: { lat: 37.398, lng: 126.958 },
    type: '작은도서관'
  },
  
  // 용인시 도서관들
  {
    id: '21',
    name: '용인시립중앙도서관',
    address: '경기 용인시 처인구 중부대로 1199',
    phone: '031-324-4800',
    hours: '09:00-18:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 4.8,
    coordinates: { lat: 37.230, lng: 127.208 },
    type: '공공도서관'
  },
  {
    id: '22',
    name: '수지구립도서관',
    address: '경기 용인시 수지구 수지동 1234-1',
    phone: '031-324-4850',
    hours: '09:00-20:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 5.1,
    coordinates: { lat: 37.325, lng: 127.095 },
    type: '구립도서관'
  },
  {
    id: '23',
    name: '풍덕천작은도서관',
    address: '경기 용인시 수지구 풍덕천동 1167-6',
    phone: '031-324-4880',
    hours: '10:00-18:00',
    website: '',
    distance: 5.4,
    coordinates: { lat: 37.328, lng: 127.098 },
    type: '작은도서관'
  },
  
  // 의정부시 도서관들
  {
    id: '24',
    name: '의정부시립중앙도서관',
    address: '경기 의정부시 체육로 99',
    phone: '031-828-4800',
    hours: '09:00-18:00',
    website: 'https://www.ujblib.go.kr/',
    distance: 5.3,
    coordinates: { lat: 37.738, lng: 127.033 },
    type: '공공도서관'
  },
  {
    id: '25',
    name: '가능동작은도서관',
    address: '경기 의정부시 가능동 487-3',
    phone: '031-828-4850',
    hours: '10:00-18:00',
    website: '',
    distance: 5.6,
    coordinates: { lat: 37.741, lng: 127.038 },
    type: '작은도서관'
  },
  {
    id: '26',
    name: '의정부동작은도서관',
    address: '경기 의정부시 의정부동 195-12',
    phone: '031-828-4860',
    hours: '10:00-18:00',
    website: '',
    distance: 5.9,
    coordinates: { lat: 37.744, lng: 127.041 },
    type: '작은도서관'
  }
];

export const dummyBooks = [
  {
    id: '1',
    title: '디지털 시대의 도서관 경영',
    author: '김도서',
    isbn: '9788901234567',
    publisher: '도서출판사',
    availability: {
      '1': { available: true, totalCopies: 3, checkedOut: 1 },
      '2': { available: false, totalCopies: 2, checkedOut: 2 },
      '3': { available: true, totalCopies: 4, checkedOut: 0 },
      '4': { available: true, totalCopies: 2, checkedOut: 1 },
      '5': { available: false, totalCopies: 1, checkedOut: 1 }
    }
  },
  {
    id: '2',
    title: '경기도 문화와 역사',
    author: '이문화',
    isbn: '9788901234568',
    publisher: '경기출판사',
    availability: {
      '1': { available: true, totalCopies: 5, checkedOut: 2 },
      '2': { available: true, totalCopies: 3, checkedOut: 0 },
      '3': { available: true, totalCopies: 2, checkedOut: 1 },
      '4': { available: false, totalCopies: 2, checkedOut: 2 },
      '5': { available: true, totalCopies: 3, checkedOut: 1 }
    }
  },
  {
    id: '3',
    title: '스마트 시니어 생활 가이드',
    author: '박시니어',
    isbn: '9788901234569',
    publisher: '시니어북스',
    availability: {
      '1': { available: false, totalCopies: 2, checkedOut: 2 },
      '2': { available: true, totalCopies: 4, checkedOut: 1 },
      '3': { available: true, totalCopies: 3, checkedOut: 0 },
      '4': { available: true, totalCopies: 1, checkedOut: 0 },
      '5': { available: true, totalCopies: 2, checkedOut: 0 }
    }
  }
];

// 더미 독서 모임 데이터
export const dummyReadingGroups = [
  {
    id: '1',
    name: '시니어 문학 동호회',
    description: '50대 이상을 위한 문학 작품 읽기 모임',
    meetingDay: '매주 수요일',
    meetingTime: '14:00-16:00',
    currentBook: '디지털 시대의 도서관 경영',
    members: 12,
    maxMembers: 15,
    libraryId: '1',
    libraryName: '경기도립중앙도서관'
  },
  {
    id: '2',
    name: '역사 탐구 클럽',
    description: '우리 지역 역사와 문화에 대해 알아보는 모임',
    meetingDay: '격주 토요일',
    meetingTime: '10:00-12:00',
    currentBook: '경기도 문화와 역사',
    members: 8,
    maxMembers: 12,
    libraryId: '2',
    libraryName: '수원시립중앙도서관'
  },
  {
    id: '3',
    name: '디지털 라이프 모임',
    description: '디지털 기기 활용법과 스마트한 생활을 배우는 모임',
    meetingDay: '매주 금요일',
    meetingTime: '15:00-17:00',
    currentBook: '스마트 시니어 생활 가이드',
    members: 15,
    maxMembers: 20,
    libraryId: '3',
    libraryName: '성남시립중앙도서관'
  }
];

// 경기도 공공데이터 API 관련 타입 및 서비스
export interface LibraryAPIConfig {
  baseURL: string;
  apiKey: string;
}

export interface GyeonggiLibraryData {
  libraryName: string;
  address: string;
  phoneNumber: string;
  website?: string;
  operatingHours: string;
  latitude?: number;
  longitude?: number;
  libraryType: string;
}

export interface BookSearchParams {
  query: string;
  libraryId?: string;
  startDate?: string;
  endDate?: string;
}

/**
 * 경기도 공공데이터 API 서비스 클래스
 * 실제 구현 시 아래 API들을 활용할 수 있습니다:
 * 
 * 1. 경기데이터드림 (data.gg.go.kr)
 *    - 경기도 도서관 정보 API
 *    - 도서관 시설 현황 API
 *    - 문화시설 통합 정보 API
 * 
 * 2. 도서관정보나루 (data4library.kr) 
 *    - 전국 도서관 표준 API
 *    - 도서 검색 API
 *    - 대출/예약 현황 API
 * 
 * 3. 서울열린데이터광장 등 시군별 Open API
 *    - 각 시군별 도서관 API
 *    - 지역별 문화시설 API
 */
export class LibraryAPIService {
  private config: LibraryAPIConfig;

  constructor(config: LibraryAPIConfig) {
    this.config = config;
  }

  /**
   * 경기도 도서관 목록 조회
   * 실제 API: https://openapi.gg.go.kr/LibraryStatus
   */
  async getLibraries(location?: LatLng, radius?: number): Promise<any[]> {
    try {
      // 경기데이터드림 도서관 현황 API 호출
      const apiUrl = `https://openapi.gg.go.kr/LibraryStatus`;
      const params = new URLSearchParams({
        KEY: this.config.apiKey,
        Type: 'json',
        pIndex: '1',
        pSize: '100'
      });

      const response = await fetch(`${apiUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 경기데이터드림 API 응답 구조에 맞게 데이터 변환
      if (data.LibraryStatus && data.LibraryStatus[1].row) {
        const libraries = data.LibraryStatus[1].row.map((item: any, index: number) => ({
          id: (index + 1).toString(),
          name: item.LBRRY_NM || '도서관명 없음',
          address: item.REFINE_ROADNM_ADDR || item.REFINE_LOTNO_ADDR || '주소 없음',
          phone: item.TELNO || '전화번호 없음',
          hours: '09:00-18:00', // 기본 운영시간 (API에서 제공되지 않음)
          website: item.HMPG_ADDR || '',
          distance: Math.round(Math.random() * 5 * 10) / 10, // 임시 거리 계산
          coordinates: {
            lat: parseFloat(item.REFINE_WGS84_LAT) || 37.5,
            lng: parseFloat(item.REFINE_WGS84_LOGT) || 127.0
          },
          type: '공공도서관'
        }));
        
        return libraries;
      }
      
      // API 응답이 예상과 다른 경우 더미 데이터 반환
      console.warn('API 응답 구조가 예상과 다름, 더미 데이터 사용');
      return dummyLibraries;
      
    } catch (error) {
      console.error('도서관 정보 조회 실패:', error);
      console.log('더미 데이터로 대체합니다.');
      return dummyLibraries; // 오류 시 더미 데이터 반환
    }
  }

  /**
   * 도서 검색
   * 실제 API: 도서관정보나루 API 또는 각 도서관별 API
   */
  async searchBooks(params: BookSearchParams): Promise<any[]> {
    try {
      // 실제 구현 시:
      // const response = await fetch(`${this.config.baseURL}/books/search`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...params, apiKey: this.config.apiKey })
      // });
      // const data = await response.json();
      // return data.result;
      
      // 현재는 더미 데이터 반환
      return dummyBooks.filter(book => 
        book.title.includes(params.query) || 
        book.author.includes(params.query)
      );
    } catch (error) {
      console.error('도서 검색 실패:', error);
      return [];
    }
  }

  /**
   * 도서 예약
   * 실제 API: 각 도서관별 대출/예약 시스템 API
   */
  async reserveBook(bookId: string, libraryId: string, userId: string): Promise<boolean> {
    try {
      // 실제 구현 시:
      // const response = await fetch(`${this.config.baseURL}/books/reserve`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ bookId, libraryId, userId, apiKey: this.config.apiKey })
      // });
      // return response.ok;
      
      // 현재는 더미 응답 반환
      console.log(`도서 예약 요청: 도서 ${bookId}, 도서관 ${libraryId}, 사용자 ${userId}`);
      return true;
    } catch (error) {
      console.error('도서 예약 실패:', error);
      return false;
    }
  }

  /**
   * 독서 모임 조회
   * 실제 API: 각 도서관별 프로그램 API 또는 커뮤니티 API
   */
  async getReadingGroups(libraryId?: string): Promise<any[]> {
    try {
      // 실제 구현 시:
      // const response = await fetch(`${this.config.baseURL}/reading-groups?libraryId=${libraryId}&apiKey=${this.config.apiKey}`);
      // const data = await response.json();
      // return data.result;
      
      // 현재는 더미 데이터 반환
      if (libraryId) {
        return dummyReadingGroups.filter(group => group.libraryId === libraryId);
      }
      return dummyReadingGroups;
    } catch (error) {
      console.error('독서 모임 조회 실패:', error);
      return [];
    }
  }

  /**
   * 독서 모임 가입
   */
  async joinReadingGroup(groupId: string, userId: string): Promise<boolean> {
    try {
      // 실제 구현 시:
      // const response = await fetch(`${this.config.baseURL}/reading-groups/${groupId}/join`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId, apiKey: this.config.apiKey })
      // });
      // return response.ok;
      
      // 현재는 더미 응답 반환
      console.log(`독서 모임 가입 요청: 모임 ${groupId}, 사용자 ${userId}`);
      return true;
    } catch (error) {
      console.error('독서 모임 가입 실패:', error);
      return false;
    }
  }

  /**
   * 독서 모임 생성
   */
  async createReadingGroup(groupData: any): Promise<boolean> {
    try {
      // 실제 구현 시:
      // const response = await fetch(`${this.config.baseURL}/reading-groups`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...groupData, apiKey: this.config.apiKey })
      // });
      // return response.ok;
      
      // 현재는 더미 응답 반환
      console.log('독서 모임 생성 요청:', groupData);
      return true;
    } catch (error) {
      console.error('독서 모임 생성 실패:', error);
      return false;
    }
  }
}

// 기본 API 설정 (환경변수에서 로드)
export const defaultLibraryAPI = new LibraryAPIService({
  baseURL: process.env.REACT_APP_GYEONGGI_API_URL || 'https://data.gg.go.kr/portal/data/service',
  apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || 'YOUR_API_KEY_HERE'
});

// API 키 설정 가이드
export const API_SETUP_GUIDE = {
  title: '경기도 공공데이터 API 연동 가이드',
  steps: [
    {
      step: 1,
      title: '경기데이터드림 회원가입',
      description: 'https://data.gg.go.kr 에서 회원가입',
      url: 'https://data.gg.go.kr'
    },
    {
      step: 2,
      title: 'API 키 발급',
      description: '도서관 정보 API 서비스 신청 및 키 발급',
      note: '승인까지 1-2일 소요'
    },
    {
      step: 3,
      title: '환경변수 설정',
      description: '.env 파일에 API 키 추가',
      code: `REACT_APP_GYEONGGI_API_URL=https://data.gg.go.kr/portal/data/service
REACT_APP_GYEONGGI_API_KEY=your_api_key_here`
    },
    {
      step: 4,
      title: '도서관정보나루 연동',
      description: 'data4library.kr에서 추가 도서 정보 API 활용',
      url: 'https://www.data4library.kr'
    }
  ],
  additionalAPIs: [
    {
      name: '경기데이터드림',
      url: 'https://data.gg.go.kr',
      description: '경기도 공공데이터 포털',
      apis: [
        '도서관 시설 정보',
        '문화시설 현황',
        '공공시설 위치 정보'
      ]
    },
    {
      name: '도서관정보나루',
      url: 'https://www.data4library.kr',
      description: '국가도서관통계시스템',
      apis: [
        '전국 도서관 정보',
        '도서 검색',
        '대출 통계'
      ]
    },
    {
      name: '각 시군 Open API',
      description: '수원시, 성남시 등 각 지역별 API',
      apis: [
        '지역별 도서관 API',
        '문화 프로그램 정보',
        '시설 예약 시스템'
      ]
    }
  ]
}; 

// 도서관 정보나루 API 서비스
const BASE_URL = 'http://data4library.kr/api';

// API 인증키 (실제 인증키로 설정)
const AUTH_KEY = '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';

// 지역 코드 매핑 (경기도 기준)
const REGION_CODES = {
  '강남구': '31',
  '서초구': '31', 
  '수원시': '31',
  '성남시': '31',
  '부천시': '31',
  '전체': '31' // 경기도 전체
};

// 연령대 매핑 (50-60대 중심)
const AGE_GROUPS = '40;50;60';

export interface PopularBookData {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  loanCount: number;
  category: string;
  publishYear: string;
}

export interface ApiResponse {
  response: {
    docs: PopularBookData[];
    numFound: number;
    start: number;
  };
}

/**
 * 인기 대출 도서 조회 API
 */
export const fetchPopularBooks = async (
  region: string = '전체',
  startDate: string = '2025-01-01',
  endDate: string = '2025-07-12'
): Promise<PopularBookData[]> => {
  try {
    const regionCode = REGION_CODES[region as keyof typeof REGION_CODES] || '31';
    
    const params = new URLSearchParams({
      authKey: AUTH_KEY,
      startDt: startDate,
      endDt: endDate,
      age: AGE_GROUPS,
      region: regionCode,
      format: 'json',
      pageNo: '1',
      pageSize: '5' // TOP 5 조회
    });

    const url = `${BASE_URL}/loanItemSrch?${params}`;
    
    console.log('API 호출 URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    const data = await response.json();
    
    // API 에러 체크
    if (data.response && data.response.error) {
      console.warn('API 에러:', data.response.error);
      if (data.response.error.includes('활성화')) {
        console.log('💡 API 키가 아직 활성화되지 않았습니다. 더미 데이터를 사용합니다.');
      }
      throw new Error(data.response.error);
    }
    
    // API 응답 데이터 구조에 맞게 변환
    const books: PopularBookData[] = data.response.docs?.map((book: any, index: number) => ({
      id: book.isbn || `book_${index}`,
      title: book.title || '제목 없음',
      author: book.author || '작가 미상',
      publisher: book.publisher || '출판사 미상',
      isbn: book.isbn || '',
      loanCount: book.loanCount || 0,
      category: book.category || '일반',
      publishYear: book.publishYear || '2023'
    })) || [];
    
    return books;
    
  } catch (error) {
    console.error('인기도서 API 호출 오류:', error);
    
    // API 호출 실패시 더미 데이터 반환
    return getFallbackPopularBooks();
  }
};

/**
 * API 호출 실패시 사용할 더미 데이터
 */
const getFallbackPopularBooks = (): PopularBookData[] => {
  return [
    {
      id: '1',
      title: '82년생 김지영',
      author: '조남주',
      publisher: '민음사',
      isbn: '9788937473722',
      loanCount: 1247,
      category: '소설',
      publishYear: '2016'
    },
    {
      id: '2',
      title: '미드나잇 라이브러리',
      author: '매트 헤이그',
      publisher: '인플루엔셜',
      isbn: '9791197377109',
      loanCount: 1156,
      category: '소설',
      publishYear: '2020'
    },
    {
      id: '3',
      title: '완전한 행복',
      author: '정유정',
      publisher: '은행나무',
      isbn: '9788956609485',
      loanCount: 1089,
      category: '소설',
      publishYear: '2021'
    },
    {
      id: '4',
      title: '사피엔스',
      author: '유발 하라리',
      publisher: '김영사',
      isbn: '9788934972464',
      loanCount: 987,
      category: '인문',
      publishYear: '2015'
    },
    {
      id: '5',
      title: '아몬드',
      author: '손원평',
      publisher: '창비',
      isbn: '9788936434267',
      loanCount: 876,
      category: '소설',
      publishYear: '2017'
    }
  ];
};

/**
 * 환경 설정 확인
 */
export const checkApiConfiguration = (): boolean => {
  if (!AUTH_KEY || AUTH_KEY.length < 10) {
    console.warn('⚠️ API 인증키가 설정되지 않았습니다. 더미 데이터를 사용합니다.');
    return false;
  }
  console.log('✅ API 인증키가 설정되었습니다.');
  return true;
};

/**
 * 실제 API 사용 예시
 */
export const exampleApiUsage = async () => {
  try {
    // 수원시 지역의 최근 6개월 인기도서 조회
    const books = await fetchPopularBooks('수원시', '2024-07-01', '2024-12-31');
    console.log('인기도서 목록:', books);
    return books;
  } catch (error) {
    console.error('API 사용 예시 오류:', error);
    return [];
  }
}; 