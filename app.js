
const express = require("express");
const path = require("path"); 
const app = express();
const port = 80 ;


//express specific stuff
//  app.use(express.static('static', options))
app.use('/static', express.static('static')) //for serving static file
app.use(express.urlencoded())

//pug specific stuff
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))//set the views directory

//endpoint
app.get('/',(req, res)=> {
    const params = { }
 res.status(200).render('home.pug', params);
})
app.get('/contact',(req, res)=> {
    const params = { }
 res.status(200).render('contact.pug', params);
})
//start the server
app.listen(port, () => {
    console.log(`The application started successfully at ${port}`);
})