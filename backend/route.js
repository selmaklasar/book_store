const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/mernstack')

const app=express()


app.use(express.json());


const user=new mongoose.Schema({ 

    FirstName:String,
    LastName:String,
    Email:String,
    Phone:Number,
    Password:String,
    Name:String,

    Number:Number,
     feedback:String,
       
    
    })
    
    const model=mongoose.model('stack',user)

    app.use(cors())     



 
    app.post('/register', async (req, res) => {
        const { firstname, lastname, email, phone, password, confirm_pas } = req.body;
    console.log(password,confirm_pas)
    
        if (password === confirm_pas) {
            try {

                const hashed_password=await bcrypt.hash(password,10)
                console.log(hashed_password)
                const newUser = new model({
                    FirstName: firstname,
                    LastName: lastname,
                    Email: email,
                    Phone: phone,
                    Password: hashed_password
                });
                 newUser.save();
                console.log(newUser);
                res.status(200).send(newUser);
            } catch (error) {
                console.error(error);
                res.status(500).send(error);
            }
        } else {
            console.log("Passwords do not match");
            res.status(400).send("Passwords do not match");
        }
        
    });
    app.post('/login', async (req, res) => {
        const Emailid = req.body.email;
        const pass = req.body. password;
        
        
        try {
            const user3 = await model.findOne({ Email: Emailid});
            
            if (user3) {
                console.log("user")
                console.log(pass)
                const match = await bcrypt.compare(pass, user3. Password); 
                console.log(match)
                if(match){
              res.send("true user")
              console.log("user is true")
            } else {
              res.send('Invalid email or password');
              
            }
        }
        else{

            console.log("there is error")
        }
          } catch (error) {
            res.status(500).send('Internal server error');
          }
          
        });
        app.post('/feedback',async(req,res)=>{
            
               
                const emailid = req.body.email;
               const Name=req.body.name;
               const Feedback=req.body.feed
                

                
      
                try{
                    const user4 = await model.findOne({Email: emailid });
                    console.log("user")
                     
              if(user4 .Email===emailid ){
                console.log("emails are match")
                res.send("email match")
                console.log(emailid);
                console.log(Name);
                console.log(Feedback)
              }
              else{
                console.log("emails do not match")
                res.status(400).send("invalid email")
              }
            }
                
            catch{
                res.status(500).send('Internal server error');
               } 
            
            })
    
      
       
      
      
app.listen(4000,()=>{
   console.log("server  is started")


})