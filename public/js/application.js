function onReady() {
  $("form").submit(onSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  var serialized = $("form").serialize();
  $.post('/rolls', serialized, onSuccess);
}

function onSuccess(success) {
  console.log(success);
  dieNumber = String(success["roll"]);
  die = dieNumber+".png";
  $('#die').html("<img src="+die+">");
}

$(document).ready(onReady);





// Not using JQuery
// window.onload = function (event) {
//     var form = document.getElementById('thing');
//     form.onsubmit = function (event) {
//         event.preventDefault();
//         load('/rolls', responseCallback);
//     };
// };

// function load(url, callback) {

//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = ensureReadiness;

//     function ensureReadiness() {
//         if (xhr.readyState < 4) {
//             return;
//         }
//         if (xhr.status !== 200) {
//             alert('Shit got cray');
//         }
//         if (xhr.readyState === 4) {
//             callback(xhr);
//         }

//     }
//     xhr.open('GET', '/rolls', true);
//     xhr.send("");
// }

// function responseCallback(xhr) {
//     dieNumber = xhr.responseText;
//     die = dieNumber + ".png";
//     document.getElementById('die').innerHTML = "<img src=" + die + ">";
// }

