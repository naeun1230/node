// stream으로 읽었을 때 메모리를 얼마나 사용하는지 확인

const fs = require('fs')

// 현재 메모리 사용량 확인
console.log('before:', process.memoryUsage().rss) //rss -프로세스가 사용 중인 메모리

const readStream = fs.createReadStream('./big.txt')
const writeStream = fs.createWriteStream('./big3.txt')

readStream.pipe(writeStream)

// 읽기 스트림 완료된 후 메모리 사용량 확인
readStream.on('end', () => {
   console.log('buffer:', process.memoryUsage().rss) //메모리 사용량이 54MB만 사용
})

// 용량이 큰 파일은 stream을 사용하는게 좋음
