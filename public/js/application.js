

// function onReady() {
//   // alert('hi');
//   $("form").submit(onSubmit);
// }

// function onSubmit(event) {
//   event.preventDefault();
//   // alert('hi');
//   var serialized = $("form").serialize();
//   $.post('/rolls', serialized, onSuccess);
// }

// function onSuccess(success) {
//   dieNumber = String(success["roll"]);
//   die = dieNumber+".png";
//   $('#die').html("<img src="+die+">");
//   // console.log(die);
//   // $('#die').html(die);
// }

// $(document).ready(onReady);

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
function load(url, callback) {
  var xhr = new XMLHttpRequest(); 
  xhr.onreadystatechange = ensureReadiness;
  function ensureReadiness(){
    if(xhr.readyState < 4){
      return;
    }
    if(xhr.status !== 200){
      alert('Shit got cray');
    }
    if(xhr.readyState === 4){
      callback(xhr);
    }
    // console.log(xhr.responseText);

  }
  xhr.open('GET', '/rolls', true);
  xhr.send("");
}

load('/rolls', function(xhr){
  dieNumber = xhr.responseText
  die = dieNumber+".png";
  document.getElementById('die').innerHTML = "<img src="+die+">";
});
// var ajax = {
//   load: function()
// }
