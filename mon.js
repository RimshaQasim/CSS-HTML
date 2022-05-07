// inserting data in mongo
use rimshakhart
db.item.insertOne({name:"samsung 30s",price:2200,rating:4.5,qty:233,sold:98})
db.item.insertMany([{name:"samsung 30s",price:2200,rating:4.5,qty:233,sold:98},{name:"moto 30s",price:2800,rating:3.5,qty:133,sold:44},
{name:"realme 80s",price:12800,rating:2.5,qty:233,sold:34}
])