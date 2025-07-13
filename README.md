# 시니어 도서관 서비스 (Senior Library Service)

50-60세 시니어층을 위한 도서관 서비스 웹 애플리케이션입니다. 주변 도서관 찾기, 도서 검색/예약, 독서 모임 참여 기능을 제공합니다.

## 🎯 주요 기능

- **📚 도서 검색**: 원하는 책을 쉽게 검색
- **📍 지역별 도서관 현황**: 지역을 입력하면 해당 지역 도서관들의 대출 현황 확인
- **📋 도서 예약**: 여러 도서관의 도서 대출 현황 확인 및 예약
- **👥 독서 모임**: 독서 클럽 생성 및 참여 기능
- **♿ 시니어 친화적 UI**: 큰 글자, 간단한 네비게이션, 높은 대비

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Styled-components
- **Map**: Custom 지도 구현 (React-Leaflet 대신)
- **API**: 경기도 공공데이터 API, 도서관정보나루 API

## 📋 시작하기

### 필수 조건

- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone <repository-url>
cd senior-library-service
```

2. 의존성 설치
```bash
npm install
```

3. 환경변수 설정
```bash
# .env 파일 생성 후 아래 내용 추가
REACT_APP_GYEONGGI_API_KEY=your_api_key_here
REACT_APP_LIBRARY_API_KEY=your_library_api_key_here
```

**⚠️ 중요**: API 키가 없어도 앱이 실행되며, 더미 데이터가 사용됩니다.

4. 개발 서버 실행
```bash
npm start
```

5. 브라우저에서 http://localhost:3000 접속

## 📖 사용법

### 간단한 3단계로 이용하세요!

1. **📚 책 검색**: 홈페이지에서 원하는 책 제목이나 저자명을 입력하여 검색
2. **📍 지역 선택**: "지역 선택" 섹션에서 거주 지역 입력 (예: 수원시, 성남시, 부천시)
3. **📋 대출 현황 확인**: 검색한 모든 책들의 해당 지역 도서관별 대출 현황을 한번에 확인!

**💡 주요 장점**: 
- 지역을 한 번 선택하면 검색한 모든 책의 대출 현황을 확인 가능
- 여러 책을 검색해도 지역 재입력 불필요
- 독서 모임도 같은 지역에서 자동으로 찾기 가능

## 🔑 API 연동 가이드

### 경기도 공공데이터 API 설정

1. **경기데이터드림 회원가입**
   - https://data.gg.go.kr 에서 회원가입
   - 개인정보 수집 및 이용 동의

2. **API 키 발급**
   - 데이터 활용 신청 → 오픈API 신청
   - "도서관 현황(제공표준)" 서비스 선택
   - 승인까지 1-2일 소요

3. **실제 사용 중인 API**
   - **도서관 현황 API**: `https://openapi.gg.go.kr/LibraryStatus`
   - 경기도 내 모든 도서관 정보 제공
   - 실시간 데이터 업데이트

4. **API 응답 데이터**
   - 도서관명 (LBRRY_NM)
   - 주소 (REFINE_ROADNM_ADDR)
   - 전화번호 (TELNO)
   - 홈페이지 (HMPG_ADDR)
   - 좌표 (REFINE_WGS84_LAT, REFINE_WGS84_LOGT)

### 도서관정보나루 API 설정

1. **회원가입 및 승인**
   - https://www.data4library.kr 접속
   - 오픈API 신청 → 도서관정보나루 API
   - 기관 인증 필요 (개인은 제한적 이용)

2. **제공 API**
   - 전국 도서관 정보 API
   - 도서 검색 API
   - 대출/예약 현황 API
   - 신작 도서 정보 API

### 시군별 추가 API

**수원시**
- 수원시 도서관 API
- https://data.suwon.go.kr

**성남시**
- 성남시 공공데이터 포털
- https://data.seongnam.go.kr

**부천시**
- 부천시 열린데이터 광장
- https://data.bucheon.go.kr

## 📁 프로젝트 구조

```
senior-library-service/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── BookSearchSection.tsx
│   │   ├── RegionSelector.tsx
│   │   ├── ReadingGroupSection.tsx
│   │   └── MapSection.tsx
│   ├── services/
│   │   └── LibraryAPI.ts
│   ├── pages/
│   │   └── MainPage.tsx
│   ├── App.tsx
│   └── index.tsx
├── .env.example
├── package.json
└── README.md
```

## 🎨 UI/UX 특징

### 시니어 친화적 디자인
- **큰 텍스트**: 최소 18px 이상의 폰트 크기
- **큰 버튼**: 최소 48px 높이의 클릭하기 쉬운 버튼
- **높은 대비**: 명확한 색상 대비로 가독성 향상
- **간단한 네비게이션**: 복잡하지 않은 메뉴 구조
- **이모지 아이콘**: 직관적인 이모지로 기능 표시

### 반응형 디자인
- 데스크톱, 태블릿, 모바일 지원
- 터치 친화적 인터페이스

## 📊 데이터 소스

### 현재 상태
- **최적화된 플로우**: 책 검색 → 공통 지역 선택 → 모든 책의 대출 현황 일괄 확인
- **효율적인 UX**: 지역을 한 번만 선택하면 모든 검색 책의 도서관별 현황 표시
- **실제 API 연동**: 경기데이터드림 API로 실제 경기도 도서관 정보 제공
- **더미 데이터 백업**: API 키가 없어도 샘플 데이터로 체험 가능

### 실제 운영 시 연동 가능한 API
1. **경기데이터드림** (data.gg.go.kr)
   - 경기도 공공데이터 포털
   - 도서관 시설 정보
   - 문화시설 현황

2. **도서관정보나루** (data4library.kr)
   - 국가도서관통계시스템
   - 전국 도서관 정보
   - 도서 검색 및 대출 정보

3. **각 시군 Open API**
   - 지역별 도서관 서비스
   - 문화 프로그램 정보
   - 시설 예약 시스템

## 🔧 개발 정보

### 주요 라이브러리
```json
{
  "react": "^18.2.0",
  "typescript": "^4.9.5",
  "styled-components": "^6.1.8",
  "@types/leaflet": "^1.9.8"
}
```

### 브라우저 지원
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 배포

### 빌드
```bash
npm run build
```

### 배포 옵션
- **Netlify**: 자동 배포 지원
- **Vercel**: React 최적화
- **GitHub Pages**: 정적 호스팅
- **AWS S3**: 스케일러블 호스팅

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**Note**: 이 프로젝트는 데모 목적으로 제작되었으며, 실제 운영을 위해서는 해당 API 제공기관의 승인과 약관 준수가 필요합니다. 