const getEvent = () => {
    return {
        line1: "Arena Way",
        line2: "The Arena Way",
        town: "London",
        county: "Greater London",
        postcode: "E10 7LZ",
        latitude: "40.5418366",
        longitude: "-1.5418366",
        elevation: "18z",
        venueName: "Salaheddin AbuEin",
        venuePhone: "07930120661",
        organizerName: "Salaheddin AbuEin",
        organizerEmail: "sabuein@gmail.com",
        organizerBio: "A modal dialog is a special type of pop-up box on a web page: a pop-up that interrupts the user to focus on itself. There are some valid use cases for popping up a dialog, but great consideration should be made before doing so. Modal dialogs force users to focus on specific content, and, temporarily at least, ignore the rest of the page.",
        organizerFacebook: "https://www.facebook.com/ashaamuk",
        organizerInstagram: "https://www.instagram.com/ashaamuk/",
        organizerWebsite: "https://sabuein.github.io/",
        organizerLogoURL: "https://www.rapid-is.co.uk/wp-content/uploads/2018/08/rapis-is-logo.png",
        eventTitle: "James Blunt: The Who We Used to Be Tour",
        descriptionHTML: "Dialogs can be either modal (only the content in the dialog can be interacted with) or non-modal (it's still possible to interact with content outside of the dialog). Modal dialogs are displayed on top of the rest of the page content. The rest of the page is inert and, by default, obscured by a semi-transparent backdrop.",
        startDateTime: "2023-09-16",
        endDateTime: "2023-09-30",
        eventCost: "Under 14s must be accompanied by an adult over 18.",
        eventCoverPhotoURL: "https://www.yorkshire.com/wp-content/uploads/2023/09/James-Blunt-The-Who-We-Used-to-Be-Tour-at-First-Direct-Arena-Leeds.jpeg",
        eventStatus: "active",
    };
};

const init = () => handleEventsResponse([getEvent()]);

init();