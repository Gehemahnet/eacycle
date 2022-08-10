const {Router} = require("express")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")
const bcrypt = require("bcryptjs")
const Worker = require("../models/Worker")
const router = Router()


// /api/auth/sign_up
router.post('/sign_up',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 8 символов').isLength({min: 8})
    ], async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const {email, firstName, lastName, password, clientId, approved} = req.body
            const candidateEmail = await Worker.findOne({email})
            const candidateId = await Worker.findOne({clientId})
            if (candidateEmail || candidateId) {
                return res.status(400).json({message: "Пользователь существует"})
            }
            const cryptedPassword = await bcrypt.hash(password, 10)
            const worker = new Worker({
                email,
                firstName,
                lastName,
                clientId,
                password: cryptedPassword,
                approved
            })
            await worker.save()
            res.status(201).json({message: "Пользователь создан"})

        } catch (e) {
            res.status(500).json({message: 'Something went wrong, try again'})
        }
    })
// /api/auth/sign_in
router.post('/sign_in',
    [
        check('email', 'Некорректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ], async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при входе"
                })
            }
            const {email, password} = req.body
            const user = await Worker.findOne({email})
            if (!user) {
                return res.status(400).json({message: "Пользовательно не найден"})
            }

            const isMatchedPasswords = await bcrypt.compare(password, user.password)

            if (!isMatchedPasswords) {
                return res.status(400).json({message: "Неверный пароль"})
            }
            const token = jwt.sign(
                {id: user.clientId},
                config.get("jswSecret"),
                {expiresIn: "7d"}
            )
            res.json({token: token, clientId: user.clientId})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Something went wrong, try again"})
        }
    })

module.exports = router