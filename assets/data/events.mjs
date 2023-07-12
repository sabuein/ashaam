"use strict";

import {
    Address,
    Venue,
    Organizer,
    Event
} from "objects";


const newAddress = (address) => {
    try {
        const {
            line1 = null,
            line2 = null,
            town = null,
            county = null,
            postcode = null,
            latitude = null,
            longitude = null,
            elevation = null
        } = address;
        return (new Address({ line1, line2, town, county, postcode, latitude, longitude, elevation }) || null);
    } catch (error) {
        console.error(error);        
    }
};

const newOrganizer = (organizer) => {
    try {
        const {
            name = null,
            email = null,
            phone = null,
            bio = null,
            facebook = null,
            instagram = null,
            website = null,
            logoURL = null
        } = organizer;
        return (new Organizer({ name, email, phone, bio, facebook, instagram, website, logoURL }) || null);
    } catch (error) {
        console.error(error);        
    }
};

const newEvent = (address = null, venue = null, organizer = null, event = null ) => {

    if (!address && !venue && !organizer && !event) {
        const addressX = newAddress({
            line1: "66 Westow Street",
            town: "London",
            county: "Greater London",
            postcode: "SE19 3AF",
            latitude: 51.4174447,
            longitude: -0.0845448,
            elevation: "17z"
        });

        const venueX = new Venue({
            name: "Phoenix Community Centre",
            address: addressX,
            phone: "020-8771-6023"
        });

        const organizerX = newOrganizer({
            name: "Crystal Palace Friends of Palestine (CPFP)",
            email: "crystalpalestinegroup@gmail.com",
            bio: "Crystal Palace Friends of Palestine (CPFP) was established to inform, educate and raise awareness about the Palestinian struggle in Crystal Palace, Penge and the surrounding areas. CPFP aims to inspire the local community to raise their voices against the occupation of Palestine by the apartheid, settler colonial State of Israel.",
            facebook: "https://www.facebook.com/groups/460727482378669",
            instagram: "https://www.instagram.com/cppalfriends/",
            website: "https://www.crystalpalacefriendsofpalestine.org/",
            logoURL: "./assets/data/images/crystalpalacefriendsofpalestine-logo.png"
        });

        return new Event({
            title: "Palestine at the Palace",
            descriptionHTML: `<p>&quot;Palestine at the Palace&quot; is an art and cultural event showcasing the talents and traditions of Palestine&period; The event features a diverse range of activities including art exhibitions, crafts, music, and food. It is scheduled to take place on Saturday, 2nd September 2023, from 11:00 am to 4:00 pm.</p><p>The event highlights the works of award-winning Palestinian artists through an exhibition, providing an opportunity to appreciate and purchase original artwork and prints. In addition to visual art, the event also showcases ceramics, embroidery, and homeware, displaying the traditional craftsmanship of Palestine.</p><p>Attendees can explore fair trade Palestinian produce, offering a variety of food and culinary delights that represent Palestinian cuisine. The event also includes a selection of unique jewelry items for those interested in adornments.</p><p>To enhance the cultural experience, live music performances are scheduled, featuring Palestinian musicians and creating an immersive atmosphere. Additionally, participants can engage in a raffle, providing an opportunity to win prizes and further support the event.</p><p>Overall, &quot;Palestine at the Palace&quot; aims to celebrate the rich art, crafts, music, and culinary traditions of Palestine while supporting Palestinian artists, artisans, and fair trade practices.</p>`,
            startDateTime: "2023-09-02T11:00:00Z",
            endDateTime: "2023-09-02T16:00:00Z",
            venue: venueX,
            organizer: organizerX,
            cost: "Children FREE, Adults £3",
            coverPhoto: "./assets/data/images/crystalpalacefriendsofpalestine-20230902.png",
            status: "active"
        });
    } else {
        const addressY = newAddress(address) || null;
        const venueY = new Venue({
            name: venue.name,
            address: address,
            phone: venue.phone
        });
        const organizerY = newOrganizer(organizer);
        return new Event({
            ...event,
            venue: venueY,
            organizer: organizerY
        });
    }
};

const init = () => {
    const events = [];
    for (let index = 0; index < 21; index++) events.push(newEvent().toString());
    return handleEventsResponse(events);
};

init();