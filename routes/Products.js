const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/Products');

// GET
router.get('/', productCtrl.index);
router.get('/new', productCtrl.form);
router.get('/:id', productCtrl.show);
router.get('/:id/edit', productCtrl.form);

// POST
router.post('/', productCtrl.create);
router.post('/:id', productCtrl.update);
router.all('/:id/delete', productCtrl.remove);

// DELETE
router.delete('/:id', productCtrl.remove);

module.exports = router;