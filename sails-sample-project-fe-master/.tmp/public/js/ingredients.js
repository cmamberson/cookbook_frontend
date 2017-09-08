(function(){

  $(function(){


let ingredientList = $('#ingredientList');
let ingredientsButton = $('#ingredientsButton');
let deleteIngredientsTable = $('#deleteIngredientsTable');


$('#recipe_chooser_destroyer').on('change', function (e) {
    const recipe = JSON.parse(decodeURI($(this).val()));
    console.log(recipe);
    deleteIngredientsTable.html("");
    for (let i = 0; i < recipe.ingredients.length; i++){
        deleteIngredientsTable.append(`
          <tr>
            <td>${recipe.ingredients[i].foodItem}</td>
            <td>
              <form method="post" action="/recipe/${recipe.id}/delete_ingredients/${recipe.ingredients[i].ingredientId}">
                <button type="submit" class="btn btn-default">Delete</button>
              </form>
            </td>
          </tr>
        `);
        };
      

})




$('#recipe_id').on('change', function (e) {
    const recipeid = $(this).find("option:selected").val() || 1;
    console.log(recipeid);
    $('#addIngredientForm').attr('action', `/recipe/${recipeid}/create_ingredient`)
})


//Delete Ingredients



  })

})()
