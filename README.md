# tutorial-3

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Move of Static Website into sails

Generated with``sails new tutorial3``.

Moved static files from *tutorial3* to the asset directory.
- all files in *images* to */asset/img* directory
- all files in *css* to */asset/styles* directory
- the *home.html* file to the */asset/* directory. Adapt paths ion the files to the changed subdirectories.


Changes in layout.ejs:
- Change title in */views/layouts/layout.ejs*
- Add link to bootstrap stylesheet into */views/layouts/layout.ejs*
- Copy content of *body* tag of *home.html* into */views/pages/homepage.ejs*

Nedd to restart sails that changes take effect.


### Add Form to Create Meals

- add "meal/new.ejs"
- update routes.js with new routes for meals
- move header/footer from homepage.ejs to layout.ejs 


