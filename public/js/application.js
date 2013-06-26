// $(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

// });

// function onSuccess(data, textStatus, jqXHR) {
//   alert(data);
//   debugger;
//   text = $(data).filter('#grandma').text();
//   alert(text);

//   $('#default').hide();
//   $('#return_prefix').show();
//   $('#grandma').text(text);
// }

// function onSubmit() {
//   var paramString = $(this).serialize();
//   $.post('/grandma', paramString, onSuccess);
//   return false;
// }

// function onReady() {
//   $('form').on('submit', onSubmit);
// }

// $(document).ready(onReady);


function onReady() {
  $("form").submit(onSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  var serialized = $("form").serialize();
  $.post('/rolls', serialized, onSuccess);
}

function onSuccess(success) {
  var newContainer = $(success).find('#die');

  // html = $('html').filter('.container');
  $('#die').html(newContainer);
}

$(document).ready(onReady);

// $(document).ready(function() {
//   $("form").submit(function(event){
//     event.preventDefault();
//     var serialized = $("form").serialize();
//     $.post('/rolls', serialized, function(success){
//       debugger
//       var newContainer = $(success).html();
      
//       // html = $('html').filter('.container');
//      $('#die').html(newContainer);
//     });
//   });
// });
