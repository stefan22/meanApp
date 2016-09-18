# configuring MEAN stack web application project




### tech needed

- text editor, 
- mongoDB, 	 
- angularJS, 
- Express, and 
- Nodejs.


### Installation:
	
#### create folder and run package.json
	
- create a folder for your project (mkdir somename)
- cd yourself inside of that folder.
- make sure u got nodejs installed (node -v)
- if not download it first
- once downloaded run:

	=> npm init (to initialize your package.json file)

	- package.json allows you to manage all your npm packages locally
	- easier to share with other developer cause let u specify which
	  packages are needed for your project, and even the version.

- press enter to go through the file configuration.
- open your project folder with your text editor (subl . if you're using sublime)
- now go to your package.json file you just created using your text editor and 
  locate main key value.
  If you pressed enter during initialization it should be "index.js" 
- create index.js in your top root directory folder - the only one u got right now 
- install three packages using npm:

	=> `npm install express body-parser morgan --save`

	  (--save, saves it to your package.json file)

- to check, if the modules have been install:

	=> `ls node_modules`


#### inside index.js file

- insert `call dependencies` code block
- insert `run new instance` code block
- type `node index.js` in terminal (to get server running)
  
- if you have problems with npm permissions:
  you may have to change the permissions to
  npm default directory. 

    - check your nmp directory path:

        - type: `npm config get prefix` (mac)
          
          => /usr/local

    - if "/usr/local" is not your path, Google it.

    - also, if you're doing fresh insall of node in MacOS Homebrew it.

        type: `brew install node` (it'll fix it automatically for u)

    - Now, if "/usr/local", then change the owner of npm directories to current user
        
        - type in your terminal: 

        `sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}`

        - try again:

                 type: `node index.js`

                 => you should get back the listening port 3000 message


- now calling the file `server.js` makes more sense than `index.js` so let's change it:

	- `ctrl c` to shut down the server then
	- `rename` file `server.js` inside of package.json file
	- `rename` file `index.js` to `server.js`
	- `run` `node server.js` in the terminal again.


#### setting up config file


- create a new file: `config.js`
- then call the file with `require` from `server.js` and
  call it inside of `config port` code block

#### inside server.js

- bodyParser urlencoded to parse strings, images, videos etc
- bodyParser json to parse json 
- initialize morgan to log all requests to console
  ex: `GET / 200 8.980 ms - 135`
- under `ready to call a file` code block, add an
  app.get call back function to load file `index.html`
- create `index.html` in `public > views > index.html`
  (add some text like hello world to it)
- run server again `node server.js`
- go to `localhost:3000` and boom!




	
