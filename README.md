# Cat's API

Cat's API is a Node.JS script that creates JSON api interface to get a list of cats available for adoption, search for cats by name, age, sex, breed and colour and post adoption rquests.
Curent Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

### Dependencies

- **express** version 4.17.1 or above
- **express-validator** version 6.13.0 or above
- **body-parser** version 1.19.0 or above
- **cors** version 2.8.5 or above
- **mysql** version 2.18.1 or above
- **mailgun-js** version 0.22.0 or above

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- HOSTNAME - site's hostname (with protocol and port if not http/https)
- PORT - site's port
- MYSQL_HOSTNANE - Hostname for MySQL server
- MYSQL_PORT - MySQL server port
- MYSQL_USERNAME - MySQL username
- MYSQL_PASSWORD - MySQL password
- MYSQL_DATABASE - MySQL database name
- MAILGUN_API_KEY - Mailgun account API Key
- MAILGUN_DOMAIN_NAME - Mailgun allowed domain name

## Configure database

Use server tools to setup database, user and password. A sample database is provided in cats.sql file 


## Running the project

    $ yarn start

## Simple build for production

    $ yarn build

---

## API specification:

```
ROUTE: /options (GET) - returns the list of breeds, min age and max age for all un-adopted cats
    PARAMETERS:
        none
    RESPONSE:
        {
            result: true,
            breeds: [...] (Array of breed names),
            min_age: int (Min age of cats),
            max_age: int (Max age of cats)
        }
```
---

```
ROUTE: /list (GET) - returns the list of all cats
    PARAMETERS:
        limit - amount of results to return (int, 0...100, default 20, optional)
        from - offset first X results (int, 0..., default 0, optional)
    RESPONSE:
        array of cat objects: [{
            id: int (Cat's ID),
            name: string (Cat's name),
            breed: string (Cat's breed),
            color: string (Cat's colour),
            gender: string (Cat's sex),
            age: string (Cat's age),
            photo: string (Cat's photo URL),
            description: text (Cat's description/notes)
        }]
```
---
```
    ROUTE: /search (POST) - performs a search in cats data and return result. For a successful search at least one of
                            these parameters should be passed: name, min_age, max_age, breed, gender, color
    PARAMETERS:
        name - cat's name (string, optional)
        breed - cat's breed (string, optional)
        gender - cat's sex (string, optional)
        color - cat's color (string, optional)
        min_age - cat's min age (int, 0..., default 0, optional)
        max_age - cat's max age (int, 0..., default 0, optional)
        limit - amount of results to return (int, 0...100, default 20)
        from - offset first X results (int, 0..., default 0)
    RESPONSE:
        array of cat objects: [{
            id: int (Cat's ID),
            name: string (Cat's name),
            breed: string (Cat's breed),
            color: string (Cat's colour),
            gender: string (Cat's sex),
            age: string (Cat's age),
            photo: string (Cat's photo URL),
            description: text (Cat's description/notes)
        }]
```
---

```
ROUTE: /adopt (post) - Save cat as adopted, sends email to admin
    PARAMETERS:
        id: int - cat ID in database,
        first_name: string - First name of the adopter,
        last_name: string - Last name of the adopter,
        email: string - Email of the adopter,
        phone: string - Phone of the adopter,
        message: string - Message from the adopter,
    RESPONSES:
        Successful adoption:
        {
            result: true,
            id: int - ID of the cat,
        }
        Unsuccessful adoption
        {
            result: true,
            id: int - ID of the cat,
            error: Reason for failure
        }
```
---

## Version history

1.0 - Initial build
1.1 - Added adopted field and functionality
1.2 - Added documentation and code cleanup
