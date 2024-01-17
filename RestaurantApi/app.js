const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/routes');

const hostname = "localhost";
const port = "8989";

const mongo = require('mongodb');

const { MongoClient } = require('mongodb');
const MONGO_URL = "mongodb://127.0.0.1:27017";
// const MONGO_URL = "mongodb://localhost:27017";
let db;

const app = express();
app.use(bodyParser.json());
//CROS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Conetnt-Type, Autherization');

    next();

});

app.use('/', router);
app.listen(port, hostname, () => {
    console.log(`Server is Running on http://${hostname}:${port}`);


})

//Mongdb Connection

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log("Mongodb is Connected")
    if (err) {
        console.log("Error while Connecting");
    }
    db = client.db("resturantdata");


});
//  get location from Mongodb
app.get("/locations", function (req, res) {
    db.collection("locations").find().toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
})

//  get mealtype from Mongodb
app.get("/quickSearch", function (req, res) {
    db.collection("mealtype").find().toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
})

//  get restaurantdata by state_id and meal_id
app.get("/restaurants", function (req, res) {
    let query = {}
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId);
    if (stateId) {
        query = { state_id: stateId }
        let mealId = Number(req.query.mealId);
    } else if (mealId) {
        query = { "mealTypes.mealtype_id": mealId }
    }
    db.collection("restaurantData").find(query).toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
});
//filters
app.get("/filter/:mealId", function (req, res) {
    let query = {}
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);

    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let sort = {cost:1};
    if(req.query.sort){
        sort ={ cost: req.query.sort};

    }

    if (cuisineId) {
        query = {
            "mealTypes.mealtype_id": mealId,
            "cuisines.cuisine_id": cuisineId
        }
    } else if (lcost && hcost) {
        query = {
            "mealTypes.mealtype_id": mealId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]

        }

    }
// sort =1 for accending 
// sort =-1 for decending

    db.collection("restaurantData").find(query).sort(sort).toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
});

// details of a restaurants 
app.get("/details/:id", function (req, res) {
    let id = Number(req.params.id);
    
    db.collection("restaurantData").find(
        {restaurant_id: id}).toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
});

// menu  of a restaurant 
app.get("/menu/:id", function (req, res) {
    let id = Number(req.params.id);
    
    db.collection("RestaurantMenu").find(
        {restaurant_id: id}).toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
});


// menu  of a restaurant --Post
app.post("/menuItem", express.json(), function (req, res) {
    if(Array.isArray(req.body)){

    db.collection("RestaurantMenu").find({menu_id:{$in: req.body}})
    .toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
}else{
    res.send("Invalid Input");
}
});

// get orders also by email
app.get("/orders", function (req, res) {
    let query= {};
    let email= req.query.email;
    if(email){
        query = {email};
    }
    db.collection("orders").find(query)
    .toArray((err, result) => {
        if (err) throw err
        res.send(result);
    });
});


// place orders
app.post("/placeorder", function (req, res) {
   console.log(req.body);
    db.collection("orders").insertOne(req.body,
   (err, result) => {
        if (err) throw err
        res.send(result);
    });

});

// update payment detail
app.put("/updateOrder/:id", function (req, res) {
    let oid= Number(req.params.id)
    db.collection("orders").updateOne({orderId : oid},{$set:{
        status: req.body.status, 
        bank_name: req.body.bank_name,
         date:req.body.date}},
    (err, result) => {
        if (err) throw err
        res.send("Order Updated Successfully");
    });
});

// delete order detail
app.delete("/deleteOrder/:id", function (req, res) {
    let oid= Number(req.params.id);
    db.collection("orders").deleteOne(
    {orderId : oid},
    (err, result) => {
        if (err) throw err;
        res.send("Order deleted Successfully");
    }
    );
});

