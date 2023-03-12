# Express.js CRUD API Documentation

This documentation provides an overview of the endpoints and functionalities of a CRUD API built with Express.js and the File System module. This API performs CRUD (Create, Read, Update, Delete) operations on a .json file that stores user data.

# Live Link

https://wild-red-snapper-kit.cyclic.app

Endpoints

- https://wild-red-snapper-kit.cyclic.app/users/random ---> getRandomUser ---> get
- https://wild-red-snapper-kit.cyclic.app/users/all ---> getAllUsers ---> get
- https://wild-red-snapper-kit.cyclic.app/users/save ---> saveUser ---> post
- https://wild-red-snapper-kit.cyclic.app/users/one/:id ---> getOneUser ---> get
- https://wild-red-snapper-kit.cyclic.app/users/update/:id ---> updateOneUser ---> patch
- https://wild-red-snapper-kit.cyclic.app/users/bulk-update ---> bulkUpdate ---> patch
- https://wild-red-snapper-kit.cyclic.app/users/delete/:id ---> deleteOneUser ---> delete

### Get a random user

GET /users/random
Returns a randomly selected user from the .json file.

### Get all users

GET /users/all
Returns all users from the .json file.

Optional Parameters
limit: Limits the number of users returned. For example, /users/all?limit=5 would return the first 5 users.
Save a user

### POST /users/save

Saves a new user to the .json file. The request body must include the following properties:

- id (string)
- gender (string)
- name (string)
- contact (string)
- address (string)
- photoUrl (string)

### Get one user

GET /users/one/:id
Returns a user with a specific id from the .json file.

### Update one user

PATCH /users/update/:id
Updates a user with a specific id in the .json file. The request body must include the properties to be updated.

### Bulk update users

PATCH /users/bulk-update
Updates multiple users in the .json file. The request body must include an array of ids and the properties to be updated.

### Delete one user

DELETE /users/delete/:id
Deletes a user with a specific id from the .json file.

Bonus Features

1. Optional parameters for the GET /users/all endpoint that allow the number of returned users to be limited.
2. Validation of request bodies for the POST /users/save, PATCH /users/update, and PATCH /users/bulk-update endpoints to ensure that all required properties are present.
3. Validation of id parameters in the GET /users/one/:id, PATCH /users/update/:id, and DELETE /users/delete/:id endpoints to ensure that the id exists in the .json file.

Conclusion
This API provides basic CRUD functionalities on a .json file for user data. The optional parameters, request body validation, and id validation add extra layers of functionality and security.
