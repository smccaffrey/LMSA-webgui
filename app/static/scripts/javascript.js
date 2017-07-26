
function save(){
  var text_to_save=document.getElementById('inputEmail').value;
  localStorage.setItem("textEmail", text_to_save); // save the item
}

function save(){
  var text_to_save=document.getElementById('inputPassword').value;
  localStorage.setItem("textPassword", text_to_save); // save the item
}

function retrieve(){
  var text=localStorage.getItem("textEmail"); // retrieve
  document.getElementById('textEmail').innerHTML = text; // display
}
function retrieve(){
  var text=localStorage.getItem("textPassword"); // retrieve
  document.getElementById('textPassword').innerHTML = text; // display
}

$('.faChkRnd').on('click', function() {
  var fav, favs = [];
  $('.faChkRnd').each(function() { // run through each of the checkboxes
    fav = {id: $(this).attr('id'), value: $(this).prop('checked')};
    favs.push(fav);
  });
  localStorage.setItem("favorites", JSON.stringify(favs));
});

$(document).ready(function() {
  var favorites = JSON.parse(localStorage.getItem('favorites'));
  if (!favorites.length) {return};
  console.debug(favorites);

  for (var i=0; i<favorites.length; i++) {
    console.debug(favorites[i].value == 'on');
    $('#' + favorites[i].id ).prop('checked', favorites[i].value);
  }
});
