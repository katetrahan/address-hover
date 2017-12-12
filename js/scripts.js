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
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    debugger;
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var lisa = new Contact("Lisa", "Simpson");
    console.log(lisa);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

$(document).ready(function() {
  $("#add-address").click(function() { //calling to the button
    $("#new-addresses").append('<div class="new-addresse">' + '<div class=form-group>' + '<label for="new-street">Street</label>' + '<input type="text" class="form-control new-street">' + '</div>' + '<div class="form-group">' +'<label for="new-city">City</label>' + '<input type="text" class="form-control new-city">' + '</div>' + '<div class="form-group">' + '<label for="new-state">State</label>' + '<input type="text" class="form-control new-state">' + '</div>' + '</div>');

  });
});
