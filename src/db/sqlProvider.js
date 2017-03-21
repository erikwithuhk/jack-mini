const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  times: {
    all: sql('./sql/time/all.sql'),
  },
  users: {
    all: sql('./sql/user/all.sql'),
  },
};

module.exports = sqlProvider;
