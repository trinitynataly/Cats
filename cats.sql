-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2021 at 10:06 PM
-- Server version: 10.3.32-MariaDB
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Table structure for table `cats`
--

CREATE TABLE `cats` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `age` smallint(6) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `breed` varchar(50) NOT NULL,
  `color` varchar(25) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `adopted` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cats`
--

INSERT INTO `cats` (`id`, `name`, `age`, `gender`, `breed`, `color`, `photo`, `description`, `adopted`) VALUES
(1, 'Charlie', 1, 'male', 'Siamese cat', 'white and brown', 'alex-meier-KGiQFgF7dkc-unsplash.jpg', 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand, the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.', '0000-00-00'),
(2, 'Leo', 2, 'male', 'Siberian cat', 'red', 'alexander-andrews-KfPwby-UisA-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(3, 'Bella', 1, 'female', 'Siberian cat', 'brown and black', 'alexander-london-mJaD10XeD7w-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(4, 'Jack', 1, 'male', 'Chartreux', 'blue', 'alexander-possingham-CeWNEEsHPbA-unsplash.jpg', 'The Chartreux is a rare breed of cat from France, and is recognised by a number of registries around the world. The Chartreux is large and muscular with relatively short, fine-boned limbs, and very fast reflexes.', '0000-00-00'),
(5, 'Kitty', 1, 'female', 'Munchkin cat', 'white and black', 'alicja-gancarz-HoC9ttceIGo-unsplash.jpg', 'The Munchkin cat or Sausage cat is a relatively new breed of cat characterized by its very short legs, which are caused by genetic mutation. The Munchkin is considered to be the original breed of dwarf cat.', '0000-00-00'),
(6, 'Nala', 1, 'female', 'Ragdoll', 'brown', 'alvan-nee-ZCHj_2lJP00-unsplash.jpg', 'The Ragdoll is a cat breed with a color point coat and striking blue eyes. Their form is large and muscular and their coat is silky soft and semi-longhair. Ragdolls were developed by American breeder Ann Baker in the 1960s. They are best known for their docile and placid temperament and affectionate nature.', '0000-00-00'),
(7, 'Sam', 2, 'male', 'Maine Coon', 'red', 'amber-kipp-75715CVEJhI-unsplash.jpg', 'The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine, where it is the official state cat.', '0000-00-00'),
(8, 'Ziggy', 3, 'male', 'Scottish Fold', 'blue', 'andrew-umansky-l5truYNKmm8-unsplash.jpg', 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to \"fold\", bending forward and down towards the front of the head, which gives the cat what is often described as an \"owl-like\" appearance.', '0000-00-00'),
(9, 'Salem', 1, 'male', 'European shorthair', 'brown', 'bogdan-farca-CEx86maLUSc-unsplash.jpg', 'The European Shorthair, called the European in FIFe and WCF is a cat breed originating in Sweden. The term has also been used as an elaborate way of referring to common domestic cats of Europe, causing some confusion as the pedigree cats of this breed also should resemble the typical domestic cats of Europe.', '0000-00-00'),
(10, 'Shadow', 3, 'male', 'Cymric', 'blue and blach', 'callum-wale-5s0MuxRGf6M-unsplash.jpg', 'The Cymric is a breed of domestic cat. Some cat registries consider the Cymric simply a semi-long-haired variety of the Manx breed, rather than a separate breed. Except for the length of fur, in all other respects the two varieties are the same, and kittens of either sort may appear in the same litter.', '0000-00-00'),
(11, 'Boots', 5, 'male', 'Exotic shorthair', 'red and white', 'cyrus-chew-Dl39g6QhOIM-unsplash.jpg', 'The Exotic Shorthair is a breed of cat developed as a short-haired version of the Persian. The Exotic is similar to the Persian in many ways, including temperament and conformation, a flat nose and face with the exceptions of the short dense coat.', '0000-00-00'),
(12, 'Cleo', 2, 'male', 'American Bobtail', 'red and white', 'daniel-macura-zlqZtlHTv3E-unsplash.jpg', 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby \"bobbed\" tail about one-third to one-half the length of a normal cat\'s tail.', '0000-00-00'),
(13, 'Daisy', 1, ' female', 'Siberian cat', 'red and white', 'daria-averina-_867Jy8LCkI-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(14, 'Izzy', 1, 'male', 'American Bobtail', 'brown and white', 'daria-averina-_867Jy8LCkI-unsplash.jpg', 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby \"bobbed\" tail about one-third to one-half the length of a normal cat\'s tail.', '0000-00-00'),
(15, 'Izzy', 2, 'female', 'Chartreux', 'blue', 'eric-han-Hd7vwFzZpH0-unsplash.jpg', 'The Chartreux is a rare breed of cat from France, and is recognised by a number of registries around the world. The Chartreux is large and muscular with relatively short, fine-boned limbs, and very fast reflexes.', '0000-00-00'),
(16, 'Cooper', 1, 'male', 'American Bobtail', 'brown and white', 'erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg', 'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby \"bobbed\" tail about one-third to one-half the length of a normal cat\'s tail.', '0000-00-00'),
(17, 'Oreo', 3, 'male', 'Bombay cat', 'black', 'hannah-troupe-0FQneB1VjaM-unsplash.jpg', 'The Bombay cat is a type of short-haired cat developed by breeding sable Burmese and black American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, panther-like black coat. Bombay is the name given to black cats of the Asian group.', '0000-00-00'),
(18, 'Loki', 2, 'female', 'Siberian cat', 'brown and white', 'hendrik-kilimann-U_wL_gbaIjc-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(19, 'Tiger', 5, 'male', 'Siberian cat', 'brown and white', 'hkyu-wu-NsPEZ02i9TQ-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(20, 'Tucker', 2, 'male', 'American Shorthair', 'brown and white', 'jae-park-7GX5aICb5i4-unsplash.jpg', 'The American Shorthair is a breed of domestic cat believed to be descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. According to the Cat Fanciers\' Association, in 2012, it was the seventh most popular pedigreed cat in the United States.', '0000-00-00'),
(21, 'Lulu', 2, 'female', 'Siberian cat', 'brown and white', 'jonathan-cooper-wg6tsOBbGb0-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(22, 'Jackson', 2, 'male', 'Norwegian Forest cat', 'red and white', 'kabo-bg9jOHUtmBs-unsplash.jpg', 'The Norwegian Forest cat is a breed of domestic cat originating in Northern Europe. This natural breed is adapted to a very cold climate, with a top coat of glossy, long, water-shedding hair and a woolly undercoat for insulation.', '0000-00-00'),
(23, 'Jasmine', 2, 'female', 'Maine Coon', 'white', 'kanashi-BLW_KQ0Rkn0-unsplash.jpg', 'The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine, where it is the official state cat.', '0000-00-00'),
(24, 'Murphy', 2, 'male', 'Siberian cat', 'brown and gray', 'kari-shea-eMzblc6JmXM-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(25, 'Fiona', 2, 'female', 'Turkish Angora', 'blue and white', 'kevin-chinchilla-9m1OFDFAuss-unsplash.jpg', 'The Turkish Angora is a breed of domestic cat. Turkish Angoras are one of the ancient, natural breeds of cat, having originated in central Anatolia. The breed has been documented as early as the 17th century. The breed is also sometimes referred to as simply the Angora or Ankara cat.', '0000-00-00'),
(26, 'Jax', 4, 'male', 'Siberian cat', 'red', 'ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(27, 'Frank', 2, 'male', 'European shorthair', 'black and white', 'manja-vitolic-gKXKBY-C-Dk-unsplash.jpg', 'The European Shorthair, called the European in FIFe and WCF is a cat breed originating in Sweden. The term has also been used as an elaborate way of referring to common domestic cats of Europe, causing some confusion as the pedigree cats of this breed also should resemble the typical domestic cats of Europe.', '0000-00-00'),
(28, 'Abby', 2, 'female', 'Russian Blue', 'blue', 'matheus-queiroz-bOy4OPu98lI-unsplash.jpg', 'The Russian Blue Cat, commonly referred to as just Russian Blue, is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. Their short, dense coat, which stands out from the body, has been the hallmark of the Russian breed for more than a century.', '0000-00-00'),
(29, 'Romeo', 3, 'male', 'European shorthair', 'white', 'mathieu-odin-YeQIAysCP3w-unsplash.jpg', 'The European Shorthair, called the European in FIFe and WCF is a cat breed originating in Sweden. The term has also been used as an elaborate way of referring to common domestic cats of Europe, causing some confusion as the pedigree cats of this breed also should resemble the typical domestic cats of Europe.', '0000-00-00'),
(30, 'Millie', 2, 'female', 'Scottish Fold', 'blue', 'max-baskakov-OzAeZPNsLXk-unsplash.jpg', 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to \"fold\", bending forward and down towards the front of the head, which gives the cat what is often described as an \"owl-like\" appearance.', '0000-00-00'),
(31, 'Olivia', 2, 'female', 'Ragdoll', 'white and blue', 'mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg', 'The Ragdoll is a cat breed with a color point coat and striking blue eyes. Their form is large and muscular and their coat is silky soft and semi-longhair. Ragdolls were developed by American breeder Ann Baker in the 1960s. They are best known for their docile and placid temperament and affectionate nature.', '0000-00-00'),
(32, 'Lola', 1, 'female', 'Scottish Fold', 'blue and black', 'mikhail-vasilyev-XXX0GQfgMy8-unsplash.jpg', 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to \"fold\", bending forward and down towards the front of the head, which gives the cat what is often described as an \"owl-like\" appearance.', '0000-00-00'),
(33, 'Athena', 1, 'female', 'Russian Blue', 'blue', 'milada-vigerova-0TPAlZ87mzk-unsplash.jpg', 'The Russian Blue Cat, commonly referred to as just Russian Blue, is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. Their short, dense coat, which stands out from the body, has been the hallmark of the Russian breed for more than a century.', '0000-00-00'),
(34, 'Teddy', 1, 'male', 'Russian Blue', 'blue', 'milada-vigerova-7E9qvMOsZEM-unsplash.jpg', 'The Russian Blue Cat, commonly referred to as just Russian Blue, is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. Their short, dense coat, which stands out from the body, has been the hallmark of the Russian breed for more than a century.', '0000-00-00'),
(35, 'Ruby', 1, 'female', 'Siberian cat', 'white and blue', 'nihal-karkala--vcg9-w_yMk-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(36, 'Oscar', 2, 'male', 'Siberian cat', 'black and white', 'paul-hanaoka-o6RbK3y7mK4-unsplash.jpg', 'The Siberian is a centuries-old landrace of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s. Siberians vary from medium to medium-large in size.', '0000-00-00'),
(37, 'Willow', 1, 'male', 'Toyger', 'red and white', 'paul-hanaoka-ufOCH8sNLfw-unsplash.jpg', 'The toyger is a breed of domestic cat, the result of breeding domestic shorthaired tabbies to make them resemble a \"toy tiger\", as its striped coat is reminiscent of the tiger\'s.', '0000-00-00'),
(38, 'Coco', 1, 'female', 'Bombay cat', 'black', 'qijin-xu-vQUXUHjyy8A-unsplash.jpg', 'The Bombay cat is a type of short-haired cat developed by breeding sable Burmese and black American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, panther-like black coat. Bombay is the name given to black cats of the Asian group.', '0000-00-00'),
(39, 'Kali', 1, 'female', 'Khao Manee', 'white', 'remi-remino-E9kVmtiqqGE-unsplash.jpg', 'The Khao Manee cat, or Khao Plort, also known as the Diamond Eye cat, is a rare breed of cat originating in Thailand, which has an ancient ancestry tracing back hundreds of years. They are mentioned in the Tamra Maew, or Cat Book Poems. Khao Manee cats are pure white with a short, smooth, close-lying coat.', '0000-00-00'),
(40, 'Toby', 1, 'male', 'Abyssinian', 'red', 'timo-volz-ZlFKIG6dApg-unsplash.jpg', 'The Abyssinian is a breed of domestic short-haired cat with a distinctive \"ticked\" tabby coat, in which individual hairs are banded with different colors. In nomenclature terms, they are also known as simply Abys. The breed is named for Abyssinia, where it is believed to have originated.', '0000-00-00'),
(41, 'Belle', 3, 'female', 'American Shorthair', 'white and black and red', 'uriel-soberanes-xadzcCQZ_Xc-unsplash.jpg', 'The American Shorthair is a breed of domestic cat believed to be descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. According to the Cat Fanciers\' Association, in 2012, it was the seventh most popular pedigreed cat in the United States.', '0000-00-00'),
(42, 'Ash', 3, 'male', 'European shorthair', 'brown and black', 'zane-lee-VvTVkc_p-eg-unsplash.jpg', 'The European Shorthair, called the European in FIFe and WCF is a cat breed originating in Sweden. The term has also been used as an elaborate way of referring to common domestic cats of Europe, causing some confusion as the pedigree cats of this breed also should resemble the typical domestic cats of Europe.', '0000-00-00'),
(43, 'Scout', 2, 'male', 'Maine Coon', 'red', 'zhang-kaiyv-2rUUGwMyXX0-unsplash.jpg', 'The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine, where it is the official state cat.', '0000-00-00'),
(44, 'Ella', 1, 'female', 'Bengal cat', 'red and black', 'bodi-raw-q_repJO7xPA-unsplash.jpg', 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat. The breed name comes from the leopard cat\'s taxonomic name.', '0000-00-00'),
(45, 'Lucky', 1, 'male', 'Bengal cat', 'red and black', 'claudio-schwarz-ZkRGyLcpWQY-unsplash.jpg', 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat. The breed name comes from the leopard cat\'s taxonomic name.', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cats`
--
ALTER TABLE `cats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cats`
--
ALTER TABLE `cats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
