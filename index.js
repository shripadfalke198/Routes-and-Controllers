const express = require('express');
const routes = require('./routes/teaRoute');

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3000,()=>{
	console.log('server is liostening on port 3000');
})