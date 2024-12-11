//dep1에서는 dep2을 require한다
const dep2 = require('./dep2')

console.log('required dept2:', dep2)

function insideDep1() {
   console.log('dept2:', dep2)
}

module.exports = insideDep1
