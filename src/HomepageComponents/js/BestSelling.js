//const donut = {backgroundImage:url("../images/items/donuts.jpg")};
// const pastry = {backgroundImage:"url(../images/items/pastries.jpg)"};
// const refreshment = {backgroundImage:"url(../images/items/instant.jpg)"};
import donut from '../../images/items/donuts.jpg';
import pastry from '../../images/items/pastries.jpg';
import refreshment from '../../images/items/instant.jpg'
//donuts images
import vanilla from '../../images/items/vanillaglaze.jpg';
import rainbow from '../../images/items/rainbow.jpg';
import cinnamon from '../../images/items/cinnamon.jpg';
import chocolate from '../../images/items/chocolate.jpg';
//pastries images
import mango from '../../images/items/mango.jpg';
import pineApple from '../../images/items/pineApple.jpg';
import bfp from '../../images/items/black-forest-pastries.jpg';
import blueberry from '../../images/items/blueberrey.jpg';
//instant refresh images
import cc from '../../images/items/coffee.jpg';
import shake from '../../images/items/shake.jpg';
import mocha from '../../images/items/mocha.jpg';
import macciato from '../../images/items/macciato.jpg';

const productCard = {
  bestSelling: [
    {
      cardImgSrc: donut,
      cardTitle: "Donuts",
      cardText:
        "A doughnut or donut is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased.",
    },
    {
      cardImgSrc: pastry,
      cardTitle: "Pastries",
      cardText:
        "Pastry is baked food made with a dough of flour, water and shortening that may be savoury or sweetened. Sweetened pastries are often described as bakers' confectionery. This is sample content",
    },
    {
      cardImgSrc: refreshment,
      cardTitle: "Refreshments",
      cardText:
        "A drink is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culturE. It includes coffee , tea , shake etc.",
    },
  ],
  modalContent: {
    Donuts: [
      {
        cardImgSrc: vanilla,
        cardTitle: "Vanilla Glazed Donut",
        cardText: "A donut rich in texture and coated with pure vanilla flavor extracted from finest beans.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: rainbow,
        cardTitle: "Rainbow Sprinkled Donut",
        cardText: "A fun version of our classic donut sprinked with colorful rainbow sprinkles to spark joy!",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: cinnamon,
        cardTitle: "Cinnamon Dusted Donut",
        cardText: "Donut with light and heartwarming flavor of cinnamon which makes a perfect pair for evening tea.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: chocolate,
        cardTitle: "Chocolate Donut",
        cardText: "Our All Time Favorite!! Rich chocolately goodness to savour at any time of the day!",
        showButton: true,
        cardBtnText: "Add to cart",
      },
    ],

    Pastries: [
      {
        cardImgSrc: mango,
        cardTitle: "Mango Pastry",
        cardText: "Use Mangos for Desserts! By: Linda Fox It’s mango season! Mangos are plentiful in Mexico in the spring and summer. Wherever you live, now is the time to enjoy this delicious fruit flavour in pastries.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: pineApple,
        cardTitle: "PineApple Pastry",
        cardText: "Pine Apple Pastry is everyone's favorite, so this flavor is sure to win the hearts of every people. It is decorated with cherry and pineapple chips.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: bfp,
        cardTitle: "Black Forest Pastry",
        cardText: " Ingredients for Black Forest Pastry Recipe Dark chocolate sponge 1 Whipped cream 2 cups Fresh cherries pitted, 1 cup + for garnish Sugar.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: blueberry,
        cardTitle: "Blueberry Pastry",
        cardText: " Here's blueberry to impart the flavour like never before. This delicious blueberry pastries is sure to leave you spellbound with its perfect dose of richly whipped cream",
        showButton: true,
        cardBtnText: "Add to cart",
      },
    ],

    Refreshments: [
      {
        cardImgSrc: cc,
        cardTitle: "COLD COFFEE",
        cardText: "Cold coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk, or by brewing the coffee cold.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: shake,
        cardTitle: "SHAKES",
        cardText: "A Milkshake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup etc.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: mocha,
        cardTitle: "MOCHA",
        cardText: "A caffè mocha also called mocaccino is a chocolate-flavoured warm beverage that is a variant of a café latte commonly served in a glass rather than a mug.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
      {
        cardImgSrc: macciato,
        cardTitle: "MACCHIATO",
        cardText: "A caffè macchiato or espresso macchiato is a shot of espresso topped with frothed milk. The word “macchiato” means “stained” in Italian, meaning that the dark espresso is stained by the milk foam on top.",
        showButton: true,
        cardBtnText: "Add to cart",
      },
    ],
  },

};
export default productCard;
