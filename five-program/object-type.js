// let userClass : {classId : number, className : string, classActive : boolean}
// userClass = {
//     classId : 121,
//     className : "english",
//     classActive : true,
// }
var userClass;
userClass = [];
var class1 = {
    classId: 121,
    className: "english",
    classActive: true,
};
var class2 = {
    classId: 120,
    className: "physich",
    classActive: false,
};
userClass.push(class1, class2);
console.log(userClass);
