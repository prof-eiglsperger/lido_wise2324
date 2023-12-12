module.exports = {


  friendlyName: 'View menu shopping',


  description: 'Display "Menu shopping" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/shopping/menu-shopping'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return  exits.success({layout: 'layouts/layoutvue'});

  }


};
