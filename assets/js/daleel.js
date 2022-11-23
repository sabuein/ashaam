import { id } from "./helpers.js";
import employees from "../data/employees.json" assert { type: "json" };
import students from "../data/students.json" assert { type: "json" };
import users from "../data/users.json" assert { type: "json" };

// Convert JSON array into text
let employeesText = JSON.stringify(employees);

console.log("employees: ", employees);
console.log("typeof 'employees' is: ", typeof employees);
console.log("users: ", users);
console.log("typeof 'users' is: ", typeof users);
console.log("students: ", students);
console.log("typeof 'students' is: ", typeof students);

// Display results
if (employeesText) {
    console.log(employeesText);
    console.log(typeof employeesText);
    let contentElement = id("content#1");
    // (contentElement.innerText = employeesText.slice(1, 12)) && (console.log(contentElement));
    contentElement.innerHTML += `<p>${employees["employees"][1].firstName}</p>`;
    contentElement.innerHTML += `<p>${employees["employees"][1].lastName}</p>`;
}