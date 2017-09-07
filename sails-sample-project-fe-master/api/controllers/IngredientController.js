/**
 * IngredientController
 *
 * @description :: Server-side logic for managing ingredients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var Client = require('node-rest-client').Client;
 var client = new Client();
 var endpoint = "https://rocky-dusk-62881.herokuapp.com/api/recipes"

module.exports = {



  /**
   * `IngredientController.create()`
   */
	 create: function(req, res) {

  if (req.method != "POST") {
    return client.get(endpoint, function (data) {
      res.view('create_ingredients', { recipes: data });
    })
  }

  var args = {
    data: req.body,
    headers: {
      "Content-Type": "application/json"
    }
  };

  client.post(endpoint, args, function(data, response) {
    // return res.view('create', {success: { message: "Record added successfully"}});
    if (response.statusCode != "201") {
      req.addFlash("error", data.message.substring(data.message.indexOf("•")));
      return res.redirect('/create_ingredients');
    }

    req.addFlash("success", "Record created successfully");
    return res.redirect('/create_ingredients');

  })
  
},

  /**
   * `IngredientController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `IngredientController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  }
};
