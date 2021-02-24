
<p id ="showdata"> </p>

const studentdata = [
    { id: 1, name: 'Sharma' },
    { id: 2, name: 'Prashant' },

];

const newdata = studentdata.map((cvalue) => {
    return `My name is ${cvalue.name} `;
});

console.log(newdata);

document.getElementById('showdata').innerHTML
