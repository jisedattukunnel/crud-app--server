var con = require('../config/connection')
var express = require("express");
var app = express();
var bcrypt = require('bcrypt')
var uuid = require('uuid');



module.exports = {

    viewUser: () => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT *, branches.name FROM user INNER JOIN branches ON user.branch_id = branches.branch_id;"
            // var sql = "SELECT *, branch.name from users INNER JOIN branch on branch.branch_id= 1"
            con.query(sql, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        })
    },

    viewService: () => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT *, branches.name FROM service INNER JOIN branches ON service.branch_id = branches.branch_id;"
            // var sql = "SELECT *, branch.name from users INNER JOIN branch on branch.branch_id= 5"
            con.query(sql, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        })
    },

    viewBranch: () => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM branches;"
            con.query(sql, (err, result) => {
                if (err) throw err;
                resolve(result)
            });
        })
    },

    addBranch: (userData) => {
        return new Promise(async (resolve, reject) => {
            const name = userData.name;
            const location = userData.location;
            const description = userData.description;
            const timingFrom = userData.timingFrom;
            const timingTo = userData.timingTo;
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const createdAt = time
            const updatedAt = time
            var sql = "INSERT INTO branches ( name, location, other_details, timing_from, timing_to, created_at, updated_at) VALUES (?,?,?,?,?,?,?)";
            con.query(sql, [name, location, description, timingFrom, timingTo, createdAt, updatedAt], (err, result) => {
                if (err) throw err;
                resolve(result)
                console.log(result);
            });
        })
    },

    addUser: (userData) => {
        return new Promise(async (resolve, reject) => {
            const userName = userData.user_name;
            const branchId = userData.branch_id;
            const email = userData.email;
            const phone = userData.phone;
            const password = await bcrypt.hash(userData.password, 10)
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const createdAt = time
            const updatedAt = time
            var sql = "INSERT INTO user ( user_name, branch_id, email, phone, password, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?)";
            con.query(sql, [userName, branchId, email, phone, password, createdAt, updatedAt], (err, result) => {
                if (err) throw err;
                resolve(result)
                console.log(result);
            });
        })
    },

    addService: (userData) => {
        return new Promise(async (resolve, reject) => {
            const branch = userData.branch;
            const category = userData.category;
            const service = userData.service;
            const name = userData.name;
            const price = userData.price;
            const status = userData.status;
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const createdAt = time
            const updatedAt = time
            var sql = "INSERT INTO service ( branch_id, category, service_type, service_name, price, status, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)";
            con.query(sql, [branch, category, service, name, price, 1, createdAt, updatedAt], (err, result) => {
                if (err) throw err;
                resolve(result)
                console.log(result);
            });
        })
    },


    deleteBranch: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "DELETE FROM branches WHERE branch_id = ?";
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        })
    },

    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "DELETE FROM user WHERE id = ?";
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        })
    },

    deleteService: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "DELETE FROM service WHERE id = ?";
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        })
    },

    getBranch: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * from branches where branch_id = ?;"
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
                console.log('controller' + result);
            });
        })
    },


    getUser: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * from user where id = ?;"
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
                console.log('controller' + result);
            });
        })
    },



    getService: (id) => {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * from service where id = ?;"
            con.query(sql, id, (err, result) => {
                if (err) throw err;
                resolve(result);
                console.log('controller' + result);
            });
        })
    },


    updateBranch: (userData, id) => {
        return new Promise(async (resolve, reject) => {
            // const id = req.params.id
            console.log('Params id :' + id);
            const name = userData.name;
            const location = userData.location;
            const description = userData.description;
            const timingFrom = userData.timingFrom;
            const timingTo = userData.timingTo;
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const updatedAt = time

            var sql = "UPDATE branches SET name = ?, location = ?, other_details=? , timing_from=? , timing_to=?,  updated_at=? WHERE branches.branch_id = ?;"
            con.query(sql, [name, location, description, timingFrom, timingTo, updatedAt, id], (err, result) => {
                if (err) throw err;
                console.log('Updated');
                resolve(result)
            });
        })
    },



    updateUser: (userData, id) => {
        return new Promise(async (resolve, reject) => {
            // const id = req.params.id
            console.log('Params id :' + id);
            const userName = userData.username;
            const branchId = userData.branch;
            const email = userData.email;
            const phone = userData.phone;
            const password = userData.password;
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const createdAt = time
            const updatedAt = time

            var sql = "UPDATE user SET user_name = ?, branch_id = ?, email=? , phone=? , password=?, createdAt=?,  updatedAt=? WHERE user.id = ?;"
            con.query(sql, [userName, branchId, email, phone, password, createdAt, updatedAt, id], (err, result) => {
                if (err) throw err;
                console.log('Updated');
                resolve(result)
            });
        })
    },



    updateService: (userData, id) => {
        return new Promise(async (resolve, reject) => {
            // const id = req.params.id
            console.log('Params id :' + id);
            const branch = userData.branch_id;
            const category = userData.category;
            const service = userData.serviceType;
            const name = userData.serviceName;
            const price = userData.price;
            const status = userData.status;
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            const createdAt = time
            const updatedAt = time

            var sql = "UPDATE service SET branch_id = ?, category = ?, service_type=? , service_name=? , price=?, status=?, created_at=?, updated_at=? WHERE service.id = ?;"
            con.query(sql, [branch, category, service, name, price, status, createdAt, updatedAt, id], (err, result) => {
                if (err) throw err;
                console.log('Updated');
                resolve(result)
            });
        })
    },




}