// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
// configure instagram app with client_id
ig.use({
client_id: 'e0e51c60672c4f09abe28c46c71a3a7a',
client_secret: 'db11c575a8ae4f1aa90a03ba1d1345d8'
});


app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with client-id
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images
// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
  //ig.tag_media_recent('yorubaDemon', function(err, medias, pagination, remaining, limit) {
  ig.location_media_recent('224290289', function(err, medias, pagination, remaining, limit) {
    // render the home page and pass in the popular images
  res.render('pages/index', { grams: medias });
});
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
