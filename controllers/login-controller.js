const User = require('../model/user-models')
const jwtUtils = require('../utils/jwt-utlis')
const argon2 = require('argon2');

const loginController = {
    login: async (req,res) => {
        const {mail, password} = req.body;
        // console.log(mail);
        const filter = {mail}
        const user = await User.findOne(filter);
        if (!user) {
            return res.status(401).json({erreur : 'utilisateur non enregistré'})
        }
        const isPasswordValid = await argon2.verify(user.password, password)
        if(!isPasswordValid){
            return res.status(401).json({error : 'Mauvais mot de passe'})
        }
        const token = await jwtUtils.generate(user);
        return res.json({token});
    },
    register: async (req, res) => {
        const { lastname, firstname, mail, country,phone, password  } = req.body;
        const hashedPassword = await argon2.hash(password);


        const userToInsert = User({
            lastname,
            firstname,
            mail,
            country,
            phone,
            password : hashedPassword

        });

        await userToInsert.save();
        const token = await jwtUtils.generate(userToInsert);
        res.status(200).json({token});
    }
}

module.exports = loginController;