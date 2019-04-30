const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/listing/:listingID', express.static('public'));
app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});