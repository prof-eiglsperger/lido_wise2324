/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create new meal....")
    let params = req.allParams();
    if (!params.name || params.name == "") {
      sails.log.debug("Vaidation error....")
      res.view('pages/meal/status', { "success": false })
    } else {
      sails.log.debug("Create new meal....")
      let meal = await Meal.create(req.allParams());
      res.view('pages/meal/status', { "success": true })
    }
  },

  find: async function (req, res) {
    sails.log.debug("List all meals....")
    let meals = await Meal.find();
    res.view ('pages/meal/index', { meals: meals } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single meal....")
    let meal = await Meal.findOne({ id: req.query.id });
    res.view ('pages/meal/show', { meal: meal } );
  }
};

