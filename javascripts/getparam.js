function getParam( key ){
  // This fundtion enables you to query tha value of a CGI parmeter.
  //If the key doesn't exist it will retuned undefined
  //It enables you to do something like:
  //   var user = getParam("user");
  //   if (typeof user === "undefined") {
  //     console.log("CGI parameter user is undefined");
  //   }

  //Isolate the parameters from the rest of the URL and Decode the string
  var params = decodeURI(
    window.location.search.substr(window.location.search.indexOf("?")+1)
  );

  //Tranform parmas into a valid JSON string
  var json = params.replace(/"/g, '\\"'); // Escape any possibel occurences of quotes
  json = json.replace(/&/g, '","');       // The ampersand in CGI becomes a comma in JSON
  json = json.replace(/=/g,'":"');        // The equal sign become a colon in JSON
  json = '{"' + json + '"}';              // Enclosing it in {} to finalize the JSON string
  var obj = JSON.parse( json );           // Turn the JSON sting into a JSON object, to make
                                          // the actual query super easy
  return eval('obj.'+key);
}
