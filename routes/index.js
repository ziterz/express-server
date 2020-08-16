const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const subCategoryRoutes = require('./subCategory');
const productRoutes = require('./product');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
