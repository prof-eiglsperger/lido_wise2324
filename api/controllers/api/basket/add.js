module.exports = {


  friendlyName: 'Add item to shopping basket',


  description: 'Add item to basket.',


  inputs: {
    id: {
      description: 'The id of the meal to add',
      type: 'string',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("Add Element to basket......")
    let meal = await Meal.findOne({ id: inputs.id })
    if (!this.req.session.basket) {
      console.log("Create new basket...")
      this.req.session.basket = [];
    } 
    this.req.session.basket.push(meal);
    // All done.
    return;

  }


};
