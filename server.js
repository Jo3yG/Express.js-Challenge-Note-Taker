const express = require('express');
const app = express();
const PORT = process.env.Port || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./apiroutes/apiRoutes.js')(app);
require('./apiroutes/htmlRoutes.js')(app);

app.listen(PORT, () =>{
    console.log(`Server on localhost${PORT}`);
});
