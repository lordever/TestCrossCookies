# TestCrossCookies

You must first edit the host file with the following values:

`127.0.0.1 firstdomain.gre`

`127.0.0.1 seconddomain.gre`

`127.0.0.1 thirddomain.gre`


To run this project, you need to run the scripts in different windows of the terminal at the root of the TestCrossCookies directory:
`node first.js` and `node second.js` and `node third.js`.


Then in the browser you need to go to URL: `http://firstdomain.gre:8000/welcome` and press a button *Set state*
While pressing the button through the iFrame, cookies are saved to the domain of seconddomain.gre. After moving to the `http://thirddomain.gre:4005/welcome` page the cookies are saved on this page using iFrame and `postMessage`
