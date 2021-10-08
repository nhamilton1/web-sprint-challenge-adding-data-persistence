// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('project')
}

const getProjectById = (project_id) => {
    return db('project')
        .where('project_id', project_id)
        .first()
}

const createProject = (project) => {
    return db('project').insert(project)
        .then(([project_id]) => {
            return getProjectById(project_id)
        })
}

module.exports = {
    getProjects,
    createProject,
    getProjectById
}
