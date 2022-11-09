
\c atruidb /* Connect to database called "atruidb" */

CREATE TABLE fundraisers (
    id SERIAL PRIMARY KEY,
    image VARCHAR,
    organizer VARCHAR,
    title VARCHAR,
    description VARCHAR,
    location VARCHAR,
    datemade VARCHAR,
    donationgoal NUMERIC,
    currentprogress NUMERIC,
    duration INTEGER,
    contactname VARCHAR,
    contactno VARCHAR
);


CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    image VARCHAR,
    orgname VARCHAR,
    description VARCHAR,
    location VARCHAR,
    fundraisers VARCHAR,
    email VARCHAR,
    website VARCHAR,
    contactno VARCHAR,
    contactperson VARCHAR
);


CREATE TABLE feeds (
    id SERIAL PRIMARY KEY,
    orgname VARCHAR,
    title VARCHAR,
    description VARCHAR,
    datemade VARCHAR
);

CREATE TABLE userData (
    id SERIAL PRIMARY KEY UNIQUE,
    uniqueid VARCHAR UNIQUE,
    email VARCHAR UNIQUE,
    level FLOAT,
    rankpoints FLOAT,
    totaldonations VARCHAR,
    role VARCHAR
);


CREATE TABLE leaderboard (
    donator VARCHAR,
    amountdonated NUMERIC   
);


CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    donor VARCHAR,
    fundraiser VARCHAR,
    datemade VARCHAR,
    amount NUMERIC
);