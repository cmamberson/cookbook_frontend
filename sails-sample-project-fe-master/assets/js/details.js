(function() {

  $(function() {

    //View Details Buttons
    $(".viewButtons").click(function() {


    let recipeID = $(this).parents('tr').data('recipeid');

//gets the info from selected recipe button
      $.get("/recipes/"+recipeID, recipe => {

  //clears table everytime new recipe is selected
        $("#viewDetails").html("");

  //appends all info for one recipe below the read table
        $("#viewDetails").append(`
          <h2>${recipe.title}</h2>
          <p><strong>Description:</strong> ${recipe.description}</p>
          <p><strong>Cook Time:</strong> ${recipe.numberOfMinutes} minutes</p>
          <p><strong>Ingredients:</strong></p>
        `);

  //appends ingredients list
        for (let i = 0; i < recipe.ingredients.length; i++){
            $("#viewDetails").append(`
              <ul>
                <li>${recipe.ingredients[i].quantity} ${recipe.ingredients[i].measureUnit} ${recipe.ingredients[i].foodItem}</li>
              </ul>
          `);
        };

  //apends instructions list
        $("#viewDetails").append("<p><strong>Instructions:</strong></p>")
        for (let i = 0; i < recipe.instructions.length; i++){
            $("#viewDetails").append(`
              <ul>
              ${i + 1}.  ${recipe.instructions[i].step}
              </ul>
          `);
        };
      });
    });
  });
})();
