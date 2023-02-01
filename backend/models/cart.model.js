const mongoose = require("mongoose");

const Carts = mongoose.models("carts" , cartSchema)



module.exports = {
    Carts
}