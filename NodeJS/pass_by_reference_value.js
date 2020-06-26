
// pass by value
function change(b) {
    b = 2;
}

let a = 1;
change(a);
console.log(a);

// pass by reference
function changeObject(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

let c = {};
c.prop1 = {};
changeObject(c);
console.log(c);