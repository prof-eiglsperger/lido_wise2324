/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/meal/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create meal....")
    let params = req.allParams();
    await Meal.create(params);
    res.redirect ('/meal' );
  },

  find: async function (req, res) {
    sails.log.debug("List all meals....")
    let meals;
    if (req.query.q && req.query.q.length > 0) {
      meals = await Meal.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      meals = await Meal.find().populate("category");
    }
    res.view ('pages/meal/index', { meals: meals } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single meal....")
    let meal = await Meal.findOne({ id: req.params.id });
    res.view ('pages/meal/show', { meal: meal } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single meal....")
    await Meal.destroyOne({ id: req.params.id });
    res.redirect('/meal');
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single meal....")
    let meal = await Meal.findOne({ id: req.params.id }).populate('category');
    res.view('pages/meal/edit', { meal: meal });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single meal....")
    let meal = await Meal.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/meal');
  },

  report: async function (req, res) {
    let sql = "select m.id, m.name, m.createdAt, m.updatedAt from meal as m order by m.updatedAt desc;";
    var rawResult = await sails.sendNativeQuery(sql);
    
    console.dir(rawResult);
    let entries  = [];
    rawResult.rows.forEach(element => {
      entries.push(element);
    });
    res.view('pages/meal/report', { entries });
 },


  uploadImageForm: async function (req, res) {
    sails.log.debug("Upload image form....")
    let meal = await Meal.findOne({ id: req.params.id })
    res.view('pages/meal/uploadImageForm', { meal: meal });
  },

  uploadImage: async function (req, res) {
    sails.log("Upload image for meal...")
    // Define the parameters of the upload as an object
    // In this example only the path, wehre to upload the image, is set
    let params = {
      //dirname: require('path').resolve(sails.config.appPath, 'assets/images/meals/')
      adapter: require('skipper-s3'),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: 'wetebucket',
      region: 'us-west-2'
    };

    let callback = async function (err, uploadedFiles) {
      if (err) {
        sails.log("Upload Error")
        return res.serverError(err);
      } else {
        sails.log("Uploaded!")
      }
      let fname = require('path').basename(uploadedFiles[0].fd);
      await Meal.updateOne({ id: req.params.id }).set({ image:fname });
      return res.redirect('/meal');
    };

      // This funvtion is called, once all files are uploaded
      // err indicates if the upload process triggered an error and has been aborted 
      // uploaded files contains an array of the files which have been uploaded, in our case only one.
      await req.file('image').upload(params, callback);
    },
};

