-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2023 at 05:22 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furation_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `imeage` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `imeage`) VALUES
(35, 'Bhagavad Gita', 100, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743028/1_zn4vab.jpg'),
(36, 'Ramayana', 90, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743028/2_wytbby.jpg'),
(38, 'Indian polity', 80, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/5_epdwwy.jpg'),
(45, 'Indian History', 70, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/3_tesukm.jpg'),
(46, 'Dictionary', 50, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/8_jitylo.jpg'),
(47, 'APJ Abdul Kalam', 50, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/6_wkj5j3.jpg'),
(48, 'Astrology', 90, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/7_ecsltu.jpg'),
(49, 'indian Economy', 70, 'https://res.cloudinary.com/djq16mbrr/image/upload/v1687743029/4_wms4l5.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
