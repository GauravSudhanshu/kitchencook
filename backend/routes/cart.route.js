const express = require("express")


const app = express();
app.use(express.json())

app.get("/", authenticator, async (req, res) => {
    const { userID } = req.body
    try {
        let AllCartData = await Carts.find({ userID: userID })
        if (AllCartData.length > 0) {
            res.send(AllCartData)
        } else {
            res.send("Empty Cart")
        }
    } catch (e) {
        res.send(e.message)
    }
})

// Add Product in Cart

app.post("/", authenticator, async (req, res) => {
    const { category, image, productname, price, strike_price, size, quantity, userID } = req.body
    try {
        let addProductToCart = new Carts({ delivery_time: 3, category: category, image: image, productname: productname, price: price, strike_price: strike_price, size: size, quantity: quantity, userID: userID })
        await addProductToCart.save()
        res.send("Add Item To Cart")
    } catch (e) {
        res.send(e.message)
    }
})

// Delete product from cart

app.delete("/:id", authenticator, async (req, res) => {
    let id = req.params.id
    let logger_userID = req.body.userID;
    console.log(logger_userID)

    try {
        let Product = await Carts.findById(id)

        if (Product) {
            let product_userID = Product.userID;
            console.log(product_userID)
            if (logger_userID === product_userID) {
                let deleteProduct = await Carts.findByIdAndDelete(id)
                res.send("Delete Item from Cart")
            }
            else {
                res.send("You are not authorized person")
            }
        }
        else {
            res.send("Empty Cart/Product Not Found")
        }


    } catch (e) {
        res.send(e.message)
    }
})



app.patch("/:id", authenticator, async (req, res) => {
    const { id } = req.params
    const { quantity, userID } = req.body
    try {
        if (!id || !quantity) {
            throw new Error(`id or quantity not exists!!`)
        }
        const Product = await Carts.findById(id)
        if (Product) {
            await Carts.findByIdAndUpdate(id, { quantity: quantity }, { new: true })
            return res.send("Item is updated in cart")
        }
        else {
            return res.send("Item is not in cart")
        }

    } catch (e) {
        return res.send(e.message)
    }
})
module.exports = app;
