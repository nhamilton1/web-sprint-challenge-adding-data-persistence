
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name', 64).notNullable()
    table.string('project_description', 128)
    table.boolean('project_completed').defaultTo(false)
  })

  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name', 64).notNullable().unique()
    table.string('resource_description', 128)
  })

  .createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description').notNullable()
    table.string('task_notes', 128)
    table.boolean('task_completed').defaultTo(false)
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })

  .createTable('project_resources', table => {
    table.increments('project_resources_id')
    table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    table.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
