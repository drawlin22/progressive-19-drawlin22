const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// ## Acceptance Criteria



// WHEN I deploy to Heroku
// THEN I should have proper build scripts for a webpack application
// ```
