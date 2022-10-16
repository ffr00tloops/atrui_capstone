CREATE TABLE fundraisers (
    id SERIAL PRIMARY KEY,
    organizer VARCHAR
    title VARCHAR,
    description VARCHAR,
    location VARCHAR,
    datemade DATE,
    donationamount MONEY,
    duration INTEGER
    contactname VARCHAR,
    contactno VARCHAR,

);


CREATE TABLE organizations {
    id SERIAL PRIMARY KEY,
    orgname VARCHAR,
    description VARCHAR,
    location VARCHAR,
    fundraiser VARCHAR,
    email VARCHAR,
    website VARCHAR,
    contactno VARCHAR,
    contactperson VARCHAR,
    website VARCHAR
};

INSERT INTO fundraisers(title,description,location) VALUES ('Sample Title', 'Sample Description', "Manila");


CREATE TABLE userData (
    id SERIAL PRIMARY KEY,
    uniqueid VARCHAR,
    email VARCHAR,
    level FLOAT,
    rankpoints FLOAT,
    totaldonations VARCHAR,
    role VARCHAR
);