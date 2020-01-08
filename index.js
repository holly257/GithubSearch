const searchUrl = "https://api.github.com/users"

function formatRequest(params){
  const queryItems = Object.keys(params).map(
    objectKeys => `${objectKeys}=${params[objectKeys]}` 
  )
  return queryItems.join('&');
}


function getResults(search){
  const params = {
    q: search,
    language: "en",
  };
  
  const newString = formatRequest(params);
  const url = searchUrl + "?" + newString;
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(responseJson => 
  console.log(responseJson));
}

function displayResults(){
  $(".output").html(``)
}


function watchForm(){
  $("form").submit(event=>{
  event.preventDefault();
  const search = $("input").val();
  getResults(search);
  
  });
}

$(watchForm);