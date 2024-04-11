//console.log('privet')
//const { v4: uuidv4 } = require('uuid');
//console.log(uuidv4()); 
//const names=["Tom","John","Steave","Naira"];
//const sorted = names.toSorted();
//console.log(sorted);

/*const info={name:"Naira",workPlace:"hotel",generateId:number};
generateId();{
    return Math.random().toString(36).substring(2,15)};


function(info){
    return this.name,this.workPlace,this.generateId
}
console.log(info)*/


/*import { v4 as uuidv4 } from "uuid";

const employeeData = (name, company) => {
  const idGeneration = uuidv4();
  const employee = {
    id: idGeneration,
    name: name,
    company: company,
  };
  return employee;
};
const employee = employeeData("john", "patel");
console.log(employee);

const objectFunc = (name, company) => {
    const genId = Math.round(Math.random() * 10);
   
    return {
      name: name,
      company: company,
      id: genId,
    };
  };
   
  const comObj = objectFunc("Andrew", "Pure Inc.");
   
  console.log(comObj);*/

  /*const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());
 
const createUser = (name, workplace) => {
  const userId = uuidv4();
  return {
    name: name,
    workplace: workplace,
    id: userId,
  };
};
 
const user = createUser("Laima", "LRT");
console.log(user);

app.get('/', function (req, res) {
    res.send({status:"Hello"})
  })

app.get('/getOruPrognoze/city', function (req, res) {
  res.send({oruPrognoze:"salta",city:"Vilnius"})
})
app.get("/getGeneratedId", function (req, res) {
  const id = uuidv4();
  console.log("log ", id);
  return res.status(201).json({ id: id });
});*/
//const casual = require('casual');
//const { v4: uuidv4 } = require('uuid');
//const city=casual.city

//const { v4: uuidv4 } = require('uuid');
import express from"express";
import mongoose from "mongoose";
import cors from"cors";
import taskRouter from"./src/routes/task.js";
import"dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());
mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => {
    console.log("err: ", err);
  });

app.use(taskRouter);

app.use((req, res) => {
  return res.status(404).json({ status: "Endpoint does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`APP STARTED ON PORT ${process.env.PORT}`);
});










//app.listen(3000,()=>
//console.log('APP started!!!')
 