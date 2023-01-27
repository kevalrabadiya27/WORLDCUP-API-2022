
const express = require('express')
const router = new express.Router();
const mongoosemodel = require("../model/schema")
router.use(express.json())

router.post('/worldcup', async (req, res) => {
    try {
        const postdata = await new mongoosemodel(req.body)
        const insrtItem = await postdata.save();
        res.send(insrtItem)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get("/", async (req, res) => {
    try {
        const getdata = await mongoosemodel.find()
        res.send({
            "data": "sucess",
            getdata
        })
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get("/worldcup/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getid = await mongoosemodel.findById(_id);
        res.send(getid)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.patch("/worldcup/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const patchdata = await mongoosemodel.findByIdAndUpdate(_id, req.body);
        res.send(patchdata)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete("/worldcup/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedata = await mongoosemodel.findByIdAndDelete(_id)
        res.send(deletedata)
    }
    catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router