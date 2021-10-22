# Simple E-mail Backend
![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)
## Description
This is a simple e-mail backend that will send an email to your specified destination on a POST request. Uses Express and Nodemailer
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Questions](#questions)
## Installation
Requires Node.js. Clone the repository, then inside the directory on your terminal run either `npm install` or `npm i`.

Create a **.env** file with the following vars:
- PORT
- DESTINATION
- USER
- PASSWORD

PORT will be the port that your dev server runs on,

DESTINATION will be the email that the server sends to,

USER is the full gmail account that you wish to use to send emails, and

PASSWORD is the password for the sending account.
## Usage
Start your favorite API testing app, and send a POST request to <u>http://localhost:PORT</u> with a JSON object following the template provided by testmail.json. If you configured your app correctly according to the installation instructions, you should see a new email!
## Deployment
You can very easily deploy this app to Heroku. Commit your changes, then run `heroku create` (Make sure you're signed in to Heroku!). Then run `git push heroku main`. If the build succeeded, go to your new app on Heroku, then in the app's settings, add the **.env** vars to the app's Config Vars. You do not need to include the PORT var, however. Try making a POST request to your Heroku app's URL!
## Questions
If you have any questions about this project, you can find me on GitHub as [jcpickens0215](https://github.com/jcpickens0215).


## License

Licensed under the [MIT License](https://mit-license.org/)
, copyright 2021 by Justin Pickens
____

Badges provided by [Shields.io](https://shields.io/)