// 즉시 실행 함수들

setImmediate(() => {
   console.log('immediate')
})

process.nextTick(() => {
   console.log('nextTick')
})

setTimeout(() => {
   console.log('timeout')
}, 0)

Promise.resolve().then(() => console.log('promise'))

// process.nextTick은 setTimeout이나 setImmediate보다 먼저 실행된다.
// Promise 객체도 비동기이고 setTimeout이나 setImmediate보다 먼저 실행된다.
