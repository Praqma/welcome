function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      if (xhr.status == 200) {
        callback(null, xhr.response);
      } else {
        callback(xhr.status);
      }
    };
    xhr.send();
};

//use like this:
//var url = "https://raw.githubusercontent.com/Praqma/mailsignature/master/persons.json";

//getJSON(url, function(err, data) {
//if (err != null) {
//  alert('Something went wrong: ' + err);
//} else {
//  alert(eval('data.'+ person.id +'.name'));
//}
