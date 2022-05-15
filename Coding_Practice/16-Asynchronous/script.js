"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

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

// const renderCountry = function (data, className = "") {
//   const html = `<article class="country ${className}">
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
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

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
// const getCountryData1 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); // So always return to promise
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"));
// };

// // getCountryData1("portugal");

// btn.addEventListener("click", function () {
//   getCountryData1("portugal");
// });

// ////////////////////////////////////////
// ////// Handling Rejected Promises //////
// ////////////////////////////////////////

// there are two ways of handling rejections
// the first one is to pass a second callback function into the then method.
// Secend, we can handle all the errors no matter where they appear in the chain right at the end of the chain by adding a catch method.
// besides then and catch there is also the finally method.

// catch
// So errors basically propagate down the chain until they are caught,
// and only if they're not caught anywhere then we get that Uncaught error
// 캐치문도 결국 프로미스를 리턴한다. 그래서 아래의 마지막 finally가 실행되는 것이다.

// finally
// No matter if the promise is fulfilled or rejected this callback finally function that we define here
// is gonna be called always. So that's the difference between the other two.
// then의 경우 프로미스가 성공(fulfilled)한 경우에만 콜되고
// catch의 경우에는 프로미스가 실패(rejected)한 경우에만 콜되지만
// finally는 그런거 상관 없이 항상 호출된다!
// And one good example of that is to hide a loading spinner

// 에러 - 네트워크가 연결되어 있고, 잘못된 국가명을 입력했을 때
// the fetch promise only rejects when there is no internet connection,
// but with a 404 error like this which is not a real error
// But anyway with this 404 the fetch promise will still get fulfilled.
// So there is no rejection and so our catch handler cannot pick up on this error.
// It does pick up on this other error so in this one here,
// but that's not the one that we actually want to handle.
// In this case we really want to tell the user that no country was found with this name.
// 인터넷 연결이 끊기지 않는 이상 프로미스는 항상 fulfilled 상태가 된다.
// 다른 유형의 에러가 반환되고 내가 원하는 에러를 뱉어 내지는 않는다.
// 또한 fetch function이 reject로 반환 되지도 않는다.

// const getCountryData1 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       (response) => response.json()
//       // (err) => alert(err) // We can also pass in a second callback for error
//       // then 메소드에 두번째 콜백함수로 오류를 잡는 방법은 비효율 적이다.
//     )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); // So always return to promise
//     })
//     .then(
//       (response) => response.json()
//       // (err) => alert(err)
//     )
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       // chatch를 사용하면 chain의 어디서 오류가 발생하든 모두 관리할 수 있다.
//       console.error(`${err} 🥲🥲🥲`);
//       renderError(`Something went wrong 🥲🥲 ${err.message}. Try again `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // getCountryData1("portugal");

// btn.addEventListener("click", function () {
//   getCountryData1("asdasd");
// });

//////////////////////////////////////
////// Throwing Errors Manually //////
//////////////////////////////////////

const getJSON = function (url) {
  fetch(url).then();
};

const getCountryData1 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      console.log(response);

      // We create the new error by using again, "Error" constructor function, basically,
      // and then we pass in a message, which is gonna be the error message,
      // then we use the throw keyword here, which will immediately terminate the current function. So just like return does it.
      // throw는 return과 같이 즉시 함수를 종료한다.
      // throw Error를 통해 프로미스는 즉각적으로 reject 되어진다. (없으면 reject는 이루어지지 않음..)

      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = "asdasd";
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); // So always return to promise
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }

      return response.json();
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 🥲🥲🥲`);
      renderError(`Something went wrong 🥲🥲 ${err.message}. Try again `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData1("korea");
});

// ////////////////////////////////////////////////////
// ////// Asynchronous JavaScript, AJAX and APIs //////
// ////////////////////////////////////////////////////
