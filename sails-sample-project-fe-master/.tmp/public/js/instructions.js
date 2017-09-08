(function(){

  $(function(){


let instructionsList = $('#instructionsList');
let instructionsButton = $('#instructionsButton');
let deleteInstructionsList = $('#deleteInstructionsList');

//Add Instruction function
    function getInstructions(){

      for (let i = 0; i < 10; i++){
      instructionsList.append(`
        <tr>
          <td>${i + 1}</td>
          <td>test</td>
        </tr>
          `);
    };
}

//Runs Add Instructions
getInstructions();

instructionsButton.on("click", function(event) {
      event.preventDefault();

      alert("Successfully Added");
//clear table
      instructionsList.html("");
//clear input fields
      addIngredientForm[0].reset();
//rerun function to display updated table
      getInstructions();
})

//Delete Instructions function
function deleteInstructions(){

  for (let i = 0; i < 10; i++){
  deleteInstructionsList.append(`
    <tr>
      <form action="/delete_instructions" method="POST">
      <td>${i + 1}</td>
      <td>test</td>
      <td><button type="submit" class="btn btn-default deleteButtons" data-instructionid="${i}">Delete</button></td>
</form>
    </tr>
      `);
};
}
//runs delete function
deleteInstructions();

deleteInstructionsList.on("click", ".deleteButtons", function(event){
  event.preventDefault();
  console.log($(this).data("instructionid"));
  })
})
})()
