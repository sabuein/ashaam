import defaultExport, { cl, convert, retrieve, fetcher } from "./helpers.js";
import employees from "../data/employees.json" assert { type: "json" }; // Object
import students from "../data/students.json" assert { type: "json" };
import users from "../data/users.json" assert { type: "json" };

//////////////////////////////////////////////////////////////////////////

defaultExport();
await fetcher("https://api.wheretheiss.at/v1/satellites/25544");

//////////////////////////////////////////////////////////////////////////

var e = employees,
    s = students,
    u = users;

cl(typeof e);
cl(e);
cl(typeof s);
cl(s);
cl(typeof u);
cl(u);
cl(typeof convert(e));
cl(convert(e));

//////////////////////////////////////////////////////////////////////////

const propertyNames = (data) => { return Object.keys(data) };
const propertyValues = (data) => { return Object.values(data) };
const entries = (data) => { return Object.entries(data) };

cl(propertyNames(u));
cl(propertyValues(u));
cl(entries(u));

//////////////////////////////////////////////////////////////////////////

const {firstName, lastName} = e.employees[0];
cl(firstName);
cl(lastName);

let firstEmployee = {
        first_name: employees.employees[1].firstName,
        last_name: employees.employees[1].lastName
    },
    secondEmployee = {
        first_name: employees.employees[2].firstName,
        last_name: employees.employees[2].lastName
    };


retrieve("location-one", firstEmployee);
retrieve("location-two", secondEmployee);

//////////////////////////////////////////////////////////////////////////