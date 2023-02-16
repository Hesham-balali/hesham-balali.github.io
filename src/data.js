const cats = [
  {
    name: "Beef and Mustard Pie",
    thumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    id: "52874",
  },
  {
    name: "Beef and Oyster pie",
    thumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
    id: "52878",
  },
  {
    name: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    thumb: "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    id: "52997",
  },
  {
    name: "Beef Bourguignon",
    thumb: "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
    id: "52904",
  },
  {
    name: "Beef Brisket Pot Roast",
    thumb: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
    id: "52812",
  },
  {
    name: "Beef Dumpling Stew",
    thumb: "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
    id: "52873",
  },
  {
    name: "Beef Lo Mein",
    thumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    id: "52952",
  },
  {
    name: "Beef Rendang",
    thumb: "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
    id: "53053",
  },
  {
    name: "Beef stroganoff",
    thumb: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    id: "52834",
  },
  {
    name: "Beef Sunday Roast",
    thumb: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
    id: "52824",
  },
  {
    name: "Beef Wellington",
    thumb: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    id: "52803",
  },
  {
    name: "Big Mac",
    thumb: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    id: "53013",
  },
  {
    name: "Bitterballen (Dutch meatballs)",
    thumb: "https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg",
    id: "52979",
  },
  {
    name: "Braised Beef Chilli",
    thumb: "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    id: "52826",
  },
  {
    name: "Cevapi Sausages",
    thumb: "https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",
    id: "53055",
  },
  {
    name: "Chivito uruguayo",
    thumb: "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
    id: "53063",
  },
  {
    name: "Corned Beef and Cabbage",
    thumb: "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
    id: "52998",
  },
  {
    name: "Croatian Bean Stew",
    thumb: "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
    id: "53058",
  },
  {
    name: "Croatian lamb peka",
    thumb: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    id: "53056",
  },
  {
    name: "Egyptian Fatteh",
    thumb: "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg",
    id: "53031",
  },
  {
    name: "Gołąbki (cabbage roll)",
    thumb: "https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg",
    id: "53021",
  },
  {
    name: "Irish stew",
    thumb: "https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg",
    id: "52781",
  },
  {
    name: "Jamaican Beef Patties",
    thumb: "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
    id: "52938",
  },
  {
    name: "Ma Po Tofu",
    thumb: "https://www.themealdb.com/images/media/meals/1525874812.jpg",
    id: "52947",
  },
  {
    name: "Massaman Beef curry",
    thumb: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
    id: "52827",
  },
  {
    name: "Minced Beef Pie",
    thumb: "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
    id: "52876",
  },
  {
    name: "Montreal Smoked Meat",
    thumb: "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
    id: "52927",
  },
  {
    name: "Moussaka",
    thumb: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
    id: "53006",
  },
  {
    name: "Mulukhiyah",
    thumb: "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg",
    id: "53029",
  },
  {
    name: "Oxtail with broad beans",
    thumb: "https://www.themealdb.com/images/media/meals/1520083578.jpg",
    id: "52943",
  },
  {
    name: "Paszteciki (Polish Pasties)",
    thumb: "https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg",
    id: "53017",
  },
  {
    name: "Pate Chinois",
    thumb: "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg",
    id: "52930",
  },
  {
    name: "Portuguese prego with green piri-piri",
    thumb: "https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg",
    id: "53042",
  },
  {
    name: "Red Peas Soup",
    thumb: "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
    id: "52941",
  },
  {
    name: "Roti john",
    thumb: "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
    id: "53052",
  },
  {
    name: "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
    thumb: "https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg",
    id: "52992",
  },
  {
    name: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    id: "52770",
  },
  {
    name: "Steak and Kidney Pie",
    thumb: "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",
    id: "52881",
  },
  {
    name: "Steak Diane",
    thumb: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
    id: "52935",
  },
  {
    name: "Szechuan Beef",
    thumb: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
    id: "52950",
  },
  {
    name: "Traditional Croatian Goulash",
    thumb: "https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg",
    id: "53057",
  },
  {
    name: "Vegetable Shepherd's Pie",
    thumb: "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
    id: "53000",
  },
];

export default cats;
