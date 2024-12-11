const express = require('express')
require('dotenv').config() // env파일을 사용하기 위한 라이브러리
const morgan = require('morgan')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev')) // 로그 남기기

// 라우팅: 경로를 지정하는 과정
const indexRouter = require('./routes') //index.js
const userRouter = require('./routes/user') //user.js

app.use('/', indexRouter) //localhost:8000/
app.use('/user', userRouter) //localhost:8000/user

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
