CREATE TABLE fundraisers (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description VARCHAR,
    location VARCHAR,
    datemade DATE,
    progress INTEGER check (progress between 0 and 100)
);

INSERT INTO fundraisers(title,description,location) VALUES ('Sample Title', 'Sample Description', "Manila");