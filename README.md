# Project: flo-start

Flo-start is a simple app used to demonstrate a few current web development technologies. It uses
the MEAN stack so relies on

* MongoDB : noSQL database, installed locally
* ExpressJS : NodeJS framework, used here to create the backend HTTP API
* AngularJS 2 : Client side UI framework
* NodeJS : server side javascript runtime

## Setup

Prior to running the application, we need to make sure that any prerequisites are installed.

### NodeJS and NPM
NodeJS and NPM are required by this project. You can verify if you have these installed
by running commands `node -v` and `npm -v`. If they are installed correctly, these commands
will return the installed version of NodeJS and NPM respectively. If they are not installed,
you can grab them from your package manager, or head over to the NodeJS website
(https://nodejs.org). _NodeJS will come with NPM, though you might have to add it to your
PATH. After installing NodeJS, you can find NPM at `{node_dir}/bin/npm`_

### MongoDB
At the moment, this project relies on a locally run instance of MongoDB. Visit the MongoDB
documentation for install instructions (https://docs.mongodb.com/manual/administration/install-community/).

On Ubuntu, you can simply run `sudo apt install mongodb` to get MongoDB.

Once MongoDB is installed, create a `flo` database with a `people` collection. Let's say we want
to seed `flo/people` with some JSON data saved in a file:

``` javascript
seed.json
{ id: 0, firstName: "Scott", lastName: "Pilgrim", address: "OutOfTown", zipCode: 12345, phone: 5555555555, employer: "N/A", iProvider: "NO INSURANCE", iPlanNum: -1 }
{ id: 1, firstName: "Link", lastName: "", address: "Kakariko Village", zipCode: -1, phone: -1, employer: "Kingdom of Hyrule", iProvider: "Fairies", iPlanNum: 2 }
{ id: 2, firstName: "Moo", lastName: "Man", address: "Atlantis", zipCode: 30303, phone: 5555555556, employer: "MooTown Industries", iProvider: "BlueCross", iPlanNum: 6498401 }
```

You can import this data by running the command:

```
mongoimport --db flo --collection people --drop --file seed.json
```

This command should automatically create the `flo` database and the `people` collection.

### Get the code

If you haven't already, grab the code from Github! You need `git` for this part (https://git-scm.com).

```
git clone https://github.com/jabrah/flo-start.git
```

## Running the application

After the prerequisites are installed, we should be able to run the application. In the `flo-start`
directory, install dependencies with NPM. This can take some time, go ahead and grab a cup of coffee.

```
npm install
```

After dependencies are done installing, assuming no errors have occurred, you should be able to
start up the application now.

```
npm run xpres
```

This command runs the _xpres_ script defined in the projects package definition. It spins up
the NodeJS server at `localhost:3000`.

## What you see

When you load up the application, you first see an 'about' page. This is the AngularJS client
being served from the ExpressJS/NodeJS backend. In other pages of the site, the client will
make calls to the ExpressJS HTTP API when dealing with data.
