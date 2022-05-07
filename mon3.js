show dbs 
use rimshakhart
show collections

db.item.find({price:2200})

//deleting item from the monogo database
db.item.deleteOne({price:2200})
//deleteOne will delete the matching document entry and will delete the first entry in case of multi doucment match
db.item.deleteMany({rating:{$gt:2.5}})
db.item.find({rating:{$gte:2.5}})