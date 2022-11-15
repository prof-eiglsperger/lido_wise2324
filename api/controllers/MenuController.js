/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

    menu: async function (req, res) {
        let categories = await Category.find().populate("meals");
        res.view('pages/menu', { categories });
    }
};

