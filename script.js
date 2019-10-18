let doggos;

function getDogImage() {
    fetch(`https://dog.ceo/api/breeds/image/random/${doggos}`)
        .then(response => response.json())
        .then(responseJson => 
        console.log(responseJson))
        .catch(error => alert('Ruh-roh! Romething rent wrong!'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    doggos = $('#selector').val();
    getDogImage();
  });
}

$(function() {
  console.log('Ruff! Waiting for submit!');
  watchForm();
});