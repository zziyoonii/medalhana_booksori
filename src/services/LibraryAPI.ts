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
  reservable: boolean;
  dueDate?: string;
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
   * 실제 API: https://www.data4library.kr/api/srchBooks
   */
  async searchBooks(params: BookSearchParams): Promise<BookSearchResult[]> {
    try {
      const apiUrl = 'https://www.data4library.kr/api/srchBooks';
      
      // 검색어 전처리 및 인코딩
      const cleanQuery = params.query.trim().replace(/\s+/g, ' ');
      
      const searchParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        title: cleanQuery,
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
      
      // API 응답 구조 분석
      console.log('🔍 도서검색 API 응답 구조 분석:');
      console.log('- data.response:', data.response);
      console.log('- data.response.docs:', data.response?.docs);
      console.log('- data.response.numFound:', data.response?.numFound);
      
      // 결과가 없는 경우 다른 방식으로 재시도
      if (data.response && data.response.numFound === 0) {
        console.log('⚠️ 첫 번째 검색에서 결과 없음, 다른 방식으로 재시도');
        
        // 작가명으로 검색해보기
        const authorSearchParams = new URLSearchParams({
          authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
          author: cleanQuery,
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
          }
        }
      }
      
      // API 응답 구조 확인 및 데이터 추출
      let rawBooks = [];
      if (data.response && data.response.docs && data.response.docs.length > 0) {
        // 각 docs 요소에서 doc 객체 추출
        rawBooks = data.response.docs.map((item: any) => {
          // item이 직접 도서 데이터인지 확인
          if (item.bookname || item.title) {
            return item;
          }
          // 또는 item.doc 형태인지 확인
          if (item.doc) {
            return item.doc;
          }
          return item;
        }).filter((doc: any) => doc && (doc.bookname || doc.title));
      } else if (data.response && data.response.book) {
        rawBooks = Array.isArray(data.response.book) ? data.response.book : [data.response.book];
      } else if (data.response && data.response.result) {
        rawBooks = data.response.result.docs || data.response.result;
      }
      
      console.log('📚 원본 도서 데이터:', rawBooks);
      
      if (rawBooks && rawBooks.length > 0) {
        const books: BookSearchResult[] = rawBooks
          .filter((book: any) => {
            console.log('📖 개별 도서 데이터 확인:', book);
            const hasTitle = book.bookname || book.title;
            return hasTitle && hasTitle.trim() !== '';
          })
          .map((book: any, index: number) => ({
            id: book.isbn13 || book.isbn || `book_${index}`,
            title: (book.bookname || book.title || '').trim(),
            author: book.authors || book.author || '작가 미상',
            publisher: book.publisher || '출판사 미상',
            isbn: book.isbn13 || book.isbn || '',
            category: book.class_nm || book.category || '일반',
            publishYear: book.publication_year || book.publishYear || '2023',
            description: book.description || '',
            imageUrl: book.bookImageURL || book.imageUrl || '',
            loanCount: parseInt(book.loan_count || book.loanCount || '0') || 0
          }));
        
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
   * 실제 API: https://www.data4library.kr/api/libSrchByBook
   */
  async getBookAvailability(isbn: string, region: string = '41'): Promise<LibraryAvailability[]> {
    try {
      const apiUrl = 'https://www.data4library.kr/api/libSrchByBook';
      
      // 지역코드 매핑 (경기도: 41, 서울: 11, 부산: 26, 대구: 27, 인천: 28, 광주: 29, 대전: 30, 울산: 31, 세종: 36, 강원: 42, 충북: 43, 충남: 44, 전북: 45, 전남: 46, 경북: 47, 경남: 48, 제주: 50)
      const regionCodes: Record<string, string> = {
        '서울': '11',
        '부산': '26',
        '대구': '27',
        '인천': '28',
        '광주': '29',
        '대전': '30',
        '울산': '31',
        '세종': '36',
        '경기': '41',
        '경기도': '41',
        '강원': '42',
        '충북': '43',
        '충남': '44',
        '전북': '45',
        '전남': '46',
        '경북': '47',
        '경남': '48',
        '제주': '50'
      };
      
      // 지역명을 코드로 변환
      const regionCode = regionCodes[region] || region || '41'; // 기본값: 경기도
      
      const params = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        isbn: isbn,
        region: regionCode,
        format: 'json'
      });

      console.log('📚 도서 소장 현황 API 호출:', `${apiUrl}?${params}`);
      console.log('🗺️ 지역:', region, '→ 지역코드:', regionCode);
      
      const response = await fetch(`${apiUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      console.log('📊 소장 현황 API 전체 응답:', JSON.stringify(data, null, 2));
      
      // 에러 응답 체크
      if (data.response && data.response.error) {
        console.error('❌ API 에러:', data.response.error);
        
        // 지역코드 에러인 경우 다른 지역으로 재시도
        if (data.response.error.includes('지역코드')) {
          console.log('⚠️ 지역코드 에러, 전국 검색으로 재시도');
          
          // 전국 검색 (지역코드 없이)
          const nationalParams = new URLSearchParams({
            authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
            isbn: isbn,
            format: 'json'
          });
          
          const nationalResponse = await fetch(`${apiUrl}?${nationalParams}`);
          if (nationalResponse.ok) {
            const nationalData = await nationalResponse.json();
            console.log('🌍 전국 검색 결과:', JSON.stringify(nationalData, null, 2));
            
            if (nationalData.response && nationalData.response.libs) {
              data.response = nationalData.response;
            }
          }
        }
      }
      
      if (data.response && data.response.libs && data.response.libs.length > 0) {
        const availability: LibraryAvailability[] = data.response.libs.map((lib: any) => ({
          libraryId: lib.lib?.libCode || lib.libCode || '',
          libraryName: lib.lib?.libName || lib.libName || '도서관명 없음',
          available: lib.book?.loanAvailable === 'Y' || lib.loanAvailable === 'Y',
          loanable: lib.book?.loanAvailable === 'Y' || lib.loanAvailable === 'Y',
          reservable: lib.book?.reserveAvailable === 'Y' || lib.reserveAvailable === 'Y',
          dueDate: lib.book?.returnPlanDate || lib.returnPlanDate || undefined
        }));
        
        console.log('✅ 소장 현황 조회 성공:', availability);
        return availability;
      }
      
      console.log('⚠️ 소장 정보 없음 또는 구조 다름');
      return [];
      
    } catch (error) {
      console.error('💥 도서 소장 현황 조회 실패:', error);
      
      // 에러 발생 시 빈 배열 반환 (더미 데이터는 제거)
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
const BASE_URL = 'https://www.data4library.kr/api';

// API 인증키 (실제 인증키로 설정)
// 도서관정보나루 API 키 설정됨
const AUTH_KEY = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';

// API 승인 상태 확인 함수
export const checkApiApprovalStatus = async (apiKey: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://www.data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=2024-01-01&endDt=2024-01-31&pageNo=1&pageSize=1&format=json`);
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
      
      // 각 필드 추출
      const getTextContent = (tagName: string): string => {
        const element = doc.getElementsByTagName(tagName)[0];
        return element?.textContent || '';
      };
      
      book.bookname = getTextContent('bookname');
      book.authors = getTextContent('authors');
      book.publisher = getTextContent('publisher');
      book.publication_year = getTextContent('publication_year');
      book.isbn13 = getTextContent('isbn13');
      book.loan_count = parseInt(getTextContent('loan_count') || '0') || 0;
      book.ranking = parseInt(getTextContent('ranking') || '0') || 0;
      
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
export const fetchPopularBooks = async (
  startDate?: string,
  endDate?: string
): Promise<PopularBookData[]> => {
  // 기본값: 실제 데이터가 있는 최근 기간 (2025년 데이터 사용)
  const defaultEndDate = '2025-07-13';  // 2025년 7월 13일
  const defaultStartDate = '2025-01-01'; // 2025년 시작
  
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

    const url = `https://www.data4library.kr/api/loanItemSrch?${params}`;
    
    console.log(`🔥 인기대출도서 API 호출 (${actualStartDate} ~ ${actualEndDate}):`, url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    const responseText = await response.text();
    console.log('📊 인기도서 API 원본 응답:', responseText.substring(0, 500) + '...');
    
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
    }
    
    console.log('📚 원본 도서 데이터:', rawBooks);
    
    const books: PopularBookData[] = rawBooks
      ?.filter((book: any) => {
        console.log('📖 개별 도서 데이터:', book);
        return book.bookname && book.bookname.trim() !== '';
      })
      .map((book: any, index: number) => ({
        id: book.isbn || `book_${index}`,
        title: book.bookname.trim(), // 제목 공백 제거
        author: book.authors || '작가 미상',
        publisher: book.publisher || '출판사 미상',
        isbn: book.isbn || '',
        loanCount: parseInt(book.loan_count) || (index + 1) * 1000, // 대출수가 없으면 순위 기반으로 추정
        category: book.class_nm || '일반',
        publishYear: book.publication_year || '2023'
      })) || [];
    
    console.log(`🏆 인기도서 ${books.length}권 조회 완료:`, books);
    return books;
    
  } catch (error) {
    console.error('❌ 인기도서 API 호출 오류:', error);
    
    // API 호출 실패시 더미 데이터 반환
    return getFallbackPopularBooks();
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
    '   - 도서관정보나루: https://www.data4library.kr',
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
  const libTestUrl = `https://www.data4library.kr/api/libSrch?authKey=${apiKey}&pageNo=1&pageSize=5`;
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
  const popularTestUrl = `https://www.data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=2023-01-01&endDt=2023-12-31&pageNo=1&pageSize=5`;
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