const { Product, Category, SubCategory } = require('../models');
const { Op } = require('sequelize');

class ProductController {

  static addProduct(req, res, next) {
    
  }

  static deleteProduct(req, res, next) {
    
  }

  static editProduct(req, res, next) {
    
  }

  static uploadImage(files, product) {
    
  }

  static findProductByCategory (req, res, next) {
    
  }

  static findProductBySubCategory (req, res, next) {
    
  }

  static getProducts(req, res, next) {
    
  }

  static findOneProduct(req, res, next) {
    
  }

  static findCategory(req, res, next) {
    const id = +req.params.id
    Category.findOne({
      where: {
        id
      },
      include: SubCategory
    })
      .then(data => {
        if (data) {
          res.status(200).json(data);
        } else {
          next({
            status: 404,
            name: 'NotFound',
            message: 'Category is not found with id ' + id
          });
        }
      })
      .catch(err => next(err));
  }

  // Categories
  static getCategories(req, res, next) {
    const keyword = req.query.keyword;

    if (keyword) {
      Category.findAll({
        include: SubCategory,
        where: {
          title: {
            [Op.iLike]: `%${keyword}%`
          }
        }
      })
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => next(err));
    } else {
      Category.findAll({
        include: SubCategory
      })
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => next(err));
    }
  }
}

module.exports = ProductController;
