var express = require("express");
var router = express.Router();
var adminHelper = require("../controllers/adminHelper");

router.get("/view-user", (req, res) => {
  adminHelper.viewUser().then((value) => {
    // console.log(value)
    res.send(value);
  });
});

router.get("/view-service", (req, res) => {
  adminHelper.viewService().then((value) => {
    // console.log(value)

    res.send(value);
  });
});

router.get("/view-branch", (req, res) => {
  adminHelper.viewBranch().then((value) => {
    // console.log(value)
    res.send(value);
  });
});

router.post("/add-user", (req, res) => {
  adminHelper.addUser(req.body).then((value) => {
    console.log("Inserted");
  });
});

router.post("/add-branch", (req, res) => {
  // console.log(req.body);
  adminHelper.addBranch(req.body).then((value) => {
    console.log("Inserted");
  });
});

router.post("/add-service", (req, res) => {
  // console.log(req.body);
  adminHelper.addService(req.body).then((value) => {
    console.log("Inserted");
  });
});

router.get("/delete-branch/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelper.deleteBranch(id).then((value) => {
    res.send(value);
    console.log(value);
  });
});

router.get("/delete-user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelper.deleteUser(id).then((value) => {
    res.send(value);
  });
});

router.get("/delete-service/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  adminHelper.deleteService(id).then((value) => {
    res.send(value);
  });
});

router.get("/get-branch/:id", (req, res) => {
  var id = req.params.id;
  console.log("API :" + id);
  adminHelper.getBranch(id).then((result) => {
    console.log("result...: " + result[0]);
    res.send(result);
  });
});

router.get("/get-user/:id", (req, res) => {
  var id = req.params.id;
  adminHelper.getUser(id).then((result) => {
    res.send(result);
  });
});

router.get("/get-service/:id", (req, res) => {
  var id = req.params.id;
  adminHelper.getService(id).then((result) => {
    res.send(result);
  });
});

// router.post('/update-branch/:id', (req, res) => {
//     console.log('Api Data: ' + req.body);
//     var id = req.params.id
//     adminHelper.updateBranch(req.body, id).then((value) => {
//         console.log('Updated');
//     })
// })

router.post("/update-branch/:id", (req, res) => {
  adminHelper.updateBranch(req.body, req.params.id);
});

router.post("/update-user/:id", (req, res) => {
  adminHelper.updateUser(req.body, req.params.id);
});

router.post("/update-service/:id", (req, res) => {
  adminHelper.updateService(req.body, req.params.id);
});

module.exports = router;
