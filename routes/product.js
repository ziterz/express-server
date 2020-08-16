const router = require('express').Router();
const { ProductController } = require('../controllers');

router.get('/category', ProductController.getCategories);
router.get('/category/:id', ProductController.findCategory);

router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.findOneProduct);

module.exports = router;
