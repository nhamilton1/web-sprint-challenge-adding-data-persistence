const tasks = [
  { task_description: 'google searches', task_notes:'stackoverflow helps a lot', task_completed: true, project_id: 1 },
  { task_description: 'past projects', task_notes:'guided and projects', task_completed: false, project_id: 1 },
  { task_description: 'knex docs', task_notes:'look up what is missing', task_completed: false, project_id: 2 },
  { task_description: 'lecture notes', task_notes:'what to install', task_completed: true, project_id: 2 },
]

exports.seed = function(knex) {
  return knex('task').insert(tasks)
};
