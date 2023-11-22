/**
 * ShoppingBasketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {


    show: async function (req, res) {
        res.view('pages/order/shoppingbasket');
    },

    put: async function (req, res) {
        let meal = await Meal.findOne({ id: req.params.mealid });
        if (!req.session.basket) {
            req.session.basket = [];
            req.session.basket.push(meal);
        } else {
            req.session.basket.push(meal);
        }
        // All done.
        res.redirect('/shoppingbasket');
    },

    remove: async function (req, res) {
        req.session.basket.splice(req.params.index, 1);
        res.redirect('/shoppingbasket');
    },
};

