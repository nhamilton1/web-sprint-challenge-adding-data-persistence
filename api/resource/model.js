// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources as r')
        .select('r.resource_id', 'r.resource_name', 'r.resource_description')
}

const getById = (resource_id) => {
    return db('resources')
        .where('resource_id', resource_id)
        .first()
}

const createResource = (resource) => {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return getById(resource_id)
        })
}

module.exports = {
    getResources,
    createResource,
    getById
}
