let orm = require("../config/orm");

let burger = {
  // This route asking orm js for data by envoking select all method street 1/ function(data) receives info back from orm.js selectAll.
  selectAll: function(callback) {
    orm.selectAll(`burgers`, function(results) {
      callback(results);
    });
  },
  add: function(newBurger, callback) {
    orm.add(`burgers`, newBurger, callback);
  },
  update: function(id, callback) {
    orm.update(`burgers`, id, callback);
  }
};

module.exports = burger;
