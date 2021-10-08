// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resource as r')
        .select('r.resource_id', 'r.resource_name', 'r.resource_description')
}

const addResource = (sauce) => {
    db('resource').insert(sauce)
        .then(([sauce_id]) => {
            return db('resource')
                .where('resource_id', sauce_id)
                .first()
        })
}

module.exports = {
    getResources,
    addResource
}
