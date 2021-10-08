
exports.up = async function(knex) {
  await knex.schema
    .createTable('task', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes', 128)
        table.boolean('task_completed').defaultTo(0)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('task')
};
