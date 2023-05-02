
# Liblab's minimalist lightweight Lord of the Rings Node.js SDK
Note: This SDK is based on [The Lotr One API v2](https://github.com/gitfrosh/lotr-api)

## Installation

```sh
npm i @afirdousi/liblab-lotr-sdk
```
### Authentication

To use ALL the features of the Liblab's LOTR SDK, you need to provide an `accessToken`. 
#### How to get access token?
Get access token for free on [One API](https://the-one-api.dev/sign-up) by signing up.
SDK's current version offers access to `Movie` and `Quote`interfaces for which you will need to provide an `accessToken`.

Note: Future versions  will have other interfaces available including `Book`, `Character`, `Chapter` etc.

### Quick Start

```js
import { LiblabLotr } from '@afirdousi/liblab-lotr-sdk';

const client = new LiblabLotr('<YOUR_ACCESS_TOKEN>');
client.movies();

// We will use this client object for all examples below
```

### Supported Entity and Methods

The current limited version only supports following entities:

* Movie
* Quote

Each supported entity supports 2 methods 
1. get by ID
```js
client.movies();
client.quotes();
```
2. get list

```js
client.movies('5cd95395de30eff6ebccde57'); // queries the Hobbit series
client.quotes('5cd96e05de30eff6ebcce810'); 
```
3. additional referencial methods are available on movie

```js
// to get all quotes for a movie
getQuotes(movieID: string, query?: Query) 
```

Quick notes:
* All methods return Promises.
* The get list method's response supports sorting, filtering and pagination. You can use any combination of these. See details below

### Example of using sort, filter and pagination

```js
client.movies({
    page: 1,
    limit: 5, 
    sort: { by: 'runtimeInMinutes', direction: 'asc' },
    filters: [
        lotrClient.filter('name')
            .matches('The Hobbit Series')
    ]
})

client.quotes({
    filters: [
        lotrClient.filter('movie')
            .matches('5cd95395de30eff6ebccde5d')
    ]
})
```
