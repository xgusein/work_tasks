// class Students {
//     constructor(name,age,groupId){
//         this.name = name;
//         this.age = age;
//         this.groupId = groupId;
//     }
// }

let students = [];

const addStudents = (ev) =>{
    ev.preventDefault();
    let student = {
        id: Date.now(),
        name: document.getElementById('title').value,
        age: document.getElementById('yr').value,
    }
    students.push(student);
    document.forms[0].reset();

    console.warn('added' , {students} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '.\n' + JSON.stringify(students, '\t', 2);
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addStudents)
})