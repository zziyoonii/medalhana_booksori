// 도서관 소장 현황 검증 테스트
const https = require('https');

const API_KEY = '651824a6d5a5d765b513f7f8059ef5ffb2ac3c30f15f0114a8764076c8b902b8';
const ISBN = '9788936434120'; // 소년이 온다

console.log('🔍 도서관 소장 현황 검증 시작');
console.log('📖 도서: 소년이 온다 (ISBN: ' + ISBN + ')');
console.log('='.repeat(60));

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function checkLibraryAvailability(libCode, libName) {
  const url = `https://data4library.kr/api/bookExist?authKey=${API_KEY}&isbn=${ISBN}&libCode=${libCode}&format=json`;
  
  try {
    console.log(`\n📚 ${libName} (${libCode})`);
    console.log(`   API URL: ${url}`);
    
    const data = await makeRequest(url);
    
    if (data.response && data.response.docs && data.response.docs.length > 0) {
      const doc = data.response.docs[0];
      console.log(`   소장 여부: ✅ 소장`);
      console.log(`   배가기호: ${doc.shelf_loc_code || '정보 없음'}`);
      console.log(`   소장권수: ${doc.vol || '정보 없음'}`);
      console.log(`   대출상태: ${doc.loanStatus || '정보 없음'}`);
      console.log(`   반납예정일: ${doc.returnDate || '정보 없음'}`);
    } else {
      console.log(`   소장 여부: ❌ 미소장`);
    }
  } catch (error) {
    console.log(`   ❌ API 호출 실패: ${error.message}`);
  }
}

// 도서관 목록 조회
async function getLibraries() {
  const url = `https://data4library.kr/api/libSrch?authKey=${API_KEY}&pageNo=1&pageSize=10&format=json`;
  
  try {
    const data = await makeRequest(url);
    
    if (data.response && data.response.docs) {
      console.log('\n📚 도서관 목록 (처음 10개):');
      data.response.docs.forEach((lib, index) => {
        console.log(`${index + 1}. ${lib.libName} (${lib.libCode})`);
      });
      
      // 첫 번째 도서관으로 소장 현황 확인
      if (data.response.docs.length > 0) {
        const firstLib = data.response.docs[0];
        await checkLibraryAvailability(firstLib.libCode, firstLib.libName);
      }
    }
  } catch (error) {
    console.error('❌ 도서관 목록 조회 실패:', error);
  }
}

// 실행
getLibraries(); 