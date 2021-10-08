
exports.up = async function(knex) {
  await knex.schema
  .createTable('resource', table => {
    table.increments('resource_id')
    table.string('resource_name', 64).notNullable().unique()
    table.string('resource_description', 128)
  })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('resource')
};
