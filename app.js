/*$(document).ready(function() {
    // Clear login form on modal close
    $('#loginModal').on('hidden.bs.modal', function() {
      $('#loginForm')[0].reset();
    });
  
    // Clear sign up form on modal close
    $('#signupModal').on('hidden.bs.modal', function() {
      $('#signupForm')[0].reset();
    });
  });
  ``
  */

  
JavaScript:

// JavaScript for Login and Sign Up Modals
$(document).ready(function() {
  // Show the Login Modal on clicking Login button in Navbar
  $("#loginButton").click(function() {
    $("#loginModal").modal("show");
  });

  // Show the Sign Up Modal on clicking Sign Up button in Navbar
  $("#signupButton").click(function() {
    $("#signupModal").modal("show");
  });
});

  