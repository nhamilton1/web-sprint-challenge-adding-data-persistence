// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Tasks.getTask()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

module.exports = router