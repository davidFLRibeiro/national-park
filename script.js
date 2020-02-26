//get parks
function getParks(code) {
  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=DuesPe40WxIiR0x7p7Ef0Rh7XgT43EbFpRdWLqvU`
  )
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => alert('something is not working'));
}

//display results
function displayResults(responseJson, code) {
  for (let i = 0; i < responseJson.data.length; i++) {
    if (i > 9) break;
    console.log(responseJson);

    $('.modal-content').append(
      `<section class='park-list'>
       <p class='park-name'>Park Name: ${responseJson.data[i].name}</p>
       <p class='park-state'>Park States: ${responseJson.data[i].states}</p>
       <p class='park-description'>Park Description: ${responseJson.data[i].description}</p>
       <p class='park-designation'>Park Designation: ${responseJson.data[i].designation}
       <p class='park-url'>Park URL: ${responseJson.data[i].url}</p>
       
       </section>
      `
    );
  }
}

//watch form
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const code = $('#js-search-park').val();
    console.log(code);
    getParks(code);
  });
}

$(watchForm);
