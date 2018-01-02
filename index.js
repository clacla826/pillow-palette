const app = require('./server/index.js');
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
const PORT = process.env.PORT || 8080

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`YOUR SERVER KINDLY AWAITS YOUR ATTENTION ON PORT ${PORT}`);
});





































// const app = require("./server");
// const PORT = process.env.PORT || 1337;
// const { db } = require("./server/db/models");

// db
//   .sync()
//   .then(() => {
//     console.log(
//       "The postgres server is up and running - maybe you should go catch it!"
//     );
//     app.listen(PORT, err => {
//       if (err) throw err;
//       console.log(`Your server kindly awaits your attention on port ${PORT}`);
//     });
//   })
//   .catch(console.error);

// // We start in the server with the file pulled in from our start script, main.js. This pulls in our app where we start and export our Express app. The middleware assigned to app in this file includes static middleware (e.g. app.use(express.static.... In this, we are serving up the public directory which will be searched to see if the file we are requesting lives inside of it. Our local CSS dependencies do live here, so that is what is found and then sent as a response to the client! The node_modules directory is also being served up in our code base.

// // 	Note, serving the entire node_modules directory can give more information to potential hackers and leave you more vulnerable; if they know of a vulnerability in one of the libraries you are using, know you are using that library, they know of a vulnerability in your website.

// // 	Now that you understand this, maybe keep trucking along by looking into the rest of the middleware back here - logging middleware, body parsing middleware, error handling middleware, etc.   90i
