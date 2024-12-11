const express = require('express')
const User = require('../models/user')
const Commnet = require('../models/comment')

const router = express.Router()

router
   .route('/')
   // get 요청 : 모든 사용자가 조회
   .get(async (req, res, next) => {
      try {
         const users = await User.findAll()
         res.status(200).json(users)
      } catch (err) {
         console.error(err)
         next(err)
      }
   })
   // post 요청: 사용자 등록
   .post(async (req, res, next) => {
      try {
         console.log('req.body', req.body)
         const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            married: req.body.married,
            comment: req.body.comment,
         })
         console.log(user) //생성된 사용자 데이터 출력
         res.status(201).json(user) //상태코드 201과 함께 json객체 형태로 생성된 사용자 전달
      } catch (err) {
         console.error(err)
         next(err) //에러를 에러 미들웨어로 전달
      }
   })

//localhost:8000/users/:id/comments
router.get('/:id/comments', async (req, res, next) => {
   try {
      const comments = await Comment.findAll({
         include: {
            model: User,
            where: { id: req.params.id },
         },
      })
      /*
      select comments.*, users.*
      from comments
      join user
      on comments.id = users.id
      where users.id = :id
      */
      console.log(comments)
      res.status(200).json(comments)
   } catch (error) {
      console.error(err)
      next(err)
   }
})

module.exports = router
