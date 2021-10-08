// build your `Task` model here
const db = require('../../data/dbConfig')

const getTask = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select(
            't.task_id', 
            't.task_description',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
}

module.exports = {
    getTask,
}