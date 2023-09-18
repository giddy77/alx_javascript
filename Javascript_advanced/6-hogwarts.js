const studenthogwarts = (function () {
    let privatescore = 0;
    let name = null;

    function changescoreby(points) {
        privatescore += points;
    }

    return {
        setname: function (newname) {
            name = newname;
        },
        rewardstudent: function () {
            changescoreby(1);
        },
        penalizestudent: function () {
            changescoreby(-1);
        },
        getscore: function () {
            return name + ': ' + privatescore;
        },
    };
})();


/* create a variable called harry that is an instance of studenthogwarts */
let harry = Object.create(studenthogwarts);

harry.setname('Harry');
/* reward the student four times */
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();

console.log(harry.getscore()); 


let draco = Object.create(studenthogwarts);

draco.setname('draco');

draco.rewardstudent();
draco.penalizestudent();
draco.penalizestudent();
draco.penalizestudent();

console.log(draco.getscore());