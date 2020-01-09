
const searchUrl = "https://api.github.com/users/${search}/repos"

function getResults(search, order){
  const url =  `https://api.github.com/users/${search}/repos?sort=created&direction=${order}`
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(responseJson => 
  displayResults(responseJson));
}

function displayResults(responseJson){
    console.log(responseJson);
    $(".output").empty();
    for (let i = 0; i < responseJson.length; i++){
        $(".output").append(`
        <h3>${responseJson[i].name}</h3>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>
        `)};
}


function watchForm(){
  $("form").submit(event=>{
  event.preventDefault();
  const search = $("input").val();
  const order = $("#orderSelect").val();
  getResults(search, order);
  });
}

$(watchForm);