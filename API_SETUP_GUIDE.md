# 📚 도서관 API 연동 가이드

## 1. API 키 발급

### 도서관 정보나루 API 키 발급 방법
1. [도서관 정보나루](http://data4library.kr) 사이트 접속
2. 회원가입 및 로그인
3. API 서비스 신청
4. 발급받은 인증키 복사

## 2. API 키 설정

### 방법 1: 환경 변수 사용 (권장)
```bash
# .env 파일 생성
REACT_APP_LIBRARY_API_KEY=your_api_key_here
```

### 방법 2: 코드 직접 수정
```typescript
// src/services/LibraryAPI.ts
const AUTH_KEY = 'your_actual_api_key_here';
```

## 3. API 사용 예시

### 인기 도서 조회
```typescript
import { fetchPopularBooks } from '../services/LibraryAPI';

// 수원시 지역 최근 6개월 인기도서 조회
const books = await fetchPopularBooks('수원시', '2024-07-01', '2024-12-31');
```

### 지역별 코드
```typescript
const REGION_CODES = {
  '강남구': '31',
  '서초구': '31', 
  '수원시': '31',
  '성남시': '31',
  '부천시': '31',
  '전체': '31' // 경기도 전체
};
```

## 4. API 파라미터 설명

| 파라미터 | 설명 | 예시 |
|---------|------|------|
| authKey | 인증키 | your_api_key |
| startDt | 조회 시작일 | 2025-01-01 |
| endDt | 조회 종료일 | 2025-07-12 |
| age | 연령대 (세미콜론 구분) | 40;50;60 |
| region | 지역 코드 | 31 (경기도) |
| format | 응답 형식 | json |
| pageNo | 페이지 번호 | 1 |
| pageSize | 페이지 크기 | 5 |

## 5. 실제 API 호출 URL 예시

```
http://data4library.kr/api/loanItemSrch?authKey=YOUR_API_KEY&startDt=2025-01-01&endDt=2025-07-12&age=40;50;60&region=31&format=json&pageNo=1&pageSize=5
```

## 6. 응답 데이터 구조

```json
{
  "response": {
    "docs": [
      {
        "id": "1",
        "title": "도서 제목",
        "author": "저자명",
        "publisher": "출판사",
        "isbn": "9788937473722",
        "loanCount": 1247,
        "category": "소설",
        "publishYear": "2016"
      }
    ],
    "numFound": 5,
    "start": 0
  }
}
```

## 7. 에러 처리

API 호출 실패 시 자동으로 더미 데이터를 사용합니다:
- 네트워크 오류
- 인증 실패
- 잘못된 파라미터
- API 서버 오류

## 8. 개발 환경 설정

### 1단계: 환경 변수 파일 생성
```bash
# 프로젝트 루트에 .env 파일 생성
touch .env
```

### 2단계: API 키 설정
```bash
# .env 파일 내용
REACT_APP_LIBRARY_API_KEY=your_api_key_here
```

### 3단계: 코드 수정
```typescript
// src/services/LibraryAPI.ts
const AUTH_KEY = process.env.REACT_APP_LIBRARY_API_KEY || 'YOUR_API_KEY_HERE';
```

### 4단계: 애플리케이션 재시작
```bash
npm start
```

## 9. 주의사항

1. **API 키 보안**: 
   - 환경 변수 사용 권장
   - 코드에 직접 하드코딩 금지
   - .gitignore에 .env 추가

2. **CORS 이슈**: 
   - 브라우저에서 직접 호출 시 CORS 오류 발생 가능
   - 프록시 서버 또는 백엔드 API 사용 권장

3. **API 제한**:
   - 일일 호출 제한 확인
   - 적절한 캐싱 구현 권장

4. **데이터 정합성**:
   - API 응답 데이터 구조 변경 대비
   - 에러 처리 및 fallback 데이터 준비

## 10. 문제 해결

### API 키 설정 확인
```javascript
console.log('API 키 설정:', process.env.REACT_APP_LIBRARY_API_KEY);
```

### API 호출 테스트
```bash
# 터미널에서 직접 테스트
curl "http://data4library.kr/api/loanItemSrch?authKey=YOUR_API_KEY&startDt=2025-01-01&endDt=2025-07-12&age=40;50;60&region=31&format=json&pageNo=1&pageSize=5"
```

## 11. 참고 링크

- [도서관 정보나루 API 문서](http://data4library.kr/api/loanItemSrch)
- [공공데이터포털 도서관 API](https://www.data.go.kr)
- [React 환경 변수 설정](https://create-react-app.dev/docs/adding-custom-environment-variables/) 