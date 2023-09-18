function welcomeMessage(fullName){
    return function(){
        alert('welcome ' + fullName);
    }
}
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('alex');
let fred = welcomeMessage('fred');

guillaume();
alex();
fred();