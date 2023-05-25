#  Task Details :

This is test task for posting an article and multiple comments on an article.


### Prerequisites

To run locally:

* Make sure you have installed nodeJS.


## Getting Started

- To install all the modules, run the following command:

  `npm install`

- To start, just run the following command:

  `npm start`


### Installing TypeScript

- To install TypeScript run the following command:

  `npm install typescript`


## REST API

### Request

`POST /addition`

    POST /article HTTP/1.1
    Host: localhost:3000
    Content-Type: application/json 
    {
      "num1" : 5.2,
      "num2" : 500
    }

### Response

    {
      "data": {
          "sum": 494.8
      },
      "resCode": 200,
      "message": "Success"
    }

## Built With

* [Node](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.


