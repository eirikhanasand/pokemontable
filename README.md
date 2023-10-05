## Pokemon table

### About the application
This pokemon fetch application is built using React with the TypeScript template.
It optimizes everything client side, with prefetching to make sure the content 
is always ready to be served when it is needed. The application only caches the
information it actually uses, the rest is thrown away instantly.

### About browser testing:
The application was built using Safari and Chrome on a MacBook Pro. You may
therefore encounter less ideal styling of default components on Windows / Linux
as I have no way of testing these. Media / screen specific styling has been used
to ensure that the application scales correctly on all screen dimensions.

### Start the application:
#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test the application:
#### `npm test`

Launches the test runner in the interactive watch mode. There are tests for the
page entry point, and for each of the utilization functions. The rest is assumed
to work if these tests are passed.

### Build the application:
### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the 
best performance. You can then serve the production build by running the 
following command:

### `serve -s build`
