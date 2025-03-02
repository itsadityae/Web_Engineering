//Class : 2 (not complete)

const person6 = {
    firstname : "Nidhi",
    lastname : "vasireddy",
    fullname : function(){
        console.log (${this.firstname} ${this.lastname});
    }
}

const person7 = {
    firstname : "Aditya",
    lastname : "Eslavath",

    // how to access the person6 function in this object?
    fullname  : person6.fullname(),
}

person7.fullname();
