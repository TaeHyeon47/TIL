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

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // This will retrun a promise.
//     .then(function (a) {
//       // All promises we can call the "then" method that is available on all promises.
//       console.log(a);
//       return a.json(); // This here will be a new promise
//     })
//     .then(function (b) {
//       console.log(b);
//       renderCountry(b[0]);
//     });
// };

// getCountryData("portugal");

// Now into the "then" method, we need to pass a callback function
// that we want to be executed as soon as the promise is actually fulfilled.
// So, This function will actually receive one argument once it's called by JavaScript
// and that argument is the resulting value of the fulfilled promise.

// In order to be able to read 'data' from the 'body'
// We need to call the json method on the response.
// Json is a method that is available on all responses of the fetch method.
// The problem here is that this 'json' function itself is actually also an asynchronous function.
// Json will also return a new promise.

////////////////////////////////
////// Chaining Promises ///////
////////////////////////////////

// const getCountryData1 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return 23;
//     })
//     .then((data) => alert(data));
// };

// getCountryData1("portugal");

// Instead of the callback hell
// We have what we call a flat chain of promises.
const getCountryData1 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); // So always return to promise
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
};

// getCountryData1("portugal");
getCountryData1("korea");

// ////////////////////////////////////////////////////
// ////// Asynchronous JavaScript, AJAX and APIs //////
// ////////////////////////////////////////////////////
