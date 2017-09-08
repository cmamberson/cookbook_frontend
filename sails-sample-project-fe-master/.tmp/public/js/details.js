(function() {

  $(function() {
    let viewDiv = $('#viewDetails')

    //View Details
    $('#viewDetails').on("click", ".viewButtons", function(event) {
      event.preventDefault();
      console.log($(this).data("recipeid"))


    })

  })

})()
