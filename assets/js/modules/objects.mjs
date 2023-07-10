"use strict";

const Address = class {
    #id = Math.round(Math.random() * Math.pow(2, 64));
    #line1;
    #line2;
    #town;
    #county;
    #postcode;
    #latitude;
    #longitude;
    #elevation;
    #addedAt = + Date.now();
    #updatedAt;
    #deletedAt = null;

    constructor(address) {
        this.#line1 = address.line1 || null;;
        this.#line2 = address.line2 || null;;
        this.#town = address.town || null;;
        this.#county = address.county || null;;
        this.#postcode = address.postcode || null;;
        this.#latitude = address.latitude || null;
        this.#longitude = address.longitude || null;
        this.#elevation = address.elevation || null;
        this.#updatedAt = address.updatedAt || null;
    }

    get line1() {
        return this.#line1;
    }

    get line2() {
        return this.#line2;
    }

    get town() {
        return this.#town;
    }

    get county() {
        return this.#county;
    }

    get postcode() {
        return this.#postcode;
    }

    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    get elevation() {
        return this.#elevation;
    }

    get googleMaps() {
        return `https://www.google.com/maps/@${this.latitude},${this.longitude},${this.elevation}`;
    }

    toString() {
        return {
            line1: this.line1,
            line2: this.line2,
            town: this.town,
            county: this.county,
            postcode: this.postcode,
            latitude: this.latitude,
            longitude: this.longitude,
            elevation: this.elevation,
            googleMaps: this.googleMaps
        };
    }
};

const Venue = class {
    #id = Math.round(Math.random() * Math.pow(2, 64));
    #name;
    #address;
    #phone;
    #email;
    #website;
    #addedAt = + Date.now();
    #updatedAt;
    #deletedAt = null;

    constructor(venue) {
        this.#name = venue.name || null;
        this.#address = venue.address.toString() || null;
        this.#phone = venue.phone || null;
        this.#email = venue.email || null;
        this.#website = venue.website || null;
        this.#updatedAt = venue.updatedAt || null;
    }

    get name() {
        return this.#name;
    }

    get address() {
        return this.#address;
    }

    get phone() {
        return this.#phone;
    }

    get email() {
        return this.#email;
    }

    get website() {
        return this.#website;
    }

    toString() {
        return {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            website: this.website,
        };
    }
};

const Organizer = class {
    #id = Math.round(Math.random() * Math.pow(2, 64));
    #name;
    #email;
    #phone;
    #bio;
    #facebook;
    #instagram;
    #website;
    #logoURL;
    #addedAt = + Date.now();
    #updatedAt;
    #deletedAt = null;

    constructor(organizer) {
        this.#name = organizer.name || null;
        this.#email = organizer.email || null;
        this.#phone = organizer.phone || null;
        this.#bio = organizer.bio || null;
        this.#facebook = organizer.facebook || null;
        this.#instagram = organizer.instagram || null;
        this.#website = organizer.website || null;
        this.#logoURL = organizer.logoURL || null;
        this.#updatedAt = organizer.updatedAt || null;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }

    get bio() {
        return this.#bio;
    }

    get facebook() {
        return this.#facebook;
    }

    get instagram() {
        return this.#instagram;
    }

    get website() {
        return this.#website;
    }

    get logoURL() {
        return this.#logoURL;
    }

    toString() {
        return {
            name: this.name,
            email: this.email,
            bio: this.bio,
            facebook: this.facebook,
            instagram: this.instagram,
            website: this.website,
            logoURL: this.logoURL
        };
    }
};

const Event = class {
    #id = Math.round(Math.random() * Math.pow(2, 64));
    #title;
    #descriptionHTML;
    #startDateTime;
    #endDateTime;
    #venue;
    #organizer;
    #coverPhoto;
    #status;
    #addedAt = + Date.now();
    #updatedAt;
    #deletedAt = null;

    constructor(event) {
        this.#title = event.title || null;
        this.#descriptionHTML = event.descriptionHTML || null;
        this.#startDateTime = event.startDateTime || null;
        this.#endDateTime = event.endDateTime || null;
        this.#venue = event.venue.toString() || null;
        this.#organizer = event.organizer.toString() || null;
        this.#coverPhoto = event.coverPhoto || null;
        this.#status = event.status || null;
        this.#updatedAt = event.updatedAt || null;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get descriptionHTML() {
        return this.#descriptionHTML;
    }

    get startDateTime() {
        return this.#startDateTime;
    }

    get endDateTime() {
        return this.#endDateTime;
    }

    get venue() {
        return this.#venue;
    }

    get organizer() {
        return this.#organizer;
    }

    get coverPhoto() {
        return this.#coverPhoto;
    }

    get status() {
        return this.#status;
    }

    toString() {
        return {
            id: this.id,
            title: this.title,
            descriptionHTML: this.descriptionHTML,
            startDateTime: this.startDateTime,
            endDateTime: this.endDateTime,
            venue: this.venue,
            organizer: this.organizer,
            coverPhoto: this.coverPhoto,
            status: this.status
        };
    }

};

export {
    Address,
    Venue,
    Organizer,
    Event
};