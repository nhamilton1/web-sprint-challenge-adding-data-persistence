
const resources = [
  { resource_name: 'google', resource_description: 'google helps a lot'},
  { resource_name: 'lambda', resource_description: 'sprint challenge'}
]

exports.seed = function(knex) {
  return knex('resources').insert(resources)
};
