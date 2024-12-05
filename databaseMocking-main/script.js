//const { createUser, getAllUsers } = require('./dbService');
//const syncDatabase = require('./dbSync');

/*
(async () => {
  await syncDatabase(); // För att synka databasen med vår modell

  
  // Skapa en ny användare
  let user = await createUser('Suzanne', 'suzanne@example.com'); // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON());

  
  // Hämta alla användare
  let users = await getAllUsers(); // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()));
  
})();
*/

/*
document.getElementById("btnSend").addEventListener("click", async () => {

  //Hämta data från input fält
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  // Skapa en ny användare
  let user = await createUser(name, email); // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON());
  document.getElementById("newUserOutput").innerText = ('Ny användare skapad:', user.toJSON())

})
  */

//FUnktion för att hämta DB data och skriva ut den i tabell
( async () => {

  console.log("Hello")

  //Hämta data från DB
  let resp = await fetch("/getAllUsers")

  //Gör response till en lista (av users)
  let data = await resp.json()

  //Skapa en HTML table komponent
  let table = document.createElement("table")

  let forbiddenAttr = ["id"]

  //---------------------
  // Detta har lagts till för att skapa Header rad i table
  //---------------------
  //Skapa headers för översta raden
  let headerRow = document.createElement("tr")
  //Skapa en ForIn loop för det första objektet i listan, för att hämta attribut-namn för header
  for (let attr in data[0]) {
    //Kontroll av att inte ta med förbjudna attribut i output
    if (forbiddenAttr.includes(attr)) continue

    let tableHead = document.createElement("th")
    tableHead.innerText = attr
    headerRow.appendChild(tableHead)
  }
  table.appendChild(headerRow)
  //----------------------

  //Skapa en ForEach loop
  data.forEach( (user) => {
    //Skapa en TR komponent
    let tr = document.createElement("tr")

    //Skapa en ForIn loop för att gå igenom varje attribut i Person
    for (let attr in user) {
      //Kontroll av att inte ta med förbjudna attribut i output
      if (forbiddenAttr.includes(attr)) continue
      //Skapa en TD komponent
      let td = document.createElement("td")
      //Fyll den med data
      td.innerText = user[attr]
      //td.innerText = person["name"]
      tr.appendChild(td)
    }

    //Placera den färdiga raden i Table
    table.appendChild(tr)
  })

  document.getElementById("usersOutput").appendChild(table)

})()