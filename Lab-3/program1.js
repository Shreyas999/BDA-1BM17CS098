db.createCollection("Student");

db.Student.insertMany([
{name:"Shreyas", rollno:10, age:21, contactno:"7349113212", email_id:"shreyas.cs17@bmsce.ac.in"},
{name:"Varun", rollno:11, age:22, contactno:"7359221232", email_id:"varun.cs17@bmsce.ac.in"},
{name:"ABC", rollno:12, age:19, contactno:"9876543210", email_id:"abc.cs17@bmsce.ac.in"}]);

db.Student.find();

db.Student.update({rollno:10}, {$set:{email_id:"shreyask.cs17@bmsce.ac.in"}});

db.Student.update({rollno:11}, {$set:{name:"Arun"}});

mongoexport -d lab3 -c Student -f name,rollno,age,contactno,email_id --type csv -o Student.csv

db.Student.drop();

mongoimport -d lab3 -c Student --type csv --file Student.csv --headerline
