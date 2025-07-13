# �� 도서관 API 연동 가이드

## 🎯 API 연동 현황

### ✅ 현재 연동 완료된 API
1. **인기 도서 조회 API** - 도서관정보나루
2. **도서 검색 API** - 도서관정보나루
3. **경기도 도서관 정보 API** - 경기데이터드림
4. **도서 소장 현황 API** - 도서관정보나루

### 🔧 개선된 기능들
- 실제 API 호출 후 실패 시 더미 데이터 자동 전환
- 에러 처리 강화 및 사용자 피드백 개선
- 지역별 도서관 검색 기능 향상
- 도서 검색 결과에 상세 정보 포함

## 1. 도서관정보나루 API 키 발급

### 📋 발급 절차
1. [도서관정보나루](http://data4library.kr) 사이트 접속
2. 회원가입 및 로그인
3. "오픈API" 메뉴 → "API 신청"
4. 개인정보 수집 및 이용 동의
5. API 서비스 신청서 작성
6. 발급받은 인증키 복사 및 저장

### 🔑 API 키 설정

#### 방법 1: 환경 변수 사용 (권장)
```bash
# .env 파일 생성
REACT_APP_LIBRARY_API_KEY=your_api_key_here
REACT_APP_GYEONGGI_API_KEY=your_gyeonggi_api_key
```

#### 방법 2: 코드 직접 수정
```typescript
// src/services/LibraryAPI.ts
const AUTH_KEY = 'your_actual_api_key_here';
```

## 2. 경기데이터드림 API 키 발급

### 📋 발급 절차
1. [경기데이터드림](https://data.gg.go.kr) 사이트 접속
2. 회원가입 및 로그인
3. "데이터 활용" → "오픈API" → "API 신청"
4. "도서관 현황(제공표준)" 서비스 선택
5. 신청서 작성 및 제출
6. 승인 완료 후 API 키 발급 (1-2일 소요)

### 🔧 API 설정
```bash
# .env 파일에 추가
REACT_APP_GYEONGGI_API_URL=https://openapi.gg.go.kr
REACT_APP_GYEONGGI_API_KEY=your_gyeonggi_api_key
```

## 3. 현재 구현된 API 기능

### 📚 도서 검색 API
```typescript
import { searchBooksAPI } from '../services/LibraryAPI';

// 도서 검색 예시
const searchResults = await searchBooksAPI('사피엔스', 1, 10);
```

**API 엔드포인트**: `http://data4library.kr/api/srchBooks`

**주요 파라미터**:
- `authKey`: 인증키
- `title`: 도서명
- `pageNo`: 페이지 번호
- `pageSize`: 페이지 크기
- `format`: 응답 형식 (json)

### 🏛️ 도서관 정보 API
```typescript
import { LibraryAPIService } from '../services/LibraryAPI';

const libraryAPI = new LibraryAPIService({
  baseURL: 'https://openapi.gg.go.kr',
  apiKey: process.env.REACT_APP_GYEONGGI_API_KEY
});

const libraries = await libraryAPI.getLibraries();
```

**API 엔드포인트**: `https://openapi.gg.go.kr/LibraryStatus`

**주요 파라미터**:
- `KEY`: 인증키
- `Type`: 응답 형식 (json)
- `pIndex`: 페이지 인덱스
- `pSize`: 페이지 크기

### 📊 인기 도서 조회 API
```typescript
import { fetchPopularBooks } from '../services/LibraryAPI';

// 지역별 인기 도서 조회
const popularBooks = await fetchPopularBooks('수원시', '2024-01-01', '2024-12-31');
```

**API 엔드포인트**: `http://data4library.kr/api/loanItemSrch`

**주요 파라미터**:
- `authKey`: 인증키
- `startDt`: 조회 시작일
- `endDt`: 조회 종료일
- `age`: 연령대 (40;50;60)
- `region`: 지역 코드
- `format`: 응답 형식 (json)

### 📖 도서 소장 현황 API
```typescript
import { LibraryAPIService } from '../services/LibraryAPI';

const libraryAPI = new LibraryAPIService({
  baseURL: 'http://data4library.kr/api',
  apiKey: process.env.REACT_APP_LIBRARY_API_KEY
});

const availability = await libraryAPI.getBookAvailability('9788934972464');
```

**API 엔드포인트**: `http://data4library.kr/api/libSrchByBook`

**주요 파라미터**:
- `authKey`: 인증키
- `isbn`: 도서 ISBN
- `format`: 응답 형식 (json)

## 4. 지역 코드 매핑

### 📍 현재 지원 지역
```typescript
const REGION_CODES = {
  '수원시': '31',
  '성남시': '31',
  '부천시': '31',
  '안양시': '31',
  '고양시': '31',
  '용인시': '31',
  '화성시': '31',
  '전체': '31' // 경기도 전체
};
```

### 🎯 연령대 설정
```typescript
const AGE_GROUPS = '40;50;60'; // 40대, 50대, 60대
```

## 5. 에러 처리 및 폴백 시스템

### 🛡️ 강화된 에러 처리
- API 호출 실패 시 자동으로 더미 데이터 전환
- 사용자에게 친화적인 에러 메시지 표시
- 실시간 API 연결 상태 표시

### 📱 사용자 피드백
- 검색 진행 상황 실시간 표시
- API 연결 상태 표시
- 검색 결과 없음 시 안내 메시지

## 6. 실제 API 사용 예시

### 🚀 전체 API 테스트
```typescript
import { exampleApiUsage } from '../services/LibraryAPI';

// 모든 API 기능 테스트
const testResults = await exampleApiUsage();
console.log('테스트 결과:', testResults);
```

### 🔍 개별 API 테스트
```typescript
// 1. 도서 검색 테스트
const searchResults = await searchBooksAPI('사피엔스', 1, 5);
console.log('검색 결과:', searchResults);

// 2. 인기 도서 조회 테스트
const popularBooks = await fetchPopularBooks('수원시');
console.log('인기 도서:', popularBooks);

// 3. 도서관 정보 조회 테스트
const libraries = await libraryAPI.getLibraries();
console.log('도서관 목록:', libraries);
```

## 7. 개발 환경 설정

### 📦 필요한 패키지
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "typescript": "^4.7.4",
    "styled-components": "^5.3.5"
  }
}
```

### 🔧 TypeScript 설정
```typescript
// 타입 정의
interface BookSearchResult {
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
}

interface LibraryAvailability {
  libraryId: string;
  libraryName: string;
  available: boolean;
  loanable: boolean;
  reservable: boolean;
  dueDate?: string;
}
```

## 8. 배포 시 주의사항

### 🔐 보안 고려사항
- API 키를 환경변수로 관리
- 프론트엔드에서 API 키 노출 주의
- CORS 설정 확인

### 📈 성능 최적화
- API 호출 결과 캐싱
- 요청 빈도 제한
- 에러 재시도 로직

## 9. 문제 해결 가이드

### ❌ 자주 발생하는 문제

#### 1. API 키 활성화 문제
```
💡 API 키가 아직 활성화되지 않았습니다. 
도서관 정보나루에서 승인을 기다려주세요.
```

#### 2. CORS 에러
```
Access to fetch at 'http://data4library.kr/api/...' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**해결방법**: 개발 시에는 프록시 설정 또는 CORS 확장프로그램 사용

#### 3. 검색 결과 없음
```
API에서 검색 결과가 없어 더미 데이터를 표시합니다.
```

**해결방법**: 검색어를 더 간단하게 입력하거나 다른 키워드 시도

## 10. 추가 API 연동 계획

### 🔮 향후 추가 예정 API
1. **네이버 도서 검색 API** - 도서 상세정보 및 이미지
2. **국가도서관 API** - 전국 도서관 통합 정보
3. **각 시군 도서관 API** - 지역별 특화 정보
4. **도서 예약 시스템 API** - 실제 예약 기능

### 📋 환경변수 확장 예시
```bash
# .env 파일 전체 예시
REACT_APP_LIBRARY_API_KEY=your_library_api_key
REACT_APP_GYEONGGI_API_KEY=your_gyeonggi_api_key
REACT_APP_NAVER_CLIENT_ID=your_naver_client_id
REACT_APP_NAVER_CLIENT_SECRET=your_naver_client_secret
REACT_APP_NATIONAL_LIBRARY_API_KEY=your_national_library_api_key
```

## 11. 지원 및 문의

### 📞 API 지원 문의
- **도서관정보나루**: [data4library.kr](http://data4library.kr)
- **경기데이터드림**: [data.gg.go.kr](https://data.gg.go.kr)

### 🐛 버그 리포트
- 이슈 발생 시 콘솔 로그 확인
- API 응답 데이터 구조 변경 시 대응 필요

---

## 📊 API 연동 체크리스트

- [ ] 도서관정보나루 API 키 발급
- [ ] 경기데이터드림 API 키 발급
- [ ] 환경변수 설정 (.env 파일)
- [ ] 도서 검색 API 테스트
- [ ] 인기 도서 조회 API 테스트
- [ ] 도서관 정보 API 테스트
- [ ] 에러 처리 확인
- [ ] 폴백 데이터 동작 확인
- [ ] 사용자 피드백 메시지 확인
- [ ] 반응형 디자인 테스트
- [ ] 배포 환경 설정 