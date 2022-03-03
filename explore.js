

// const brandError = document.getElementById('brand-existence');
// console.log(brandError);

/*====>
ReferenceError: document is not defined
    at Object.< anonymous > (C: \Main Projects\browser - api\explore.js: 3: 20)
    at Module._compile(internal / modules / cjs / loader.js: 1085: 14)
    at Object.Module._extensions..js(internal / modules / cjs / loader.js: 1114: 10)
    at Module.load(internal / modules / cjs / loader.js: 950: 32)
    at Function.Module._load(internal / modules / cjs / loader.js: 790: 12)
    at Function.executeUserEntryPoint[as runMain](internal / modules / run_main.js: 76: 12)
    at internal / main / run_main_module.js: 17: 47
    */


// Note: 1.Document Object Module(DOM) is part of Browser Object Module(BOM)...
//       2. Only works in Browser

// Document files are Simple Objects:- 
// Example: 

const student = {
    name: 'Abul Bashar',
    Age: 23,
    Job: 'Web developer',
    makeMoney: function (source) {
        console.log(this.name, 'wants to earn through', source, 'as early as possible')
    }
}

student.makeMoney('wordpress');
//====> Abul Bashar wants to earn through wordpress as early as possible

document.getElementById('brand-existence');


// Resources:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction
