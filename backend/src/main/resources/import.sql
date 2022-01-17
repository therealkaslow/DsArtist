INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');

INSERT INTO tb_artist(score, count, title, image) VALUES (4.5, 2, 'Tz da Coronel', 'https://i.imgur.com/FQYCbQV.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5.3, 3, 'Pop Smoke', 'https://i.imgur.com/mlUx1Lt.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, 'XXXTentacion', 'https://i.imgur.com/DemZeje.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (4, 0, 'Gunna', 'https://i.imgur.com/C3apBfR.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, 'Kodak Black', 'https://i.imgur.com/7SEQG1O.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, 'Teto', 'https://i.imgur.com/KUBONGy.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (3, 0, 'Chefin', 'https://i.imgur.com/Yr3kriN.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (4, 0, 'Mateca', 'https://i.imgur.com/xelUJHu.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, 'Young Thug', 'https://i.imgur.com/nE01y9U.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, '21 Savage', 'https://i.imgur.com/U9yaHtA.jpg');
INSERT INTO tb_artist(score, count, title, image) VALUES (5, 0, 'Bruxo', 'https://i.imgur.com/yM6fDnp.jpg');

INSERT INTO tb_score(artist_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(artist_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(artist_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(artist_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(artist_id, user_id, value) VALUES (2, 3, 4.0);