const { Product, Category, SubCategory } = require('../models');
const { Op } = require('sequelize');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const pluralize = require('pluralize');

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
    let { filter, sort, include } = req.query;
    let paramQuerySQL = {};

    // jsonapi filtering - [title]
    if (filter != '' && typeof filter !== 'undefined') {
      let query = filter.title.split(',').map(function(item) {
        return {
          [Op.iLike]: '%' + item + '%'
        }
      });

      paramQuerySQL.where = {
        title: { [Op.or]: query }
      }
    }

    // jsonapi sorting
    if (sort != '' && typeof sort !== 'undefined') {
      let query = sort.split(',');
      query = query.map(function(item) {
        if (item.charAt(0) !== '-') {
          return [
            [item, 'ASC']
          ]
        } else {
          return [
            [item.replace('-', ''), 'DESC']
          ]
        }
      });

      paramQuerySQL.order = query;
    }

    // jsonapi including - [subcategories]
    if (include != '' && typeof include !== 'undefined') {
      let query = include.split(',');
      query.forEach(item => {
        if (pluralize.singular(item) === 'subcategory' || pluralize.plural(item) === 'subcategories') {
          paramQuerySQL.include = {
            model: SubCategory,
            as: 'subCategories'
          }
        }
      });
    }
    
    // sequelize
    Category.findAll(paramQuerySQL)
      .then(data => {
        var jsonapi = new JSONAPISerializer('categories', {
          pluralizeType: true,
          keyForAttribute: 'camelCase',
          topLevelLinks: {
            self: 'http://localhost:3000/products/categories'
          },
          attributes: ['title', 'subCategories'],
          subCategories: {
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
