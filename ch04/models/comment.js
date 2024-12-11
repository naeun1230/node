const Sequelize = require('sequelize')

module.exports = class Comment extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            comment: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },
            create_at: {
               type: Sequelize.DATE,
               allowNull: true,
               defaultValue: Sequelize.NOW,
            },
         },
         {
            sequelize,
            //자동생성되는 createAt과 updateAt 컬럼을 활성화여부 -> 비활성화
            //createAt: 테이블에 insert할 때 날짜와 시간값이 자동으로 insert되는 컬럼
            //updateAt: 테이블에 update할 때 날짜와 시간값이 자동으로 insert되는 컬럼
            timestamps: false,
            underscored: false, //컬럼이름을 카멜케이스로 유지할건지 -> 유지 X
            modelName: 'Comment', //시퀄라이즈에서 사용하는 모델 이름(클래스명 작성)
            tableName: 'comments', //데이터베이스에서 사용하는 실제 테이블 이름(소문자+복수형으로 작성)
            paranoid: false, //소프트 삭제(soft delete) 활성화 여부 -> 비활성화
            charset: 'utf8mb4', //데이터베이스 생성할 때 charset과 동일하게 사용
            collate: 'utf8mb4_general_ci', //데이터베이스 생성할 때 collate과 동일하게 사용
         }
      )
   }

   static associate(db) {
      //Comment는 User에 속해있다 => Comment는 자식 테이블, User은 부모 테이블
      db.Comment.belongsTo(db.User, {
         foreignKey: 'commenter', //Comment 외래키 컬럼 이름
         targetKey: 'id', //Comment가 User에서 참조할 컬럼 이름
      })
   }
}
