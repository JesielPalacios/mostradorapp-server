# MostradorApp-server
Server Back-End para modificar datos de usuarios mediante CRUD de los empleados de una empresa.

# Getting Started with npm i express mysql cors

This project was bootstrapped with [npm i express mysql cors](https://expressjs.com/es/) and [nodemon](https://nodemon.io/) with [npm i nodemon -D](https://www.npmjs.com/package/nodemon).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: For making requests to the diferents End-Points!**

### `GET:`
http://localhost:3000/
http://localhost:3000/1
http://localhost:3000/2


### `POST:`
{
    "id": 0,
    "name": "test2",
    "salary": 100000
}

{
    "id": 0,
    "name": "test",
    "salary": 3456345656345
}

{
    "id": 0,
    "name": "test2",
    "salary": 100000
}


### `PUT:`
http://localhost:3000/5

{
    "name": "test2",
    "salary": 10
}

### `DELETE:`
http://localhost:3000/
http://localhost:3000/1
http://localhost:3000/2
