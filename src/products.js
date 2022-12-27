import uniqid from "uniqid";
import BorderlandsImg from "./images/borderlands.jpeg";
import CODImg from "./images/cod.jpeg";
import ElderRingImg from "./images/elder_ring.jpeg";
import EvilWestImg from "./images/evil_west.jpeg";
import GOWImg from "./images/gow.jpeg";
import GranTurismoImg from "./images/gran_turismo.jpeg";
import HorizonImg from "./images/horizon.jpeg";
import LastOfUsImg from "./images/last_of_us.jpeg";
import OctopathImg from "./images/octopath.jpeg";
import ReturnalImg from "./images/returnal.jpeg";
import SniperImg from "./images/sniper.jpeg";
import SpiderManImg from "./images/spider_man.jpeg";
import SteelRisingImg from "./images/steel_rising.jpeg";
import ThymesiaImg from "./images/thymesia.jpeg";
import UnchartedImg from "./images/uncharted.jpeg";
import WildHeartsImg from "./images/wild_hearts.jpeg";

const Product = (title, cost, image, description) => {
  let id;
  return { id, title, cost, image, description };
};

const products = [];

const generateProductObject = (productDetails) => {
  let pro = Product(...productDetails);
  pro.id = uniqid();
  products.push(pro);
};

generateProductObject([
  "New Tales from the Borderlands Deluxe Edition",
  19.99,
  BorderlandsImg,
  "The Deluxe Edition includes: The PlayStation 5 version of New Tales from the Borderlands & Tales from the Borderlands Full Game: Play as Rhys and Fiona in this hilarious, heart-wrenching story set on the desert world of Pandora.",
]);

generateProductObject([
  "Call of Duty: Modern Warefare 2",
  69.99,
  CODImg,
  'Featuring the return of the iconic, team leader Captain John Price, the fearless John "Soap" MacTavish, the seasoned Sergeant Kyle "Gaz” Garrick, and the lone wolf himself, fan favorite Simon “Ghost” Riley, players will witness what makes Task Force 141 the legendary squad it is today.',
]);

generateProductObject([
  "Elder Ring",
  52.99,
  ElderRingImg,
  "Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin.Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, and foreboding castles",
]);

generateProductObject([
  "Evil West",
  59.99,
  EvilWestImg,
  " Battle alone or with a friend in stylish, gory action combat. Myths and legends retold within a stylised, weird wild west universe. Evolve with perks, upgradable weapons, and tools. Explore and fight through a story-driven campaign to save America",
]);

generateProductObject([
  "God of War: Ragnarök",
  59.99,
  GOWImg,
  "Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality. Bask in the beautiful worlds you travel through, brought to life by precise art direction and arresting attention to detail. ",
]);

generateProductObject([
  "Gran Turismo 7",
  49.99,
  GranTurismoImg,
  "With the return of classic cars, iconic tracks, and fan-favourite modes like GT Simulation* and Sport Mode* – Gran Turismo 7 is the complete Real Driving Simulator, 25 years in the making.",
]);

generateProductObject([
  "Horizon: Forbidden West",
  59.99,
  HorizonImg,
  "Brave an expansive open world - discover distant lands, new enemies, rich cultures and striking characters. A majestic frontier - explore the lush forests, sunken cities and towering mountains of a far-future America.Confront new dangers - engage in strategic battles against enormous machines and mounted human enemies by using weapons, gear and traps crafted from salvaged parts.",
]);

generateProductObject([
  "Last of Us: Part 1",
  49.99,
  LastOfUsImg,
  "Enhanced visuals: Completely rebuilt from the ground up using Naughty Dog’s latest PS5 engine technology to improve every visual detail, The Last of Us experience has been faithfully enhanced with more realistic lighting and atmosphere, more intricate environments and creative reimaginings of familiar spaces. Fast loading: Initial loading times are near instant, and seamless after the first instance thanks to the PS5 console’s SSD – so you can pick up where you left off in the story and load specific encounters and chapters more quickly.",
]);

generateProductObject([
  "Octopath Traveler 2",
  59.99,
  OctopathImg,
  "Begin your adventure as one of eight new travelers, each with their own origins, motivations, and unique skills. Each traveler has a unique set of Path Actions they can use to battle townspeople, obtain items, take others along in their travels, and more; Where will you go, What will you do, Every path is yours to take. The story takes place in Solistia, where diverse cultures thrive from east to west and the industries of the new era flourish; You can sail the seas and explore every corner of a world that changes from day to night.",
]);

generateProductObject([
  "Returnal",
  64.99,
  ReturnalImg,
  "The procedural world of returnal invites you to dust yourself Off in the face of defeat and take on new, evolving challenges with every Rebirth. After crash-landing on a shape-shifting world, selene must search through the barren landscape of an ancient civilization for her Escape. Isolated and alone, she finds herself fighting tooth and nail for survival. Again and again, she's defeated - forced to restart her journey every time she dies.",
]);

generateProductObject([
  "Sniper Elite 5",
  55.99,
  SniperImg,
  "EXPANSIVE CAMPAIGN - Many real-world locations have been captured using photogrammetry to recreate a living, immersive environment, and multiple infiltration and extraction points and kill list targets provide a whole new perspective on each mission. Take on the Nazi plot solo or work with a partner, with improved co-op mechanics allowing you to share ammo and items, give orders and heal each other.",
]);

generateProductObject([
  "Spider-Man: Miles Morales",
  43.99,
  SpiderManImg,
  "Miles morales discovers explosive powers that set him apart from his mentor, peter parker. Master his unique, bio-electric venom Blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills. A war for control of Marvel's new York has broken out between a devious Energy Corporation and a high-tech criminal army. With his new home at the heart of the battle, miles must learn the cost of becoming a hero.",
]);

generateProductObject([
  "SteelRising",
  49.99,
  SteelRisingImg,
  "You are one of the main characters of an alternative history; Allies and enemies with unclear motives will cross your path, and it's up to you to put an end to one man's madness so that the French Revolution succeeds. String together dodges, parries, jumps and attacks to fight your way through Paris; Every fight tests your nerve and requires discipline, while the huge relentless machine bosses demand patience and skill.",
]);

generateProductObject([
  "Thymesia",
  21.99,
  ThymesiaImg,
  "Piece together Corvus’ past as you dive back into his memories, trying to uncover the truth hidden in the past. Corrupted by the plague, and mutated into monsters, enemies are twisted and incredibly hostile, challenging your ability at every turn. Shift into your raven form during battle, throw feathers like daggers to interrupt your enemies’ attacks, and perform executions with the swiftness of a raptor.",
]);

generateProductObject([
  "UNCHARTED: Legacy of Thieves Collection",
  21.99,
  UnchartedImg,
  "Delivered by award winning developer Naughty Dog, the UNCHARTED: Legacy of Thieves Collection includes the two critically-acclaimed UNCHARTED 4: A Thief's End and UNCHARTED: The Lost Legacy. Each story is filled with laughs, drama, high octane combat, and a sense of wonder - remastered to be even more immersive.",
]);

generateProductObject([
  "Wild hearts",
  69.99,
  WildHeartsImg,
  "Hunt giant nature-infused bests – Survive their attacks, learn from their behaviors, and use your Karakuri and your weapons in combination to cut these creatures down to size. Craft your hunting grounds – You are the only one in Azuma able to wield the Karakuri technology. Hunt in a pack, or be a lone wolf – In WILD HEARTS you can face the Kemono alone or unite with up to two friends (or other players) to stalk and hunt your prey.",
]);

export { products };
