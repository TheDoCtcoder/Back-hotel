class clientDTO {
    id;
    lastname;
    firstname;
    mail;
    country;
    phone;


    constructor(id, lastname, firstname, mail, country, phone) {
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.mail = mail
        this.country = country
        this.phone = phone
    }
}

module.exports = clientDTO