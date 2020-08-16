const { Category, SubCategory } = require('../models');

class CategoryController {
  static create(req, res, next) {
    
  }

  static update(req, res, next) {
    
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

  static delete(req, res, next) {
    
  }

  static getCategories(req, res, next) {
    Category.findAll({
      include: SubCategory
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => next(err));
  }
}

module.exports = CategoryController;
