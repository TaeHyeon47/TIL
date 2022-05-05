//////////////////////////////////
///// Activating Strict Mode /////
//////////////////////////////////

// So strict mode is a special mode that we can activate in JavaScript, to write a secure JavaScript code.

// "use strict";
// So this statement here basically has to be the very first statement in the script.
// So if we have any code before this then strict mode will not be activated.
// Comments are allowed because JavaScript will just ignore them but no code.

// We actually can also activate strict mode, only for a specific function or a specific block.
// But I don't really see the point in doing that and so I always just use it at the beginning of each script
// and so I believe that you should do the same. So always just put strict mode in the beginning of your scripts
// and like that write more secure code. And when secure, I mean that strict mode makes it easier for us developers
// to avoid accidental errors. and that's because of 2 reasons.

// First, strict mode forbids us to do certain things
// Second, it will actually create visible errors for us in certain situations in which without strict mode
// JavaScript will simply fail silently without letting us know that we did a mistake.

// "use strict"; // 없으면 에러 메세지가 나오지 않지만, 있으면 에러메세지가 나온다.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive :D");

// 아래의 경우 예약어이기 때문에 사용이 되지 않는다.
// const interface = "Audio";
// const private = 534;
// const if = 23;
