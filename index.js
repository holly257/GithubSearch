// const searchUrl = "https://api.github.com/users"

const searchUrl = "https://api.github.com/users/${search}/repos"

// function formatRequest(params){
//   const queryItems = Object.keys(params).map(
//     objectKeys => `${objectKeys}=${params[objectKeys]}` 
//   )
//   return queryItems.join('&');
// }


function getResults(search){
//   const params = {
//     q: search,
//   };
  
//   const newString = formatRequest(params);
  const url =  `https://api.github.com/users/${search}/repos`

//   + "?" + newString;
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
        <p>${responseJson[i].html_url}</p>
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