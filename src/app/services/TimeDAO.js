const db = require('../../db/db');
const sql = require('../../db/sqlProvider').times;
const Time = require('../models/Time');

class TimeDAO {
  static all() {
    return db.map(sql.all, [], row => new Time(row))
             .catch(err => err);
  }
}

module.exports = TimeDAO;
