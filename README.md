# Start the project.

1.Create the directory and start the node project with _(npm init -y)_.
2.Create the structure of folders **MVC**.

*public
    -css
    -img
*src
    *-controlers
    *-dataBase
    *-router
    app.js
*views
    *-partials

3.Install the frameworks that we'll need to use, 
for the moment:
**express.**
**ejs as a template engine**
_(npm i express)_
_(npm i ejs)_
[Optional] we also can install nodemon as a dependecy (npm i nodemon) it help us to don't start the page every time that we make a change in our code. 
#### NOTE1: We can create **.gitignore** file so put into it the folder node_modules.

So our structure must see like this:

*node_modules
*public
    -css
    -img
*src
    *-controlers
    *-dataBase
    *-router
    app.js
*views
    *-partials

.gitignore
package-lock.json
package.json

#### NOTE2: Don't forget change the script onto package.json and also change the atribute main.


4.Require express and set the server:

a.Inside the app.js require express and set it through the variable app:  
-const express = require("express");
-const app = express();

b. Build the server through the method listen:
-app.listen(3000, () => {
  console.log("server running in the port 3000");
});

## Creating the route for the main page.

1.Onto **src** folder we need three folders:
a._controllers:_ inside it we create the controllers that contain the logic of the app.
b._router:_ inside it we can create the routes to the different views.
c._dataBase:_ inside it we can find the data fron json.file or data base.

*** process ***

.First: 
onto file called **mainRoute.js** we may require the express module and the route module 
_const express = require("express")_
_const router = express.Router()_
.Second:
[Optional] We can require the controller even though we haven't created it yet
_const controller = require("../controllers/mainController")_

.Third: 
create the route for the main page through the use of the router module
_router.get("/", controller.index)_ 

Fourth:
export routes _through module.exports = router_

## Create the controller for the main page.

.First:
we create the controller directly onto **module.exports** something like this
module.exports = {
  index: (req, res) => {
    res.render("home");
  },
};

## Setting the _app.js_ file

.First:
we need to set our public folder as a static
_app.use(express.static("public"))_

.Second:
We need to indicate to ejs that our views are onto the folder called views with these two lines
***app.set("views", path.join(__dirname, "../views"))***
***app.set("view engine", "ejs")***

.Third:
We need require the route
_const mainRoute = require("./router/mainRoute")_

.Fourth: 
We need to use the route/s that we've created previously through use method
_app.use(mainRoute)_
#### NOTE: The third and the fourth point is the process for all routes we've created.

# Read and process the data onto json file.

.First:
Onto _app.js_ we need to parse every data that the body bring us, through these two lines
***app.use(express.urlencoded({ extended: false }))***
***app.use(express.json())***

.Second:
Onto controller we need to indicate that we need to read the data onto json file.
a. Require **fs module**
b. Require **path mpdule**
c. Read the data onto json file through the line below
*const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../dataBase/products.json")))*

.Third:
We need to prepare the controller to show the data through the use of some method for instance
filter


Fourth:
onto index.ejs view or wathever name that we've used for the main page, we need to use the data through ejs tags.

Fifth:
We can also create the partials (head, header and footer).


**FINALLY: the process for create more routes and controllers is the same the only thing that change is the method used to process the route (get, post, put and delete)**

---End of the first commit.---

# Add and modifying users

#### To add

1.Create the json file for users and onto it create a user as a example.

2.create the route.

3.We need to change onto register form:
*The action.
*The method: to 'post'.

4.create the controller and:
a.Onto controller we need to indicate the whole path to the data using path module. 
b.Also we need the fs module.
c.We need to indicate from where come the data. So to do that:
*Create a variable that contain an object literal with the atributes that coincide with the name value onto register view and, brin the data for every atribute using the paremeter (req). Example _req.body.nombre_
*We need to write the data onto json file, then we need to transform it to json data format for instance:
*fs.writeFileSync(path.resolve(__dirname, "../dataBase/user.json"),JSON.stringify([...users, user], null, 2))*
*Using the parameter (res) we would redirect to main page again. Example _res.redirect('/')_