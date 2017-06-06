# any orangutan!

## Design choices
I've been using React a lot recently, both at home and at work, and I really like it. I feel it makes rendering complex components using data very intuitive and elegant. I've also been getting used to using Redux and it has similar appeal, an elegant way to hold and update an application's state. So upon reading the brief it made a lot of sense to use these technologies.

One of the benefits of using Redux came when I got the stage of storing the "favourites" locally so that they'd still be there after reloading the page. It meant I had a nice simple store object that I could sync to the browser's `localstorage`, and then use that as the page's initial state when it reloads.

I've also been using Webpack and ES2015+ syntax regularly for a while, so again, it made sense to use those here too.

Finally I believe unit testing is really important so I wrote tests for all of my application code as I was going along. The codebase includes snapshot tests for
React components as well as regular unit tests.

## Challenges
One of the challenges that took the longest to solve was integrating Redux, and in particular the functionality to add the Flickr API script to the page. Initially I had just coded it straight into the HTML page and attached the callback function to the window, that was fine. But I wanted it to be a Redux action so that I could have an initial state of no images, and then update the state with the response from the Flickr end point. So integrating that into the Redux life cycle suddenly became quite tricky. Previously I've use the native fetch API in Javascript, but the Flickr feed API doesn't allow that to be used (as far as I could tell).

After a period of Googling I found a method that worked, which was to use a Javascript promise and resolve it when the data came back from the end point (or reject it if there was an error). Asynchronous actions also make Redux more complex, requiring use of the `thunk` middleware and the store's dispatcher, so getting all that to work was a bit fiddly but I got there in the end.

Another of the main challenges I faced was writing a full suite of tests. In some cases, like writing tests for components or reducers it was quite straightforward. But other aspects of testing were more difficult, again particularly testing asynchronous functions and promises. Also testing some of the Redux code was not easy, I didn't want to fall into the trap of testing Redux's own functionality, but I wanted to ensure that my code that uses Redux was tested. Fortunately the Redux docs are pretty good and I was able to get to a solution, in particular `redux-mock-store` was quite useful.

## New technologies
Something I've read a lot about and wanted to try for a while, but not had the time, is service workers. One of my main focuses at the moment in terms of my learning is progressive enhancement and making websites functional whilst offline is an important part of that. So the brief's invitation to use some cool new browser features was a great opportunity to try that out. Webpack makes integrating service workers pretty easy, which is a great way to start using them but there's tons more for me to dig into in the future.

This also ties really nicely into storing the Redux state in `localstorage`. The combination means that if you disconnect from the internet after loading the page, you can refresh and it still loads a fully functional page, remembering your favourites and allowing you to continue adding/removing them.

One idea I had was to store the images received from Flickr in the service worker cache. I didn't quite get that far although images are cached pretty well by browsers anyway, so you can normally still access them while offline.

The other new browser feature it gave me the opportunity to try was CSS Grid. In the end I only needed a really simple implementation of it to achieve what I wanted, but I could see straight away how quick and easy it was to get a two dimensional grid working on the page. The dream! Again there's loads more for me to dig into but it was nice to get a taste of it. This works in most new browsers - the latest versions of Chrome, Firefox and Safari all support it.

## Additional features
Another thing I wanted to add in was status messages. Again this ties neatly into using Redux, using actions to update the status of the app. So there is a loading status and an error status, which appears when offline or there is some other problem connecting to the Flickr endpoint.

![Loading status](./img/loading.png 'Loading status')
![Error status](./img/error.png 'Error status')
