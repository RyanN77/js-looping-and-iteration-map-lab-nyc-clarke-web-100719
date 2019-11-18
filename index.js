// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(name) {return name.toLowerCase()});
}

function nameToAttributes(drivers){
    return drivers.map(function (full_name) {
        let a = full_name.split(" ");
        console.log(a[0])
        var b = {firstName: a[0], lastName: a[1]};
        return b
    })
}

function attributesToPhrase(drivers){
    return drivers.map(function (object) {
        return(`${object.name} is from ${object.hometown}`)
    })
}