// ============================================================================
// 📚 도서관 API 서비스 - 깔끔하게 구조화된 버전
// ============================================================================

// 📋 타입 정의
export interface LibraryAPIConfig {
  baseURL: string;
  apiKey: string;
}

export interface LatLng {
  lat: number;
  lng: number;
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
    docs?: PopularBookData[];
    numFound?: number;
    start?: number;
    error?: string;
  };
}

// 🔧 유틸리티 함수들
const parseShelfLocation = (doc: any): string => {
  const fields = ['shelf_loc_code', 'shelfLocation', 'shelf_code', 'callNumber', 'call_number', 'location', 'shelf'];
  for (const field of fields) {
    if (doc[field] && doc[field].trim() !== '') {
      return doc[field];
    }
  }
  return '위치 정보 없음';
};

const parseVolumeCount = (doc: any): number => {
  const fields = ['vol', 'volumeCount', 'volume', 'count', 'quantity', 'copies'];
  for (const field of fields) {
    if (doc[field] && doc[field].trim() !== '') {
      return parseInt(doc[field]) || 0;
    }
  }
  return 0;
};

const createAvailabilityResult = (
  libCode: string,
  libName: string,
  available: boolean,
  loanable: boolean,
  shelfLocation: string = '정보 없음',
  volumeCount: number = 0,
  dueDate?: string
): LibraryAvailability => ({
  libraryId: libCode,
  libraryName: libName || '알 수 없는 도서관',
  available,
  loanable,
  dueDate,
  shelfLocation,
  volumeCount
});

// 📚 메인 API 서비스 클래스
export class LibraryAPIService {
  private config: LibraryAPIConfig;

  constructor(config: LibraryAPIConfig) {
    this.config = config;
  }

  // 🏢 도서관 목록 조회
  async getLibraries(location?: LatLng, radius?: number): Promise<any[]> {
    try {
      // 도서관 정보나루 API 사용
      const url = 'https://data4library.kr/api/libSrch';
      const params = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || this.config.apiKey,
        pageNo: '1',
        pageSize: '100',
        format: 'json'
      });

      console.log('🏛️ 도서관 목록 API 호출:', `${url}?${params}`);
      const response = await fetch(`${url}?${params}`);
      console.log('📡 도서관 목록 API 응답 상태:', response.status);
      
      const data = await response.json();
      console.log('📊 도서관 목록 API 응답:', JSON.stringify(data, null, 2));

      if (data.Library && data.Library.length > 0) {
        return data.Library.map((lib: any) => ({
          id: lib.LIBRRY_NM,
          name: lib.LIBRRY_NM,
          address: lib.ADRES,
          phone: lib.TEL_NO,
          hours: lib.OPR_TIME,
          type: lib.LIBRRY_SE,
          latitude: parseFloat(lib.XCNTS),
          longitude: parseFloat(lib.YDNTS)
        }));
      }

      return [];
    } catch (error) {
      console.error('도서관 목록 조회 실패:', error);
      return [];
    }
  }

  // 📖 도서 검색
  async searchBooks(params: BookSearchParams): Promise<BookSearchResult[]> {
    try {
      const url = 'https://data4library.kr/api/srchBooks';
      const searchParams = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8',
        keyword: params.query,
        pageNo: String(params.pageNo || 1),
        pageSize: String(params.pageSize || 10),
        format: 'json'
      });

      const response = await fetch(`${url}?${searchParams}`);
      const data = await response.json();

      if (data.response && data.response.docs) {
        return data.response.docs.map((book: any) => ({
          id: book.doc_no || book.isbn,
          title: book.bookname || book.title,
          author: book.authors || book.author,
          publisher: book.publisher || book.pub_nm,
          isbn: book.isbn13 || book.isbn,
          category: book.class_nm || book.category,
          publishYear: book.publication_year || book.pubYear,
          description: book.book_intro || book.description,
          imageUrl: book.bookImageURL || book.imageUrl
        }));
      }

      return [];
    } catch (error) {
      console.error('도서 검색 실패:', error);
      return [];
    }
  }

  // 📊 도서 소장 현황 조회
  async getBookAvailability(isbn: string, region: string = '41'): Promise<LibraryAvailability[]> {
    try {
      console.log(`🔍 각 도서관별 실제 소장 현황 API 호출 시작...`);
      
      // 1. 도서관 목록 조회
      const libraries = await this.getLibraries();
      if (!libraries || libraries.length === 0) {
        console.log('⚠️ 도서관 목록이 없음');
        return [];
      }

      // 2. 지역 필터링
      let filteredLibs = libraries;
      if (region && region !== '전체') {
        filteredLibs = libraries.filter((lib: any) => 
          lib.address && lib.address.includes(region)
        );
        console.log(`✅ 정확한 지역 매칭: "${region}"`);
      }

      // 3. 각 도서관별 소장 현황 조회 (최대 10개)
      const availabilityPromises = filteredLibs.slice(0, 10).map(async (lib: any) => {
        const libCode = lib.id || lib.name;
        if (!libCode) {
          console.log(`⚠️ 도서관 코드 없음: ${lib.name}`);
          return null;
        }

        try {
          // 도서관정보나루 API로 소장 현황 조회
          const url = 'https://data4library.kr/api/bookExist';
          const params = new URLSearchParams({
            authKey: process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8',
            isbn: isbn,
            libCode: libCode,
            format: 'json'
          });

          console.log(`🔍 ${lib.name} 소장 현황 API 호출:`, `${url}?${params}`);
          const response = await fetch(`${url}?${params}`);
          console.log(`📡 ${lib.name} API 응답 상태:`, response.status, response.statusText);
          
          if (!response.ok) {
            console.log(`⚠️ ${lib.name} API 호출 실패:`, response.status);
            return createAvailabilityResult(libCode, lib.name, false, false, 'API 오류');
          }

          const data = await response.json();
          console.log(`📊 ${lib.name} API 응답:`, JSON.stringify(data, null, 2));

          // 소장 현황 데이터 파싱
          if (data.response && data.response.docs && data.response.docs.length > 0) {
            const doc = data.response.docs[0];
            const shelfLocation = parseShelfLocation(doc);
            const volumeCount = parseVolumeCount(doc);
            const isAvailable = doc.loanStatus !== '대출중';
            const isLoanable = doc.loanStatus === '대출가능';

            console.log(`✅ ${lib.name}에서 실제 소장 현황 발견!`);
            return createAvailabilityResult(
              libCode, 
              lib.name, 
              isAvailable, 
              isLoanable, 
              shelfLocation, 
              volumeCount, 
              doc.dueDate
            );
          } else {
            console.log(`⚠️ ${lib.name}에서 소장 현황 데이터 없음`);
            return createAvailabilityResult(libCode, lib.name, false, false, '소장하지 않음');
          }
        } catch (error) {
          console.log(`⚠️ ${lib.name} API 호출 중 오류:`, error);
          return createAvailabilityResult(libCode, lib.name, false, false, 'API 오류');
        }
      });

      const results = await Promise.all(availabilityPromises);
      const availability = results.filter((result): result is LibraryAvailability => result !== null);
      
      console.log('✅ 실제 API 기반 소장 현황 반환:', availability);
      return availability;
    } catch (error) {
      console.error('❌ 도서 소장 현황 조회 중 오류:', error);
      return [];
    }
  }

  // 📅 도서 예약
  async reserveBook(bookId: string, libraryId: string, userId: string): Promise<boolean> {
    try {
      console.log(`도서 예약 요청: 도서 ${bookId}, 도서관 ${libraryId}, 사용자 ${userId}`);
      return true; // 실제 구현 시 API 호출
    } catch (error) {
      console.error('도서 예약 실패:', error);
      return false;
    }
  }

  // 👥 독서 모임 조회
  async getReadingGroups(libraryId?: string): Promise<any[]> {
    try {
      // 더미 데이터 반환 (실제 구현 시 API 호출)
      const dummyGroups = [
        {
          id: '1',
          name: '월요일 독서회',
          libraryId: '중앙도서관',
          description: '매주 월요일 저녁 독서 토론',
          memberCount: 15,
          maxMembers: 20
        },
        {
          id: '2',
          name: '클래식 독서회',
          libraryId: '중앙도서관',
          description: '고전 문학 작품 읽기',
          memberCount: 8,
          maxMembers: 12
        }
      ];

      if (libraryId) {
        return dummyGroups.filter(group => group.libraryId === libraryId);
      }
      return dummyGroups;
    } catch (error) {
      console.error('독서 모임 조회 실패:', error);
      return [];
    }
  }

  // ➕ 독서 모임 가입
  async joinReadingGroup(groupId: string, userId: string): Promise<boolean> {
    try {
      console.log(`독서 모임 가입 요청: 모임 ${groupId}, 사용자 ${userId}`);
      return true; // 실제 구현 시 API 호출
    } catch (error) {
      console.error('독서 모임 가입 실패:', error);
      return false;
    }
  }

  // 🆕 독서 모임 생성
  async createReadingGroup(groupData: any): Promise<boolean> {
    try {
      console.log('독서 모임 생성 요청:', groupData);
      return true; // 실제 구현 시 API 호출
    } catch (error) {
      console.error('독서 모임 생성 실패:', error);
      return false;
    }
  }
}

// 🌟 기본 API 인스턴스
export const defaultLibraryAPI = new LibraryAPIService({
  baseURL: process.env.REACT_APP_GYEONGGI_API_URL || 'https://openapi.gg.go.kr',
  apiKey: process.env.REACT_APP_GYEONGGI_API_KEY || '8b62aa70e514468596e9324d064d582d'
});

// 📚 인기 대출 도서 조회 (별도 함수)
export const fetchPopularBooks = async (
  startDate?: string,
  endDate?: string
): Promise<PopularBookData[]> => {
  try {
    // API 키 확인
    const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;
    console.log('🔑 fetchPopularBooks - API 키 확인:', apiKey ? '설정됨' : '설정되지 않음');
    
    if (!apiKey) {
      console.log('⚠️ API 키가 설정되지 않았습니다. 더미 데이터를 반환합니다.');
      return [
        {
          id: 'dummy1',
          title: '데미안',
          author: '헤르만 헤세',
          publisher: '민음사',
          isbn: '9788937473135',
          loanCount: 156,
          category: '소설',
          publishYear: '2019'
        },
        {
          id: 'dummy2',
          title: '1984',
          author: '조지 오웰',
          publisher: '열린책들',
          isbn: '9788932917245',
          loanCount: 142,
          category: '소설',
          publishYear: '2018'
        },
        {
          id: 'dummy3',
          title: '동물농장',
          author: '조지 오웰',
          publisher: '열린책들',
          isbn: '9788932917252',
          loanCount: 128,
          category: '소설',
          publishYear: '2018'
        },
        {
          id: 'dummy4',
          title: '어린 왕자',
          author: '생텍쥐페리',
          publisher: '열린책들',
          isbn: '9788932917269',
          loanCount: 115,
          category: '소설',
          publishYear: '2017'
        },
        {
          id: 'dummy5',
          title: '노인과 바다',
          author: '어니스트 헤밍웨이',
          publisher: '민음사',
          isbn: '9788937473142',
          loanCount: 98,
          category: '소설',
          publishYear: '2016'
        }
      ];
    }

    // 동적 날짜 계산
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    const url = 'https://data4library.kr/api/loanItemSrch';
    const params = new URLSearchParams({
      authKey: apiKey,
      startDt: startDate || `${currentYear}-01-01`,
      endDt: endDate || `${currentYear}-${currentMonth}-${currentDay}`,
      pageNo: '1',
      pageSize: '10',
      format: 'json'
    });

    console.log('🌐 API 호출 URL:', `${url}?${params}`);
    const response = await fetch(`${url}?${params}`);
    console.log('📡 API 응답 상태:', response.status, response.statusText);
    
    const data: ApiResponse = await response.json();
    console.log('📊 API 응답 데이터:', JSON.stringify(data, null, 2));

    // API 오류 확인
    if (data.response && data.response.error) {
      console.error('❌ API 오류:', data.response.error);
      
      // IP 제한 오류인 경우 더미 데이터 반환
      if (data.response.error.includes('IP 등록') || data.response.error.includes('500건')) {
        console.log('⚠️ IP 제한으로 인한 오류. 더미 데이터를 반환합니다.');
        return [
          {
            id: 'dummy1',
            title: '데미안',
            author: '헤르만 헤세',
            publisher: '민음사',
            isbn: '9788937473135',
            loanCount: 156,
            category: '소설',
            publishYear: '2019'
          },
          {
            id: 'dummy2',
            title: '1984',
            author: '조지 오웰',
            publisher: '열린책들',
            isbn: '9788932917245',
            loanCount: 142,
            category: '소설',
            publishYear: '2018'
          },
          {
            id: 'dummy3',
            title: '동물농장',
            author: '조지 오웰',
            publisher: '열린책들',
            isbn: '9788932917252',
            loanCount: 128,
            category: '소설',
            publishYear: '2018'
          },
          {
            id: 'dummy4',
            title: '어린 왕자',
            author: '생텍쥐페리',
            publisher: '열린책들',
            isbn: '9788932917269',
            loanCount: 115,
            category: '소설',
            publishYear: '2017'
          },
          {
            id: 'dummy5',
            title: '노인과 바다',
            author: '어니스트 헤밍웨이',
            publisher: '민음사',
            isbn: '9788937473142',
            loanCount: 98,
            category: '소설',
            publishYear: '2016'
          }
        ];
      }
      return [];
    }

    if (data.response && data.response.docs) {
      return data.response.docs.map(book => ({
        id: book.isbn,
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        isbn: book.isbn,
        loanCount: book.loanCount || 0,
        category: book.category,
        publishYear: book.publishYear
      }));
    }

    return [];
  } catch (error) {
    console.error('인기 대출 도서 조회 실패:', error);
    return [];
  }
};

// 🔍 도서 검색 API (별도 함수)
export const searchBooksAPI = async (
  query: string,
  pageNo: number = 1,
  pageSize: number = 10
): Promise<BookSearchResult[]> => {
  try {
    // API 키 확인
    const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;
    if (!apiKey) {
      console.error('❌ API 키가 설정되지 않았습니다.');
      return [];
    }

    const url = 'https://data4library.kr/api/srchBooks';
    const params = new URLSearchParams({
      authKey: apiKey,
      keyword: query,
      pageNo: String(pageNo),
      pageSize: String(pageSize),
      format: 'json'
    });

    const response = await fetch(`${url}?${params}`);
    const data = await response.json();

    if (data.response && data.response.docs) {
      return data.response.docs.map((book: any) => ({
        id: book.doc_no || book.isbn,
        title: book.bookname || book.title,
        author: book.authors || book.author,
        publisher: book.publisher || book.pub_nm,
        isbn: book.isbn13 || book.isbn,
        category: book.class_nm || book.category,
        publishYear: book.publication_year || book.pubYear,
        description: book.book_intro || book.description,
        imageUrl: book.bookImageURL || book.imageUrl
      }));
    }

    return [];
  } catch (error) {
    console.error('도서 검색 실패:', error);
    return [];
  }
};

// 🔧 API 상태 확인 함수들
export const checkApiApprovalStatus = async (apiKey: string): Promise<boolean> => {
  try {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    const response = await fetch(`https://www.data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=${currentYear}-01-01&endDt=${currentYear}-${currentMonth}-${currentDay}&pageNo=1&pageSize=1&format=json`);
    const data = await response.json();
    
    if (data.error || data.message?.includes('인증키') || data.message?.includes('승인')) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('API 승인 상태 확인 중 오류:', error);
    return false;
  }
};

export const getApiStatus = (): {
  configured: boolean;
  apiKey: string;
  message: string;
} => {
  const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;
  return {
    configured: !!apiKey,
    apiKey: apiKey || '설정되지 않음',
    message: apiKey ? 'API 키가 설정되었습니다.' : 'API 키를 설정해주세요.'
  };
};

export const checkApiConfiguration = (): boolean => {
  const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;
  return !!apiKey;
}; 