show dbs 
use rimshakhart
show collections

db.item.find()
db.item.updateOne({name:"moto 30s"},{$set:{price:2}})
db.item.find()
db.item.updatemany({name:"moto 30s"},{$set:{price:2,rating:1}})
