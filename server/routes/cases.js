const {Router} = require('express')
const Report = require('../models/Report')
const router = Router()


//  /api/cases
router.post('/', async (req, res) => {
    try {
        const {licenseNumber, type, ownerFullName, clientId, color, date, officer, description} = req.body
        const report = new Report({
            licenseNumber, type, ownerFullName, clientId, color, date, officer, description
        })
        console.log(report)
        await report.save()
        res.status(201).json({message: 'Сообщение о краже создано'})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "Something went wrong, try again"})
    }
})
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find()
        res.json(reports)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({message:"Error"})
    }
})
router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id)
        res.json(report)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({message:"Error"})
    }
})
// router.delete('/:id', async (req, res) => {
//
// })
module.exports = router