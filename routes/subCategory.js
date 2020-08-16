const router = require('express').Router();
const { SubCategoryController } = require('../controllers');

router.get('/', SubCategoryController.getSubCategories);
router.get('/:id', SubCategoryController.findSubCategory);

module.exports = router;
