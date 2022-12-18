const express = require('express');
const router = express.Router();

const imageCtrl = require('../controllers/Images');

router.get("/", imageCtrl.index);
router.get("/new", imageCtrl.form);
router.get("/:id", imageCtrl.show);
router.get("/:id/edit", imageCtrl.form);
router.post("/", imageCtrl.create);
router.post("/:id", imageCtrl.update);
router.all("/:id/delete", imageCtrl.remove);
router.delete("/:id", imageCtrl.remove);

module.exports = router;