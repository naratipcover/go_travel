'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
// Route.on('/').render('home');
Route.get("/login", "AuthController.login");
Route.post("/login","AuthController.loginUser");

Route.get("/register", "AuthController.register");
Route.post("/register","AuthController.registerUser");
// Route.post("/api/register","AuthController.registerUser");




Route.get("/home", "AuthController.home");
Route.get("/loginProject", "AuthController.loginProject");

Route.get("/comment", "AuthController.comment");
Route.post("/comment", "AuthController.commentUser");

Route.get("/post", "AuthController.post");
Route.get("/regionNorthern", "AuthController.regionNorthern");
Route.get("/regionSouthern", "AuthController.regionSouthern");
Route.get("/regionCentral", "AuthController.regionCentral");
Route.get("/regionIsaan", "AuthController.regionIsaan");
Route.get("/index", "AuthController.index");




