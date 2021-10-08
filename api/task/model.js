// build your `Task` model here
const db = require('../../data/dbConfig')

const getTask = async () => {
    const tasks = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select(
            't.task_notes', 
            't.task_description',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )

    return tasks.map(task => {
        return {
            ...task,
            task_completed: !!task.task_completed
        }
    })
}

const getById = async (task_id) => {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select(
            't.task_notes', 
            't.task_description',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        .where('task_id', task_id)

    const tasks = {
        task_description: rows[0].task_description,
        task_notes: rows[0].task_notes,
        task_completed: !!rows[0].task_completed,
    }
    
    return tasks
}

const createTask = (task) => {
    return db('tasks').insert(task)
        .then(([task_id]) => {
            return getById(task_id)
        })
}

module.exports = {
    getTask,
    createTask,
}