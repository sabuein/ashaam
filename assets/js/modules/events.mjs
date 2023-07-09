"use strict";

const fetchEventsData = () => {
    const script = document.createElement("script");
    script.setAttribute("src", "http://example.com/ashaam/data/events?callback=handleEventsJSONPResponse");
    script.setAttribute("type", "text/javascript");
    window.document.head.appendChild(script);
};

const handleEventsJSONPResponse = (data) => {
    // Handle the retrieved JSON data
    console.log(data);
};

export {
    fetchEventsData,
    handleEventsJSONPResponse
}