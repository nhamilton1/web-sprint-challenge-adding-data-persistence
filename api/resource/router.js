// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.createResource(req.body)
        res.json(newResource)
    } catch(err) {
        next(err)
    }
})

module.exports = router
