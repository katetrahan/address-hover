//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() { //first function
  $("form#new-contact").submit(function(event) {
    debugger;
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val(); //variables created for New Contact to concat the results entered in seperate inputs
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName); //new contact object

    $(".new-address").each(function() { //new function for address (so it's not under the 'submit' from the first function)
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState); //new address object
      newContact.addresses.push(newAddress);      
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"); //sending list of contact name to html document


    $(".contact").last().click(function() { //function for contact name and display
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val(""); //taking in the input if the name
    $("input#new-last-name").val("");
  });
});

$(document).ready(function() { //function for grouping the address
  $("#add-address").click(function() { //calling to the button
    $("#new-addresses").append('<div class="new-addresse">' + '<div class=form-group>' + '<label for="new-street">Street</label>' + '<input type="text" class="form-control new-street">' + '</div>' + '<div class="form-group">' +'<label for="new-city">City</label>' + '<input type="text" class="form-control new-city">' + '</div>' + '<div class="form-group">' + '<label for="new-state">State</label>' + '<input type="text" class="form-control new-state">' + '</div>' + '</div>');

  });
});
