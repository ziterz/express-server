const router = require('express').Router();
const { CategoryController } = require('../controllers');

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.findCategory);

module.exports = router;
