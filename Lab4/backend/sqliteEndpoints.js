const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
var cors = require('cors')

let db = null; 

(async () => {
      db = await open({
      filename: '../database/lab4.db',
      driver: sqlite3.Database
    })
})()

app.use(cors());
app.use(express.json());

app.get('/getAll', (req, res) => {
    getAll(res)
});

app.get('/car/:id', (req, res) => {
    getCar(req, res)
});

app.post('/insertJSON', (req, res) => {
    const jsonObj = req.body;
    insertCar(jsonObj)
    res.send('POST request')
});

app.post(`insertQueryParameter/:timestamp/:email/:name/:year/:make/:model/:carid/:judgeid/:judgename/:racerturbo/:racersupercharged/:racerperformance/:racerhorsepower/:caroverall/:enginemodifications/:engineperformance/:enginechrome/:enginedetailing/:enginecleanliness/:bodyframeundercarriage/:bodyframesuspension/:bodyframechrome/:bodyframedetailing/:bodyframecleanliness/:modspaint/:modsbody/:modswrap/:modsrims/:modsinterior/:modsother/:modsice/:modsaftermarket/:modswip/:modsoverall`, (req, res) => {
        
    const json = {
        "Timestamp": req.params.timestamp,
        "Email": req.params.email,
        "Name": req.params.name,
        "Year": req.params.year,
        "Make": req.params.make,
        "Model": req.params.model,
        "Car_ID": req.params.carid,
        "Judge_ID": req.params.judgeid,
        "Judge_Name": req.params.judgename,
        "Racer_Turbo": req.params.racerturbo, 
        "Racer_Supercharged": req.params.racersupercharged,
        "Racer_Performance": req.params.racerperformance,
        "Racer_Horsepower": req.params.racerhorsepower,
        "Car_Overall": req.params.caroverall,
        "Engine_Modifications": req.params.enginemodifications,
        "Engine_Performance": req.params.engineperformance,
        "Engine_Chrome": req.params.enginechrome,
        "Engine_Detailing": req.params.enginedetailing,
        "Engine_Cleanliness": req.params.enginecleanliness,
        "Body_Frame_Undercarriage": req.params.bodyframeundercarriage,
        "Body_Frame_Suspension": req.params.bodyframesuspension,
        "Body_Frame_Chrome": req.params.bodyframechrome,
        "Body_Frame_Detailing": req.params.bodyframedetailing,
        "Body_Frame_Cleanliness": req.params.bodyframecleanliness,
        "Mods_Paint": req.params.modspaint,
        "Mods_Body": req.params.modsbody,
        "Mods_Wrap": req.params.modswrap,
        "Mods_Rims": req.params.modsrims,
        "Mods_Interior": req.params.modsinterior,
        "Mods_Other": req.params.modsother,
        "Mods_ICE": req.params.modsice,
        "Mods_Aftermarket": req.params.modsaftermarket,
        "Mods_WIP": req.params.modswip,
        "Mods_Overall": req.params.modsoverall
    }

    insertCar(JSON.parse(json))
    // res.send('PATCH request')
});

app.patch('/updateJSON', (req, res) => {
    updateCar(req, res)
    res.send('PATCH request')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

async function getAll(res) {
    const result = await db.all('SELECT * FROM csv');
    res.json(result);
}

async function getCar(req, res) {
    const result = await db.get(`SELECT * FROM csv WHERE CAR_ID = ${req.params.id}`);
    res.json(result);
}

async function insertCar(jsonObj) {

    await db.run(`INSERT INTO csv (Timestamp, Email, Name, Year, Make, Model, Car_ID, Judge_ID, 
        Judge_Name, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, 
        Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, 
        Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, 
        Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall) VALUES (
            "${jsonObj.Timestamp}", "${jsonObj.Email}", "${jsonObj.Name}", ${jsonObj.Year}, "${jsonObj.Make}", "${jsonObj.Model}", ${jsonObj.Car_ID}, "${jsonObj.Judge_ID}",
            "${jsonObj.Judge_Name}", ${jsonObj.Racer_Turbo}, ${jsonObj.Racer_Supercharged}, ${jsonObj.Racer_Performance}, ${jsonObj.Racer_Horsepower}, ${jsonObj.Car_Overall}, ${jsonObj.Engine_Modifications}, 
            ${jsonObj.Engine_Performance}, ${jsonObj.Engine_Chrome}, ${jsonObj.Engine_Detailing}, ${jsonObj.Engine_Cleanliness}, ${jsonObj.Body_Frame_Undercarriage}, ${jsonObj.Body_Frame_Suspension}, 
            ${jsonObj.Body_Frame_Chrome}, ${jsonObj.Body_Frame_Detailing}, ${jsonObj.Body_Frame_Cleanliness}, ${jsonObj.Mods_Paint}, ${jsonObj.Mods_Body}, ${jsonObj.Mods_Wrap}, ${jsonObj.Mods_Rims}, ${jsonObj.Mods_Interior},
            ${jsonObj.Mods_Other}, ${jsonObj.Mods_ICE}, ${jsonObj.Mods_Aftermarket}, ${jsonObj.Mods_WIP}, ${jsonObj.Mods_Overall})`);
}

async function updateCar(req, res) {
    const jsonObj = req.body;

    await db.run(`UPDATE csv SET Timestamp = "${jsonObj.Timestamp}", Email = "${jsonObj.Email}", Name = "${jsonObj.Name}", Year = ${jsonObj.Year}, Make = "${jsonObj.Make}", Model = "${jsonObj.Model}", Judge_ID = "${jsonObj.Judge_ID}", 
    Judge_Name = "${jsonObj.Judge_Name}", Racer_Turbo = ${jsonObj.Racer_Turbo}, Racer_Supercharged = ${jsonObj.Racer_Supercharged}, Racer_Performance = ${jsonObj.Racer_Performance}, Racer_Horsepower = ${jsonObj.Racer_Horsepower}, Car_Overall = ${jsonObj.Car_Overall}, Engine_Modifications = ${jsonObj.Engine_Modifications}, 
    Engine_Performance = ${jsonObj.Engine_Performance}, Engine_Chrome = ${jsonObj.Engine_Chrome}, Engine_Detailing = ${jsonObj.Engine_Detailing}, Engine_Cleanliness = ${jsonObj.Engine_Cleanliness}, Body_Frame_Undercarriage = ${jsonObj.Body_Frame_Undercarriage}, Body_Frame_Suspension = ${jsonObj.Body_Frame_Suspension}, 
    Body_Frame_Chrome = ${jsonObj.Body_Frame_Chrome}, Body_Frame_Detailing = ${jsonObj.Body_Frame_Detailing}, Body_Frame_Cleanliness = ${jsonObj.Body_Frame_Cleanliness}, Mods_Paint = ${jsonObj.Mods_Paint}, Mods_Body = ${jsonObj.Mods_Body}, Mods_Wrap = ${jsonObj.Mods_Wrap}, Mods_Rims = ${jsonObj.Mods_Rims}, Mods_Interior = ${jsonObj.Mods_Interior}, 
    Mods_Other = ${jsonObj.Mods_Other}, Mods_ICE = ${jsonObj.Mods_ICE}, Mods_Aftermarket = ${jsonObj.Mods_Aftermarket}, Mods_WIP = ${jsonObj.Mods_WIP}, Mods_Overall = ${jsonObj.Mods_Overall} WHERE Car_ID = ${jsonObj.Car_ID}`)
}

