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
        pSize: '500' // 검색 범위 확대
      });

      const response = await fetch(`${apiUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 경기데이터드림 API 응답 구조에 맞게 데이터 변환
      let libraries = [];
      if (data.LibraryStatus && data.LibraryStatus[1].row) {
        libraries = data.LibraryStatus[1].row.map((item: any, index: number) => ({
          id: (index + 1).toString(),
          name: item.LBRRY_NM || '도서관명 없음',
          address: item.REFINE_ROADNM_ADDR || item.REFINE_LOTNO_ADDR || '주소 없음',
          phone: item.TELNO || '전화번호 없음',
          hours: '09:00-18:00', // 기본 운영시간
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
      const apiUrl = 'http://data4library.kr/api/srchBooks';
      const searchParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        title: params.query,
        pageNo: (params.pageNo || 1).toString(),
        pageSize: (params.pageSize || 10).toString(),
        format: 'json'
      });

      console.log('도서 검색 API 호출:', `${apiUrl}?${searchParams}`);
      
      const response = await fetch(`${apiUrl}?${searchParams}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log('API 응답:', data);
      
      // API 응답 구조 확인
      if (data.response && data.response.docs) {
        const books: BookSearchResult[] = data.response.docs.map((book: any, index: number) => ({
          id: book.isbn || `book_${index}`,
          title: book.bookname || '제목 없음',
          author: book.authors || '작가 미상',
          publisher: book.publisher || '출판사 미상',
          isbn: book.isbn || '',
          category: book.class_nm || '일반',
          publishYear: book.publication_year || '2023',
          description: book.description || '',
          imageUrl: book.bookImageURL || '',
          loanCount: parseInt(book.loan_count) || 0
        }));
        
        console.log('변환된 도서 데이터:', books);
        return books;
      }
      
      // API 응답이 예상과 다른 경우 더미 데이터 반환
      console.warn('API 응답 구조가 예상과 다름, 더미 데이터 사용');
      return this.getDummyBooks(params.query);
      
    } catch (error) {
      console.error('도서 검색 실패:', error);
      console.log('더미 데이터로 대체합니다.');
      return this.getDummyBooks(params.query);
    }
  }

  /**
   * 더미 도서 데이터 필터링
   */
  private getDummyBooks(query: string): BookSearchResult[] {
    return dummyBooks
      .filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
      )
      .map(book => ({
        id: book.id.toString(),
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        isbn: book.isbn,
        category: book.category,
        publishYear: book.publishYear,
        description: book.description,
        imageUrl: book.imageUrl,
        loanCount: Math.floor(Math.random() * 100) + 10
      }));
  }

  /**
   * 도서 소장 현황 조회
   * 실제 API: http://data4library.kr/api/libSrchByBook
   */
  async getBookAvailability(isbn: string): Promise<LibraryAvailability[]> {
    try {
      const apiUrl = 'http://data4library.kr/api/libSrchByBook';
      const params = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || AUTH_KEY,
        isbn: isbn,
        format: 'json'
      });

      const response = await fetch(`${apiUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.response && data.response.libs) {
        const availability: LibraryAvailability[] = data.response.libs.map((lib: any) => ({
          libraryId: lib.lib.libCode || '',
          libraryName: lib.lib.libName || '도서관명 없음',
          available: lib.book.loanAvailable === 'Y',
          loanable: lib.book.loanAvailable === 'Y',
          reservable: lib.book.reserveAvailable === 'Y',
          dueDate: lib.book.returnPlanDate || undefined
        }));
        
        return availability;
      }
      
      return [];
      
    } catch (error) {
      console.error('도서 소장 현황 조회 실패:', error);
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
  apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || 'demo_key'
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
const BASE_URL = 'http://data4library.kr/api';

// API 인증키 (실제 인증키로 설정)
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

// 지역 코드 매핑 (도서관정보나루 API 기준)
const REGION_CODES = {
  '강남구': '11',  // 서울특별시
  '서초구': '11',  // 서울특별시
  '수원시': '31',  // 경기도
  '성남시': '31',  // 경기도
  '부천시': '31',  // 경기도
  '안양시': '31',  // 경기도
  '고양시': '31',  // 경기도
  '용인시': '31',  // 경기도
  '화성시': '31',  // 경기도
  '경기도': '31',  // 경기도 전체
  '전체': '31'     // 경기도 전체 (기본값)
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
      title: book.bookname || '제목 없음',
      author: book.authors || '작가 미상',
      publisher: book.publisher || '출판사 미상',
      isbn: book.isbn || '',
      loanCount: parseInt(book.loan_count) || 0,
      category: book.class_nm || '일반',
      publishYear: book.publication_year || '2023'
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
    const popularBooks = await fetchPopularBooks('수원시', '2024-07-01', '2024-12-31');
    console.log('인기도서 목록:', popularBooks);
    
    return { searchResults, popularBooks };
  } catch (error) {
    console.error('API 사용 예시 오류:', error);
    return { searchResults: [], popularBooks: [] };
  }
}; 