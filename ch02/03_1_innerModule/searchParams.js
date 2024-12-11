const { URL } = require('url')

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
console.log(myURL.searchParams)
console.log(myURL.searchParams.getAll('category'))
console.log(myURL.searchParams.get('limit'))
console.log(myURL.searchParams.get('page'))
console.log(myURL.searchParams.has('page')) //해당 키가 있는지 검사

console.log('키와 값을 가져옴------------------')
console.log(myURL.searchParams.keys())
console.log(myURL.searchParams.values())

console.log('키와 값을 추가------------------')
myURL.searchParams.append('filter', 'es3') // 키와 값 추가
myURL.searchParams.delete('filter') //키를 제거
console.log(myURL.searchParams.getAll('filter')) //확인

console.log(myURL.searchParams.toString()) //searchParams 객체를 다시 문자열로 만듦
