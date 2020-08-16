const router = require('express').Router();
const userRoutes = require('./user');
const productRoutes = require('./product');

router.get('/', (req,res) => {
  res.send('Welcome to Rentformasi API');
})
router.use('/user', userRoutes);
router.use('/product', productRoutes);

module.exports = router;
