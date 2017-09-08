(function() {

  $(function() {

    //View Details
    $('tbody').on("click", ".viewButtons", function(event) {
      event.preventDefault();
      console.log($(this).data("recipeid"));


    })

  })

})()
