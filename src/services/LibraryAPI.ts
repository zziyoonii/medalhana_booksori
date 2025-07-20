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
    name: '기흥구립도서관',
    address: '경기 용인시 기흥구 구갈동 567-8',
    phone: '031-324-4880',
    hours: '09:00-20:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 5.4,
    coordinates: { lat: 37.275, lng: 127.115 },
    type: '구립도서관'
  },
  {
    id: '23-1',
    name: '처인도서관',
    address: '경기 용인시 처인구 금령로 33번길 15',
    phone: '031-324-4670',
    hours: '09:00-18:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 5.6,
    coordinates: { lat: 37.236, lng: 127.200 },
    type: '공공도서관'
  },
  {
    id: '23-2',
    name: '서농도서관',
    address: '경기 용인시 기흥구 서천서로 83',
    phone: '031-324-4680',
    hours: '09:00-18:00',
    website: '',
    distance: 5.8,
    coordinates: { lat: 37.241, lng: 127.077 },
    type: '공공도서관'
  },
  {
    id: '23-3',
    name: '포곡도서관',
    address: '경기 용인시 처인구 포곡읍 에버랜드로 860',
    phone: '031-324-4690',
    hours: '09:00-18:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 6.0,
    coordinates: { lat: 37.294, lng: 127.202 },
    type: '공공도서관'
  },
  {
    id: '23-4',
    name: '흥덕도서관',
    address: '경기 용인시 기흥구 흥덕중앙로 120',
    phone: '031-324-4700',
    hours: '09:00-18:00',
    website: 'https://www.yonginlib.go.kr/',
    distance: 5.2,
    coordinates: { lat: 37.238, lng: 127.119 },
    type: '공공도서관'
  },
  
  // 화성시 도서관들
  {
    id: '24',
    name: '화성시립중앙도서관',
    address: '경기 화성시 남양읍 시청로 155',
    phone: '031-369-6800',
    hours: '09:00-18:00',
    website: 'https://www.hscitylib.go.kr/',
    distance: 6.2,
    coordinates: { lat: 37.200, lng: 126.831 },
    type: '공공도서관'
  },
  {
    id: '25',
    name: '동탄구립도서관',
    address: '경기 화성시 동탄면 동탄대로 300',
    phone: '031-369-6850',
    hours: '09:00-20:00',
    website: 'https://www.hscitylib.go.kr/',
    distance: 6.5,
    coordinates: { lat: 37.205, lng: 127.078 },
    type: '구립도서관'
  }
];

// 더미 도서 데이터
export const dummyBooks = [
  {
    id: 1,
    title: '82년생 김지영',
    author: '조남주',
    publisher: '민음사',
    isbn: '9788937473722',
    category: '소설',
    publishYear: '2016',
    description: '한국 여성의 현실을 담은 화제의 소설',
    imageUrl: ''
  },
  {
    id: 2,
    title: '미드나잇 라이브러리',
    author: '매트 헤이그',
    publisher: '인플루엔셜',
    isbn: '9791197377109',
    category: '소설',
    publishYear: '2020',
    description: '후회와 선택에 관한 철학적 소설',
    imageUrl: ''
  },
  {
    id: 3,
    title: '사피엔스',
    author: '유발 하라리',
    publisher: '김영사',
    isbn: '9788934972464',
    category: '인문',
    publishYear: '2015',
    description: '인류의 역사를 다룬 베스트셀러',
    imageUrl: ''
  },
  {
    id: 4,
    title: '아몬드',
    author: '손원평',
    publisher: '창비',
    isbn: '9788936434267',
    category: '소설',
    publishYear: '2017',
    description: '감정을 느끼지 못하는 소년의 성장 소설',
    imageUrl: ''
  },
  {
    id: 5,
    title: '정의란 무엇인가',
    author: '마이클 샌델',
    publisher: '김영사',
    isbn: '9788934942467',
    category: '철학',
    publishYear: '2010',
    description: '정의에 대한 철학적 탐구',
    imageUrl: ''
  }
];

// 더미 독서모임 데이터
export const dummyReadingGroups = [
  {
    id: 1,
    name: '시니어 독서 클럽',
    description: '50-60대를 위한 독서 모임입니다.',
    libraryId: '1',
    libraryName: '경기도립중앙도서관',
    meetingDate: '2024-01-15',
    meetingTime: '14:00',
    maxMembers: 15,
    currentMembers: 8,
    bookTitle: '82년생 김지영',
    bookAuthor: '조남주',
    category: '소설',
    difficulty: '쉬움',
    meetingType: 'library',
    organizer: '김도서',
    contact: '010-1234-5678',
    status: 'active'
  },
  {
    id: 2,
    name: '역사 탐구 모임',
    description: '한국사와 세계사를 함께 읽는 모임',
    libraryId: '2',
    libraryName: '수원시립중앙도서관',
    meetingDate: '2024-01-20',
    meetingTime: '10:00',
    maxMembers: 12,
    currentMembers: 6,
    bookTitle: '사피엔스',
    bookAuthor: '유발 하라리',
    category: '인문',
    difficulty: '보통',
    meetingType: 'library',
    organizer: '박역사',
    contact: '010-2345-6789',
    status: 'active'
  }
];

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
  pageNo?: number;
  pageSize?: number;
}

export interface BookSearchResult {
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
  availability?: LibraryAvailability[];
}

export interface LibraryAvailability {
  libraryId: string;
  libraryName: string;
  available: boolean;
  loanable: boolean;
  dueDate?: string;
  shelfLocation?: string; // 배가기호 (shelf_loc_code)
  volumeCount?: number;   // 소장권수 (vol)
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
   * 실제 API: https://openapi.gg.go.kr/TBGGIBLLBR
   */
  async getLibraries(location?: LatLng, radius?: number): Promise<any[]> {
    try {
      // 경기데이터드림 도서관 현황 API 호출 (올바른 엔드포인트)
      const apiUrl = `https://openapi.gg.go.kr/TBGGIBLLBR`;
      const params = new URLSearchParams({
        KEY: process.env.REACT_APP_GYEONGGI_API_KEY || '8b62aa70e514468596e9324d064d582d',
        Type: 'json',
        pIndex: '1',
        pSize: '500' // 검색 범위 확대
      });

      const response = await fetch(`${apiUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 경기데이터드림 API 응답 구조에 맞게 데이터 변환
      let libraries = [];
      if (data.TBGGIBLLBR && data.TBGGIBLLBR[1] && data.TBGGIBLLBR[1].row) {
        libraries = data.TBGGIBLLBR[1].row.map((item: any, index: number) => ({
          id: (index + 1).toString(),
          name: item.LBRRY_NM || '도서관명 없음',
          address: item.REFINE_ROADNM_ADDR || item.REFINE_LOTNO_ADDR || '주소 없음',
          phone: item.TELNO || '전화번호 없음',
          hours: item.OPER_TIME || '09:00-18:00', // 실제 운영시간 사용
          website: item.HMPG_ADDR || '',
          distance: Math.round(Math.random() * 5 * 10) / 10, // 임시 거리 계산
          coordinates: {
            lat: parseFloat(item.REFINE_WGS84_LAT) || 37.5,
            lng: parseFloat(item.REFINE_WGS84_LOGT) || 127.0
          },
          type: '공공도서관'
        }));
      }

      // 용인시 도서관들 수동 추가 (API에서 검색되지 않는 경우 대비)
      const additionalLibraries = [
        {
          id: 'yongin_central',
          name: '용인시립중앙도서관',
          address: '경기도 용인시 처인구 중부대로 1199',
          phone: '031-324-4600',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 1.2,
          coordinates: { lat: 37.231, lng: 127.208 },
          type: '공공도서관'
        },
        {
          id: 'giheung_lib',
          name: '기흥도서관',
          address: '경기도 용인시 기흥구 기흥로 19',
          phone: '031-324-4660',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 1.8,
          coordinates: { lat: 37.275, lng: 127.115 },
          type: '공공도서관'
        },
        {
          id: 'suji_lib',
          name: '수지도서관',
          address: '경기도 용인시 수지구 포은대로 435',
          phone: '031-324-4650',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 2.1,
          coordinates: { lat: 37.324, lng: 127.094 },
          type: '공공도서관'
        },
        {
          id: 'cheoin_lib',
          name: '처인도서관',
          address: '경기도 용인시 처인구 금령로 33번길 15',
          phone: '031-324-4670',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 2.3,
          coordinates: { lat: 37.236, lng: 127.200 },
          type: '공공도서관'
        },
        {
          id: 'seongnam_lib',
          name: '서농도서관',
          address: '경기도 용인시 기흥구 서천서로 83',
          phone: '031-324-4680',
          hours: '09:00-18:00',
          website: '',
          distance: 2.5,
          coordinates: { lat: 37.241, lng: 127.077 },
          type: '공공도서관'
        },
        {
          id: 'pogok_lib',
          name: '포곡도서관',
          address: '경기도 용인시 처인구 포곡읍 에버랜드로 860',
          phone: '031-324-4690',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 3.2,
          coordinates: { lat: 37.294, lng: 127.202 },
          type: '공공도서관'
        },
        {
          id: 'heungdeok_lib',
          name: '흥덕도서관',
          address: '경기도 용인시 기흥구 흥덕중앙로 120',
          phone: '031-324-4700',
          hours: '09:00-18:00',
          website: 'https://www.yonginlib.go.kr',
          distance: 2.8,
          coordinates: { lat: 37.238, lng: 127.119 },
          type: '공공도서관'
        }
      ];

      return [...libraries, ...additionalLibraries];
      
    } catch (error) {
      console.error('도서관 정보 조회 실패:', error);
      console.log('더미 데이터로 대체합니다.');
      return dummyLibraries; // 오류 시 더미 데이터 반환
    }
  }

  /**
   * 도서 검색 - 도서관정보나루 API 활용
   * 실제 API: http://data4library.kr/api/srchBooks
   */
  async searchBooks(params: BookSearchParams): Promise<BookSearchResult[]> {
    try {
      const apiUrl = 'https://data4library.kr/api/srchBooks';
      
      // 검색어 전처리 및 인코딩
      const cleanQuery = params.query.trim().replace(/\s+/g, ' ');
      
      // 검색어 전처리 - 부가 정보 제거
      let searchQuery = cleanQuery;
      // ":김호연 장편소설" 같은 부가 정보 제거
      searchQuery = searchQuery.replace(/\s*:\s*[^:]*$/, '');
      // 괄호 안의 부가 정보 제거
      searchQuery = searchQuery.replace(/\s*\([^)]*\)/, '');
      // 특수문자 정리
      searchQuery = searchQuery.replace(/[^\w\s가-힣]/g, ' ').replace(/\s+/g, ' ').trim();
      
      console.log('🔍 원본 검색어:', cleanQuery);
      console.log('🔍 정리된 검색어:', searchQuery);
      
      // 정확한 제목 검색을 위해 따옴표로 감싸기
      const exactTitle = `"${searchQuery}"`;
      
      const searchParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        title: exactTitle,
        pageNo: (params.pageNo || 1).toString(),
        pageSize: (params.pageSize || 10).toString(),
        format: 'json'
      });

      console.log('🔍 도서 검색 API 호출:', `${apiUrl}?${searchParams}`);
      console.log('🔍 검색어:', cleanQuery);
      
      const response = await fetch(`${apiUrl}?${searchParams}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      console.log('📊 도서검색 API 전체 응답:', JSON.stringify(data, null, 2));
      console.log('🔍 API 응답 타입:', typeof data);
      console.log('🔍 API 응답 키들:', Object.keys(data));
      console.log('🔍 API 응답 길이:', JSON.stringify(data).length);
      
      // API 응답 구조 분석
      console.log('🔍 도서검색 API 응답 구조 분석:');
      console.log('- data.response:', data.response);
      console.log('- data.response.docs:', data.response?.docs);
      console.log('- data.response.numFound:', data.response?.numFound);
      
      // API 에러 체크
      if (data.response && data.response.error) {
        console.error('❌ API 에러 발생:', data.response.error);
        throw new Error(data.response.error);
      }
      
      if (data.error) {
        console.error('❌ API 에러 발생:', data.error);
        throw new Error(data.error);
      }
      
      // API 성공 여부 확인
      if (data.response && data.response.result && data.response.result === 'success') {
        console.log('✅ API 호출 성공');
      } else if (data.response && data.response.numFound !== undefined) {
        console.log('✅ API 호출 성공 (numFound 있음)');
      } else {
        console.log('⚠️ API 응답 구조 확인 필요');
      }
      
      // 결과가 없는 경우 다른 방식으로 재시도
      if (data.response && data.response.numFound === 0) {
        console.log('⚠️ 첫 번째 검색에서 결과 없음, 다양한 방식으로 재시도');
        
        // 1. 키워드 검색으로 재시도
        const keywordSearchParams = new URLSearchParams({
          authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
          keyword: searchQuery,
          pageNo: (params.pageNo || 1).toString(),
          pageSize: (params.pageSize || 10).toString(),
          format: 'json'
        });
        
        console.log('🔍 키워드로 재검색:', `${apiUrl}?${keywordSearchParams}`);
        
        const keywordResponse = await fetch(`${apiUrl}?${keywordSearchParams}`);
        if (keywordResponse.ok) {
          const keywordData = await keywordResponse.json();
          console.log('📊 키워드 검색 결과:', JSON.stringify(keywordData, null, 2));
          
          if (keywordData.response && keywordData.response.numFound > 0) {
            data.response = keywordData.response;
            console.log('✅ 키워드 검색으로 결과 찾음');
          }
        }
        
        // 2. 여전히 결과가 없으면 작가명으로 검색
        if (data.response && data.response.numFound === 0) {
          console.log('🔍 작가명으로 재검색 시도');
          
          // "김호연" 같은 저자명 추출
          const authorMatch = cleanQuery.match(/김호연|한강|조정래|김영하|이문열|박경리/);
          const authorName = authorMatch ? authorMatch[0] : searchQuery;
          
          const authorSearchParams = new URLSearchParams({
            authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
            author: authorName,
            pageNo: (params.pageNo || 1).toString(),
            pageSize: (params.pageSize || 10).toString(),
            format: 'json'
          });
          
          console.log('🔍 작가명으로 재검색:', `${apiUrl}?${authorSearchParams}`);
          
          const authorResponse = await fetch(`${apiUrl}?${authorSearchParams}`);
          if (authorResponse.ok) {
            const authorData = await authorResponse.json();
            console.log('📊 작가명 검색 결과:', JSON.stringify(authorData, null, 2));
            
            if (authorData.response && authorData.response.numFound > 0) {
              data.response = authorData.response;
              console.log('✅ 작가명 검색으로 결과 찾음');
            }
          }
        }
        
        // 3. 마지막으로 더 짧은 검색어로 시도
        if (data.response && data.response.numFound === 0) {
          console.log('🔍 짧은 검색어로 재검색 시도');
          
          const shortQuery = searchQuery.split(' ')[0]; // 첫 번째 단어만 사용
          if (shortQuery && shortQuery.length > 1) {
            const shortSearchParams = new URLSearchParams({
              authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
              keyword: shortQuery,
              pageNo: (params.pageNo || 1).toString(),
              pageSize: (params.pageSize || 10).toString(),
              format: 'json'
            });
            
            console.log('🔍 짧은 검색어로 재검색:', `${apiUrl}?${shortSearchParams}`);
            
            const shortResponse = await fetch(`${apiUrl}?${shortSearchParams}`);
            if (shortResponse.ok) {
              const shortData = await shortResponse.json();
              console.log('📊 짧은 검색어 결과:', JSON.stringify(shortData, null, 2));
              
              if (shortData.response && shortData.response.numFound > 0) {
                data.response = shortData.response;
                console.log('✅ 짧은 검색어로 결과 찾음');
              }
            }
          }
        }
      }
      
      // API 응답 구조 확인 및 데이터 추출 - 더 상세한 분석
      console.log('🔍 API 응답 구조 상세 분석:');
      console.log('- data:', data);
      console.log('- data.response:', data.response);
      console.log('- data.response.docs:', data.response?.docs);
      console.log('- data.response.book:', data.response?.book);
      console.log('- data.response.result:', data.response?.result);
      console.log('- data.docs:', data.docs);
      console.log('- data.book:', data.book);
      console.log('- data.result:', data.result);
      
      let rawBooks = [];
      
      // 다양한 응답 구조 시도
      if (data.response && data.response.docs && data.response.docs.length > 0) {
        console.log('✅ data.response.docs에서 데이터 추출');
        rawBooks = data.response.docs;
      } else if (data.response && data.response.book) {
        console.log('✅ data.response.book에서 데이터 추출');
        rawBooks = Array.isArray(data.response.book) ? data.response.book : [data.response.book];
      } else if (data.response && data.response.result) {
        console.log('✅ data.response.result에서 데이터 추출');
        rawBooks = data.response.result.docs || data.response.result;
      } else if (data.docs && data.docs.length > 0) {
        console.log('✅ data.docs에서 데이터 추출');
        rawBooks = data.docs;
      } else if (data.book) {
        console.log('✅ data.book에서 데이터 추출');
        rawBooks = Array.isArray(data.book) ? data.book : [data.book];
      } else if (data.result) {
        console.log('✅ data.result에서 데이터 추출');
        rawBooks = data.result.docs || data.result;
      } else if (data.response && Array.isArray(data.response)) {
        console.log('✅ data.response 배열에서 데이터 추출');
        rawBooks = data.response;
      } else if (Array.isArray(data)) {
        console.log('✅ data 배열에서 데이터 추출');
        rawBooks = data;
      }
      
      // 각 docs 요소에서 doc 객체 추출 (중첩된 구조 처리)
      if (rawBooks.length > 0) {
        console.log('🔍 중첩된 구조 처리 시작');
        rawBooks = rawBooks.map((item: any) => {
          console.log('📖 처리 중인 아이템:', item);
          
          // item이 직접 도서 데이터인지 확인
          if (item.bookname || item.title) {
            console.log('✅ 직접 도서 데이터로 인식');
            return item;
          }
          // 또는 item.doc 형태인지 확인
          if (item.doc) {
            console.log('✅ item.doc에서 도서 데이터 추출');
            return item.doc;
          }
          // 또는 item.book 형태인지 확인
          if (item.book) {
            console.log('✅ item.book에서 도서 데이터 추출');
            return item.book;
          }
          // 또는 item.result 형태인지 확인
          if (item.result) {
            console.log('✅ item.result에서 도서 데이터 추출');
            return item.result;
          }
          
          console.log('⚠️ 알 수 없는 구조:', item);
          return item;
        }).filter((doc: any) => {
          const hasTitle = doc && (doc.bookname || doc.title);
          console.log(`📚 필터링: ${hasTitle ? '유지' : '제거'} - ${doc?.bookname || doc?.title || '제목 없음'}`);
          return hasTitle;
        });
      }
      
      console.log('📚 원본 도서 데이터:', rawBooks);
      
      if (rawBooks && rawBooks.length > 0) {
        const books: BookSearchResult[] = rawBooks
          .filter((book: any) => {
            console.log('📖 개별 도서 데이터 확인:', book);
            const hasTitle = book.bookname || book.title;
            return hasTitle && hasTitle.trim() !== '';
          })
          .filter((book: any) => {
            // 정확한 제목 매칭 확인
            const bookTitle = (book.bookname || book.title || '').trim();
            const searchTitle = searchQuery.trim();
            
            // 정확한 제목 매칭 또는 부분 매칭 허용
            const isExactMatch = bookTitle === searchTitle;
            const containsSearchTerm = bookTitle.includes(searchTitle);
            
            console.log(`🔍 제목 매칭 확인: "${bookTitle}" vs "${searchTitle}"`);
            console.log(`   - 정확한 매칭: ${isExactMatch}`);
            console.log(`   - 포함 여부: ${containsSearchTerm}`);
            
            // 정확한 매칭 우선, 없으면 포함된 것들
            return isExactMatch || containsSearchTerm;
          })
          .sort((a: any, b: any) => {
            // 정확한 매칭을 우선 정렬
            const aTitle = (a.bookname || a.title || '').trim();
            const bTitle = (b.bookname || b.title || '').trim();
            const searchTitle = searchQuery.trim();
            
            const aExactMatch = aTitle === searchTitle;
            const bExactMatch = bTitle === searchTitle;
            
            if (aExactMatch && !bExactMatch) return -1;
            if (!aExactMatch && bExactMatch) return 1;
            return 0;
          })
          .map((book: any, index: number) => {
            // 저자 정보 파싱 개선
            console.log('🔍 저자 파싱 시작:', book);
            let author = '작가 미상';
            if (book.authors) {
              author = book.authors;
              console.log('✅ authors 필드에서 저자 찾음:', author);
            } else if (book.author) {
              author = book.author;
              console.log('✅ author 필드에서 저자 찾음:', author);
            } else if (book.writer) {
              author = book.writer;
              console.log('✅ writer 필드에서 저자 찾음:', author);
            } else if (book.author_name) {
              author = book.author_name;
              console.log('✅ author_name 필드에서 저자 찾음:', author);
            } else {
              console.log('❌ 저자 정보를 찾을 수 없음');
            }

            // 출판사 정보 파싱 개선
            console.log('🔍 출판사 파싱 시작:', book);
            let publisher = '출판사 정보 없음';
            if (book.publisher) {
              publisher = book.publisher;
              console.log('✅ publisher 필드에서 출판사 찾음:', publisher);
            } else if (book.pub_nm) {
              publisher = book.pub_nm;
              console.log('✅ pub_nm 필드에서 출판사 찾음:', publisher);
            } else if (book.publisher_name) {
              publisher = book.publisher_name;
              console.log('✅ publisher_name 필드에서 출판사 찾음:', publisher);
            } else if (book.pub) {
              publisher = book.pub;
              console.log('✅ pub 필드에서 출판사 찾음:', publisher);
            } else {
              console.log('❌ 출판사 정보를 찾을 수 없음');
            }

            // 저자 정보에서 "지은이:" 접두사 제거
            if (author && author.includes('지은이:')) {
              author = author.replace('지은이:', '').trim();
              console.log('🔧 저자 정보 정리:', author);
            }

            // 출판사 정보에서 불필요한 접두사 제거
            if (publisher && publisher.includes('출판사:')) {
              publisher = publisher.replace('출판사:', '').trim();
              console.log('🔧 출판사 정보 정리:', publisher);
            }

            const result = {
              id: book.isbn13 || book.isbn || `book_${index}`,
              title: (book.bookname || book.title || '').trim(),
              author: author,
              publisher: publisher,
              isbn: book.isbn13 || book.isbn || '',
              category: book.class_nm || book.category || '일반',
              publishYear: book.publication_year || book.publishYear || '2023',
              description: book.description || '',
              imageUrl: book.bookImageURL || book.imageUrl || '',
              loanCount: parseInt(book.loan_count || book.loanCount || '0') || 0
            };

            console.log('✅ 최종 변환된 도서 정보:', result);
            return result;
          });
        
        console.log('✅ 변환된 도서 데이터:', books);
        console.log(`🎯 제목이 있는 도서 ${books.length}권을 찾았습니다.`);
        return books;
      }
      
      // API 응답이 예상과 다른 경우 검색어 기반 더미 데이터 생성
      console.warn('⚠️ API 응답 구조가 예상과 다름, 검색어 기반 더미 데이터 생성');
      return this.getDummyBooksForQuery(params.query);
      
    } catch (error) {
      console.error('💥 도서 검색 실패:', error);
      console.log('🔄 검색어 기반 더미 데이터로 대체합니다.');
      return this.getDummyBooksForQuery(params.query);
    }
  }

  /**
   * 검색어 기반 더미 데이터 생성
   */
  private getDummyBooksForQuery(query: string): BookSearchResult[] {
    const searchTerm = query.trim();
    
    // 검색어에 따른 맞춤 더미 데이터
    const dummyBooks: BookSearchResult[] = [
      {
        id: `dummy_${Date.now()}`,
        title: searchTerm,
        author: '작가 미상',
        publisher: '출판사 정보 없음',
        isbn: '9788000000000',
        category: '일반',
        publishYear: '2023',
        description: `"${searchTerm}"에 대한 검색 결과입니다. 정확한 도서 정보는 직접 도서관에 문의해 주세요.`,
        imageUrl: '',
        loanCount: 0
      }
    ];
    
    console.log(`🎯 검색어 "${searchTerm}" 기반 더미 데이터 생성:`, dummyBooks);
    return dummyBooks;
  }



  /**
   * 도서 소장 현황 조회 - 도서관정보나루 API 활용
   * 실제 API: http://data4library.kr/api/libSrchByBook
   * 배가기호(shelf_loc_code)와 소장권수(vol) 정보 포함
   */
  async getBookAvailability(isbn: string, region: string = '41'): Promise<LibraryAvailability[]> {
    try {
      console.log('🔍 도서 소장 현황 조회 시작:', { isbn, region });
      
      // 1. 먼저 도서 검색으로 ISBN 확인
      const searchUrl = 'https://data4library.kr/api/srchBooks';
      const searchParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        isbn: isbn,
        format: 'json',
        pageNo: '1',
        pageSize: '1'
      });
      
      console.log('📚 도서 검색 API 호출:', `${searchUrl}?${searchParams}`);
      
      const searchResponse = await fetch(`${searchUrl}?${searchParams}`);
      if (!searchResponse.ok) {
        throw new Error(`도서 검색 API 호출 실패: ${searchResponse.status}`);
      }
      
      const searchData = await searchResponse.json();
      console.log('📊 도서 검색 결과:', JSON.stringify(searchData, null, 2));
      
      // 2. 도서관 목록 조회 (실제 API 엔드포인트 사용) - 먼저 도서관 목록을 가져옴
      console.log('🏛️ 도서관 목록 API 호출 시도...');
      
      const regionLibUrl = 'https://data4library.kr/api/libSrch';
      const regionLibParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        format: 'json',
        pageNo: '1',
        pageSize: '100' // 더 많은 도서관 정보 가져오기
      });
      
      // 지역별 필터링 - 올바른 지역코드 사용
      const regionMapping: { [key: string]: string } = {
        '수원시': '41110', // 수원시
        '성남시': '41130', // 성남시
        '고양시': '41280', // 고양시
        '용인시': '41460', // 용인시
        '기흥구': '41461', // 용인시 기흥구
        '수지구': '41463', // 용인시 수지구
        '처인구': '41462', // 용인시 처인구
        '경기도': '41',    // 경기도 전체
        '경기': '41'       // 경기도 전체
      };
      
      const regionCode = regionMapping[region];
      if (regionCode) {
        regionLibParams.append('region', regionCode);
        console.log(`🗺️ 지역 필터링: ${region} → ${regionCode}`);
      } else {
        console.log(`⚠️ 알 수 없는 지역: ${region}, 경기도 전체로 검색`);
        regionLibParams.append('region', '41');
      }
      
      console.log('🏛️ 도서관 목록 API 호출:', `${regionLibUrl}?${regionLibParams}`);
      
      const libResponse = await fetch(`${regionLibUrl}?${regionLibParams}`);
      if (!libResponse.ok) {
        throw new Error(`도서관 목록 API 호출 실패: ${libResponse.status}`);
      }
      
      const libData = await libResponse.json();
      console.log('📊 도서관 목록 결과:', JSON.stringify(libData, null, 2));
      
      // 3. 도서관 목록에서 실제 도서관 정보 추출
      if (libData.response && libData.response.libs && libData.response.libs.length > 0) {
        let filteredLibs = libData.response.libs;
        
        // 지역별 필터링 (API 응답에서 해당 지역 도서관만 추출)
        if (region && region.trim() !== '' && region !== '경기도' && region !== '경기') {
          const regionKeywords = {
            '용인시': ['용인', '기흥', '수지', '처인'],
            '수원시': ['수원'],
            '성남시': ['성남'],
            '고양시': ['고양'],
            '기흥구': ['기흥'],
            '수지구': ['수지'],
            '처인구': ['처인']
          };
          
          const keywords = regionKeywords[region as keyof typeof regionKeywords];
          if (keywords) {
            filteredLibs = libData.response.libs.filter((lib: any) => {
              const libName = lib.libName || '';
              const libAddr = lib.address || '';
              return keywords.some(keyword => 
                libName.includes(keyword) || libAddr.includes(keyword)
              );
            });
            
            console.log(`🗺️ ${region} 지역 필터링 결과: ${filteredLibs.length}개 도서관`);
            console.log('📍 필터링된 도서관들:', filteredLibs.map((lib: any) => lib.libName));
          }
        }
        
        // 필터링된 도서관이 없으면 전체 결과 사용
        if (filteredLibs.length === 0) {
          console.log(`⚠️ ${region} 지역 도서관이 없어 전체 결과 사용`);
          filteredLibs = libData.response.libs.slice(0, 10);
        }
        
        // 4. 각 도서관별로 실제 소장 현황 API 호출
        console.log('🔍 각 도서관별 실제 소장 현황 API 호출 시작...');
        
        const availabilityPromises = filteredLibs.slice(0, 10).map(async (lib: any) => {
          const libCode = lib.libCode || lib.libraryCode;
          if (!libCode) {
            console.log(`⚠️ 도서관 코드 없음: ${lib.libName}`);
            return null;
          }
          
          // 각 도서관별 소장 현황 API 호출
          const availabilityUrl = 'https://data4library.kr/api/itemSrch';
          const availabilityParams = new URLSearchParams({
            authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
            isbn: isbn,
            libCode: libCode, // 도서관 코드 추가
            format: 'json',
            pageNo: '1',
            pageSize: '10'
          });
          
          console.log(`📚 ${lib.libName} 소장 현황 API 호출:`, `${availabilityUrl}?${availabilityParams}`);
          
          try {
            const availabilityResponse = await fetch(`${availabilityUrl}?${availabilityParams}`);
            console.log(`📊 ${lib.libName} API 응답 상태:`, availabilityResponse.status);
            
            if (availabilityResponse.ok) {
              const availabilityData = await availabilityResponse.json();
              console.log(`📊 ${lib.libName} API 응답:`, JSON.stringify(availabilityData, null, 2));
              
              // 실제 소장 현황 데이터가 있는지 확인
              if (availabilityData.response && availabilityData.response.docs && availabilityData.response.docs.length > 0) {
                console.log(`✅ ${lib.libName}에서 실제 소장 현황 발견!`);
                
                const doc = availabilityData.response.docs[0]; // 첫 번째 결과 사용
                
                // 배가기호 정보 파싱 (여러 필드명 시도)
                let shelfLocation = '위치 정보 없음';
                console.log(`🔍 ${lib.libName} 배가기호 필드 확인:`, {
                  shelf_loc_code: doc.shelf_loc_code,
                  shelfLocation: doc.shelfLocation,
                  shelf_code: doc.shelf_code,
                  callNumber: doc.callNumber,
                  call_number: doc.call_number,
                  location: doc.location,
                  shelf: doc.shelf
                });
                
                if (doc.shelf_loc_code && doc.shelf_loc_code.trim() !== '') {
                  shelfLocation = doc.shelf_loc_code;
                } else if (doc.shelfLocation && doc.shelfLocation.trim() !== '') {
                  shelfLocation = doc.shelfLocation;
                } else if (doc.shelf_code && doc.shelf_code.trim() !== '') {
                  shelfLocation = doc.shelf_code;
                } else if (doc.callNumber && doc.callNumber.trim() !== '') {
                  shelfLocation = doc.callNumber;
                } else if (doc.call_number && doc.call_number.trim() !== '') {
                  shelfLocation = doc.call_number;
                } else if (doc.location && doc.location.trim() !== '') {
                  shelfLocation = doc.location;
                } else if (doc.shelf && doc.shelf.trim() !== '') {
                  shelfLocation = doc.shelf;
                }
                
                // 소장권수 정보 파싱 (여러 필드명 시도)
                let volumeCount = 0;
                console.log(`🔍 ${lib.libName} 소장권수 필드 확인:`, {
                  vol: doc.vol,
                  volumeCount: doc.volumeCount,
                  volume: doc.volume,
                  count: doc.count,
                  quantity: doc.quantity,
                  copies: doc.copies
                });
                
                if (doc.vol && doc.vol.trim() !== '') {
                  volumeCount = parseInt(doc.vol) || 0;
                } else if (doc.volumeCount && doc.volumeCount.trim() !== '') {
                  volumeCount = parseInt(doc.volumeCount) || 0;
                } else if (doc.volume && doc.volume.trim() !== '') {
                  volumeCount = parseInt(doc.volume) || 0;
                } else if (doc.count && doc.count.trim() !== '') {
                  volumeCount = parseInt(doc.count) || 0;
                } else if (doc.quantity && doc.quantity.trim() !== '') {
                  volumeCount = parseInt(doc.quantity) || 0;
                } else if (doc.copies && doc.copies.trim() !== '') {
                  volumeCount = parseInt(doc.copies) || 0;
                }
                
                // 대출 상태 확인
                const isAvailable = doc.loanStatus !== '대출중' && doc.loanStatus !== '예약중';
                const isLoanable = doc.loanStatus === '대출가능' || doc.loanStatus === '대출가능';
                
                console.log(`🔍 ${lib.libName} 대출 상태 확인:`, {
                  loanStatus: doc.loanStatus,
                  isAvailable,
                  isLoanable
                });
                
                return {
                  libraryId: libCode,
                  libraryName: lib.libName || '알 수 없는 도서관',
                  available: doc.loanStatus !== '대출중', // 대출중이 아니면 소장함
                  loanable: isLoanable,
                  dueDate: doc.dueDate || doc.returnDate || undefined,
                  shelfLocation: shelfLocation,
                  volumeCount: volumeCount
                };
              } else {
                console.log(`⚠️ ${lib.libName}에서 소장 현황 데이터 없음`);
                // 소장하지 않는 경우
                return {
                  libraryId: libCode,
                  libraryName: lib.libName || '알 수 없는 도서관',
                  available: false,
                  loanable: false,
                  dueDate: undefined,
                  shelfLocation: '소장하지 않음',
                  volumeCount: 0
                };
              }
            } else {
              console.log(`⚠️ ${lib.libName} API 호출 실패:`, availabilityResponse.status);
              // API 호출 실패 시 소장하지 않는 것으로 처리
              return {
                libraryId: libCode,
                libraryName: lib.libName || '알 수 없는 도서관',
                available: false,
                loanable: false,
                dueDate: undefined,
                shelfLocation: 'API 오류',
                volumeCount: 0
              };
            }
          } catch (error) {
            console.log(`⚠️ ${lib.libName} API 호출 중 오류:`, error);
            // 오류 발생 시 소장하지 않는 것으로 처리
            return {
              libraryId: libCode,
              libraryName: lib.libName || '알 수 없는 도서관',
              available: false,
              loanable: false,
              dueDate: undefined,
              shelfLocation: 'API 오류',
              volumeCount: 0
            };
          }
        });
        
        // 모든 도서관의 소장 현황을 병렬로 조회
        const availabilityResults = await Promise.all(availabilityPromises);
        const availability = availabilityResults.filter(result => result !== null);
        
        console.log('✅ 실제 API 기반 소장 현황 반환:', availability);
        return availability;
      }
      
      // 5. 도서관 목록이 없는 경우
      console.log('⚠️ 도서관 목록이 없음');
      return [];
      
    } catch (error) {
      console.error('❌ 도서 소장 현황 조회 중 오류:', error);
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

  /**
   * 더미 소장 현황 데이터 반환
   */
  private getDummyAvailability(): LibraryAvailability[] {
    console.log('📋 더미 소장 현황 데이터 생성');
    
    const fallbackLibraries = [
      { libCode: 'lib_1', libName: '경기도립중앙도서관' },
      { libCode: 'lib_2', libName: '수원시립중앙도서관' },
      { libCode: 'lib_3', libName: '성남시립중앙도서관' },
      { libCode: 'lib_4', libName: '고양시립중앙도서관' },
      { libCode: 'lib_5', libName: '부천시립중앙도서관' }
    ];
    
    const availability: LibraryAvailability[] = fallbackLibraries.map((lib: any, index: number) => {
      // 더 현실적인 소장률: 60% 확률로 소장
      const isInCollection = Math.random() > 0.4;
      
      // 배가기호 생성 (실제와 유사한 형태)
      const shelfLocation = `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 999) + 1}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 99) + 1}`;
      
      // 소장권수 (1-5권 사이)
      const volumeCount = Math.floor(Math.random() * 5) + 1;
      
      if (!isInCollection) {
        return {
          libraryId: lib.libCode,
          libraryName: lib.libName,
          available: false,
          loanable: false,
          dueDate: undefined,
          shelfLocation: '소장하지 않음',
          volumeCount: 0
        };
      }
      
      const isCurrentlyLoaned = Math.random() > 0.4;
      
      if (isCurrentlyLoaned) {
        const dueDate = new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        return {
          libraryId: lib.libCode,
          libraryName: lib.libName,
          available: true,
          loanable: false,
          dueDate: dueDate,
          shelfLocation: shelfLocation,
          volumeCount: volumeCount
        };
      } else {
        return {
          libraryId: lib.libCode,
          libraryName: lib.libName,
          available: true,
          loanable: true,
          dueDate: undefined,
          shelfLocation: shelfLocation,
          volumeCount: volumeCount
        };
      }
    });
    
    console.log('✅ 더미 소장 현황 데이터 생성 완료:', availability);
    return availability;
  }
}

// 기본 API 설정 (환경변수에서 로드)
export const defaultLibraryAPI = new LibraryAPIService({
  baseURL: process.env.REACT_APP_GYEONGGI_API_URL || 'https://openapi.gg.go.kr',
      apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || '8b62aa70e514468596e9324d064d582d'
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
      code: `REACT_APP_GYEONGGI_API_URL=https://openapi.gg.go.kr
REACT_APP_GYEONGGI_API_KEY=your_api_key_here
REACT_APP_LIBRARY_API_KEY=your_library_api_key_here`
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
const BASE_URL = 'https://data4library.kr/api';

// API 인증키 (실제 인증키로 설정)
// 도서관정보나루 API 키 설정됨
const AUTH_KEY = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';

// API 승인 상태 확인 함수
export const checkApiApprovalStatus = async (apiKey: string): Promise<boolean> => {
  try {
    // 오늘 날짜 기준으로 동적 계산
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    const response = await fetch(`https://www.data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=${currentYear}-01-01&endDt=${currentYear}-${currentMonth}-${currentDay}&pageNo=1&pageSize=1&format=json`);
    const data = await response.json();
    
    // API 키가 승인되지 않은 경우 에러 응답을 받음
    if (data.error || data.message?.includes('인증키') || data.message?.includes('승인')) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('API 승인 상태 확인 중 오류:', error);
    return false;
  }
};

// 지역 코드 매핑 및 연령대 매핑 (필요 시 사용)

// XML 응답을 파싱하는 함수
const parseXMLResponse = (xmlString: string): any => {
  try {
    // DOMParser를 사용하여 XML 파싱
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    // 파싱 오류 체크
    const parseError = xmlDoc.getElementsByTagName('parsererror')[0];
    if (parseError) {
      console.error('XML 파싱 오류:', parseError.textContent);
      return { response: { docs: [] } };
    }
    
    // 인기대출도서 데이터 추출
    const docs = xmlDoc.getElementsByTagName('doc');
    const books: any[] = [];
    
    for (let i = 0; i < docs.length; i++) {
      const doc = docs[i];
      const book: any = {};
      
      // 각 필드 추출 (더 많은 필드명 시도)
      const getTextContent = (tagName: string): string => {
        const element = doc.getElementsByTagName(tagName)[0];
        return element?.textContent || '';
      };
      
      // 제목 (여러 가능한 태그명 시도)
      book.bookname = getTextContent('bookname') || getTextContent('title') || getTextContent('book_name');
      
      // 저자 (여러 가능한 태그명 시도)
      book.authors = getTextContent('authors') || getTextContent('author') || getTextContent('writer');
      
      // 출판사 (여러 가능한 태그명 시도)
      book.publisher = getTextContent('publisher') || getTextContent('pub_nm') || getTextContent('pubName');
      
      // 출판년도
      book.publication_year = getTextContent('publication_year') || getTextContent('pubYear') || getTextContent('year');
      
      // ISBN (여러 가능한 태그명 시도)
      book.isbn13 = getTextContent('isbn13') || getTextContent('isbn') || getTextContent('isbn10');
      
      // 대출수
      book.loan_count = parseInt(getTextContent('loan_count') || getTextContent('loanCount') || '0') || 0;
      
      // 순위
      book.ranking = parseInt(getTextContent('ranking') || getTextContent('rank') || '0') || 0;
      
      // 카테고리
      book.class_nm = getTextContent('class_nm') || getTextContent('category') || getTextContent('class');
      
      console.log(`📖 XML에서 추출된 도서 정보:`, {
        bookname: book.bookname,
        authors: book.authors,
        publisher: book.publisher,
        publication_year: book.publication_year,
        isbn13: book.isbn13,
        loan_count: book.loan_count,
        ranking: book.ranking,
        class_nm: book.class_nm
      });
      
      if (book.bookname && book.bookname.trim() !== '') {
        books.push(book);
      }
    }
    
    console.log(`📚 XML에서 추출된 도서 ${books.length}권:`, books);
    
    return {
      response: {
        docs: books,
        numFound: books.length,
        start: 0
      }
    };
  } catch (error) {
    console.error('XML 파싱 중 오류 발생:', error);
    return { response: { docs: [] } };
  }
};

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
// 인기도서 캐시 (5분간 유효)
let popularBooksCache: { data: PopularBookData[]; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5분

export const fetchPopularBooks = async (
  startDate?: string,
  endDate?: string
): Promise<PopularBookData[]> => {
  // 캐시 확인
  if (popularBooksCache && (Date.now() - popularBooksCache.timestamp) < CACHE_DURATION) {
    console.log('📋 캐시된 인기도서 데이터 사용');
    return popularBooksCache.data;
  }
  // 이번주(월요일부터 일요일까지) 기준으로 동적 계산
  const today = new Date();
  
  // 이번주 월요일 계산
  const monday = new Date(today);
  const dayOfWeek = today.getDay(); // 0=일요일, 1=월요일, ..., 6=토요일
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 월요일까지의 일수
  monday.setDate(today.getDate() - daysToMonday);
  
  // 이번주 일요일 계산 (오늘이 일요일이면 오늘, 아니면 다음 일요일)
  const sunday = new Date(today);
  if (dayOfWeek !== 0) { // 오늘이 일요일이 아니면
    const daysToSunday = 7 - dayOfWeek;
    sunday.setDate(today.getDate() + daysToSunday);
  }
  
  // 날짜 형식 변환
  const mondayYear = monday.getFullYear();
  const mondayMonth = String(monday.getMonth() + 1).padStart(2, '0');
  const mondayDay = String(monday.getDate()).padStart(2, '0');
  
  const sundayYear = sunday.getFullYear();
  const sundayMonth = String(sunday.getMonth() + 1).padStart(2, '0');
  const sundayDay = String(sunday.getDate()).padStart(2, '0');
  
  // 기본값: 이번주 월요일부터 일요일까지
  const defaultStartDate = `${mondayYear}-${mondayMonth}-${mondayDay}`;
  const defaultEndDate = `${sundayYear}-${sundayMonth}-${sundayDay}`;
  
  // 데이터가 부족할 경우를 대비해 지난주까지 확장
  const lastWeekMonday = new Date(monday);
  lastWeekMonday.setDate(monday.getDate() - 7);
  const lastWeekMondayStr = `${lastWeekMonday.getFullYear()}-${String(lastWeekMonday.getMonth() + 1).padStart(2, '0')}-${String(lastWeekMonday.getDate()).padStart(2, '0')}`;
  
  const actualStartDate = startDate || defaultStartDate;
  const actualEndDate = endDate || defaultEndDate;
  try {
    const params = new URLSearchParams({
      authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
      startDt: actualStartDate,
      endDt: actualEndDate,
      pageNo: '1',
      pageSize: '20'
    });

          const url = `https://data4library.kr/api/loanItemSrch?${params}`;
    
    console.log(`🔥 인기대출도서 API 호출:`);
    console.log(`   📅 날짜 범위: ${actualStartDate} ~ ${actualEndDate}`);
    console.log(`   🌐 URL: ${url}`);
    console.log(`   🔑 인증키: ${process.env.REACT_APP_LIBRARY_API_KEY ? '설정됨' : '설정되지 않음'}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    const responseText = await response.text();
            console.log('📊 인기도서 API 원본 응답:', responseText);
        console.log('📊 인기도서 API 응답 길이:', responseText.length);
    
    let data;
    try {
      // JSON 파싱 시도
      data = JSON.parse(responseText);
    } catch (jsonError) {
      // XML 응답인 경우 파싱
      console.log('⚠️ JSON 파싱 실패, XML 응답 처리 중...');
      data = parseXMLResponse(responseText);
    }
    
    console.log('📊 인기도서 API 파싱된 데이터:', JSON.stringify(data, null, 2));
    
    // API 에러 체크
    if (data.response && data.response.error) {
      console.warn('API 에러:', data.response.error);
      if (data.response.error.includes('활성화')) {
        console.log('💡 API 키가 아직 활성화되지 않았습니다. 더미 데이터를 사용합니다.');
      }
      throw new Error(data.response.error);
    }
    
    console.log('🔍 API 응답 구조 분석:');
    console.log('- data.response:', data.response);
    console.log('- data.response.docs:', data.response?.docs);
    console.log('- docs 길이:', data.response?.docs?.length);
    
    // API 응답 데이터 구조에 맞게 변환
    let rawBooks = [];
    if (data.response && data.response.docs) {
      rawBooks = data.response.docs;
    } else if (data.response && data.response.result) {
      rawBooks = data.response.result.docs || [];
    } else if (Array.isArray(data.response)) {
      rawBooks = data.response;
    } else if (data.response && Array.isArray(data.response)) {
      rawBooks = data.response;
    } else if (data.docs) {
      rawBooks = data.docs;
    } else if (data.result && data.result.docs) {
      rawBooks = data.result.docs;
    }
    
    console.log('🔍 다양한 응답 구조 시도 결과:', {
      'data.response.docs': data.response?.docs,
      'data.response.result.docs': data.response?.result?.docs,
      'Array.isArray(data.response)': Array.isArray(data.response),
      'data.docs': data.docs,
      'data.result.docs': data.result?.docs,
      '최종 rawBooks': rawBooks
    });
    
    console.log('📚 원본 도서 데이터:', rawBooks);
    
    const books: PopularBookData[] = rawBooks
      ?.filter((book: any) => {
        console.log('📖 개별 도서 데이터:', book);
        return book.bookname && book.bookname.trim() !== '';
      })
      .map((book: any, index: number) => {
        // 저자 정보 정확히 파싱
        let author = '작가 미상';
        console.log('🔍 저자 파싱 시작:', {
          'book.authors': book.authors,
          'book.author': book.author,
          'book.writer': book.writer,
          'book.author_nm': book.author_nm,
          'book.writer_nm': book.writer_nm
        });
        
        if (book.authors && book.authors.trim() !== '') {
          let authorText = book.authors.trim();
          console.log('📝 authors 필드 사용:', authorText);
          // "지은이: ", "저자: ", "글: " 등의 접두사 제거
          authorText = authorText.replace(/^(지은이|저자|글|작가|저)\s*:\s*/, '');
          author = authorText;
          console.log('✅ 최종 저자:', author);
        } else if (book.author && book.author.trim() !== '') {
          let authorText = book.author.trim();
          console.log('📝 author 필드 사용:', authorText);
          authorText = authorText.replace(/^(지은이|저자|글|작가|저)\s*:\s*/, '');
          author = authorText;
          console.log('✅ 최종 저자:', author);
        } else if (book.writer && book.writer.trim() !== '') {
          let authorText = book.writer.trim();
          console.log('📝 writer 필드 사용:', authorText);
          authorText = authorText.replace(/^(지은이|저자|글|작가|저)\s*:\s*/, '');
          author = authorText;
          console.log('✅ 최종 저자:', author);
        } else if (book.author_nm && book.author_nm.trim() !== '') {
          let authorText = book.author_nm.trim();
          console.log('📝 author_nm 필드 사용:', authorText);
          authorText = authorText.replace(/^(지은이|저자|글|작가|저)\s*:\s*/, '');
          author = authorText;
          console.log('✅ 최종 저자:', author);
        } else if (book.writer_nm && book.writer_nm.trim() !== '') {
          let authorText = book.writer_nm.trim();
          console.log('📝 writer_nm 필드 사용:', authorText);
          authorText = authorText.replace(/^(지은이|저자|글|작가|저)\s*:\s*/, '');
          author = authorText;
          console.log('✅ 최종 저자:', author);
        } else {
          console.log('❌ 저자 정보를 찾을 수 없음');
        }
        
        // 출판사 정보 정확히 파싱
        let publisher = '출판사 미상';
        console.log('🔍 출판사 파싱 시작:', {
          'book.publisher': book.publisher,
          'book.pub_nm': book.pub_nm,
          'book.publisher_nm': book.publisher_nm,
          'book.pub': book.pub
        });
        
        if (book.publisher && book.publisher.trim() !== '') {
          publisher = book.publisher.trim();
          console.log('📝 publisher 필드 사용:', publisher);
        } else if (book.pub_nm && book.pub_nm.trim() !== '') {
          publisher = book.pub_nm.trim();
          console.log('📝 pub_nm 필드 사용:', publisher);
        } else if (book.publisher_nm && book.publisher_nm.trim() !== '') {
          publisher = book.publisher_nm.trim();
          console.log('📝 publisher_nm 필드 사용:', publisher);
        } else if (book.pub && book.pub.trim() !== '') {
          publisher = book.pub.trim();
          console.log('📝 pub 필드 사용:', publisher);
        } else {
          console.log('❌ 출판사 정보를 찾을 수 없음');
        }
        
        // 제목 정확히 파싱
        let title = book.bookname || book.title || book.book_name || '';
        title = title.trim();
        // 제목에서 ":김호연 장편소설" 같은 부가 정보 제거
        title = title.replace(/\s*:\s*[^:]*$/, '');
        
        // ISBN 정확히 파싱
        let isbn = '';
        if (book.isbn && book.isbn.trim() !== '') {
          isbn = book.isbn.trim();
        } else if (book.isbn13 && book.isbn13.trim() !== '') {
          isbn = book.isbn13.trim();
        }
        
        console.log(`📚 파싱된 도서 정보:`, {
          title,
          author,
          publisher,
          isbn,
          original: book
        });
        
        // 원본 데이터 상세 분석
        console.log('🔍 원본 도서 데이터 상세 분석:', {
          'book.authors': book.authors,
          'book.author': book.author,
          'book.writer': book.writer,
          'book.author_nm': book.author_nm,
          'book.writer_nm': book.writer_nm,
          'book.publisher': book.publisher,
          'book.pub_nm': book.pub_nm,
          'book.publisher_nm': book.publisher_nm,
          'book.pub': book.pub,
          'book.bookname': book.bookname,
          'book.title': book.title,
          'book.isbn': book.isbn,
          'book.isbn13': book.isbn13,
          '전체 book 객체': book
        });
        
        return {
          id: isbn || `book_${index}`,
          title: title,
          author: author,
          publisher: publisher,
          isbn: isbn,
          loanCount: parseInt(book.loan_count) || parseInt(book.loanCount) || (index + 1) * 1000,
          category: book.class_nm || book.category || '일반',
          publishYear: book.publication_year || book.pubYear || '2023'
        };
      }) || [];
    
    console.log(`🏆 인기도서 ${books.length}권 조회 완료:`, books);
    
    // API에서 데이터를 가져왔지만 비어있는 경우 fallback 사용
    if (books.length === 0) {
      console.log('⚠️ 이번주 데이터가 없음, fallback 데이터 사용');
      const fallbackBooks = getFallbackPopularBooks();
      console.log('📚 Fallback 인기도서 데이터:', fallbackBooks);
      
      // fallback 데이터도 캐시에 저장
      popularBooksCache = { data: fallbackBooks, timestamp: Date.now() };
      return fallbackBooks;
    }
    
    // 성공한 데이터를 캐시에 저장
    popularBooksCache = { data: books, timestamp: Date.now() };
    return books;
    
  } catch (error) {
    console.error('❌ 인기도서 API 호출 오류:', error);
    
    console.log('❌ API 호출 실패 또는 데이터 없음, fallback 데이터 사용');
    
    // API 호출 실패시 더미 데이터 반환
    const fallbackBooks = getFallbackPopularBooks();
    console.log('📚 Fallback 인기도서 데이터:', fallbackBooks);
    return fallbackBooks;
  }
};

/**
 * API 호출 실패시 사용할 더미 데이터
 */
// 성인 대상 인기 도서 Top 5 (아동 도서 제외, 최신순)
const getFallbackPopularBooks = (): PopularBookData[] => {
  console.log('📚 Fallback 인기도서 데이터 사용 (다양한 장르 포함)');
  
  return [
    {
      id: '1',
      title: '어린왕자',
      author: '생텍쥐페리',
      publisher: '열린책들',
      isbn: '9788932917245',
      loanCount: 6890,
      category: '문학',
      publishYear: '2015'
    },
    {
      id: '2',
      title: '해리포터와 마법사의 돌',
      author: 'J.K. 롤링',
      publisher: '문학수첩',
      isbn: '9788983920003',
      loanCount: 6234,
      category: '판타지',
      publishYear: '2014'
    },
    {
      id: '3',
      title: '2030 자산관리 고민백서',
      author: '오건영',
      publisher: '비즈니스북스',
      isbn: '9791162542439',
      loanCount: 5420,
      category: '경제',
      publishYear: '2023'
    },
    {
      id: '4',
      title: '트렌드 코리아 2024',
      author: '김난도',
      publisher: '미래의창',
      isbn: '9788959897264',
      loanCount: 4890,
      category: '사회',
      publishYear: '2023'
    },
    {
      id: '5',
      title: '세이노의 가르침',
      author: '세이노',
      publisher: '데이원',
      isbn: '9791191043297',
      loanCount: 4321,
      category: '자기계발',
      publishYear: '2023'
    },
    {
      id: '6',
      title: '불편한 편의점',
      author: '김호연',
      publisher: '나무옆의자',
      isbn: '9791167370778',
      loanCount: 4156,
      category: '소설',
      publishYear: '2021'
    },
    {
      id: '7',
      title: '달러구트 꿈 백화점',
      author: '이미예',
      publisher: '팩토리나인',
      isbn: '9791165340564',
      loanCount: 3987,
      category: '소설',
      publishYear: '2020'
    },
    {
      id: '8',
      title: '82년생 김지영',
      author: '조남주',
      publisher: '민음사',
      isbn: '9788937473142',
      loanCount: 3765,
      category: '소설',
      publishYear: '2016'
    },
    {
      id: '9',
      title: '미드나잇 라이브러리',
      author: '매트 헤이그',
      publisher: '인플루엔셜',
      isbn: '9788960516618',
      loanCount: 3542,
      category: '소설',
      publishYear: '2021'
    },
    {
      id: '10',
      title: '소년이 온다',
      author: '한강',
      publisher: '창비',
      isbn: '9788936434120',
      loanCount: 3298,
      category: '소설',
      publishYear: '2014'
    }
  ];
};

/**
 * 도서 검색 API 함수 (외부에서 직접 호출용)
 */
export const searchBooksAPI = async (
  query: string,
  pageNo: number = 1,
  pageSize: number = 10
): Promise<BookSearchResult[]> => {
  const apiService = new LibraryAPIService({
    baseURL: BASE_URL,
    apiKey: AUTH_KEY
  });
  
  return await apiService.searchBooks({
    query,
    pageNo,
    pageSize
  });
};

/**
 * API 연결 상태 테스트
 */
export const testApiConnection = async (): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> => {
  try {
    console.log('🔄 API 연결 테스트 시작...');
    
    // 1. 도서관정보나루 API 테스트
    const testQuery = '해리포터';
    const searchUrl = `${BASE_URL}/srchBooks`;
    const params = new URLSearchParams({
      authKey: AUTH_KEY,
      format: 'json',
      pageNo: '1',
      pageSize: '5',
      keyword: testQuery
    });

    const libraryResponse = await fetch(`${searchUrl}?${params}`);
    const libraryData = await libraryResponse.json();

    // 2. 경기데이터드림 API 테스트 (여러 시도)
    const gyeonggiApiKey = process.env.REACT_APP_GYEONGGI_API_KEY || '8b62aa70e514468596e9324d064d582d';
    let gyeonggiResponse: Response;
    let gyeonggiData: any;
    
    // 첫 번째 시도: 올바른 엔드포인트 사용
    try {
      const gyeonggiUrl1 = `https://openapi.gg.go.kr/TBGGIBLLBR`;
      const gyeonggiParams1 = new URLSearchParams({
        KEY: gyeonggiApiKey,
        Type: 'json',
        pIndex: '1',
        pSize: '10'
      });
      
      gyeonggiResponse = await fetch(`${gyeonggiUrl1}?${gyeonggiParams1}`);
      gyeonggiData = await gyeonggiResponse.json();
      
      if (!gyeonggiResponse.ok) {
        throw new Error('First attempt failed');
      }
    } catch (error) {
      // 두 번째 시도: 다른 매개변수 형식
      try {
        const gyeonggiUrl2 = `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${gyeonggiApiKey}&Type=json&pIndex=1&pSize=10`;
        gyeonggiResponse = await fetch(gyeonggiUrl2);
        gyeonggiData = await gyeonggiResponse.json();
        
        if (!gyeonggiResponse.ok) {
          throw new Error('Second attempt failed');
        }
      } catch (error2) {
        // 세 번째 시도: 기본 매개변수만 사용
        try {
          const gyeonggiUrl3 = `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${gyeonggiApiKey}`;
          gyeonggiResponse = await fetch(gyeonggiUrl3);
          gyeonggiData = await gyeonggiResponse.json();
          
          if (!gyeonggiResponse.ok) {
            throw new Error('Third attempt failed');
          }
        } catch (error3) {
          // 모든 시도 실패 시 기본값
          gyeonggiResponse = { ok: false } as Response;
          gyeonggiData = { error: 'All attempts failed' };
        }
      }
    }

    const libraryApiSuccess = libraryResponse.ok && libraryData.response && libraryData.response.docs;
    const gyeonggiApiSuccess = gyeonggiResponse.ok && gyeonggiData.TBGGIBLLBR && gyeonggiData.TBGGIBLLBR[1];

    if (libraryApiSuccess && gyeonggiApiSuccess) {
      console.log('✅ 도서관정보나루 API 연결 성공');
      console.log('✅ 경기데이터드림 API 연결 성공');
      return {
        success: true,
        message: '모든 API 연결 성공! 실제 도서관 데이터를 사용합니다.',
        details: {
          libraryBooks: libraryData.response.numFound,
          gyeonggiLibraries: gyeonggiData.TBGGIBLLBR[1].row?.length || 0,
          sampleBooks: libraryData.response.docs.slice(0, 3)
        }
      };
    } else if (libraryApiSuccess) {
      console.log('✅ 도서관정보나루 API 연결 성공');
      console.log('❌ 경기데이터드림 API 연결 실패');
      return {
        success: true,
        message: '도서관정보나루 API만 연결됨. 도서 검색은 가능하지만 일부 기능이 제한됩니다.',
        details: {
          libraryBooks: libraryData.response.numFound,
          gyeonggiLibraries: 0,
          sampleBooks: libraryData.response.docs.slice(0, 3)
        }
      };
    } else {
      console.log('❌ 도서관정보나루 API 연결 실패');
      console.log('❌ 경기데이터드림 API 연결 실패');
      
      // 각 API의 실패 원인을 자세히 분석
      const failureAnalysis = {
        libraryApi: {
          status: libraryResponse.status,
          statusText: libraryResponse.statusText,
          data: libraryData
        },
        gyeonggiApi: {
          status: gyeonggiResponse.ok ? 'ok' : 'failed',
          data: gyeonggiData,
          error: gyeonggiData?.error || 'Unknown error'
        }
      };
      
      return {
        success: false,
        message: 'API 연결 실패. 브라우저에서 CORS 제한이나 API 키 문제일 수 있습니다.',
        details: failureAnalysis
      };
    }
  } catch (error) {
    console.error('API 연결 테스트 오류:', error);
    return {
      success: false,
      message: 'API 연결 오류. 네트워크를 확인하거나 더미 데이터를 사용합니다.',
      details: error
    };
  }
};

/**
 * 경기데이터드림 API CORS 우회 테스트
 */
export const testGyeonggiApiWithProxy = async (apiKey: string = '8b62aa70e514468596e9324d064d582d'): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> => {
  try {
    // 올바른 엔드포인트 사용
    const methods = [
      // 1. 올바른 엔드포인트 직접 호출
      {
        name: 'Correct Endpoint',
        url: `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${apiKey}&Type=json&pIndex=1&pSize=5`
      },
      // 2. 추가 매개변수 포함
      {
        name: 'With Additional Params',
        url: `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${apiKey}&Type=json&pIndex=1&pSize=10`
      },
      // 3. 매개변수 순서 변경
      {
        name: 'Parameter Order Change',
        url: `https://openapi.gg.go.kr/TBGGIBLLBR?Type=json&KEY=${apiKey}&pIndex=1&pSize=5`
      },
      // 4. 파라미터 없이 기본 호출
      {
        name: 'Basic Call',
        url: `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${apiKey}`
      }
    ];

    for (const method of methods) {
      try {
        console.log(`🔄 ${method.name} 시도:`, method.url);
        
        const response = await fetch(method.url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        });

        console.log(`📊 ${method.name} 응답:`, response.status, response.statusText);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`✅ ${method.name} 성공:`, data);
          
          return {
            success: true,
            message: `경기데이터드림 API 연결 성공 (${method.name})`,
            details: {
              method: method.name,
              url: method.url,
              data: data
            }
          };
        } else {
          const errorText = await response.text();
          console.log(`❌ ${method.name} 실패:`, errorText);
        }
      } catch (error) {
        console.log(`❌ ${method.name} 오류:`, error);
      }
    }

    return {
      success: false,
      message: '모든 경기데이터드림 API 연결 방법 실패. CORS 문제이거나 API 키가 유효하지 않을 수 있습니다.',
      details: {
        attempted_methods: methods.map(m => m.name),
        suggestion: 'API 키가 활성화될 때까지 기다리거나, 서버사이드에서 API를 호출하는 것을 고려해보세요.'
      }
    };

  } catch (error) {
    return {
      success: false,
      message: '경기데이터드림 API 테스트 중 오류 발생',
      details: error
    };
  }
};

/**
 * API 연결 문제 해결 가이드
 */
export const getApiTroubleshootingGuide = (): string[] => {
  return [
    '🔧 API 연결 문제 해결 방법:',
    '',
    '1. API 키 확인:',
    '   - 도서관정보나루: 651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8',
    '   - 경기데이터드림: 8b62aa70e514468596e9324d064d582d',
    '',
    '2. API 키 활성화 상태:',
    '   - 신청 후 1-2시간 정도 소요될 수 있습니다',
    '   - 각 사이트에서 승인 상태를 확인해보세요',
    '',
    '3. CORS 문제 (브라우저 보안 정책):',
    '   - 브라우저에서 직접 호출 시 발생할 수 있습니다',
    '   - 개발 중에는 더미 데이터를 사용합니다',
    '   - 배포 시에는 서버사이드에서 API를 호출하세요',
    '',
    '4. 네트워크 문제:',
    '   - 인터넷 연결을 확인해보세요',
    '   - 방화벽이나 프록시 설정을 확인해보세요',
    '',
    '5. 현재 상태:',
    '   - 도서관정보나루 API: 정상 작동 중',
    '   - 경기데이터드림 API: 연결 문제 (CORS 또는 API 키)',
    '',
    '📞 문의처:',
    '   - 도서관정보나루: http://data4library.kr',
    '   - 경기데이터드림: https://data.gg.go.kr'
  ];
};

/**
 * 현재 API 설정 정보 확인
 */
export const getApiStatus = (): {
  configured: boolean;
  apiKey: string;
  message: string;
} => {
  const hasApiKey = Boolean(AUTH_KEY && AUTH_KEY !== 'your_actual_api_key_here' && AUTH_KEY.length > 10);
  const isFromEnv = process.env.REACT_APP_LIBRARY_API_KEY !== undefined;
  
  return {
    configured: hasApiKey,
    apiKey: AUTH_KEY ? `${AUTH_KEY.substring(0, 10)}...` : 'Not set',
    message: hasApiKey 
      ? `API 키 설정됨 (${isFromEnv ? '환경변수' : '코드'})`
      : 'API 키를 설정해주세요'
  };
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
    // 도서 검색 예시
    console.log('=== 도서 검색 API 테스트 ===');
    const searchResults = await searchBooksAPI('사피엔스', 1, 5);
    console.log('검색 결과:', searchResults);
    
    // 인기 도서 조회 예시
    console.log('=== 인기 도서 API 테스트 ===');
    const popularBooks = await fetchPopularBooks();
    console.log('인기도서 목록:', popularBooks);
    
    return { searchResults, popularBooks };
  } catch (error) {
    console.error('API 사용 예시 오류:', error);
    return { searchResults: [], popularBooks: [] };
  }
}; 

/**
 * 브라우저에서 API 테스트를 위한 전역 함수
 */
if (typeof window !== 'undefined') {
  (window as any).testLibraryAPI = async () => {
    console.log('🔍 도서관 API 테스트 시작...');
    
    // 1. API 설정 상태 확인
    const apiStatus = getApiStatus();
    console.log('📊 API 설정 상태:', apiStatus);
    
    // 2. API 연결 테스트
    try {
      const connectionTest = await testApiConnection();
      console.log('🔗 API 연결 테스트 결과:', connectionTest);
      
      if (connectionTest.success) {
        console.log('✅ 성공! 실제 도서관 데이터 사용 가능');
        console.log('📚 도서 검색 결과:', connectionTest.details?.libraryBooks, '권');
        console.log('🏛️ 경기도 도서관 수:', connectionTest.details?.gyeonggiLibraries, '개');
        console.log('📖 샘플 도서 데이터:', connectionTest.details?.sampleBooks);
      } else {
        console.log('❌ 실패:', connectionTest.message);
      }
      
      return connectionTest;
    } catch (error) {
      console.error('🚨 API 테스트 오류:', error);
      return { success: false, message: 'API 테스트 실행 오류', details: error };
    }
  };
  
  (window as any).searchLibraryBooks = async (query: string = '해리포터') => {
    console.log(`🔍 도서 검색 테스트: "${query}"`);
    
    try {
      const results = await searchBooksAPI(query, 1, 5);
      console.log('📚 검색 결과:', results);
      
      if (results && results.length > 0) {
        console.log(`✅ ${results.length}권의 도서를 찾았습니다!`);
        results.forEach((book, index) => {
          console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publisher})`);
        });
      } else {
        console.log('❌ 검색 결과가 없습니다.');
      }
      
      return results;
    } catch (error) {
      console.error('🚨 도서 검색 오류:', error);
      return [];
    }
  };
  
  (window as any).testGyeonggiAPI = async () => {
    console.log('🔍 경기데이터드림 API 단독 테스트...');
    return await testGyeonggiApiWithProxy();
  };
  
  (window as any).showApiGuide = () => {
    console.log('📖 API 문제 해결 가이드:');
    const guide = getApiTroubleshootingGuide();
    guide.forEach(line => console.log(line));
    return guide;
  };
} 

/**
 * 전체 API 시스템 종합 테스트
 */
if (typeof window !== 'undefined') {
  (window as any).testAllLibraryAPIs = async () => {
    console.log('🔥 === 도서관 API 종합 테스트 시작 === 🔥');
    
    try {
      // 1. 기본 API 연결 테스트
      console.log('\n1️⃣ 기본 API 연결 테스트...');
      const connectionTest = await testApiConnection();
      console.log('결과:', connectionTest);
      
      // 2. 도서 검색 테스트
      console.log('\n2️⃣ 도서 검색 테스트...');
      const searchResults = await searchBooksAPI('해리포터', 1, 5);
      console.log('검색 결과:', searchResults);
      
      // 3. 인기 도서 조회 테스트
      console.log('\n3️⃣ 인기 도서 조회 테스트...');
              const popularBooks = await fetchPopularBooks();
      console.log('인기 도서:', popularBooks);
      
      // 4. 경기도 도서관 정보 테스트
      console.log('\n4️⃣ 경기도 도서관 정보 테스트...');
      const libraryAPI = new LibraryAPIService({
        baseURL: 'https://openapi.gg.go.kr',
        apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || '8b62aa70e514468596e9324d064d582d'
      });
      
      const libraries = await libraryAPI.getLibraries();
      console.log('경기도 도서관 목록:', libraries.length, '개');
      console.log('샘플 도서관:', libraries.slice(0, 3));
      
      // 5. 종합 결과
      console.log('\n🎯 === 종합 테스트 결과 === 🎯');
      console.log('✅ API 연결 상태:', connectionTest.success ? '성공' : '실패');
      console.log('📚 검색 가능 도서 수:', searchResults.length, '권');
      console.log('🔥 인기 도서 수:', popularBooks.length, '권');
      console.log('🏛️ 경기도 도서관 수:', libraries.length, '개');
      
      if (connectionTest.success && searchResults.length > 0) {
        console.log('🎉 모든 API가 정상 작동하고 있습니다!');
      } else {
        console.log('⚠️ 일부 API에 문제가 있습니다. 더미 데이터를 사용합니다.');
      }
      
      return {
        connectionTest,
        searchResults,
        popularBooks,
        libraries: libraries.length
      };
      
    } catch (error) {
      console.error('🚨 종합 테스트 오류:', error);
      return null;
    }
  };
} 

/**
 * 브라우저 콘솔에서 직접 테스트할 수 있는 함수
 * 사용법: testCorrectGyeonggiAPI()
 */
export const testCorrectGyeonggiAPI = async (): Promise<void> => {
  console.log('🔍 올바른 경기데이터드림 API 엔드포인트 테스트 시작...');
  
  const apiKey = '8b62aa70e514468596e9324d064d582d';
  const correctUrl = `https://openapi.gg.go.kr/TBGGIBLLBR?KEY=${apiKey}`;
  
  try {
    console.log('📞 API 호출:', correctUrl);
    const response = await fetch(correctUrl);
    
    console.log('📊 응답 상태:', response.status, response.statusText);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API 연결 성공!');
      console.log('📋 응답 데이터:', data);
      
      if (data.TBGGIBLLBR && data.TBGGIBLLBR[1] && data.TBGGIBLLBR[1].row) {
        console.log('📚 도서관 개수:', data.TBGGIBLLBR[1].row.length);
        console.log('📍 첫 번째 도서관:', data.TBGGIBLLBR[1].row[0]);
      }
    } else {
      console.log('❌ API 호출 실패:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('🚨 오류 발생:', error);
  }
};

// 도서관정보나루 API 직접 테스트
export const testLibraryAPI = async (): Promise<void> => {
  const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY;
  
  console.log('🔑 사용 중인 API 키:', `${apiKey.substring(0, 10)}...`);
  
  // 1. 간단한 도서관 조회 API 테스트
      const libTestUrl = `https://data4library.kr/api/libSrch?authKey=${apiKey}&pageNo=1&pageSize=5`;
  console.log('🏛️ 도서관 조회 API 테스트:', libTestUrl);
  
  try {
    const response = await fetch(libTestUrl);
    const data = await response.text(); // 먼저 text로 받아보기
    
    console.log('📄 도서관 조회 API 응답 (원본):', data);
    
    // XML 응답을 JSON으로 파싱 시도
    try {
      const jsonData = JSON.parse(data);
      console.log('✅ JSON 파싱 성공:', jsonData);
    } catch (parseError) {
      console.log('⚠️ JSON 파싱 실패, XML 응답인 것 같습니다');
    }
  } catch (error) {
    console.error('❌ 도서관 조회 API 테스트 실패:', error);
  }
  
  // 2. 인기대출도서 API 테스트
      // 오늘 날짜 기준으로 동적 계산
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    const popularTestUrl = `https://data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=${currentYear}-01-01&endDt=${currentYear}-${currentMonth}-${currentDay}&pageNo=1&pageSize=5`;
  console.log('🏆 인기대출도서 API 테스트:', popularTestUrl);
  
  try {
    const response = await fetch(popularTestUrl);
    const data = await response.text(); // 먼저 text로 받아보기
    
    console.log('📄 인기대출도서 API 응답 (원본):', data.substring(0, 500) + '...');
    
    // XML 응답을 JSON으로 파싱 시도
    try {
      const jsonData = JSON.parse(data);
      console.log('✅ JSON 파싱 성공:', jsonData);
    } catch (parseError) {
      console.log('⚠️ JSON 파싱 실패, XML 응답 처리 중...');
      const xmlData = parseXMLResponse(data);
      console.log('✅ XML 파싱 성공:', xmlData);
      console.log('📊 추출된 도서 수:', xmlData.response.docs.length);
    }
  } catch (error) {
    console.error('❌ 인기대출도서 API 테스트 실패:', error);
  }
};

// 전역 객체에 함수 추가 (브라우저 콘솔에서 쉽게 접근)
if (typeof window !== 'undefined') {
  (window as any).testCorrectGyeonggiAPI = testCorrectGyeonggiAPI;
  (window as any).testLibraryAPI = testLibraryAPI;
} 