const { Product, Category, SubCategory } = require('../models');
const { Op } = require('sequelize');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

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

  // categories
  static findCategories(req, res, next) {
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

  static getCategories(req, res, next) {
    let { filter} = req.query;
    let paramQuerySQL = {};
    let sort;

    // jsonapi filtering - [title]
    if (filter != '' && typeof filter !== 'undefined') {
      let qry = filter.title.split(',').map(function(item) {
        return {
          [Op.iLike]: '%' + item + '%'
        }
      });

      paramQuerySQL.where = {
        title: { [Op.or]: qry }
      }
    }

    // // jsonapi sorting
    // if (typeof sort === 'undefined' || sort == '') {
    //   sort = 'ASC';
    // }

    // // jsonapi sorting
    // if (sort != '' && typeof sort !== 'undefined' && ['title'].includes(sort.toLowerCase())) {
    //     paramQuerySQL.order = [
    //         [order, sort]
    //     ];
    // }
    
    Category.findAll({
      where: paramQuerySQL.where,
      include: SubCategory
    })
      .then(data => {
        var jsonapi = new JSONAPISerializer('categories', {
          pluralizeType: true,
          keyForAttribute: 'camelCase',
          topLevelLinks: {
            self: 'http://localhost:3000/products/categories'
          },
          attributes: ['title', 'SubCategories'],
          SubCategories: {
            ref: 'id',
            attributes: ['title', 'image'],
            includedLinks: {
              self: function (record, current) {
                return 'http://localhost:3000/subcategories/' + current.id;
              }
            },
            relationshipLinks: {
              related: function (record, current, parent) {
                return 'http://localhost:3000/products/categories/' + parent.id +
                  '/subcategories/';
              }
            }
          }
        }).serialize(data);
        res.status(200).json(jsonapi);
      })
      .catch(err => next(err));
  }
}

module.exports = ProductController;
