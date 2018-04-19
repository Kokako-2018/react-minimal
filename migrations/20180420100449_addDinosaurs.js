
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('dinosaurs', table => {
        table.increments('id')
        table.string('name')
        table.string('image')
        table.string('favouriteFood')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dinosaurs')
};
