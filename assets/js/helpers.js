const id = (id) => { return document.getElementById(id); }
const cn = (name) => { return document.getElementsByClassName(name); }
const cl = (thing) => { console.log(thing); }

// Serialization the JSON to a string
const convert = (json) => { return JSON.stringify(json) };

// Retrieve the template data from the HTML and generating content
const retrieve = (node, data) => {
    let target = id(node),
        template = Handlebars.compile(target.innerHTML),
        html = template(data);
    return target.parentNode.replaceChild(document.createRange().createContextualFragment(html), target);
}

const fetcher = (url) => {
    async function getData() {
        const response = await fetch(url),
            data = await response.json();
        return data;
    } return getData();
}

export default function () {
    cl("Hello, world!");
}

export {
    id,
    cn,
    cl,
    convert,
    retrieve,
    fetcher
}