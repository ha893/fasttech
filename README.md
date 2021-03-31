# fasttech

This project contains 3 js files in the root folder which are  listed below

1)config.js: File which contains the secret key to be used for jwt autentication.

2)responsegenerator.js: File which contains a response object which is to be send when the customer ticket is created succesfully or if there is any error creating or displaying the customer ticket.

3)server.js file whcih is the main js file containing all the controllers of the project along with database connectivity and also server creation is done in this file.

This project apart from three files contains in the root folder mentioned above contains two folders which are listed below

1)Models Folder
The models folder basically contains the databases for this project.It contains two tables one is user.js which holds all the inforamtion for user signup.The second table is called ticket.js which holds all the inforamtion regarding the customer support tickets generation.

2)Controllers Folder
The controllers folder basically holds 6 controllers.js files.These 6 files contain the code for routing meaning it is in these 6 files where  have defined the different request to the browser when certain url is hit.Example of different request includes POST, GET , PUT. The following 6 files are listed below along with their purpose of creation.

1)usercontroller.js
First of all in this file i have defined all the neccessary libraries, database file and middleware. This file contains two request for creating user signup.The first one is POST request for creating new user you can simply create the new user just by installing POSTMAN and then in POSTMAN in the url type the following.
http://localhost:8080 make sure to select POST as our request then below request click on the body option and then select x-www-form-urlencoded.
Finally in the body section define the keys as fname,lname,email,password,role and value as you wish.

The second request is the GET Request which can be run simply by typing http://localhost:8080 in the url and select GET as your request.This request will display all the created users.

2)logincontroller.js
The logincontroller.js file basically contains user signin along with jwt authentication. THe user will provide his email and password in the body section of POSTMAN if both email and password macthes with the email and password in the database then we can create jwt token for that specif user.To accomplish this task you can follow the instructions below.

First of all as mentioned before go to POSTMAN extension then select POST as your request in the url type http://localhost:8080/log/login then as before in the body select x-www-form-urlencoded.In the key value define the email and password as you did while creating new user. Make sure that both email and password should be the same as in db. If both email and password matches you will see your jwt token created for that specif user.

3)authorize.js
To accomplish the task where we want to update users first and last name based on jwt authentcation i have created 2 js files. First file is this authorize.js which basically contains the function of jwt verification.In this file basically the function is defined whcih contains the condition 
for whether to update users first and last name or to display error. How to make use of this function and to update users first and last name you cn follow the instructions defined in verify.js file below.

4)verify.js
To update users first and last name based on jwt authentication we will make use of this file with the help of jwt authorization function defined in authorize.js file.In order to update specific users first and last name we have to first of all make sure that the token created during users sign in matces so for that purpose we created the token verfication function in authorize.js file so in order to get specific user we will need to verify his token so that purpose follow the instructions below.

Go to postman select your request as GET request then click on headers option and in the key filed write x-access-token and the value field write the token of the user you got when you signed in for example the token would look something like this eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjM2MWI2ZThjYmYwNDc4ZThkODI1ZiIsImlhdCI6MTYxNzE3OTMyMywiZXhwIjoxNjE3MjY1NzIzfQ.LMT1lV6TaHcBYeaWwt04I6VxtyAooByxNNRKdrEWfWk.The URL to accomplish this is http://localhost:8080/che/me. If the token matches you will get the users whole details example his first name last name email password and role now you are ready to update his first or last name to accomplish that kindly select PUT as your request and type the _id of the specific user that you want to update. In the URL type the following http://localhost:8080/che/606361b6e8cbf0478e8d825f after/che/ the id has been defined of that specifc user as an example.

5)ticket.js
THe ticket.js file is basically to create customer tickets.To simply create customer support tickets go to POSTMAN  under request select POST and then in body select as before x-www-form-urlencoded and finally in the key defined userid and message and in the value define the value of yur choice
note that the ticketid is randomly generated so need to manually enter it in key value.The URL to accomplish this task is as follows.
http://localhost:8080/tick/create

6)admin.js
Finally in the admin.js file i am reading all the tickets issued by the users in ticket.js. To read all the users tickets go to POSTMAN and under request select GET and type the following URL http://localhost:8080/admin/tickets
