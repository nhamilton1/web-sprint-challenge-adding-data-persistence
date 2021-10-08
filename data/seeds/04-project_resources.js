const project_resources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 2 },
  { project_id: 2, resource_id: 2 },
]

exports.seed = function(knex) {
  return knex('project_resources').insert(project_resources)
};
