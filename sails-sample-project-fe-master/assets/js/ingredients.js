(function(){

  $(function(){


let ingredientList = $('#ingredientList');
let ingredientsButton = $('#ingredientsButton');
let deleteIngredientList = $('#deleteIngredientList');

//Add Ingredients
function getIngredients(){

  for (let i = 0; i < 10; i++){
      ingredientList.append(`
        <tr>
          <td>test</td>
          <td>this</td>
          <td>stuff</td>
        </tr>
          `);
    };
}
//runs Add Function
getIngredients();

    ingredientsButton.on("click", function(event) {
      event.preventDefault();


              alert("Successfully Added");
//clear table
              ingredientList.html("");
//clear input fields
              addIngredientForm[0].reset();
//rerun function to display updated table
              getIngredients();
    })


//Delete Ingredients
function deleteIngredients(){    for (let i = 0; i < 10; i++){
      deleteIngredientList.append(`
        <tr>
          <td>test</td>
          <td>this</td>
          <td>stuff</td>
          <td><button type="submit" class="btn btn-default deleteButtons" data-ingredientid="${i}">Delete</button></td>
        </tr>
          `);
    };
}
//runs delete function
deleteIngredients();

deleteIngredientList.on("click", ".deleteButtons", function(event){
  event.preventDefault();
  console.log($(this).data("ingredientid"));
  })

  })

})()
