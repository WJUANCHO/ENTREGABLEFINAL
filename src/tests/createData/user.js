const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
         firstName: "Juan",
         lastName: "Alvarez",
         email: "juan.alvarez.pacho@gmail.com",
         password: "1234",
         phone: "959284698"
      //  firstName: "Agustin",
      //  lastName: "Seoane",
      //  email: "agustin@gmail.com",
      //  password: "agustin1234",
       // phone: "+12345"
    }

    await User.create(userCreate)

}
module.exports = user