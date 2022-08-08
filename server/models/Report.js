const {Schema, model} = require("mongoose")

const reportSchema = new Schema({
    status: {type: String, required: true, default: "new"},
    licenseNumber: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    ownerFullName: {type: String, required: true},
    clientId: {type: String, required: true},
    createdAt: {type: Date, default: new Date()},
    updatedAt: {type: Date, default: new Date()},
    color: {type: String},
    date: {type: Date},
    officer: {type: String},
    description: {type: String},
    resolution: {type: String}
})

module.exports = model("Report", reportSchema)