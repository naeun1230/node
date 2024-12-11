const fs = require('fs')

// 파일을 읽기 위한 스트림 생성
// highWaterMark: 한 번에 읽어드릴 버퍼 크기를 16byte로 설정
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 })

// 읽어드린 데이터를 저장할 배열
const data = []

// data이벤트: 스트림에서 데이터(chunk)가 들어올 때마다 콜백 함수 실행
readStream.on('data', (chunk) => {
   data.push(chunk) // 들어온 데이터를 배열에 추가
   console.log('data: ', chunk, chunk.length)
})

// end 이벤트: 스트림의 읽기가 끝났을 때 발생
readStream.on('end', () => {
   // 저장된 데이터를 합쳐서 문자열로 변환
   console.log('end:', Buffer.concat(data).toString())
})

// error 이벤트: 스트림에서 에러가 발생했을 때 발생
readStream.on('error', (err) => {
   console.log('error:', err)
})