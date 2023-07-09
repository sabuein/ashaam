const id = (id) => { return document.getElementById(id); }
const cn = (name) => { return document.getElementsByClassName(name); }
const cl = (thing) => { console.log(thing); }

// Serialization the JSON to a string
const convert = (json) => { return JSON.stringify(json) };

// Retrieve the template data from the HTML and generating content
const retrieve = (element, data) => {
    let template = Handlebars.compile(element.innerHTML),
        html = template(data);
    return element.innerHTML = html;
}

// const { full_name, original_city } = ;
const inject = (data, i) => {
    return {
        title: data[i].title,
        full_name: data[i].full_name,
        original_city: data[i].original_city,
        twitter: data[i].social_media.twitter
    }
};

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
    inject,
    fetcher
}