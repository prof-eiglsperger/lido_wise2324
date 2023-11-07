# tutorial-crud-2

a [Sails v1](https://sailsjs.com) application

### Delete, update and search meals

* Updated [MealController](/api/controllers/MealController.js)
* Added and updated views in [/view/pages/meal](/view/pages/meal/)
* Added [Meal model](/api/models/Meal.js)

### Manage categories

* Added [Category model](/api/models/Category.js) 
* Added [CategoryController](/api/controllers/CategoryController.js)
* Updated [Menu.ejs](/api/models/Menu.js)
* Added views [/views/pages/category/index.ejs](/views/pages/category/index.ejs) and [/views/pages/category/new.ejs](/views/pages/category/new.ejs)  

### Show menu

* Added [MenuController](/api/controllers/MenuController.js)
* Added [view](/views/pages/menu.ejs) to show menu 

### Raw SQL

* Updated [MealController](/api/controllers/MealController.js) with method report() which contains raw SQL query and updated routes config.
* Added [view](/views/pages/meal/report.ejs) to show result of query 

### General

* Updated [routes](/config/routes.js)
* Updated links ont the [homepage](/views/pages/homepage.ejs) and in the [admin dashboard](/views/pages/admin.ejs)
* Configures live database in [database config](/config/datastores.js)
