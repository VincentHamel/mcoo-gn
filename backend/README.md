# Installation
To have the backend running you need to have [nodejs](https://nodejs.org/dist/v0.12.6/x64/node-v0.12.6-x64.msi),
[mongo](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.0.4-signed.msi),
[python](https://www.python.org/ftp/python/3.4.3/python-3.4.3.amd64.msi)
and optionally [meld](https://download.gnome.org/binaries/win32/meld/3.12/Meld-3.12.3-win32.msi) to help you with git merges.

You should do a normal installation for all those tools. You can find more documentation on their respective sites.

## MongoDB
MongoDB needs something more to complete its installation. In a command prompt you need to run
```
md \data\db
```
This will create the folder to hold your DBs.

## NPM packages
To install node(npm) packages you need to
```
cd your_source_folder
cd backend
npm install
```
Those packages are libraries that we use in the server. For example, mongoose is a library to help us communicate with MongoDB.

# Run
## MongoDB
You ALWAYS need to start MongoDB before running the node server. In a command prompt
```
cd C:\Program Files\MongoDB\Server\3.0\bin
mongod.exe
```
this will start the MongoDB server.
## Node
In another prompt, go to your source folder.
```
cd your_source_folder
cd backend
npm install
npm start
```
The ```npm start``` will launch your server instance. ```npm install``` needs to be run **every** time you pull new source code from the main repo.

# Testing
You can use [Postman](https://www.getpostman.com/) to interract with the REST API now running on localhost:8080.

## Unit testing
To run the unit tests you need to be in the backend folder.
```
npm test
```

# Documentation
[Mocha](http://mochajs.org/#getting-started) (unit test)
[Should](https://shouldjs.github.io/) (unit test)
[NodeJS](https://nodejs.org/api/) (backend logic)
[Assert](https://nodejs.org/api/assert.html) (unit test)
[Supertest](https://github.com/visionmedia/supertest) (integration test)
[MongoDB](http://docs.mongodb.org/manual/) (db)
[Mongoose](http://mongoosejs.com/docs/guide.html) (db ORM)

#Problems
## Error: connect ECONNREFUSED 127.0.0.1:27017
Start your MongoDB.

## NPM complains with ```Error: Cannot find module something```
You need to run ```npm install``` in the backend’s folder.
