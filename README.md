# any orangutan! [![Build Status](https://travis-ci.org/jstarmx/any-orangutan.svg?branch=master)](https://travis-ci.org/jstarmx/any-orangutan) [![Coverage Status](https://coveralls.io/repos/github/jstarmx/any-orangutan/badge.svg?branch=master)](https://coveralls.io/github/jstarmx/any-orangutan?branch=master)

## Contents
* [How to use](#how-to-use)
* [Design choices](#design-choices)
* [Challenges](#challenges)
* [New technologies](#new-technologies)
* [Additional features](#additional-features)

## How to use
The page is available to use here: https://jstarmx.github.io/any-orangutan

You can also view it by loading `docs/index.html` directly in a browser, although doing that you will not get access to its offline functionality (more on that later).

To run the page on a local server you can do:
```
$ yarn install
$ yarn dev
```

And to run the test suite you can do:
```
$ yarn test
```

## Design choices
I've been using React a lot recently, both at home and at work and I really like it, it makes rendering complex components using data very intuitive and elegant. I've also been getting used to using Redux and it has similar appeal, an elegant way to hold and update an application's state. So upon reading the brief, these technologies seemed to be a perfect fit straight away.

One of the benefits of using Redux came when I got to the stage of storing the 'favourites' locally, so that they'd still be there upon reloading the page. It meant I had a nice simple store object that I could sync to the browser's `localstorage`, and then use that as the page's initial state when it reloads in the future.

I also really like using ES2015+ Javascript syntax where ever possible, it can make code much more concise and readable than it might have been when written in ES5, and by extension is quicker to write as well. Webpack is a powerful tool for compiling that and all other front end assets, and has lots of nice built-in or easily integrated features like the dev server, running linters against all files that are changed, different production environment modes etc. I have a default Webpack setup that I like to use on all new projects, so again using that here made sense.

Finally I believe unit testing is really important, so I wrote tests for all of my application code as I was going along. The test suite includes snapshot tests for
React components as well as regular unit tests.

## Challenges
One of the challenges that took the most work to solve was integrating Redux, and in particular the functionality to add the Flickr API script to the page using it. Initially I had just coded the script tag straight into the HTML page and attached the callback function to the window, which was fine. But I wanted it to be a Redux action so that I could have an initial 'empty' state, and then update the state with the response from the Flickr end point. So integrating that into the Redux life cycle suddenly became quite tricky. Previously I've use the native fetch API in Javascript, but the public Flickr feed doesn't allow that to be used (as far as I could tell).

After a period of Googling I found a method that worked, which was to use a Javascript promise and resolve it when the data came back from the end point (or reject it if there was an error). Asynchronous actions also make Redux a bit more complex, requiring use of the `thunk` middleware and the store's dispatcher, so getting all that to work was a bit fiddly but I got there in the end.

Another of the main challenges I faced was writing full test coverage. In some cases, like writing tests for components or reducers, it was quite straightforward. But other aspects of testing were more difficult, again particularly testing asynchronous functions and promises. Also testing some of the Redux code was not easy, I didn't want to fall into the trap of testing Redux's own functionality, but I wanted to ensure that my code that uses Redux was tested. Fortunately the Redux docs are pretty good and through some trial and error I was able to get to a solution, in particular I found the `redux-mock-store` library quite useful, which I hadn't come across before.

## New technologies
Something I've read a lot about and wanted to try for a while, but not got around to it, is service workers. One of my main focuses at the moment in terms of what I want to learn personally and apply to my work is progressive enhancement and accessibility, and making websites functional whilst offline is an important part of that. So the brief's invitation to use some cool new browser features was a great opportunity to try that out. Webpack makes integrating service workers pretty easy, which is a great way to start using them but of course there's tons more for me to dig into in the future.

This also ties really nicely into storing the Redux state in `localstorage`. The combination means that if you disconnect from the internet after loading the page, you can refresh and it still loads a fully functional page, remembering your favourites and allowing you to continue adding/removing them. If you then reconnect to the internet it will also reconnect to Flickr and refresh the image feed if its been updated.

One idea I had was to store the images received from Flickr in the service worker cache. Images are cached pretty well by browsers anyway, so you can normally still access them while offline, but adding them to the service worker would give additional control over being able to continue to serve them to users. Unfortunately I didn't quite have time to try that but it would be a nice future enhancement.

The other new browser feature this project gave me the opportunity to try was CSS Grid. In the end I only needed a very simple implementation of it to achieve what I wanted, but I could see straight away how quick and easy it was to get a two dimensional grid working on the page. The dream! Again there's loads more for me to dig into but it was nice to get a taste of it. This works in most new browsers - the latest versions of Chrome, Firefox and Safari all support it.

## Additional features
An additional feature I was keen to add in was status messages. Again this ties neatly into using Redux, using actions to update the status of the app. So there is a loading status and an error status, the latter of which appears when offline or there is some other problem connecting to the Flickr endpoint.

![Loading status](./img/loading.png 'Loading status')
![Error status](./img/error.png 'Error status')
