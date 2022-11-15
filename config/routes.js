/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /speisekarte': { controller: 'MenuController', action: 'menu'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  
  'GET /admin': { view: 'pages/admin' },
  
  'GET /meal/new': { controller: 'MealController', action:'new' },
  'POST /meal': { controller: 'MealController', action:'create' },
  'GET /meal': 'MealController.find',
  'GET /meal/show': 'meal.findOne',

  'GET /meal/:id/edit': { controller: 'MealController', action: 'editOne' },
  'POST /meal/:id/update': { controller: 'MealController', action: 'updateOne' },
  'GET /meal/:id/destroy': { controller: 'MealController', action: 'destroyOne' },
 
  'GET /category/new': { view: 'pages/category/new' },
  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
  'GET /category': { controller: 'CategoryController', action: 'find' },
};
