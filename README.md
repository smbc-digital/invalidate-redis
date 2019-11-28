<h1 align="center">invalidate-redis</h1>
 
<div align="center">
  AWS Lambda function allowing removal of keys from Redis
</div>
 
<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://www.stockport.gov.uk">Stockport Council</a> and
  <a href="">
    contributors
  </a>
</div>
 
## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Philosophy](#philosophy)
- [Usage](#usage)
 
## Features
- __Easy invalidation:__ simple way to remove a value from Redis using the key

## Prerequisites
A `REDIS_URL` environment variable has to be set, providing the url to your Redis store. The default Redis port (6379) is used.
 
## Philosophy
We needed a simple, standalone solution to invalidate our Redis cache distributions. 

## Usage
Built to be used with AWS Lambda and API Gateway. 

Example request:
```json
{
  "Key": "your_key"
}
```

To manually send a request to trigger a invalidate request, the example request above is required along with a 'Header' value of key 'x-api-key' with the API Gateway key associated with the Enviroment you are targeting.

The API Gateway url is found at: APIs > invalidateRedis > Stages (The url will end with default/invalidaRedis{ENV})

The API Gateway API key is found at within AWS gateway.

Possible responses:
* __200 OK__: Successfuly deleted the key. Also returned when the key does not exist in the store.
* __500 Internal Server Error__: Error while carrying out the operation. Contains `error` property. 

## License
[MIT](https://tldrlegal.com/license/mit-license)
