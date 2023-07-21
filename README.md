
# [(MVC) The Tech Blog](https://github.com/fondofhats/tech-blog)
  
  ![GitHub](https://img.shields.io/github/license/fondofhats/tech-blog?style=plastic)
  
  ![Most recent commit](https://img.shields.io/github/last-commit/fondofhats/tech-blog)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fondofhats/tech-blog)

## Description

  A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. This application is an example of the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Documentation](##Documentation)
* [Contribute](##Contribute)
* [Questions](##Questions)
  
## Installation

Installation is a process of installing the dependencies required.
Intialize node package manager and then run the following commands;  
`npm install express express-handlebars express-session sequelize mysql2 bcrypt connect-session-sequelize`


## Usage

 In order to use the application, first ensure that MySQL is installed in your environment.\
 Then, from the project root folder enter the sql shell and run the following command:\
`source db/schema.sql`\
Exit the sql shell and return to the command line still within your root project folder.\
Run the following commands:\
`npm run seed`\
`npm start`

## Documentation

### Demonstration

#### Screenshot

![Screenshot of the Application](tech-blog.png?raw=true "Screenshot of the Application")
### Link to the application running on Heroku: [The Tech Blog](https://foh-tech-blog.herokuapp.com/)


## License

  **Licensed under the MIT License.**

 MIT License

Copyright (c) 2020 (ORM)E-commerce Back End

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions  

Email Michael Giddings with any support questions at [mikegiddings@gmail.com](mailto:mikegiddings@gmail.com)\
or visit my [GitHub Homepage](https://github.com/fondofhats).
  
