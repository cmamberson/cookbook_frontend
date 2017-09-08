(function(){

  $(function(){


let instructionsList = $('#instructionsList');
let instructionsButton = $('#instructionsButton');
let deleteInstructionsForm = $('#deleteInstructionsForm');

$('#recipe_id').on('change', function (e) {
    const recipeid = $(this).find("option:selected").val() || 1;
    console.log(recipeid);
    $('#addInstructionsForm').attr('action', `/recipe/${recipeid}/create_instructions`)
})

$('#recipe_instruction_destroyer').on('change', function (e) {
    const recipe = JSON.parse(decodeURI($(this).val()));
    console.log(recipe);
    deleteInstructionsForm.html("");

    for (let i = 0; i < recipe.instructions.length; i++){
        deleteInstructionsForm.append(`
          <tr>
            <td>${recipe.instructions[i].step}</td>
            <td>
            <form method="post" action="/recipe/${recipe.id}/delete_instructions/${recipe.instructions[i].instructionId}">
              <button type="submit" class="btn btn-default">Delete</button>
              </td>
          </tr>
        `);
        };



})

//Delete Instructions function

})
})()
