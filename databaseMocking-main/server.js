//Fil för att hantera Express server
const express = require("express")
const bodyParser = require("body-parser")
const syncDatabase = require('./dbSync');

const portNr = 8080

const { createUser, getAllUsers } = require('./dbService');

//Konfigurera server med Body-parser
const application = new express()
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({extended:false}))

//Starta upp server
application.listen(portNr, async () => {
  await syncDatabase(); // För att synka databasen med vår modell

  console.log(`Nu ligger servern på portNr ${portNr} och lyssnar efter inkommande requests`)
})

//Get request för Index
application.get("", (req, res) => {
  res.sendFile("./index.html", {root: __dirname})
})

//Get handler för script.js fil
application.get("/script", (req, res) => {
  res.sendFile("./script.js", {root: __dirname})
})

//Post endpoint för att skicka data till server
application.post("/addUser", async (req, res) => {
  //Hämta data från Payload
  const data = req.body

  //Spara data till Databas
  let respUser = await createUser(data.name.trim(), data.email.trim() )

  console.log('Ny användare skapad:', respUser.toJSON());

  //Returnera respons till User
  //res.sendFile("./index.html", {root: __dirname})
  res.redirect("/")
})

//Get Endpoint för att hämta all data från DB
application.get("/getAllUsers", async (req, res) => {

  //Hämta data från Databas
  let users = await getAllUsers()

  //console.log(users)

  res.send( users )
})