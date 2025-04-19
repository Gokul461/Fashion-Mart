import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";
import p9_img from "./product_3.png";
import p10_img from './homeliving4.avif'
import p11_img from './beauty6.webp'
import p12_img from './homeliving3.avif'
import p13_img from "./product_31.png";
// Conversion rate from USD to INR
const conversionRate = 83;

let new_collections = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: (50.0 * conversionRate),
    old_price:  (80.5 * conversionRate),
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p2_img,
    new_price:  (85.0 * conversionRate),
    old_price:  (120.5 * conversionRate),
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p3_img,
    new_price:  (60.0 * conversionRate),
    old_price: (100.5 * conversionRate),
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price:  (100.0 * conversionRate),
    old_price:  (150.0 * conversionRate),
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p5_img,
    new_price:  (50.0 * conversionRate),
    old_price:  (80.5 * conversionRate),
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p6_img,
    new_price:  (85.0 * conversionRate),
    old_price: (120.5 * conversionRate),
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p7_img,
    new_price:  (60.0 * conversionRate),
    old_price: (100.5 * conversionRate),
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p8_img,
    new_price:  (100.0 * conversionRate),
    old_price:  (150.0 * conversionRate),
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Blouse",
    category: "women",
    image: p9_img,
    new_price:  (60.0 * 83),
    old_price:  (100.5 * 83),
    ratings: 4.9
  },
  {
    id: 40,
    name: "Cotton Oriental Set of 2 Bath Towel",
    category: "homeandliving",
    image: p10_img,
    new_price: "1,494",
    old_price: "2,299",
    ratings: 3.2
  },
  {
    id: 54,
    name: "4 in 1 Hair Styler Hair Straightening Brush",
    category: "beauty",
    image: p11_img,
    new_price: "2,199",
    old_price: "3,999",
    ratings: 4.0
  },
  {
    id: 39,
    name: "Tribal Print Antiskid Runner & Mat",
    category: "homeandliving",
    image: p12_img,
    new_price: "480",
    old_price: "1,999",
    ratings: 4.5
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p13_img,
    new_price: (85.0 * 83),
    old_price: (120.5 * 83),
    rating:4
  },
];

export default new_collections;
