/*const express = require('express');
const app = express();
const port = 5000;



app.get("/api",(req,res) => {
    res.json({"users": ["userOne","userTwo", "userThree"]})
})

app.listen(5001, ()=> {
    console.log("Node serevre started on 5001")
});*/
/*---------------------------------------------------
const express = require('express');
const cors = require('cors');
const clientsRoute = require('./routes/clients');

const app = express();
const PORT = 5001;

app.use(cors());
app.use('/api/clients', clientsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
*/



const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./config/database');
const clientsRoute = require('./routes/clients');

const app = express();
const PORT = 5001;

app.use(cors());
app.use('/api/clients', clientsRoute);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

