
\c atruidb /* Connect to database called "atruidb" */

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
    contactno VARCHAR

);


CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    orgname VARCHAR,
    description VARCHAR,
    location VARCHAR,
    fundraisers VARCHAR, /* Array containing fundraiser list to be modified to non varchar */
    email VARCHAR,
    website VARCHAR,
    contactno VARCHAR,
    contactperson VARCHAR
);


CREATE TABLE feed (
    id SERIAL PRIMARY KEY,
    orgname VARCHAR,
    description VARCHAR,
    datemade DATE
);

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