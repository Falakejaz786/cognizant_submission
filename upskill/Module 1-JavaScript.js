/* ===========================
1. JavaScript Basics
=========================== */

console.log(
"Welcome to the Community Portal"
);

window.onload=function(){

alert(
"Page Fully Loaded"
);

renderEvents();

loadEventsAsync();

};

/* ===========================
2. Data Types & Operators
=========================== */

const eventName=
"Music Festival";

const eventDate=
"2025-08-20";

let seats=50;

console.log(
`${eventName} on ${eventDate}`
);

seats--;

/* ===========================
3. Conditionals & Loops
=========================== */

const eventList=[

{
name:"Music Festival",
category:"Music",
seats:10
},

{
name:"Workshop on Baking",
category:"Workshop",
seats:5
},

{
name:"Old Event",
category:"Music",
seats:0
}

];

eventList.forEach(event=>{

if(event.seats>0){

console.log(
event.name
);

}

});

function safeRegister(){

try{

if(seats<=0){

throw new Error(
"No Seats Available"
);

}

seats--;

}

catch(error){

console.error(
error.message
);

}

}

/* ===========================
4. Functions & Closures
=========================== */

function addEvent(event){

eventList.push(event);

}

function registerUser(name){

console.log(
`${name} registered`
);

}

function filterEventsByCategory(
category,
callback
){

const result=
eventList.filter(

event=>
event.category===category

);

callback(result);

}

function createCounter(){

let count=0;

return function(){

count++;

return count;

};

}

const registrationCounter=
createCounter();

/* ===========================
5. Objects & Prototypes
=========================== */

class Event{

constructor(
name,
category,
seats
){

this.name=name;
this.category=category;
this.seats=seats;

}

}

Event.prototype
.checkAvailability=
function(){

return this.seats>0;

};

const sampleEvent=
new Event(
"Community Meet",
"Workshop",
20
);

console.log(
Object.entries(
sampleEvent
)
);

/* ===========================
6. Arrays & Methods
=========================== */

eventList.push({

name:"Art Show",
category:"Workshop",
seats:12

});

const musicEvents=
eventList.filter(

event=>
event.category==="Music"

);

const formatted=
eventList.map(

event=>
`${event.name}`

);

console.log(
formatted
);

/* ===========================
7. DOM Manipulation
=========================== */

const container=
document.querySelector(
"#eventsContainer"
);

function renderEvents(){

container.innerHTML="";

eventList.forEach(event=>{

if(event.seats<=0)
return;

const card=
document.createElement("div");

card.className=
"event-card";

card.innerHTML=`

<h3>${event.name}</h3>

<p>
Category:
${event.category}
</p>

<p>
Seats:
${event.seats}
</p>

<button
onclick="registerForEvent('${event.name}')">

Register

</button>

`;

container.appendChild(card);

});

}

function registerForEvent(
eventName
){

alert(
`Registered for ${eventName}`
);

registrationCounter();

}

/* ===========================
8. Event Handling
=========================== */

document
.querySelector(
"#categoryFilter"
)
.onchange=function(){

const category=
this.value;

if(category==="All"){

renderEvents();

return;

}

filterEventsByCategory(

category,

events=>{

container.innerHTML="";

events.forEach(event=>{

const card=
document.createElement("div");

card.className=
"event-card";

card.innerHTML=
event.name;

container.appendChild(card);

});

}

);

};

document
.querySelector(
"#searchInput"
)
.addEventListener(

"keydown",

function(){

const search=
this.value.toLowerCase();

container.innerHTML="";

eventList

.filter(event=>

event.name
.toLowerCase()
.includes(search)

)

.forEach(event=>{

const card=
document.createElement("div");

card.innerHTML=
event.name;

container.appendChild(card);

});

}

);

/* ===========================
9. Async JS
=========================== */

function loadEvents(){

fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(response=>
response.json()
)

.then(data=>{

console.log(
data
);

})

.catch(error=>{

console.error(
error
);

});

}

async function loadEventsAsync(){

const loading=
document.getElementById(
"loading"
);

loading.style.display=
"block";

try{

const response=
await fetch(

"https://jsonplaceholder.typicode.com/posts"

);

const data=
await response.json();

console.log(
data.slice(0,3)
);

}

catch(error){

console.error(
error
);

}

finally{

loading.style.display=
"none";

}

}

/* ===========================
10. Modern JS
=========================== */

function greet(
name="Guest"
){

return `Hello ${name}`;

}

const firstEvent=
eventList[0];

const {

name,
category

}=firstEvent;

const clonedEvents=
[...eventList];

/* ===========================
11. Forms
=========================== */

document
.getElementById(
"registrationForm"
)

.addEventListener(

"submit",

function(event){

event.preventDefault();

const form=
this.elements;

const name=
form.name.value;

const email=
form.email.value;

const selected=
form.event.value;

let errors=[];

if(name==="")
errors.push(
"Name Required"
);

if(email==="")
errors.push(
"Email Required"
);

if(selected==="")
errors.push(
"Select Event"
);

const errorDiv=
document.getElementById(
"formErrors"
);

if(errors.length){

errorDiv.innerHTML=
errors.join("<br>");

return;

}

errorDiv.innerHTML="";

submitRegistration({

name,
email,
selected

});

}

);

/* ===========================
12. AJAX / Fetch API
=========================== */

function submitRegistration(
user
){

console.log(
"Submitting",
user
);

setTimeout(

()=>{

fetch(

"https://jsonplaceholder.typicode.com/posts",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify(
user
)

}

)

.then(response=>
response.json()
)

.then(data=>{

document
.getElementById(
"result"
)

.innerHTML=

"Registration Successful";

console.log(
data
);

})

.catch(()=>{

document
.getElementById(
"result"
)

.innerHTML=

"Registration Failed";

});

},

1000

);

}

/* ===========================
13. Debugging
=========================== */

console.log(
"Debugging Enabled"
);

console.log(
eventList
);

/* ===========================
14. jQuery
=========================== */

$("#registerBtn").click(

function(){

$(".event-card")
.fadeOut(300)
.fadeIn(300);

}

);

console.log(

"React/Vue Benefit: Better component-based UI management."

);
