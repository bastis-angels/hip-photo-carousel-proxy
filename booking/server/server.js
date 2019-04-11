const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;
const Listing = require('../db/Listing.js');

app.use(cors());
app.use('/listing/:listingID', express.static('public'));

app.get('/booking/listing/:listingId', (req, res) => {
  Listing.find({listingId: req.params.listingId}, (err, listings) => {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.send(listings[0]);
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}...`));