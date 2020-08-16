const router = require('express').Router();
const { ProductController } = require('../controllers');

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.findOneProduct);
router.get('/:category-slug', ProductController.findProductByCategory);
router.get('/:category-slug/:sub-category-slug', ProductController.findProductBySubCategory);

module.exports = router;
