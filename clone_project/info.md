# MEAN App   

- Fullstack JavaScript Framework for web application development.

- `Node.js` is a framework for writing server-side JavaScript applications. 
  It is built on top of the V8 JavaScript runtime and uses an `event-driven`,
  `non-blocking` I/O model that makes it `perfect for data-intensive, real-time applications`.

 ### Other components of the MEAN stack:

	- mongoDB
 		- NoSQL database

	- express
		- node.js framework

	- angular
		- js framework for building single page apps.

<br />
### Asynchronous, Event-driven and non Blocking

	`Asynchronous` literally means `not synchronous`. Not everyting needs
	 to comeback at once (request - response) in order to get data back from the server.
	 The application can continue on with other work while on the same thread.
	 
	 Non blocking means that you aren't waiting for the i/of the call.
	 (Input/Output). Non blocking, allows for asynchronous to work 
	 because the server can only process one operation at a time afer all (single threaded).
	
	 Event driven means that your applications sits there and waits for
	 something to happen. Also, single threaded.
	
	`HTTP requests are synchronous`. You send a request and get a response.
	
	`Emails` are asynchronous - but not the best example.
	
	 `Restaurant analogy` probably the best way to explain asynchronous calls.
	 Google it, if still not clear. ("restaurant analogy for asynchronous calls")


<br />
> A function blocks when it waits for something to happen before returning. 
> (like on a synchronous call)	

> An asynchronous function returns before it is finished, and generally 
> causes some work to happen in the background before triggering some future 
> action in the application (as opposed to normal synchronous functions, 
> which do everything they are going to do before returning)


<br /><br />
### Express

- web framework for Node.js 
- sort of what Sinatra is to Ruby - it allows you to organize your web
  application into an MVC architecture on the server side.
- npm install express --save
- provides a set of features for web and mobile applications
- makes writting APIs easier


### mongoDB

- A NoSQL Database (no relationship btw tables)
- Document database
- Output in json format
- fast and scalable 

### Benefits of NoSQL

- their data models are designed to handle large volumes of rapidly
  changing data structures
- designed to work better (flexible) with object oriented programming
- more agile - unlike Sql you don't have to create database in advance.
  No need to migrate entire database to new schema just to make a simple
  update.
- load balance across multiple services (as oppose to vertical scaling,
  where a single server host entire database)
- replication in case of outages


<br />
> Document database emerged as a result of new data environments, as well
  as programming. New cloud computing makes it easy now for data to be 
  stored easily across multiple servers. New ways of storing data also have
  emerged that allow for data to be store more naturally loosen restrictions
  on data schema. One of the most popular is the `Document Data model` where
  each record and its associated data is thought of as a 'document' (object).


<br />
### AngularJS

- front end js framework created by Google
- very dynamic and great for single page apps.
- a complete client-side solution. Handles all of the Ajax request calls.
- CRUD app:data binding, directives, form validation, routing, deep-linking,
  reusable components and dependency injection.
- unit testing, end-to-end testing



```
		
	   **mongoDB**  		   **nodeAPI**					  **AngularJS**
		=========				 =======						=========

       `send back` ----->     	`return json` -------> 			   `UI`
		`object`                  `object`



					 <-------   `get info or`          <-----  `ajax call` 	
							    `post to DB`				   `to node api`


```













