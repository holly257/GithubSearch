
const searchUrl = "https://api.github.com/users/${search}/repos"

function getResults(search){
  const url =  `https://api.github.com/users/${search}/repos`
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
        $(".output").html(`
        <h3>${responseJson[i].name}</h3>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>
        `)};
}


function watchForm(){
  $("form").submit(event=>{
  event.preventDefault();
  const search = $("input").val();
  getResults(search);
  });
}

$(watchForm);