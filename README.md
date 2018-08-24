## Requirements:
https://jsfiddle.net/3edrhf8s/24/

The project is based on simple structure provided by Create-React-App (https://github.com/facebook/create-react-app)

## Updated structure is the following:
```
src:
	- actions	// to collect actions
	- data
		- redux	// redux store
	- reducers	// to collect app reducers and root-reducer
	- site-modules	// app or site component
		- home	// like a Home or Index page but there are might be any others, like articles, drawers, forms and so on
			- components	// list of components for the pages
			- constants
			- fixtures	// to collect mock data for tests
			- pages	// each page  - > each route
			- routes // there are might be some routes so we should define pages for each of them
			- types	 // in case of Flow we can collect Data Type here and use it across files
			- utils	// string, Data, URl utils
		- shared	// for small components which might be used in any part of the app, like form elements, buttons, carousels
				//  it might be split into the same structure as home
		- stub	// to collect mock data (useful for tests)

  index.js	// Home page
```


## Hot to setup:

```sh
yarn

yarn start
```



------------------------
  Exercise instructions

  Given that I have a service that returns data like below, Create the necessary React components. The sample rendering is above ^

  Some specific guidelines:
  1. Provide ability where the service data paneltypes can be in a different order.
  2. Use Container Pattern to for maintinability.

  The goal is to show more of code organization than actually making it work. So pseudo code is fine.

*/

<!-- example output -->

<div class="marketing-content">
   <section class="panel"><!-- render hero here --></section>
   <section class="panel"><!-- render image grid here --></section>
   <section class="panel"><!-- render packages here --></section>
</div>
