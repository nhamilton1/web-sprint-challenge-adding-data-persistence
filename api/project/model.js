// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = async () => {
    const projects = await db('projects as p')
        .select(
            'p.project_name',
            'p.project_description',
            'p.project_completed'
        )

    return projects.map(project => {
        return {
            ...project,
            project_completed: !!project.project_completed
        }
    })

}

const getProjectById = async (project_id) => {
    const rows = await db('projects as p')
        .select(
            'p.project_name',
            'p.project_description',
            'p.project_completed'
        )
        .where('project_id', project_id)

    const projects = {
        project_name: rows[0].project_name,
        project_description: rows[0].project_description,
        project_completed: !!rows[0].project_completed
    }

    return projects
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
