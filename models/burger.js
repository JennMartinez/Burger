// Dependencies To Import ORM //
var orm = require("../config/orm.js");

// ORM Functions //
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
        console.log("orm", name , cb)
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", { devoured: true }, condition, cb);
    }
};

// Export //
module.exports = burger;