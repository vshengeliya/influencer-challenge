All of the user data is stored in the `db.json` file. To access this
data using a JSON server, run the following two commands:

   * `npm install -g json-server`
   * `json-server --watch db.json`
   
This will create a server storing all of our lost toy data with restful routes
at `http://localhost:3000/users`.

