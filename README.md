# TestCrossCookies

You must first edit the host file with the following values:

`127.0.0.1 firstdomain.gre`

`127.0.0.1 seconddomain.gre`

`127.0.0.1 thirddomain.gre`


To run this project, you need to run the scripts in different windows of the terminal at the root of the TestCrossCookies directory:
`node first.js` and `node second.js`.


Then in the browser you need to go to URL: `http://firstdomain.gre:8000/welcome` and press a button *Set state*
