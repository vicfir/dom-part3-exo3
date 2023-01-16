let myObject = {
    nom: 'nicolas',
    age: 18,
}

let myElements = Array.from(document.querySelector("div#object").children);
console.log(myElements);

let myElementProp = Object.entries(myObject);
console.log(myElementProp);

let count = 0;
for (const key in myObject) {
    myElements[count].innerText=`${myObject[key]}`;
    count++;
    console.log(myObject[key]);
}

