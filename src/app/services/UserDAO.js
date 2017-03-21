const db = require('../../db/db');
const sql = require('../../db/sqlProvider').users;
const User = require('../models/User');

class UserDAO {
  static all() {
    return db.map(sql.all, [], row => new User(row))
             .catch(err => err);
  }
}

module.exports = UserDAO;
