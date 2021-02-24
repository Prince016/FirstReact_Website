
const fullname=['Prashant','sharma']

//  here are we are using the spread operator to concetinatie (jhodhna +) the two arrays 

const biodata=[1,...fullname,23,'male']

var [first,...remain]=fullname;
// console.log(first);
// console.log(remain);


// console.log(fullname);

// console.log(biodata);


// Adding the two objects 
const ob1={
    first:'hello',
    second:"World",
}

const ob2={
    id:1,
    ...ob1,
    name:'Prashant',
}

console.log(ob2);
