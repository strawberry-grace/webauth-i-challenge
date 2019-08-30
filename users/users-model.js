const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find(id) {
  if (id) {
    return db('users').where({ id }).first();
  } else {
    return db('users').select('id', 'username', 'password');
  }
}

function findBy(username) {
  return db('users').where(username);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
