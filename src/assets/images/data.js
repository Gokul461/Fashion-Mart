import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';

// Conversion rate from USD to INR
const conversionRate = 83;

let data_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price:  (50.00 * conversionRate),
    old_price: (80.50 * conversionRate),
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: (85.00 * conversionRate),
    old_price: (120.50 * conversionRate),
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price:(60.00 * conversionRate),
    old_price:  (100.50 * conversionRate),
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price:  (100.00 * conversionRate),
    old_price:  (150.00 * conversionRate),
  },
];

export default data_product;
