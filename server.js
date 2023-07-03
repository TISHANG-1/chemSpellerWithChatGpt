const express =  require('express'); 
const morgan  =  require('morgan') ;
const bodyParser  =  require('body-parser') ; 
const dotenv  =  require('dotenv');    
const path = require('path'); 
const app =  express() ;

app.use(morgan('tiny')) ;   
dotenv.config({path:'./config.env'});  
app.use(bodyParser.urlencoded({ extended : true})) ; 
app.set("view engine", "ejs") ; 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

const PORT = process.env.PORT || 3000 ;   

app.use('/', require('./server/routes/router'))  ; 
app.listen(PORT , () => console.log(`server listening on http://localhost:${PORT}`))