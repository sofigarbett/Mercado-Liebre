const express = require ('express');
const app = express ();
const path = require('path');
const pathHtml = path.resolve('public');
app.use(express.static(pathHtml));
const port =  3000;
app.listen(process.env.PORT || 3000,function(){
      console.log("server up at : http://localhost:3000/")}) ;

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});    
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});   

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
}); 