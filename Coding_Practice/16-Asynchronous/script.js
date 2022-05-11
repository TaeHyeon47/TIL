"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

////////////////////////////////////////////////////
////// Our First AJAX Call: XMLHttpRequest /////////
////////////////////////////////////////////////////

// Now in JavaScript, there are actually multiple ways of doing AJAX calls.
// But we're gonna start with the most old school one.

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   // https://github.com/public-apis/public-apis 접속
//   // CORS은 Yes 또는 Unknown으로 표기
//   // CORS stands for Cross Origin Resource Sharing. without CORS, we cannot access a third party API from our own code.
//   // I have to find API ENDPOINTS.
//   // The endpoint is essentially just another name for the URL that we need.
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send(); // Okay, so this will now send off the request to 'https://restcountries.com/v3.1/name/korea'
//   //data = request.send(); we couldn't do And the reason why we cannot do this is because the result is simply not there yet, right.
//   // So this AJAX call that we just send off here is being done in the background while the rest of the code keeps running. And so this is the asynchronous.

//   console.log(request.responseText); // responseText is of course only gonna be set once the data has actually arrived, right.

//   // once send off the request then fetches the data in the background is done,
//   // It will emit the load event. And so as soon as the data arrives this callback function here will be called.
//   request.addEventListener("load", function () {
//     console.log(this.responseText); // the this keyword inside of this function is the request, right?
//     // So we could also do request, but let's just use the this keyword.
//     // And then the response is in the property response text.
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//    <img class="country__img" src="${data.flag}" />
//    <div class="country__data">
//      <h3 class="country__name">${data.name}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row"><span>👫</span>${(
//        +data.population / 1000000
//      ).toFixed(1)}</p>
//      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//    </div>
//  </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal"); // by calling these functions here twice,
// getCountryData("usa"); // we will basically have two AJAX calls happening at the same time.

//////////////////////////////////////
////// Welcome to Callback Hell //////
//////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
   <img class="country__img" src="${data.flag}" />
   <div class="country__data">
     <h3 class="country__name">${data.name}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row"><span>👫</span>${(
       +data.population / 1000000
     ).toFixed(1)}</p>
     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
   </div>
 </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     //Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("usa");

// // callback hell is when we have a lot of nested callbacks
// // in order to execute asynchronous tasks in sequence.

// setTimeout(() => {
//   console.log(`1 second passed`);
//   setTimeout(() => {
//     console.log(`2 second passed`);
//     setTimeout(() => {
//       console.log(`3 second passed`);
//       setTimeout(() => {
//         console.log(`4 second passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Since ES6 there is actually a way of escaping callback hell
// by using something called promises.

////////////////////////////////
////// Consuming Promises //////
////////////////////////////////

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// the fetch function can take in like an object of options as well.
// that the fetch function immediately returned a promise.
// const request = fetch("https://restcountries.com/v2/name/portugal`");
// console.log(request);

// And so to handle this fulfilled state, we can use the then method
// that is available on all promises. we can call the then method.
// Now into the then method, we need to pass a callback function that we want to be executed
// as soon as the promise is actually fulfilled.

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // json method here is a method that is available on all the response objects that is coming.
//       // that this json function itself, is actually also an asynchronous function. it will also return a new promise.
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     }); // this function will actually receive one argument
//   // and that argument is the resulting value of the fulfilled promise.
//   // So let me call it response here because this is the response of an AJAX call in this case.
// };

// getCountryData("portugal");

// // So in order to be able to actually read this data from the body,
// // We need to call the json method on the response.

// const getCountryData2 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // calling the fetch function like this, will then immediately return a promise. So as soon as we start the request
//     // in the beginning, this promise is of course still pending because the asynchronous task of getting the data is still running in the background.
//     // the promise will then be settled and either in a fulfilled
//     // So assume that the promise will be fulfilled and that we have a value available to work with.
//     // And so to handle this fulfilled state, we can use the then method that is available on all promises.
//     // Now into the then method, we need to pass a callback function that we want to be executed
//     // as soon as the promise is actually fulfilled. So as soon as the result is available.

//     .then((response) => response.json()) // this function will actually receive one argument once it's called by JavaScript
//     // and that argument is the resulting value of the fulfilled promise.

//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//     });
// };

// getCountryData("portugal");

////////////////////////////////
////// Chaining Promises ///////
////////////////////////////////

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json()) // this json function itself is actually also an asynchronous function.
//     // And so what that means, is that it will also return a new promise.
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // Country 2
//       // We will be able to chain a new then method on the result of this then method.
//       // "then" method always returns a promise,
//       // return fetch(`https://restcountries.eu/rest/v2/alpha${neighbour}`);
//       return 23;
//     })
//     .then((data) => alert(23));
// };

// getCountryData("portugal");

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
    });
};

getCountryData("portugal");

// ////////////////////////////////////////////////////
// ////// Asynchronous JavaScript, AJAX and APIs //////
// ////////////////////////////////////////////////////

// // We've been writing so far in the course has been synchronous code.
// // The execution of thread is part of the execution context that actually execute the code in computer's CPU

// // Most Code is synchronous;
// // Synchronous code is executed line by line.
// // Each line of code waits for previous line to finish;

// // Now this can create problems when one line of code takes a long time to run.

// // Long-running operations block(alert) code execution.
// const p = document.querySelector(".p");
// p.textContent = "My name is Jonas!";
// alert("Text set!"); // Only after we click Okay, the window disappears and the next line can run.
// p.style.color = "red";

// // most of the time synchronous code is fine and makes perfect sense.
// // But imagine that execution would have to wait for example, for a five second timer to finish.
// // Because meanwhile, nothing on the page would work during these five seconds.

// const p = document.querySelector(".p");
// setTimeout(function () {
//   // the callback is actually asynchronous. but Callback functions alone do not make code asynchronou!
//   p.textContent = "My name is Jonas!"; // Executed after all other code
// }, 5000);
// p.style.color = "red";

// Asynchronous code is executed after a task that runs in the "background" finishes;
// // Asynchronous code is non-blocking.
// // Execution doesn't wait for an asynchronous task to finish its work.

// // And so that's where asynchronous code comes into play.
// // So this example contains the five-second timer

// // asynchronous programming is all about coordinating the behavior of our program over a certain period of time.
// // And this is essential to understand.
// // So asynchronous literally means not occurring at the same time. And so that's what asynchronous programming is all about.

// // callback functions alone do not make code asynchronous.

// const img = document.querySelector(".dog");
// img.src = "dog.jpg"; // img.src에서 .src는 asynchronous로 일어난다.
// // So setting the source attribute of any image is essentially loading an image in the background while the rest of the code can keep running.
// // And this makes sense, right? Imagine that it's a huge image, we wouldn't want our entire code to wait for the image to load.
// // And that's why setting the source attribute was implemented in JavaScript in an asynchronous way.
// // Now, once the image has finished loading, a load event will automatically be emitted by JavaScript.
// // And so we can then listen for that event in order to act on it.
// // Listening for the load event is exactly what we do here
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });
// p.style.width = "300px";
// // So here we use add event listener and to register a callback function for the load event.
// // So just like in the previous example, we provide a callback function that will be executed
// // Once the image has been loaded and not right away.
// // because again, all this code is non-blocking.

// // 다시 정리
// // Then once the image is completely loaded, it's displayed on the webpage and the load event is admitted.
// // And since we're listening for that event, our callback function is finally executed.

// // So once more, we deferred an action into the future making the code asynchronous and non-blocking.

// // There's just one more important thing that I need to mention which is the fact that event listeners alone
// // do not make code asynchronous. just like callback functions alone do also not make code asynchronous.

// // For example, an event listener listening for a click on a button is not doing any work in the background.
// // It's simply waiting for a click to happen, but it's not doing anything. so there is no asynchronous behavior involved at all.

// // Now what makes this code example asynchronous is simply the fact that the image is loading asynchronously in the background,
// // but not the fact that we are listening for the load events to happen.

// // So what matters is the asynchronous behavior of a task, like running a timer or loading an image.

// // Online API is essentially an application running on a web server,
