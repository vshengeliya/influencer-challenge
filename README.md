All of the user data is stored in the `db.json` file. To access this
data using a JSON server, run the following two commands:

   * `npm install -g json-server`
   * `json-server --watch db.json`
   
This will create a server storing all of our lost toy data with restful routes
at `http://localhost:3000/users`.

To open the App use command in another tab:
 * `open index.html`.

 For testing purposes:

 1. Subscribe a new user - use any email;
 2. Subscribe a referred user - use any email and only valid code(aka DEF, HELLO, etc.)
 3. Get a referral count for a particular User. - use valid email (example1@google.com, example2@google.com etc.)
 4. Who has referred this email - user an email from emailedReffered list (example-reffered1@google.com, example-reffered2@google.com, etc.)
 5. Who has a particular user referred - use valid email (example1@google.com, example2@google.com etc.)

 Feel free to reach out with any questions.

 Created by Veronika Dodda.