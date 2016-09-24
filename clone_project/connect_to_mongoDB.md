# Connect Application to mongoDB

#### create mongo account
	
- sign up for free account
- create table (ie: single node, aws) and user
- copy/ paste new db link to your config.js file and update
  new dbuser and dbpass info.

### install mongoose, require and connect to db (server.js)

- npm install mongoose --save
- require mongoose
- run mongoose.connect with 2 parameters:
	- config.database and
	- call back function (err or yay)

> if err object comesback with 'not authorized' log, you've forgotten to
> replace <dbuser>:<password> with db credentials


