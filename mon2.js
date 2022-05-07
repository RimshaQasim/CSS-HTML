// searching data in mongo
use rimshakhart
//This quary will return all the object with rating equal 4.5
// rating 4.5 is a filter obj
db.item.find({rating:4.5})
//gte=greater and equal
db.item.find({rating:{$gte:4.5}})
//and operator
db.item.find({rating: {$gt:2.5}, price: {$gt:4000} })
db.item.find({rating: {$gt:2.5}, qty: {$gt:133} })
db.item.find({sold: {$gt:34}, qty: {$gt:133} })
//less than
db.item.find({rating:{$lte:4.5}})
// or operator
db.item.find({$or:[{rating: {$gt:2.5}}, {price:{$lt:14000}}]})
//give one more parameter called projection
db.item.find({rating:{$gte:2.5}},{rating:1})
db.item.find({rating:{$gte:2.5}},{rating:1,qty:1})

