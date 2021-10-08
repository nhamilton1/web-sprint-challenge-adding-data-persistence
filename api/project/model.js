// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects as p')
        .select(
            'p.project_name', 
            'p.project_description', 
            'p.project_completed'
        )
}

const getProjectById = (project_id) => {
    return db('projects')
        .where('project_id', project_id)
        .first()
}

const createProject = (project) => {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return getProjectById(project_id)
        })
}

module.exports = {
    getProjects,
    createProject,
    getProjectById
}
