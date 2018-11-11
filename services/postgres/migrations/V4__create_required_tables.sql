CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  eos_account TEXT NOT NULL,
  display_name TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  created_block BIGINT NOT NULL,
  created_trx TEXT NOT NULL,
  created_eosacc TEXT NOT NULL,
  _dmx_created_at TIMESTAMP DEFAULT current_timestamp NOT NULL
);

CREATE TABLE assets (
  id SERIAL PRIMARY KEY,
  owner_id integer REFERENCES users,
  display_name TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  created_block BIGINT NOT NULL,
  created_trx TEXT NOT NULL,
  created_eosacc TEXT NOT NULL,
  _dmx_created_at TIMESTAMP DEFAULT current_timestamp NOT NULL
);

CREATE TABLE asset_images (
  id SERIAL PRIMARY KEY,
  asset_id integer REFERENCES assets,
  url TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  created_block BIGINT NOT NULL,
  created_trx TEXT NOT NULL,
  created_eosacc TEXT NOT NULL,
  _dmx_created_at TIMESTAMP DEFAULT current_timestamp NOT NULL
);

CREATE TABLE offers (
  id SERIAL PRIMARY KEY,
  requested_asset_id integer REFERENCES assets NOT NULL,
  offered_asset_id integer REFERENCES assets NOT NULL,
  offered_dollar_amount NUMERIC(10, 2) NOT NULL,
  offered_by_id integer REFERENCES users NOT NULL,
  created_at TIMESTAMP NOT NULL,
  created_block BIGINT NOT NULL,
  created_trx TEXT NOT NULL,
  created_eosacc TEXT NOT NULL,
  _dmx_created_at TIMESTAMP DEFAULT current_timestamp NOT NULL
);