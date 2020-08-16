const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const subCategoryRoutes = require('./subCategory');
const productRoutes = require('./product');

router.get('/', (req,res) => {
  res.send('Welcome to Rentformasi API');
})
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
