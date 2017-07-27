
function welcome(id){
  var person = {};
    person.id = id;
    var url = "https://raw.githubusercontent.com/Praqma/mailsignature/master/persons.json";

  getJSON(url, function(err, data) {
    if (err != null) {
      alert('Something went wrong: ' + err);
    } else {
      person.name = eval('data.'+ person.id +'.name');
      person.github = eval('data.'+ person.id +'.github')
      person.firstlast = eval('data.'+ person.id +'.name')
        .toLowerCase()
        .replace(/&oslash;/g, 'oe')
        .replace(/&aring;/g, 'aa')
        .replace(/&aelig;/g, 'ae')
        .replace(/ /g, '.'); //https://en.wikipedia.org/wiki/List_of_Unicode_characters
      person.firstlast = removeDiacritics(person.firstlast);
      person.passwd = person.firstlast.replace(/\./g, '');
      var aliases =
        "<li>"+person.id+"@praqma.net</li>" +
        "<li>"+person.id+"@praqma.com</li>" +
        "<li>"+person.firstlast+"@praqma.net</li>" +
        "<li>"+person.firstlast+"@praqma.com</li>" +
        "<li>"+person.github+"@praqma.net</li>" +
        "<li>"+person.github+"@praqma.com</li>";
      setIdInnerHTML("name", person.name);
      setIdInnerHTML("login", person.id+'@praqma.net');
      setIdInnerHTML("login2", person.id+'@praqma.net');
      setIdInnerHTML("passwd", person.passwd);
      setIdInnerHTML("aliases",aliases);
    }
  });
};

function setIdInnerHTML(id,txt){
    document.getElementById(id).innerHTML = txt;
};
