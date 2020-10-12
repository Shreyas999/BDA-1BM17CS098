db.createCollection("Customers");

db.Customers.insertMany([
{cust_id:1,acc_bal:4000,acc_type:"savings"},
{cust_id:2,acc_bal:900,acc_type:"current"},
{cust_id:3,acc_bal:500,acc_type:"savings"},
{cust_id:4,acc_bal:8000,acc_type:"current"},
{cust_id:5,acc_bal:5000,acc_type:"savings"}]);

db.Customers.find();

db.Customers.find({acc_bal:{$gte:1200}, acc_type: "savings"});

db.Customers.aggregate([{$group:
    {
        "_id": "$cust_id",
        "maxBalance": {$max: "$acc_bal"},
        "minBalance": {$min: "$acc_bal"},
    }
}]);

mongoexport -d lab3 -c Customers -f cust_id,acc_bal,acc_type --type csv -o Customerdetails.csv

db.Customers.drop();

mongoimport -d lab3 -c Customers --type csv --file Customerdetails.csv --headerline
