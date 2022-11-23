import { id } from "./helpers.js";
import employees from "../data/employees.json" assert { type: "json" };
import students from "../data/students.json" assert { type: "json" };
import users from "../data/users.json" assert { type: "json" };

// Convert JSON array into text
// let text = JSON.stringify(employees);

// Retrieve the template data from the HTML and generating content
const makeContent = (elementId, contextObject) => {

    var frag = document.createDocumentFragment();

    (function () {
        for (var x = 0; x < 3; x++) {
            var li = document.createElement("li");
            li.innerHTML = "List item " + x;
            frag.appendChild(li);
        }
    })();

    console.log(frag.childNodes);

    let source = id(elementId),
        template = Handlebars.compile(source.innerHTML),
        html = template(contextObject);

    // father.replaceChild(parser.parseFromString(html, "text/html"), source);

    source.parentNode.replaceChild(document.createDocumentFragment(html), source);
}

let template = "entry-template",
    context = {
        first_name: employees.employees[1].firstName,
        last_name: employees.employees[1].lastName
    };

makeContent(template, context);


var moreContext = {
    first_name: employees.employees[1].firstName,
    last_name: employees.employees[1].lastName
};