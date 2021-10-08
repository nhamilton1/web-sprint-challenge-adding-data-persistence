
const projects = [
  { project_name: 'test1', project_description: 'pls work', project_completed: false},
  { project_name: 'test2', project_description: 'this one will work', project_completed: true}
]


exports.seed = function(knex) {
  return knex('project').insert(projects)
};
