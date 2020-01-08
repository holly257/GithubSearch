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