const Person = require("../db/person")
const Country = require("../db/region")
const City = require("../db/area")


const context = ({req})=>({
  ...Person,
  ...City,
  ...Country,
})

module.exports = {context}