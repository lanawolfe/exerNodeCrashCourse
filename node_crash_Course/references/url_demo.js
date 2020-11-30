const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized Url
console.log(myUrl.href);

//host (root domain)
console.log(myUrl.host);
//host name
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('123', 'abc');
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));