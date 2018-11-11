INSERT INTO users 
(id, eos_account, display_name, created_at, created_block, created_trx, created_eosacc)
VALUES
(1, 'eoslocalusra', 'Hassan K. Bazzi', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(2, 'eoslocalusra', 'Johnil Quezada', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb');

INSERT INTO assets 
(id, owner_id, display_name, subtitle, image_url, created_at, created_block, created_trx, created_eosacc) 
VALUES
(1, null, 'Nike', 'Air Jordan XV', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/qgcbpwv7copr5dqewoms/doernbecher-freestyle.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocal'),
(2, null, 'Nike', 'Air Max 270', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/cqlwyaiz2webvr92eeld/doernbecher-freestyle.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocal'),
(3, null, 'Nike', 'SB Dunk Low Pro', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/kgps3avsqrlsj2vymb0r/doernbecher-freestyle.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocal'),
(4, null, 'Nike', 'Zoom Fly Sp', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/v8vaxhzy3f1pvvggaxnz/doernbecher-freestyle.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocal'),
(5, null, 'Nike', 'Hotline', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/iiujkdofgqkcb6tnpmwp/hotline.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocal'),
(6, 1, 'Nike', 'Air Jordan III', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/bbl4kmhgylmi05liwry5/air-trainer-1.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(7, 1, 'Nike', 'Kyrie 5', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/hadl1r1fynawtxw4p7tw/taco-pe.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(8, 1, 'Nike', 'Air Force 270 Utility', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/lawymr3qb08ifiuwfhne/volt.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(9, 1, 'Nike', 'Air Max 270', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/wunrjsmtogueiw0get7h/volt.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(10, 1, 'Nike', 'Air Jordan XXXIII', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/gefo5ivg0qtaa0dy7yqu/visible-utility.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra'),
(11, 2, 'Nike', 'Air Max 97', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/egaurfk8369rby5zguew/black-metallic-gold.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb'),
(12, 2, 'Nike', 'Lebron 16', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/xngifgdelo5t5alqo10u/i-promise.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb'),
(13, 2, 'Nike', 'ACG Air Revaderchi', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/vcpuwkx0qbpe3r5fdzwq/dirt-dont-hurt.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb'),
(14, 2, 'Nike', 'Air Max Deluxe', 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bof7z8rpkdskjobpoauh/life-of-the-party.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb'),
(15, 2, 'Nike', 'Air Jordan I High Zip', 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/tfwbhr8re1wflriiysl3/utility-pack.jpg', CURRENT_TIMESTAMP, 0, 0, 'eoslocalusrb');

INSERT INTO offers
(id, requested_asset_id, offered_asset_id, offered_dollar_amount, offered_by_id, created_at, created_block, created_trx, created_eosacc)
VALUES
(1, 1, 11, 150, 2, CURRENT_TIMESTAMP, 0, 0, 'eoslocalusra');
