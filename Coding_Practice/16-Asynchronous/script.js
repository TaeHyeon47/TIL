"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

////////////////////////////////////////////////////
////// Our First AJAX Call: XMLHttpRequest /////////
////////////////////////////////////////////////////

// Now in JavaScript, there are actually multiple ways of doing AJAX calls.
// But we're gonna start with the most old school one.

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // https://github.com/public-apis/public-apis 접속
  // CORS은 Yes 또는 Unknown으로 표기
  // CORS stands for Cross Origin Resource Sharing. without CORS, we cannot access a third party API from our own code.
  // I have to find API ENDPOINTS.
  // The endpoint is essentially just another name for the URL that we need.
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send(); // Okay, so this will now send off the request to 'https://restcountries.com/v3.1/name/korea'
  //data = request.send(); // we couldn't do // And the reason why we cannot do this is because the result is simply not there yet, right.
  // So this AJAX call that we just send off here is being done in the background while the rest of the code keeps running. And so this is the asynchronous.

  console.log(request.responseText); // responseText is of course only gonna be set once the data has actually arrived, right.

  // once send off the request then fetches the data in the background is done,
  // it will emit the load event. And so as soon as the data arrives this callback function here will be called.
  request.addEventListener("load", function () {
    console.log(this.responseText); // the this keyword inside of this function is the request, right?
    // So we could also do request, but let's just use the this keyword.
    // And then the response is in the property response text.
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
   <img class="country__img" src="${data.flag}" />
   <div class="country__data">
     <h3 class="country__name">${data.name.common}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row"><span>👫</span>${(
       +data.population / 1000000
     ).toFixed(1)}</p>
     <p class="country__row"><span>🗣️</span>${data.languages}</p>
     <p class="country__row"><span>💰</span>${data.currencies}</p>
   </div>
 </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("korea"); // by calling these functions here twice,
getCountryData("usa"); // we will basically have two AJAX calls happening at the same time.

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

// // Asynchronous code is executed after a task that runs in the "background" finishes;
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
