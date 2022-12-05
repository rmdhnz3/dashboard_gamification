-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Des 2022 pada 06.55
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db-gamification`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `badges`
--

CREATE TABLE `badges` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(125) NOT NULL DEFAULT '',
  `bp` int(2) NOT NULL,
  `desc` varchar(250) DEFAULT NULL,
  `status` int(2) NOT NULL DEFAULT 1,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `badges`
--

INSERT INTO `badges` (`id`, `name`, `img`, `bp`, `desc`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Berbagi Catatan I', '/badges/starting/bc.png', 50, 'Badge ini didapatkan setelah mencapai 50 badge point', 1, '2022-11-29', '2022-11-29'),
(2, 'Baca Materi I', '/badges/starting/bm.png', 50, 'Badge ini didapatkan setelah mencapai 50 badge point', 1, '2022-11-29', '2022-11-29'),
(3, 'Buat Rumus I', '/badges/starting/br.png', 50, 'Badge ini didapatkan setelah mencapai 50 badge point', 1, '2022-11-29', '2022-11-29'),
(4, 'Jawab Pertanyaan I', '/badges/starting/jp.png', 50, 'Badge ini didapatkan setelah mencapai 50 badge point', 1, '2022-11-29', '2022-11-29'),
(5, 'Kerjakan Soal I', '/badges/starting/ks.png', 50, 'Badge ini didapatkan setelah mencapai 50 badge point', 1, '2022-11-29', '2022-11-29'),
(6, 'Berbagi Catatan II', '/badges/active/bc.png', 100, NULL, 1, '2022-11-29', '2022-11-29'),
(7, 'Baca Materi II', '/badges/active/bm.png', 100, NULL, 1, '2022-11-29', '2022-11-29'),
(8, 'Buat Rumus II', '/badges/active/br.png', 100, NULL, 1, '2022-11-29', '2022-11-29'),
(9, 'Jawab Pertanyaan II', '/badges/active/jp.png', 100, NULL, 1, '2022-11-29', '2022-11-29'),
(10, 'Kerjakan Soal II', '/badges/active/ks.png', 100, NULL, 1, '2022-11-29', '2022-11-29'),
(11, 'Berbagi Catatan III', '/badges/profident/bc.png', 200, NULL, 1, '2022-11-29', '2022-11-29'),
(12, 'Baca Materi III', '/badges/profident/bm.png', 200, NULL, 1, '2022-11-29', '2022-11-29'),
(13, 'Buat Rumus III', '/badges/profident/br.png', 200, NULL, 1, '2022-11-29', '2022-11-29'),
(14, 'Jawab Pertanyaan III', '/badges/profident/jp.png', 200, NULL, 1, '2022-11-29', '2022-11-29'),
(15, 'Kerjakan Soal III', '/badges/profident/ks.png', 200, NULL, 1, '2022-11-29', '2022-11-29'),
(16, 'Berbagi Catatan IV', '/badges/expert/bc.png', 400, NULL, 1, '2022-11-29', '2022-11-29'),
(17, 'Baca Materi IV', '/badges/expert/bm.png', 400, NULL, 1, '2022-11-29', '2022-11-29'),
(18, 'Buat Rumus IV', '/badges/expert/br.png', 400, NULL, 1, '2022-11-29', '2022-11-29'),
(19, 'Jawab Pertanyaan IV', '/badges/expert/jp.png', 400, NULL, 1, '2022-11-29', '2022-11-29'),
(20, 'Kerjakan Soal IV', '/badges/expert/ks.png', 400, NULL, 1, '2022-11-29', '2022-11-29'),
(21, 'Beta', '', 0, 'test', 0, '2022-11-11', '0000-00-00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `user_point` int(11) NOT NULL DEFAULT 0,
  `bp_bc` int(11) NOT NULL DEFAULT 0,
  `bp_jp` int(11) NOT NULL DEFAULT 0,
  `bp_br` int(11) NOT NULL DEFAULT 0,
  `bp_bm` int(11) NOT NULL DEFAULT 0,
  `bp_ks` int(11) NOT NULL DEFAULT 0,
  `exp_point` int(11) NOT NULL DEFAULT 0,
  `status` int(2) NOT NULL DEFAULT 1,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `user_point`, `bp_bc`, `bp_jp`, `bp_br`, `bp_bm`, `bp_ks`, `exp_point`, `status`, `created_at`, `updated_at`) VALUES
(1, '', 1, 0, 0, 0, 0, 0, 100, 1, '2022-11-29', '2022-11-30'),
(3, 'Beta', 200, 0, 0, 0, 0, 0, 500, 0, '2022-11-30', '2022-11-30');

--
-- Trigger `user`
--
DELIMITER $$
CREATE TRIGGER `UserDate` BEFORE INSERT ON `user` FOR EACH ROW BEGIN
 SET NEW.created_at = NOW();
 SET NEW.updated_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `historyTrigger` AFTER UPDATE ON `user` FOR EACH ROW BEGIN
	if OLD.user_point<NEW.user_point
	THEN
INSERT INTO user_transaction(user_id,point_change,status,created_at,updated_at)
 VALUES(OLD.id,NEW.user_point-OLD.user_point,1,NOW(),NOW());
 	END IF;
 	
 
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_badges`
--

CREATE TABLE `user_badges` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL,
  `is_claimed` int(2) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_badges`
--

INSERT INTO `user_badges` (`id`, `user_id`, `badge_id`, `is_claimed`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, '2022-11-29', '2022-11-29'),
(2, 1, 3, 1, '2022-11-29', '2022-11-29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_transaction`
--

CREATE TABLE `user_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `point_change` int(11) NOT NULL,
  `status` int(2) NOT NULL DEFAULT 1,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_transaction`
--

INSERT INTO `user_transaction` (`id`, `user_id`, `point_change`, `status`, `created_at`, `updated_at`) VALUES
(116, 8, 1, 1, '2022-11-23', '2022-11-23'),
(117, 2, 200, 1, '2022-11-29', '2022-11-29'),
(118, 2, 400, 1, '2022-11-29', '2022-11-29'),
(119, 1, 200, 1, '2022-11-29', '2022-11-29'),
(120, 1, 400, 1, '2022-11-29', '2022-11-29'),
(121, 2, 400, 1, '2022-11-29', '2022-11-29'),
(122, 2, 1, 1, '2022-11-30', '2022-11-30'),
(123, 2, 1, 1, '2022-11-30', '2022-11-30'),
(124, 2, 1, 1, '2022-11-30', '2022-11-30'),
(125, 2, 1, 1, '2022-11-30', '2022-11-30'),
(126, 2, 1, 1, '2022-11-30', '2022-11-30'),
(127, 2, 1, 1, '2022-11-30', '2022-11-30'),
(128, 1, 1, 1, '2022-11-30', '2022-11-30'),
(129, 1, 2, 1, '2022-11-30', '2022-11-30'),
(130, 1, 1, 1, '2022-11-30', '2022-11-30'),
(131, 1, 1, 1, '2022-11-30', '2022-11-30'),
(132, 1, 1, 1, '2022-11-30', '2022-11-30'),
(133, 2, 1, 1, '2022-11-30', '2022-11-30'),
(134, 2, 1, 1, '2022-11-30', '2022-11-30'),
(135, 2, 1, 1, '2022-11-30', '2022-11-30'),
(136, 2, 1, 1, '2022-11-30', '2022-11-30'),
(137, 1, 1, 1, '2022-11-30', '2022-11-30'),
(138, 1, 1, 1, '2022-11-30', '2022-11-30'),
(139, 1, 199, 1, '2022-11-30', '2022-11-30');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `badges`
--
ALTER TABLE `badges`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_badges`
--
ALTER TABLE `user_badges`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_transaction`
--
ALTER TABLE `user_transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `badges`
--
ALTER TABLE `badges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `user_badges`
--
ALTER TABLE `user_badges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user_transaction`
--
ALTER TABLE `user_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
