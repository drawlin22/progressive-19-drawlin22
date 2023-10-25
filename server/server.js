const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// ## Acceptance Criteria

// GIVEN a text editor web application
// WHEN I run the text editor application from my terminal
// WHEN I run my webpack plugins
// WHEN I use next-gen JavaScript in my application
// THEN I find that the text editor still functions in the browser without errors
// WHEN I open the text editor
// THEN I find that IndexedDB has immediately created a database storage
// WHEN I enter content and subsequently click off of the DOM window
// THEN I find that the content in the text editor has been saved with IndexedDB
// WHEN I reopen the text editor after closing it
// THEN I find that the content in the text editor has been retrieved from our IndexedDB
// WHEN I click on the Install button
// THEN I download my web application as an icon on my desktop
// WHEN I load my web application
// THEN I should have a registered service worker using workbox
// WHEN I register a service worker
// THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
// WHEN I deploy to Heroku
// THEN I should have proper build scripts for a webpack application
// ```
