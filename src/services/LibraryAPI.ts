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
  // 실제 API 응답에서 배가기호 필드 확인
  const fields = [
    'shelf_loc_code', 
    'shelfLocation', 
    'shelf_code', 
    'callNumber', 
    'call_number', 
    'location', 
    'shelf',
    'addition_symbol' // 실제 API에서 사용하는 필드
  ];
  
  for (const field of fields) {
    if (doc[field] && doc[field].trim() !== '') {
      console.log(`📚 배가기호 발견 (${field}):`, doc[field]);
      return doc[field];
    }
  }
  
  console.log('📚 배가기호 필드 없음, 전체 응답:', doc);
  return '위치 정보 없음';
};

const parseVolumeCount = (doc: any): number => {
  // 실제 API 응답에서 소장권수 필드 확인
  const fields = [
    'vol', 
    'volumeCount', 
    'volume', 
    'count', 
    'quantity', 
    'copies'
  ];
  
  for (const field of fields) {
    if (doc[field] && doc[field].trim() !== '') {
      const count = parseInt(doc[field]);
      if (!isNaN(count) && count > 0) {
        console.log(`📚 소장권수 발견 (${field}):`, count);
        return count;
      }
    }
  }
  
  console.log('📚 소장권수 필드 없음, 전체 응답:', doc);
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
  async getLibraries(location?: LatLng, radius?: number, region?: string): Promise<any[]> {
    try {
      // 도서관 정보나루 API 사용
      const url = 'https://data4library.kr/api/libSrch';
      const params = new URLSearchParams({
        authKey: process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8',
        pageNo: '1',
        pageSize: '100',
        format: 'json'
      });

      console.log('🏛️ 도서관 목록 API 호출:', `${url}?${params}`);
      const response = await fetch(`${url}?${params}`);
      console.log('📡 도서관 목록 API 응답 상태:', response.status);
      
      const data = await response.json();
      console.log('📊 도서관 목록 API 응답:', JSON.stringify(data, null, 2));

      if (data.response && data.response.libs && data.response.libs.length > 0) {
        let libraries = data.response.libs.map((item: any) => {
          const lib = item.lib;
          return {
            id: lib.libCode,
            name: lib.libName,
            address: lib.address,
            phone: lib.tel,
            hours: lib.operatingTime,
            type: lib.libraryType,
            latitude: parseFloat(lib.latitude),
            longitude: parseFloat(lib.longitude)
          };
        });

        // 지역 필터링 적용
        if (region && region !== '전체') {
          if (region === '경기도') {
            libraries = libraries.filter((lib: any) => 
              lib.address && (
                lib.address.includes('경기도') || 
                lib.address.includes('경기') ||
                lib.address.includes('수원') ||
                lib.address.includes('성남') ||
                lib.address.includes('용인') ||
                lib.address.includes('부천') ||
                lib.address.includes('안산') ||
                lib.address.includes('안양') ||
                lib.address.includes('평택') ||
                lib.address.includes('시흥') ||
                lib.address.includes('김포') ||
                lib.address.includes('광주') ||
                lib.address.includes('광명') ||
                lib.address.includes('군포') ||
                lib.address.includes('오산') ||
                lib.address.includes('의왕') ||
                lib.address.includes('이천') ||
                lib.address.includes('안성') ||
                lib.address.includes('양평') ||
                lib.address.includes('여주') ||
                lib.address.includes('과천') ||
                lib.address.includes('고양') ||
                lib.address.includes('의정부') ||
                lib.address.includes('동두천') ||
                lib.address.includes('구리') ||
                lib.address.includes('남양주') ||
                lib.address.includes('파주') ||
                lib.address.includes('양주') ||
                lib.address.includes('포천') ||
                lib.address.includes('연천') ||
                lib.address.includes('가평') ||
                lib.address.includes('하남')
              )
            );
            console.log(`✅ 경기도 도서관 필터링 완료: ${libraries.length}개 도서관`);
          }
        }

        return libraries;
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
      const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
      console.log('🔑 LibraryAPIService API 키:', apiKey ? '설정됨' : '설정되지 않음');
      
      const searchParams = new URLSearchParams({
        authKey: apiKey,
        keyword: params.query,
        pageNo: String(params.pageNo || 1),
        pageSize: String(params.pageSize || 10),
        format: 'json'
      });

          const response = await fetch(`${url}?${searchParams}`);
    const data = await response.json();
    
    console.log('🔍 LibraryAPIService 도서 검색 API 응답:', JSON.stringify(data, null, 2));

          if (data.response && data.response.docs) {
        return data.response.docs.map((item: any) => {
          // 중첩된 doc 구조에서 실제 도서 정보 추출
          const book = item.doc || item;
          
          return {
            id: book.doc_no || book.isbn13 || book.isbn || `book_${Math.random()}`,
            title: book.bookname || book.title || '제목 없음',
            author: book.authors || book.author || '저자 정보 없음',
            publisher: book.publisher || book.pub_nm || '출판사 정보 없음',
            isbn: book.isbn13 || book.isbn || '',
            category: book.class_nm || book.category || '',
            publishYear: book.publication_year || book.pubYear || '',
            description: book.book_intro || book.description || '',
            imageUrl: book.bookImageURL || book.imageUrl || '',
            loanCount: parseInt(book.loan_count) || 0
          };
        }).filter((book: any) => {
          // 검색어와 관련된 도서만 필터링 (제목에 검색어가 포함된 경우)
          const searchTerm = params.query.toLowerCase();
          const title = book.title.toLowerCase();
          return title.includes(searchTerm) || 
                 book.author.toLowerCase().includes(searchTerm) ||
                 book.publisher.toLowerCase().includes(searchTerm);
        });
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
      
      // 1. 도서관 목록 조회 (지역 필터링 적용)
      const libraries = await this.getLibraries(undefined, undefined, region);
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

          // API 오류 체크 (소장하지 않는 경우)
          if (data.error && data.error.includes('ISBN을 확인해 주시기 바랍니다')) {
            console.log(`❌ ${lib.name}에서 소장하지 않음`);
            return createAvailabilityResult(libCode, lib.name, false, false, '미소장');
          }

          // 소장 현황 데이터 파싱
          if (data.response && data.response.docs && data.response.docs.length > 0) {
            const doc = data.response.docs[0];
            const shelfLocation = parseShelfLocation(doc);
            const volumeCount = parseVolumeCount(doc);
            
            // 소장하고 있으면 available로 처리
            const isAvailable = true;
            const isLoanable = false; // 대출 가능 여부는 실제로 판단할 수 없으므로 false

            console.log(`✅ ${lib.name}에서 실제 소장 현황 발견!`);
            console.log(`📚 배가기호: ${shelfLocation}, 소장권수: ${volumeCount}`);
            return createAvailabilityResult(
              libCode, 
              lib.name, 
              isAvailable, 
              isLoanable, 
              shelfLocation, 
              volumeCount
            );
          } else {
            console.log(`⚠️ ${lib.name}에서 소장 현황 데이터 없음`);
            return createAvailabilityResult(libCode, lib.name, false, false, '미소장');
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
    // API 키 확인 (환경변수 또는 하드코딩된 키 사용)
    const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
    console.log('🔑 fetchPopularBooks - API 키 확인:', apiKey ? '설정됨' : '설정되지 않음');
    
    // API 승인 상태 확인
    console.log('🔍 API 승인 상태 확인 중...');
    const isApiApproved = await checkApiApprovalStatus(apiKey);
    console.log('📊 API 승인 상태:', isApiApproved ? '승인됨' : '승인되지 않음');
    
    if (!apiKey || apiKey === '여기에_실제_API_키를_입력하세요' || !isApiApproved) {
      console.log('⚠️ API 키가 설정되지 않았거나 승인되지 않았습니다. 더미 데이터를 반환합니다.');
      const dummyData = [
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
      console.log('🎭 더미 데이터 반환:', dummyData);
      return dummyData;
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
      format: 'json',
      age: '20' // 성인 대상 (20세 이상)
    });

    console.log('🌐 API 호출 URL:', `${url}?${params}`);
    const response = await fetch(`${url}?${params}`);
    console.log('📡 API 응답 상태:', response.status, response.statusText);
    
    const data: ApiResponse = await response.json();
    console.log('📊 API 응답 데이터:', JSON.stringify(data, null, 2));

    // API 오류 확인
    if (data.response && data.response.error) {
      console.error('❌ API 오류:', data.response.error);
      
            // 모든 API 오류에 대해 더미 데이터 반환
      console.log('⚠️ API 오류로 인해 더미 데이터를 반환합니다.');
      console.log('🔍 오류 내용:', data.response.error);
      
      const dummyData = [
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
      
      console.log('🎭 더미 데이터 반환:', dummyData);
      return dummyData;
    }

    if (data.response && data.response.docs) {
      console.log('📚 API 응답 파싱 시작...');
      const parsedBooks = data.response.docs
        .map((item: any, index: number) => {
          const book = item.doc; // 실제 도서 데이터는 doc 안에 있음
          console.log(`📖 파싱 중인 도서 ${index + 1}:`, book);
          
          // 작가 정보에서 "지은이: " 부분 제거
          const author = book.authors ? book.authors.replace('지은이: ', '') : '작자미상';
          
          return {
            id: book.isbn13 || `book-${index}`,
            title: book.bookname || '제목 없음',
            author: author,
            publisher: book.publisher || '출판사 정보 없음',
            isbn: book.isbn13 || '',
            loanCount: parseInt(book.loan_count) || 0,
            category: book.class_nm || '분류 정보 없음',
            publishYear: book.publication_year || '출간년도 정보 없음'
          };
        })
        .filter(book => {
          // 아동도서 제외 필터링
          const isChildrenBook = 
            book.title.includes('그림책') ||
            book.title.includes('동화') ||
            book.title.includes('아동') ||
            book.title.includes('어린이') ||
            book.category.includes('아동') ||
            book.category.includes('어린이') ||
            book.category.includes('유아');
          
          if (isChildrenBook) {
            console.log(`🚫 아동도서 제외: ${book.title}`);
            return false;
          }
          
          return true;
        });
      
      console.log('📚 파싱 완료된 도서 목록:', parsedBooks);
      return parsedBooks;
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
    const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
    console.log('🔑 사용할 API 키:', apiKey ? '설정됨' : '설정되지 않음');
    
    if (!apiKey || apiKey === 'your_api_key_here') {
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
    
    console.log('🔍 도서 검색 API 응답:', JSON.stringify(data, null, 2));

    if (data.response && data.response.docs) {
      console.log('📚 API 응답 docs 개수:', data.response.docs.length);
      
      const books = data.response.docs.map((book: any) => {
        // API 응답에서 실제 도서 정보는 book.doc 안에 있음
        const doc = book.doc || book;
        
        console.log('📖 개별 도서 데이터:', {
          원본: book,
          doc: doc,
          제목: doc.bookname || doc.title,
          저자: doc.authors || doc.author,
          출판사: doc.publisher || doc.pub_nm,
          ISBN: doc.isbn13 || doc.isbn
        });
        
        return {
          id: doc.doc_no || doc.isbn13 || doc.isbn || `book_${Date.now()}`,
          title: doc.bookname || doc.title || '제목 없음',
          author: doc.authors || doc.author || '저자 정보 없음',
          publisher: doc.publisher || doc.pub_nm || '출판사 정보 없음',
          isbn: doc.isbn13 || doc.isbn || '',
          category: doc.class_nm || doc.category || '분류 없음',
          publishYear: doc.publication_year || doc.pubYear || '출판년도 정보 없음',
          description: doc.book_intro || doc.description || '',
          imageUrl: doc.bookImageURL || doc.imageUrl || ''
        };
      });
      
      console.log('📚 파싱된 도서 목록:', books);
      
      // 검색어 필터링을 더 유연하게 수정
      const filteredBooks = books.filter((book: any) => {
        const searchTerm = query.toLowerCase().trim();
        const title = (book.title || '').toLowerCase();
        const author = (book.author || '').toLowerCase();
        const publisher = (book.publisher || '').toLowerCase();
        
        // 검색어가 제목, 저자, 출판사 중 하나라도 포함되면 포함
        const matches = title.includes(searchTerm) || 
                       author.includes(searchTerm) ||
                       publisher.includes(searchTerm);
        
        console.log(`🔍 "${book.title}" 검색 결과:`, {
          검색어: searchTerm,
          제목: title,
          저자: author,
          출판사: publisher,
          매칭: matches
        });
        
        return matches;
      });
      
      console.log('✅ 필터링된 도서 개수:', filteredBooks.length);
      return filteredBooks;
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
    console.log('🔍 API 승인 상태 확인 시작...');
    console.log('🔑 사용할 API 키:', apiKey ? '설정됨' : '설정되지 않음');
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = String(today.getDate()).padStart(2, '0');
    
    const url = `https://data4library.kr/api/loanItemSrch?authKey=${apiKey}&startDt=${currentYear}-01-01&endDt=${currentYear}-${currentMonth}-${currentDay}&pageNo=1&pageSize=1&format=json`;
    console.log('🌐 API 상태 확인 URL:', url);
    
    const response = await fetch(url);
    console.log('📡 API 상태 확인 응답:', response.status, response.statusText);
    
    const data = await response.json();
    console.log('📊 API 상태 확인 응답 데이터:', JSON.stringify(data, null, 2));
    
    if (data.error || data.message?.includes('인증키') || data.message?.includes('승인') || data.response?.error) {
      console.error('❌ API 승인 실패:', data.error || data.message || data.response?.error);
      return false;
    }
    
    console.log('✅ API 승인 성공');
    return true;
  } catch (error) {
    console.error('❌ API 승인 상태 확인 중 오류:', error);
    return false;
  }
};

export const getApiStatus = (): {
  configured: boolean;
  apiKey: string;
  message: string;
} => {
  const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
  const isConfigured = !!apiKey && apiKey !== '여기에_실제_API_키를_입력하세요';
  return {
    configured: isConfigured,
    apiKey: isConfigured ? '설정됨' : '설정되지 않음',
    message: isConfigured ? 'API 키가 설정되었습니다.' : 'API 키를 설정해주세요.'
  };
};

export const checkApiConfiguration = (): boolean => {
  const apiKey = process.env.REACT_APP_LIBRARY_API_KEY || '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
  return !!apiKey && apiKey !== '여기에_실제_API_키를_입력하세요';
}; 