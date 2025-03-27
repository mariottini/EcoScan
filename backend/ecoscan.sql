-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 27, 2025 alle 14:23
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecoscan`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `advice`
--

CREATE TABLE `advice` (
  `id_advice` int(11) NOT NULL,
  `text` text NOT NULL,
  `id_trash` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `advice`
--

INSERT INTO `advice` (`id_advice`, `text`, `id_trash`) VALUES
(1, 'Prima di buttarlo, assicurati che sia pulito! Il cartone sporco di cibo non può essere riciclato e deve essere smaltito nell’indifferenziato. Se possibile, scegli alternative riutilizzabili come contenitori in vetro o acciaio.', 1),
(2, 'Riduci il consumo di plastica usando una borraccia riutilizzabile. Se proprio devi usare bottiglie di plastica, schiacciale prima di gettarle per ridurre il volume nei bidoni di raccolta!', 2),
(3, 'Se si rompe, avvolgilo bene prima di buttarlo per evitare che qualcuno si ferisca. Valuta l’uso di bicchieri in vetro temperato, più resistenti, o in materiali biodegradabili quando sei fuori casa.', 3),
(4, 'Riutilizzala! Molte bottiglie di vetro possono essere riportate nei negozi che praticano il vuoto a rendere. In alternativa, riciclale correttamente e fai attenzione a non gettarle nei rifiuti generici.', 4),
(5, 'Cerca di ridurre lo spreco alimentare pianificando meglio i pasti e conservando correttamente il cibo. Se hai scarti organici, pensa al compostaggio: può trasformarli in fertilizzante naturale!', 5),
(6, 'Invece di buttarle, usale per il compostaggio o pacciamatura in giardino: aiutano a mantenere il terreno umido e arricchirlo di sostanze nutritive.', 6),
(7, 'Riciclare una lattina permette di risparmiare fino al 95% dell’energia necessaria per produrne una nuova! Schiacciale prima di buttarle per ottimizzare lo spazio nei bidoni.', 7),
(8, 'Evita quelle usa e getta! Porta con te un set riutilizzabile quando mangi fuori casa. Se hai posate in metallo che non usi più, donale o riciclale correttamente negli appositi centri di raccolta.', 8);

-- --------------------------------------------------------

--
-- Struttura della tabella `calendar`
--

CREATE TABLE `calendar` (
  `id_calendar` int(11) NOT NULL,
  `day` enum('lunedì','martedì','mercoledì','giovedì','venerdì','sabato','domenica') NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_week` int(11) NOT NULL,
  `id_city` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `calendar`
--

INSERT INTO `calendar` (`id_calendar`, `day`, `id_category`, `id_week`, `id_city`) VALUES
(1, 'venerdì', 3, 1, 2),
(2, 'sabato', 2, 1, 2),
(3, 'lunedì', 1, 2, 2),
(4, 'martedì', 2, 2, 2),
(5, 'mercoledì', 4, 2, 2),
(6, 'venerdì', 3, 2, 2),
(7, 'sabato', 2, 2, 2),
(8, 'lunedì', 1, 3, 2),
(9, 'martedì', 2, 3, 2),
(10, 'mercoledì', 4, 3, 2),
(11, 'venerdì', 3, 3, 2),
(12, 'sabato', 2, 3, 2),
(13, 'lunedì', 1, 4, 2),
(14, 'martedì', 2, 4, 2),
(15, 'mercoledì', 4, 4, 2),
(16, 'venerdì', 3, 4, 2),
(17, 'sabato', 2, 4, 2),
(18, 'lunedì', 1, 5, 2),
(19, 'martedì', 2, 5, 2),
(20, 'mercoledì', 4, 5, 2),
(21, 'venerdì', 3, 5, 2),
(22, 'sabato', 2, 5, 2),
(23, 'lunedì', 1, 6, 2),
(24, 'martedì', 2, 6, 2),
(25, 'mercoledì', 4, 6, 2),
(26, 'venerdì', 3, 6, 2),
(27, 'sabato', 2, 6, 2),
(28, 'lunedì', 1, 7, 2),
(29, 'martedì', 2, 7, 2),
(30, 'mercoledì', 4, 7, 2),
(31, 'venerdì', 3, 7, 2),
(32, 'sabato', 2, 7, 2),
(33, 'lunedì', 1, 8, 2),
(34, 'martedì', 2, 8, 2),
(35, 'mercoledì', 4, 8, 2),
(36, 'venerdì', 3, 8, 2),
(37, 'sabato', 2, 8, 2),
(38, 'lunedì', 1, 9, 2),
(39, 'martedì', 2, 9, 2),
(40, 'mercoledì', 4, 9, 2),
(41, 'venerdì', 3, 9, 2),
(42, 'sabato', 2, 9, 2),
(43, 'lunedì', 1, 10, 2),
(44, 'martedì', 2, 10, 2),
(45, 'mercoledì', 4, 10, 2),
(46, 'venerdì', 3, 10, 2),
(47, 'sabato', 2, 10, 2),
(48, 'lunedì', 1, 11, 2),
(49, 'martedì', 2, 11, 2),
(50, 'mercoledì', 4, 11, 2),
(51, 'venerdì', 3, 11, 2),
(52, 'sabato', 2, 11, 2),
(53, 'lunedì', 1, 12, 2),
(54, 'martedì', 2, 12, 2),
(55, 'mercoledì', 4, 12, 2),
(56, 'venerdì', 3, 12, 2),
(57, 'sabato', 2, 12, 2),
(58, 'lunedì', 1, 13, 2),
(59, 'martedì', 2, 13, 2),
(60, 'mercoledì', 4, 13, 2),
(61, 'venerdì', 3, 13, 2),
(62, 'sabato', 2, 13, 2),
(63, 'lunedì', 1, 14, 2),
(64, 'martedì', 2, 14, 2),
(65, 'mercoledì', 4, 14, 2),
(66, 'venerdì', 3, 14, 2),
(67, 'sabato', 2, 14, 2),
(68, 'lunedì', 1, 15, 2),
(69, 'martedì', 2, 15, 2),
(70, 'mercoledì', 4, 15, 2),
(71, 'venerdì', 3, 15, 2),
(72, 'sabato', 2, 15, 2),
(73, 'lunedì', 1, 16, 2),
(74, 'martedì', 2, 16, 2),
(75, 'mercoledì', 4, 16, 2),
(76, 'venerdì', 3, 16, 2),
(77, 'sabato', 2, 16, 2),
(78, 'lunedì', 1, 17, 2),
(79, 'martedì', 2, 17, 2),
(80, 'mercoledì', 4, 17, 2),
(81, 'venerdì', 3, 17, 2),
(82, 'sabato', 2, 17, 2),
(83, 'lunedì', 1, 18, 2),
(84, 'martedì', 2, 18, 2),
(85, 'mercoledì', 4, 18, 2),
(86, 'venerdì', 3, 18, 2),
(87, 'sabato', 2, 18, 2),
(88, 'lunedì', 1, 19, 2),
(89, 'martedì', 2, 19, 2),
(90, 'mercoledì', 4, 19, 2),
(91, 'venerdì', 3, 19, 2),
(92, 'sabato', 2, 19, 2),
(93, 'lunedì', 1, 20, 2),
(94, 'martedì', 2, 20, 2),
(95, 'mercoledì', 4, 20, 2),
(96, 'venerdì', 3, 20, 2),
(97, 'sabato', 2, 20, 2),
(98, 'lunedì', 1, 21, 2),
(99, 'martedì', 2, 21, 2),
(100, 'mercoledì', 4, 21, 2),
(101, 'venerdì', 3, 21, 2),
(102, 'sabato', 2, 21, 2),
(103, 'lunedì', 1, 22, 2),
(104, 'martedì', 2, 22, 2),
(105, 'mercoledì', 4, 22, 2),
(106, 'venerdì', 3, 22, 2),
(107, 'sabato', 2, 22, 2),
(108, 'lunedì', 1, 23, 2),
(109, 'martedì', 2, 23, 2),
(110, 'mercoledì', 4, 23, 2),
(111, 'venerdì', 3, 23, 2),
(112, 'sabato', 2, 23, 2),
(113, 'lunedì', 1, 24, 2),
(114, 'martedì', 2, 24, 2),
(115, 'mercoledì', 4, 24, 2),
(116, 'giovedì', 2, 24, 2),
(117, 'venerdì', 3, 24, 2),
(118, 'sabato', 2, 24, 2),
(119, 'lunedì', 1, 25, 2),
(120, 'martedì', 2, 25, 2),
(121, 'mercoledì', 4, 25, 2),
(122, 'giovedì', 2, 25, 2),
(123, 'venerdì', 3, 25, 2),
(124, 'sabato', 2, 25, 2),
(125, 'lunedì', 1, 26, 2),
(126, 'martedì', 2, 26, 2),
(127, 'mercoledì', 4, 26, 2),
(128, 'giovedì', 2, 26, 2),
(129, 'venerdì', 3, 26, 2),
(130, 'sabato', 2, 26, 2),
(131, 'lunedì', 1, 27, 2),
(132, 'martedì', 2, 27, 2),
(133, 'mercoledì', 4, 27, 2),
(134, 'giovedì', 2, 27, 2),
(135, 'venerdì', 3, 27, 2),
(136, 'sabato', 2, 27, 2),
(137, 'lunedì', 1, 28, 2),
(138, 'martedì', 2, 28, 2),
(139, 'mercoledì', 4, 28, 2),
(140, 'giovedì', 2, 28, 2),
(141, 'venerdì', 3, 28, 2),
(142, 'sabato', 2, 28, 2),
(143, 'lunedì', 1, 29, 2),
(144, 'martedì', 2, 29, 2),
(145, 'mercoledì', 4, 29, 2),
(146, 'giovedì', 2, 29, 2),
(147, 'venerdì', 3, 29, 2),
(148, 'sabato', 2, 29, 2),
(149, 'lunedì', 1, 30, 2),
(150, 'martedì', 2, 30, 2),
(151, 'mercoledì', 4, 30, 2),
(152, 'giovedì', 2, 30, 2),
(153, 'venerdì', 3, 30, 2),
(154, 'sabato', 2, 30, 2),
(155, 'lunedì', 1, 31, 2),
(156, 'martedì', 2, 31, 2),
(157, 'mercoledì', 4, 31, 2),
(158, 'giovedì', 2, 31, 2),
(159, 'venerdì', 3, 31, 2),
(160, 'sabato', 2, 31, 2),
(161, 'lunedì', 1, 32, 2),
(162, 'martedì', 2, 32, 2),
(163, 'mercoledì', 4, 32, 2),
(164, 'giovedì', 2, 32, 2),
(165, 'venerdì', 3, 32, 2),
(166, 'sabato', 2, 32, 2),
(167, 'lunedì', 1, 33, 2),
(168, 'martedì', 2, 33, 2),
(169, 'mercoledì', 4, 33, 2),
(170, 'giovedì', 2, 33, 2),
(171, 'venerdì', 3, 33, 2),
(172, 'sabato', 2, 33, 2),
(173, 'lunedì', 1, 34, 2),
(174, 'martedì', 2, 34, 2),
(175, 'mercoledì', 4, 34, 2),
(176, 'giovedì', 2, 34, 2),
(177, 'venerdì', 3, 34, 2),
(178, 'sabato', 2, 34, 2),
(179, 'lunedì', 1, 35, 2),
(180, 'martedì', 2, 35, 2),
(181, 'mercoledì', 4, 35, 2),
(182, 'giovedì', 2, 35, 2),
(183, 'venerdì', 3, 35, 2),
(184, 'sabato', 2, 35, 2),
(185, 'lunedì', 1, 36, 2),
(186, 'martedì', 2, 36, 2),
(187, 'mercoledì', 4, 36, 2),
(188, 'giovedì', 2, 36, 2),
(189, 'venerdì', 3, 36, 2),
(190, 'sabato', 2, 36, 2),
(191, 'lunedì', 1, 37, 2),
(192, 'martedì', 2, 37, 2),
(193, 'mercoledì', 4, 37, 2),
(194, 'giovedì', 2, 37, 2),
(195, 'venerdì', 3, 37, 2),
(196, 'sabato', 2, 37, 2),
(197, 'lunedì', 1, 38, 2),
(198, 'martedì', 2, 38, 2),
(199, 'mercoledì', 4, 38, 2),
(200, 'venerdì', 3, 38, 2),
(201, 'sabato', 2, 38, 2),
(202, 'lunedì', 1, 39, 2),
(203, 'martedì', 2, 39, 2),
(204, 'mercoledì', 4, 39, 2),
(205, 'venerdì', 3, 39, 2),
(206, 'sabato', 2, 39, 2),
(207, 'lunedì', 1, 40, 2),
(208, 'martedì', 2, 40, 2),
(209, 'mercoledì', 4, 40, 2),
(210, 'venerdì', 3, 40, 2),
(211, 'sabato', 2, 40, 2),
(212, 'lunedì', 1, 41, 2),
(213, 'martedì', 2, 41, 2),
(214, 'mercoledì', 4, 41, 2),
(215, 'venerdì', 3, 41, 2),
(216, 'sabato', 2, 41, 2),
(217, 'lunedì', 1, 42, 2),
(218, 'martedì', 2, 42, 2),
(219, 'mercoledì', 4, 42, 2),
(220, 'venerdì', 3, 42, 2),
(221, 'sabato', 2, 42, 2),
(222, 'lunedì', 1, 43, 2),
(223, 'martedì', 2, 43, 2),
(224, 'mercoledì', 4, 43, 2),
(225, 'venerdì', 3, 43, 2),
(226, 'sabato', 2, 43, 2),
(227, 'lunedì', 1, 44, 2),
(228, 'martedì', 2, 44, 2),
(229, 'mercoledì', 4, 44, 2),
(230, 'venerdì', 3, 44, 2),
(231, 'sabato', 2, 44, 2),
(232, 'lunedì', 1, 45, 2),
(233, 'martedì', 2, 45, 2),
(234, 'mercoledì', 4, 45, 2),
(235, 'venerdì', 3, 45, 2),
(236, 'sabato', 2, 45, 2),
(237, 'lunedì', 1, 46, 2),
(238, 'martedì', 2, 46, 2),
(239, 'mercoledì', 4, 46, 2),
(240, 'venerdì', 3, 46, 2),
(241, 'sabato', 2, 46, 2),
(242, 'lunedì', 1, 47, 2),
(243, 'martedì', 2, 47, 2),
(244, 'mercoledì', 4, 47, 2),
(245, 'venerdì', 3, 47, 2),
(246, 'sabato', 2, 47, 2),
(247, 'lunedì', 1, 48, 2),
(248, 'martedì', 2, 48, 2),
(249, 'mercoledì', 4, 48, 2),
(250, 'venerdì', 3, 48, 2),
(251, 'sabato', 2, 48, 2),
(252, 'lunedì', 1, 48, 2),
(253, 'martedì', 2, 49, 2),
(254, 'lunedì', 1, 49, 2),
(255, 'martedì', 2, 49, 2),
(256, 'mercoledì', 4, 49, 2),
(257, 'venerdì', 3, 49, 2),
(258, 'sabato', 2, 49, 2),
(259, 'lunedì', 1, 50, 2),
(260, 'martedì', 2, 50, 2),
(261, 'mercoledì', 4, 50, 2),
(262, 'venerdì', 3, 50, 2),
(263, 'sabato', 2, 50, 2),
(264, 'lunedì', 1, 51, 2),
(265, 'martedì', 2, 51, 2),
(266, 'mercoledì', 4, 51, 2),
(267, 'venerdì', 3, 51, 2),
(268, 'sabato', 2, 51, 2),
(269, 'lunedì', 1, 52, 2),
(270, 'martedì', 2, 52, 2),
(271, 'mercoledì', 4, 52, 2),
(272, 'venerdì', 3, 52, 2),
(273, 'sabato', 2, 52, 2),
(274, 'lunedì', 1, 53, 2),
(275, 'martedì', 2, 53, 2),
(276, 'mercoledì', 4, 53, 2),
(277, 'venerdì', 3, 53, 2),
(278, 'sabato', 2, 53, 2),
(279, 'lunedì', 1, 54, 2),
(280, 'martedì', 2, 54, 2),
(281, 'mercoledì', 4, 54, 2),
(282, 'venerdì', 3, 54, 2),
(283, 'sabato', 2, 54, 2),
(284, 'lunedì', 1, 55, 2),
(285, 'martedì', 2, 55, 2),
(286, 'mercoledì', 4, 55, 2),
(287, 'venerdì', 3, 55, 2),
(288, 'sabato', 2, 55, 2),
(289, 'lunedì', 1, 56, 2),
(290, 'martedì', 2, 56, 2),
(291, 'mercoledì', 4, 56, 2),
(292, 'venerdì', 3, 56, 2),
(293, 'sabato', 2, 56, 2),
(294, 'lunedì', 1, 57, 2),
(295, 'martedì', 2, 57, 2),
(296, 'mercoledì', 4, 57, 2),
(297, 'venerdì', 3, 57, 2),
(298, 'sabato', 2, 57, 2),
(299, 'venerdì', 4, 1, 3),
(300, 'sabato', 5, 1, 3),
(301, 'lunedì', 3, 2, 3),
(302, 'martedì', 2, 2, 3),
(303, 'mercoledì', 1, 2, 3),
(304, 'venerdì', 4, 2, 3),
(305, 'sabato', 5, 2, 3),
(306, 'lunedì', 3, 3, 3),
(307, 'martedì', 1, 3, 3),
(308, 'mercoledì', 2, 3, 3),
(309, 'venerdì', 4, 3, 3),
(310, 'sabato', 5, 3, 3),
(311, 'lunedì', 1, 4, 3),
(312, 'martedì', 3, 4, 3),
(313, 'mercoledì', 4, 4, 3),
(314, 'venerdì', 2, 4, 3),
(315, 'sabato', 5, 4, 3),
(316, 'lunedì', 1, 5, 3),
(317, 'martedì', 4, 5, 3),
(318, 'mercoledì', 3, 5, 3),
(319, 'venerdì', 2, 5, 3),
(320, 'sabato', 5, 5, 3),
(321, 'lunedì', 4, 6, 3),
(322, 'martedì', 1, 6, 3),
(323, 'mercoledì', 3, 6, 3),
(324, 'venerdì', 2, 6, 3),
(325, 'sabato', 5, 6, 3),
(326, 'lunedì', 1, 7, 3),
(327, 'martedì', 4, 7, 3),
(328, 'mercoledì', 3, 7, 3),
(329, 'venerdì', 2, 7, 3),
(330, 'sabato', 5, 7, 3),
(331, 'lunedì', 1, 8, 3),
(332, 'martedì', 3, 8, 3),
(333, 'mercoledì', 4, 8, 3),
(334, 'venerdì', 2, 8, 3),
(335, 'sabato', 5, 8, 3),
(336, 'lunedì', 1, 9, 3),
(337, 'martedì', 4, 9, 3),
(338, 'mercoledì', 3, 9, 3),
(339, 'venerdì', 2, 9, 3),
(340, 'sabato', 5, 9, 3),
(341, 'lunedì', 1, 10, 3),
(342, 'martedì', 4, 10, 3),
(343, 'mercoledì', 3, 10, 3),
(344, 'venerdì', 2, 10, 3),
(345, 'sabato', 5, 10, 3),
(346, 'lunedì', 1, 11, 3),
(347, 'martedì', 3, 11, 3),
(348, 'mercoledì', 4, 11, 3),
(349, 'venerdì', 2, 11, 3),
(350, 'sabato', 5, 11, 3),
(351, 'lunedì', 1, 12, 3),
(352, 'martedì', 4, 12, 3),
(353, 'mercoledì', 3, 12, 3),
(354, 'venerdì', 2, 12, 3),
(355, 'sabato', 5, 12, 3),
(356, 'lunedì', 1, 13, 3),
(357, 'martedì', 3, 13, 3),
(358, 'mercoledì', 4, 13, 3),
(359, 'venerdì', 2, 13, 3),
(360, 'sabato', 5, 13, 3),
(361, 'lunedì', 1, 14, 3),
(362, 'martedì', 4, 14, 3),
(363, 'mercoledì', 3, 14, 3),
(364, 'venerdì', 2, 14, 3),
(365, 'sabato', 5, 14, 3),
(366, 'lunedì', 1, 15, 3),
(367, 'martedì', 3, 15, 3),
(368, 'mercoledì', 4, 15, 3),
(369, 'venerdì', 2, 15, 3),
(370, 'sabato', 5, 15, 3),
(371, 'lunedì', 1, 16, 3),
(372, 'martedì', 4, 16, 3),
(373, 'mercoledì', 3, 16, 3),
(374, 'venerdì', 2, 16, 3),
(375, 'sabato', 5, 16, 3),
(376, 'lunedì', 1, 17, 3),
(377, 'martedì', 3, 17, 3),
(378, 'mercoledì', 4, 17, 3),
(379, 'venerdì', 2, 17, 3),
(380, 'sabato', 5, 17, 3),
(381, 'lunedì', 1, 18, 3),
(382, 'martedì', 4, 18, 3),
(383, 'mercoledì', 3, 18, 3),
(384, 'venerdì', 2, 18, 3),
(385, 'sabato', 5, 18, 3),
(386, 'lunedì', 1, 19, 3),
(387, 'martedì', 3, 19, 3),
(388, 'mercoledì', 4, 19, 3),
(389, 'venerdì', 2, 19, 3),
(390, 'sabato', 5, 19, 3),
(391, 'lunedì', 1, 20, 3),
(392, 'martedì', 4, 20, 3),
(393, 'mercoledì', 3, 20, 3),
(394, 'venerdì', 2, 20, 3),
(395, 'sabato', 5, 20, 3),
(396, 'lunedì', 1, 21, 3),
(397, 'martedì', 3, 21, 3),
(398, 'mercoledì', 4, 21, 3),
(399, 'venerdì', 2, 21, 3),
(400, 'sabato', 5, 21, 3),
(401, 'lunedì', 1, 22, 3),
(402, 'martedì', 4, 22, 3),
(403, 'mercoledì', 3, 22, 3),
(404, 'venerdì', 2, 22, 3),
(405, 'sabato', 5, 22, 3),
(406, 'lunedì', 1, 23, 3),
(407, 'martedì', 3, 23, 3),
(408, 'mercoledì', 4, 23, 3),
(409, 'venerdì', 2, 23, 3),
(410, 'sabato', 5, 23, 3),
(411, 'lunedì', 1, 24, 3),
(412, 'martedì', 4, 24, 3),
(413, 'mercoledì', 3, 24, 3),
(414, 'giovedì', 2, 24, 3),
(415, 'venerdì', 1, 24, 3),
(416, 'sabato', 5, 24, 3),
(417, 'lunedì', 4, 25, 3),
(418, 'martedì', 3, 25, 3),
(419, 'mercoledì', 2, 25, 3),
(420, 'giovedì', 1, 25, 3),
(421, 'venerdì', 4, 25, 3),
(422, 'sabato', 5, 25, 3),
(423, 'lunedì', 3, 26, 3),
(424, 'martedì', 2, 26, 3),
(425, 'mercoledì', 1, 26, 3),
(426, 'giovedì', 4, 26, 3),
(427, 'venerdì', 3, 26, 3),
(428, 'sabato', 5, 26, 3),
(429, 'lunedì', 1, 27, 3),
(430, 'martedì', 4, 27, 3),
(431, 'mercoledì', 3, 27, 3),
(432, 'giovedì', 2, 27, 3),
(433, 'venerdì', 1, 27, 3),
(434, 'sabato', 5, 27, 3),
(435, 'lunedì', 4, 28, 3),
(436, 'martedì', 3, 28, 3),
(437, 'mercoledì', 2, 28, 3),
(438, 'giovedì', 1, 28, 3),
(439, 'venerdì', 4, 28, 3),
(440, 'sabato', 5, 28, 3),
(441, 'lunedì', 3, 29, 3),
(442, 'martedì', 2, 29, 3),
(443, 'mercoledì', 1, 29, 3),
(444, 'giovedì', 4, 29, 3),
(445, 'venerdì', 3, 29, 3),
(446, 'sabato', 5, 29, 3),
(447, 'lunedì', 1, 30, 3),
(448, 'martedì', 4, 30, 3),
(449, 'mercoledì', 3, 30, 3),
(450, 'giovedì', 2, 30, 3),
(451, 'venerdì', 1, 30, 3),
(452, 'sabato', 5, 30, 3),
(453, 'lunedì', 4, 31, 3),
(454, 'martedì', 3, 31, 3),
(455, 'mercoledì', 2, 31, 3),
(456, 'giovedì', 1, 31, 3),
(457, 'venerdì', 4, 31, 3),
(458, 'sabato', 5, 31, 3),
(459, 'lunedì', 3, 32, 3),
(460, 'martedì', 2, 32, 3),
(461, 'mercoledì', 1, 32, 3),
(462, 'giovedì', 4, 32, 3),
(463, 'venerdì', 3, 32, 3),
(464, 'sabato', 5, 32, 3),
(465, 'lunedì', 1, 33, 3),
(466, 'martedì', 4, 33, 3),
(467, 'mercoledì', 3, 33, 3),
(468, 'giovedì', 2, 33, 3),
(469, 'venerdì', 1, 33, 3),
(470, 'sabato', 5, 33, 3),
(471, 'lunedì', 4, 34, 3),
(472, 'martedì', 3, 34, 3),
(473, 'mercoledì', 2, 34, 3),
(474, 'giovedì', 1, 34, 3),
(475, 'venerdì', 4, 34, 3),
(476, 'sabato', 5, 34, 3),
(477, 'lunedì', 3, 35, 3),
(478, 'martedì', 2, 35, 3),
(479, 'mercoledì', 1, 35, 3),
(480, 'giovedì', 4, 35, 3),
(481, 'venerdì', 3, 35, 3),
(482, 'sabato', 5, 35, 3),
(483, 'lunedì', 4, 36, 3),
(484, 'martedì', 2, 36, 3),
(485, 'mercoledì', 1, 36, 3),
(486, 'giovedì', 3, 36, 3),
(487, 'venerdì', 5, 36, 3),
(488, 'sabato', 4, 36, 3),
(489, 'lunedì', 2, 37, 3),
(490, 'martedì', 1, 37, 3),
(491, 'mercoledì', 3, 37, 3),
(492, 'giovedì', 4, 37, 3),
(493, 'venerdì', 5, 37, 3),
(494, 'sabato', 1, 37, 3),
(495, 'lunedì', 3, 38, 3),
(496, 'martedì', 4, 38, 3),
(497, 'mercoledì', 2, 38, 3),
(498, 'venerdì', 1, 38, 3),
(499, 'sabato', 5, 38, 3),
(500, 'lunedì', 4, 39, 3),
(501, 'martedì', 3, 39, 3),
(502, 'mercoledì', 2, 39, 3),
(503, 'venerdì', 1, 39, 3),
(504, 'sabato', 5, 39, 3),
(505, 'lunedì', 3, 40, 3),
(506, 'martedì', 4, 40, 3),
(507, 'mercoledì', 2, 40, 3),
(508, 'venerdì', 1, 40, 3),
(509, 'sabato', 5, 40, 3),
(510, 'lunedì', 3, 41, 3),
(511, 'martedì', 4, 41, 3),
(512, 'mercoledì', 2, 41, 3),
(513, 'venerdì', 1, 41, 3),
(514, 'sabato', 5, 41, 3),
(515, 'lunedì', 4, 42, 3),
(516, 'martedì', 3, 42, 3),
(517, 'mercoledì', 2, 42, 3),
(518, 'venerdì', 1, 42, 3),
(519, 'sabato', 5, 42, 3),
(520, 'lunedì', 3, 43, 3),
(521, 'martedì', 4, 43, 3),
(522, 'mercoledì', 2, 43, 3),
(523, 'venerdì', 1, 43, 3),
(524, 'sabato', 5, 43, 3),
(525, 'lunedì', 4, 44, 3),
(526, 'martedì', 3, 44, 3),
(527, 'mercoledì', 2, 44, 3),
(528, 'venerdì', 1, 44, 3),
(529, 'sabato', 5, 44, 3),
(530, 'lunedì', 3, 45, 3),
(531, 'martedì', 4, 45, 3),
(532, 'mercoledì', 2, 45, 3),
(533, 'venerdì', 1, 45, 3),
(534, 'sabato', 5, 45, 3),
(535, 'lunedì', 4, 46, 3),
(536, 'martedì', 3, 46, 3),
(537, 'mercoledì', 2, 46, 3),
(538, 'venerdì', 1, 46, 3),
(539, 'sabato', 5, 46, 3),
(540, 'lunedì', 3, 47, 3),
(541, 'martedì', 4, 47, 3),
(542, 'mercoledì', 2, 47, 3),
(543, 'venerdì', 1, 47, 3),
(544, 'sabato', 5, 47, 3),
(545, 'lunedì', 4, 48, 3),
(546, 'martedì', 3, 48, 3),
(547, 'mercoledì', 2, 48, 3),
(548, 'venerdì', 1, 48, 3),
(549, 'sabato', 5, 48, 3),
(550, 'martedì', 4, 49, 3),
(551, 'lunedì', 2, 49, 3),
(552, 'martedì', 3, 49, 3),
(553, 'mercoledì', 1, 49, 3),
(554, 'venerdì', 4, 49, 3),
(555, 'sabato', 5, 49, 3),
(556, 'lunedì', 2, 50, 3),
(557, 'martedì', 1, 50, 3),
(558, 'mercoledì', 3, 50, 3),
(559, 'venerdì', 4, 50, 3),
(560, 'sabato', 5, 50, 3),
(561, 'lunedì', 1, 51, 3),
(562, 'martedì', 3, 51, 3),
(563, 'mercoledì', 4, 51, 3),
(564, 'venerdì', 2, 51, 3),
(565, 'sabato', 5, 51, 3),
(566, 'lunedì', 1, 52, 3),
(567, 'martedì', 4, 52, 3),
(568, 'mercoledì', 3, 52, 3),
(569, 'venerdì', 2, 52, 3),
(570, 'sabato', 5, 52, 3),
(571, 'lunedì', 1, 53, 3),
(572, 'martedì', 3, 53, 3),
(573, 'mercoledì', 4, 53, 3),
(574, 'venerdì', 2, 53, 3),
(575, 'sabato', 5, 53, 3),
(576, 'lunedì', 1, 54, 3),
(577, 'martedì', 4, 54, 3),
(578, 'mercoledì', 3, 54, 3),
(579, 'venerdì', 2, 54, 3),
(580, 'sabato', 5, 54, 3),
(581, 'lunedì', 1, 55, 3),
(582, 'martedì', 3, 55, 3),
(583, 'mercoledì', 4, 55, 3),
(584, 'venerdì', 2, 55, 3),
(585, 'sabato', 5, 55, 3),
(586, 'lunedì', 1, 56, 3),
(587, 'martedì', 4, 56, 3),
(588, 'mercoledì', 3, 56, 3),
(589, 'venerdì', 2, 56, 3),
(590, 'sabato', 5, 56, 3),
(591, 'lunedì', 1, 57, 3),
(592, 'martedì', 3, 57, 3),
(593, 'mercoledì', 4, 57, 3),
(594, 'venerdì', 2, 57, 3),
(595, 'sabato', 5, 57, 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `category`
--

INSERT INTO `category` (`id_category`, `name`) VALUES
(1, 'Carta'),
(2, 'Umido'),
(3, 'Secco'),
(4, 'Plastica e Lattine'),
(5, 'Verde'),
(6, 'Campana di vetro');

-- --------------------------------------------------------

--
-- Struttura della tabella `city`
--

CREATE TABLE `city` (
  `id_city` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `city`
--

INSERT INTO `city` (`id_city`, `name`) VALUES
(1, NULL),
(2, 'Verona'),
(3, 'Villafranca di Verona');

-- --------------------------------------------------------

--
-- Struttura della tabella `filedata`
--

CREATE TABLE `filedata` (
  `id_filedata` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `trash`
--

CREATE TABLE `trash` (
  `id_trash` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `trash`
--

INSERT INTO `trash` (`id_trash`, `name`, `image`, `id_category`) VALUES
(1, 'Cartone per alimenti', '/images/trash/cartone_alimenti.jpg', 1),
(2, 'Bottiglia di plastica', '/images/trash/bottiglia_plastica.jpg', 4),
(3, 'Bicchiere di vetro', '/images/trash/bicchiere_vetro.jpg', 3),
(4, 'Bottiglia di vetro', '/images/trash/bottiglia_vetro.jpg', 6),
(5, 'Alimento avariato', '/images/trash/alimento_avariato.jpg', 2),
(6, 'Foglie', '/images/trash/foglie.jpg', 5),
(7, 'Lattina', '/images/trash/lattina.jpg', 4),
(8, 'Posate in metallo', '/images/trash/posate_metallo.jpg', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_city` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id_user`, `name`, `surname`, `email`, `password`, `id_city`) VALUES
(1, 'Giuseppe', 'Rossi', 'giuseppe.rossi@example.com', '1234', 1),
(2, 'Paolo', 'Bianchi', 'paolo.bianchi@example.com', '1234', 1),
(3, 'Maria', 'Ferrari', 'maria.ferrari@example.com', '1234', 1),
(4, 'Giovanni', 'Marino', 'giovanni.marino@example.com', '1234', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `user_trash`
--

CREATE TABLE `user_trash` (
  `id_user` int(11) NOT NULL,
  `id_trash` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `week`
--

CREATE TABLE `week` (
  `id_week` int(11) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `week`
--

INSERT INTO `week` (`id_week`, `date_start`, `date_end`) VALUES
(1, '2025-01-01', '2025-01-05'),
(2, '2025-01-06', '2025-01-12'),
(3, '2025-01-13', '2025-01-19'),
(4, '2025-01-20', '2025-01-26'),
(5, '2025-01-27', '2025-02-02'),
(6, '2025-02-03', '2025-02-09'),
(7, '2025-02-10', '2025-02-16'),
(8, '2025-02-17', '2025-02-23'),
(9, '2025-02-24', '2025-03-02'),
(10, '2025-03-03', '2025-03-09'),
(11, '2025-03-10', '2025-03-16'),
(12, '2025-03-17', '2025-03-23'),
(13, '2025-03-24', '2025-03-30'),
(14, '2025-03-31', '2025-04-06'),
(15, '2025-04-07', '2025-04-13'),
(16, '2025-04-14', '2025-04-20'),
(17, '2025-04-21', '2025-04-27'),
(18, '2025-04-28', '2025-05-04'),
(19, '2025-05-05', '2025-05-11'),
(20, '2025-05-12', '2025-05-18'),
(21, '2025-05-19', '2025-05-25'),
(22, '2025-05-26', '2025-06-01'),
(23, '2025-06-02', '2025-06-08'),
(24, '2025-06-09', '2025-06-15'),
(25, '2025-06-16', '2025-06-22'),
(26, '2025-06-23', '2025-06-29'),
(27, '2025-06-30', '2025-07-06'),
(28, '2025-07-07', '2025-07-13'),
(29, '2025-07-14', '2025-07-20'),
(30, '2025-07-21', '2025-07-27'),
(31, '2025-07-28', '2025-08-03'),
(32, '2025-08-04', '2025-08-10'),
(33, '2025-08-11', '2025-08-17'),
(34, '2025-08-18', '2025-08-24'),
(35, '2025-08-25', '2025-08-31'),
(36, '2025-09-01', '2025-09-07'),
(37, '2025-09-08', '2025-09-14'),
(38, '2025-09-15', '2025-09-21'),
(39, '2025-09-22', '2025-09-28'),
(40, '2025-09-29', '2025-10-05'),
(41, '2025-10-06', '2025-10-12'),
(42, '2025-10-13', '2025-10-19'),
(43, '2025-10-20', '2025-10-26'),
(44, '2025-10-27', '2025-11-02'),
(45, '2025-11-03', '2025-11-09'),
(46, '2025-11-10', '2025-11-16'),
(47, '2025-11-17', '2025-11-23'),
(48, '2025-11-24', '2025-11-30'),
(49, '2025-12-01', '2025-12-07'),
(50, '2025-12-08', '2025-12-14'),
(51, '2025-12-15', '2025-12-21'),
(52, '2025-12-22', '2025-12-28'),
(53, '2025-12-29', '2026-01-04'),
(54, '2026-01-05', '2026-01-11'),
(55, '2026-01-12', '2026-01-18'),
(56, '2026-01-19', '2026-01-25'),
(57, '2026-01-26', '2026-01-31');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `advice`
--
ALTER TABLE `advice`
  ADD PRIMARY KEY (`id_advice`),
  ADD KEY `id_trash` (`id_trash`);

--
-- Indici per le tabelle `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id_calendar`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_city` (`id_city`),
  ADD KEY `id_week` (`id_week`);

--
-- Indici per le tabelle `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indici per le tabelle `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id_city`);

--
-- Indici per le tabelle `filedata`
--
ALTER TABLE `filedata`
  ADD PRIMARY KEY (`id_filedata`);

--
-- Indici per le tabelle `trash`
--
ALTER TABLE `trash`
  ADD PRIMARY KEY (`id_trash`),
  ADD KEY `id_category` (`id_category`);

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_city` (`id_city`);

--
-- Indici per le tabelle `user_trash`
--
ALTER TABLE `user_trash`
  ADD KEY `id_trash` (`id_trash`),
  ADD KEY `id_user` (`id_user`);

--
-- Indici per le tabelle `week`
--
ALTER TABLE `week`
  ADD PRIMARY KEY (`id_week`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `advice`
--
ALTER TABLE `advice`
  MODIFY `id_advice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id_calendar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=596;

--
-- AUTO_INCREMENT per la tabella `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT per la tabella `city`
--
ALTER TABLE `city`
  MODIFY `id_city` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `filedata`
--
ALTER TABLE `filedata`
  MODIFY `id_filedata` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `trash`
--
ALTER TABLE `trash`
  MODIFY `id_trash` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `week`
--
ALTER TABLE `week`
  MODIFY `id_week` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `advice`
--
ALTER TABLE `advice`
  ADD CONSTRAINT `advice_ibfk_1` FOREIGN KEY (`id_trash`) REFERENCES `trash` (`id_trash`);

--
-- Limiti per la tabella `calendar`
--
ALTER TABLE `calendar`
  ADD CONSTRAINT `calendar_ibfk_3` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`),
  ADD CONSTRAINT `calendar_ibfk_4` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`),
  ADD CONSTRAINT `calendar_ibfk_5` FOREIGN KEY (`id_week`) REFERENCES `week` (`id_week`);

--
-- Limiti per la tabella `trash`
--
ALTER TABLE `trash`
  ADD CONSTRAINT `trash_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`);

--
-- Limiti per la tabella `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`);

--
-- Limiti per la tabella `user_trash`
--
ALTER TABLE `user_trash`
  ADD CONSTRAINT `user_trash_ibfk_1` FOREIGN KEY (`id_trash`) REFERENCES `trash` (`id_trash`),
  ADD CONSTRAINT `user_trash_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
