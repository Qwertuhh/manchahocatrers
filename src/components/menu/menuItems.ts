import type {
  MenuCategoryItem,
  MenuSubCategoryItem,
  MenuCategory,
  MenuSubCategory,
  MenuItem,
  MenuItemWithId,
} from "@/types";

const menuCategoriesItems: MenuCategoryItem[] = [
  { name: "All", hindiName: "सभी" },
  { name: "Sweets", hindiName: "मिठाई" },
  { name: "Namkeen", hindiName: "नमकीन" },
  { name: "Vegetables", hindiName: "सब्ज़ी" },
  { name: "Breads, Rice & Dal", hindiName: "रोटी, चावल और दाल" },
  { name: "Rajasthani Cuisine", hindiName: "राजस्थानी व्यंजन" },
  { name: "Floating/Snacks & Stalls", hindiName: "फ्लोटिंग/स्नैक्स और स्टॉल" },
  { name: "Accompaniments", hindiName: "साथ में दिए जाने वाले खाने" },
];

const menuCategories: MenuCategory[] = menuCategoriesItems.map(
  (category, index) => ({
    ...category,
    id: `category-${index}`,
  })
);

// Define Categories

// Define Sub-Categories
const menuSubCategoriesItems: MenuSubCategoryItem[] = [
  // Sweets Subcategories
  {
    name: "Popular Sweets",
    hindiName: "लोकप्रिय मिठाइयाँ",
    parentCategory: menuCategories[1],
  },
  {
    name: "Rabri and Kheer",
    hindiName: "रबड़ी और खीर",
    parentCategory: menuCategories[1],
  },
  {
    name: "Seasonal Dishes",
    hindiName: "मौसमी व्यंजन",
    parentCategory: menuCategories[1],
  },
  {
    name: "Hot Sweets and Halwa",
    hindiName: "गरम मिठाइयाँ और हलवा",
    parentCategory: menuCategories[1],
  },
  {
    name: "Makhana Special",
    hindiName: "मक्खन स्पेशल",
    parentCategory: menuCategories[1],
  },
  {
    name: "Badam and Kaju Special",
    hindiName: "बादाम और काजू स्पेशल",
    parentCategory: menuCategories[1],
  },
  {
    name: "Pista Special",
    hindiName: "पिस्ता स्पेशल",
    parentCategory: menuCategories[1],
  },
  {
    name: "Petha and Gilori",
    hindiName: "पेठा और गिलोरी",
    parentCategory: menuCategories[1],
  },
  {
    name: "Traditional and Other Sweets",
    hindiName: "परंपरागत और अन्य मिठाइयाँ",
    parentCategory: menuCategories[1],
  },

  // Namkeen Subcategories
  {
    name: "Hot Namkeen",
    hindiName: "गरम नमकीन",
    parentCategory: menuCategories[2],
  },
  {
    name: "Dry Namkeen",
    hindiName: "ड्राई नमकीन",
    parentCategory: menuCategories[2],
  },

  // Vegetable Subcategories
  {
    name: "Paneer Dishes",
    hindiName: "पनीर की सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Potato Dishes",
    hindiName: "आलू की सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Other Vegetables",
    hindiName: "अन्य सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Seasonal Vegetables",
    hindiName: "मौसमी सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Dry Vegetables",
    hindiName: "ड्राई सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Special Vegetables",
    hindiName: "स्पेशल सब्जियाँ",
    parentCategory: menuCategories[3],
  },
  {
    name: "Baked Dishes",
    hindiName: "बेक्ड डिश",
    parentCategory: menuCategories[3],
  },
  {
    name: "Rajasthani Vegetables",
    hindiName: "राजस्थानी सब्जियाँ",
    parentCategory: menuCategories[3],
  },

  // * Breads, Rice & Dal Subcategories
  {
    name: "Tandoor & Roti",
    hindiName: "तंदूर और रोटी",
    parentCategory: menuCategories[4],
  },
  { name: "Breads", hindiName: "रोटी", parentCategory: menuCategories[4] },
  { name: "Dal", hindiName: "दाल", parentCategory: menuCategories[4] },

  // * Rajasthani Cuisine Subcategories
  {
    name: "Kachhi Rasoi",
    hindiName: "कच्ची रसोई (राजस्थानी)",
    parentCategory: menuCategories[5],
  },
  { name: "Churma", hindiName: "चूरमा", parentCategory: menuCategories[5] },
  { name: "Bati", hindiName: "बाटी", parentCategory: menuCategories[5] },
  {
    name: "Other Rajasthani Accompaniments",
    hindiName: "अन्य राजस्थानी संगत",
    parentCategory: menuCategories[5],
  },

  // * Stalls Subcategories
  {
    name: "South Indian",
    hindiName: "साउथ इंडियन",
    parentCategory: menuCategories[6],
  },
  {
    name: "Chaat/Stalls",
    hindiName: "चाट/स्टॉल्स",
    parentCategory: menuCategories[6],
  },

  // * Accompaniments
  {
    name: "Raita",
    hindiName: "रेता",
    parentCategory: menuCategories[7],
  },
  {
    name: "Salad",
    hindiName: "सलाड",
    parentCategory: menuCategories[7],
  },
  {
    name: "Papad",
    hindiName: "पपड़",
    parentCategory: menuCategories[7],
  },
  {
    name: "Chutney & Achar",
    hindiName: "चटनी और अचार",
    parentCategory: menuCategories[7],
  },
];

const menuSubCategories: MenuSubCategory[] = menuSubCategoriesItems.map(
  (subCategory, index) => ({
    ...subCategory,
    id: `subcategory-${index}`,
  })
);

const sweetsItems: MenuItem[] = [
  // * लोकप्रिय मिठाइयाँ (Popular Sweets)
  {
    name: "Stuff Rasgulla",
    hindiName: "स्टफ रसगुल्ला",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Byneeze Rasgulla",
    hindiName: "बाईनीज रसगुल्ला",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Rajbhog",
    hindiName: "राजमोग",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Berry Cream Rajbhog",
    hindiName: "बैरी क्रीम राजमोग",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Malai Chap",
    hindiName: "मलाई चाप",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Bengali Sweets (Undi)",
    hindiName: "बंगाली मिठाईयाँ (उण्डी)",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Fruit Rainbow",
    hindiName: "फूट रेनको",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Diamond Rasgulla",
    hindiName: "डायमण्ड रसगुल्ला",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Gudka Rasgulla",
    hindiName: "गुडका रसगुल्ला",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Malai Paan",
    hindiName: "मलाई पान",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Neelam Badam",
    hindiName: "नीलम बादाम",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Pakeeza",
    hindiName: "पाकीजा",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Malai Gori",
    hindiName: "मलाई गोरी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Anarkali",
    hindiName: "अनारकली",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Fancy Shiromani",
    hindiName: "फेन्सी शिरोमणी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Badam Bhog",
    hindiName: "बादाम भोग",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Chenna Poyas",
    hindiName: "छेना पॉयस",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Mango Pakeeza",
    hindiName: "आमपाकिजा",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Kesar Rasmalai",
    hindiName: "केसर ररामालाई",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Chenna Paan",
    hindiName: "छैना पान",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Mango Kalakand",
    hindiName: "आम कलाकन्द",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Strawberry Rasmalai",
    hindiName: "स्ट्रविरी रसमलाई",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Chenna Toast",
    hindiName: "छना टोस्ट",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Lychee Rabdi",
    hindiName: "लीच्ची खरडी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Indrani",
    hindiName: "इन्वाणी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Sheer Sagar",
    hindiName: "सीर सागर",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Rasbhari",
    hindiName: "रसमरी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Pantua",
    hindiName: "पन्तुआ",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Gulab Jamun",
    hindiName: "गुलाब जामुन",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Kala Jamun",
    hindiName: "काता जामुन",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Malpua",
    hindiName: "मालपुआ",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Kesar Jalebi",
    hindiName: "केसर जलेबी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Kesar Kangan",
    hindiName: "केसर कंगन",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Chenna Jalebi",
    hindiName: "छैना जलेबी (असोरटेड सिरप)",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Shahi Jalebi",
    hindiName: "स्वही जलेबी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Tiranga Halwa",
    hindiName: "तिरंगा हलवा",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Live Gulabsakri",
    hindiName: "लाईव गुलाबसकरी",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Gondpak",
    hindiName: "गोन्दपाक",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },
  {
    name: "Amrit Bhog",
    hindiName: "अमृत भोग",
    category: menuSubCategories[0],
    hindiCategory: "लोकप्रिय मिठाइयाँ",
    popular: false,
  },

  // * रबड़ी और खीर (Rabdi and Kheer)
  {
    name: "Rabdi",
    hindiName: "रवडी",
    category: menuSubCategories[1],
    hindiCategory: "रबड़ी और खीर",
  },
  {
    name: "Sitaphal Rabdi",
    hindiName: "सीताफल रबडी",
    category: menuSubCategories[1],
    hindiCategory: "रबड़ी और खीर",
  },
  {
    name: "Sabudana Kheer",
    hindiName: "साबुदाना खीर",
    category: menuSubCategories[1],
    hindiCategory: "रबड़ी और खीर",
  },
  {
    name: "Paneer Kheer",
    hindiName: "पनीर खीर",
    category: menuSubCategories[1],
    hindiCategory: "रबड़ी और खीर",
  },
  {
    name: "Kheer",
    hindiName: "खीर",
    category: menuSubCategories[1],
    hindiCategory: "रबड़ी और खीर",
  },

  // * मौसमी व्यंजन (Seasonal Dishes)
  {
    name: "Aag Khadi (Seasonal)",
    hindiName: "आग खड़ी (सीजनल)",
    category: menuSubCategories[2],
    hindiCategory: "मौसमी व्यंजन",
  },
  {
    name: "Gajar Halwa (Seasonal)",
    hindiName: "गाजर हलवा (सीजनल)",
    category: menuSubCategories[2],
    hindiCategory: "मौसमी व्यंजन",
  },

  // * गरम मिठाइयाँ और हलवा (Hot Sweets and Halwa)
  {
    name: "Baked Gulab Jamun",
    hindiName: "बेक्ड गुलाब जामुन",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Baked Malpua",
    hindiName: "बेक्ड मालपुआ",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Moong Dal Halwa",
    hindiName: "मुंग दाल हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Moong Badam Halwa",
    hindiName: "मुंग बादाम हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Akhrot Halwa",
    hindiName: "अखरोट हलया",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Kesar Badam Mishri Mawa",
    hindiName: "केसर बादाम मिश्री मावा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Mishri Mawa",
    hindiName: "मिश्री मावा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Khadi Ghevar",
    hindiName: "खड़ी घेवर",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Mango Halwa",
    hindiName: "मैंगो हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Mango Mishri Mawa",
    hindiName: "मैंगो मिश्री मावा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Suji Halwa",
    hindiName: "सुजी हलया",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Fruit Halwa",
    hindiName: "फूट हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Matar Halwa",
    hindiName: "मटर हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Pineapple Halwa",
    hindiName: "पाईनएप्पल हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },
  {
    name: "Badam Halwa",
    hindiName: "बादाम हलवा",
    category: menuSubCategories[3],
    hindiCategory: "गरम मिठाइयाँ और हलवा",
  },

  // * मक्खन स्पेशल (Makkhan Special)
  {
    name: "Makkhan Samosa",
    hindiName: "मक्खन समोसा",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Rainbow",
    hindiName: "मक्खन रेनबो",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Tarbooj",
    hindiName: "मक्खन तरबूज",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Sev",
    hindiName: "मक्खन सेव",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Anar",
    hindiName: "मक्खन अनार",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Mewa Bati",
    hindiName: "मक्खन मेवा बाटी",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },
  {
    name: "Makkhan Fruit Sandwich",
    hindiName: "मक्खन फ्रूट संण्डविध",
    category: menuSubCategories[4],
    hindiCategory: "मक्खन स्पेशल",
  },

  // * बादाम और काजू स्पेशल (Badam and Kaju Special)
  {
    name: "Phirni",
    hindiName: "फिरनी",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Kiwi Malai Gori",
    hindiName: "कीवी मलाई गोरी",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Pista Halwa",
    hindiName: "बादाम पिस्ता हलवा",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Kaju Pista Badam Katli",
    hindiName: "काजू पिस्ता बादाम कतली",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Baked Badam Katli",
    hindiName: "बेक्ड बादाम कतली",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Katli",
    hindiName: "बादाम कतली",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Tirangi Katli",
    hindiName: "तिरंगी कतली",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Pista Roll",
    hindiName: "बादाम पिस्ता रोल",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Pista Sandwich",
    hindiName: "बादाम पिस्ता संण्डविच",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Kaju Jalebi",
    hindiName: "काजू जलेबी",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Kaju Kalash",
    hindiName: "काजू कलश",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Kaju Pista Paan",
    hindiName: "काजू पिस्ता पान",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Softy",
    hindiName: "बादाम सॉफ्टी",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },
  {
    name: "Badam Bati",
    hindiName: "बादाम बाटी",
    category: menuSubCategories[5],
    hindiCategory: "बादाम और काजू स्पेशल",
  },

  // * पिस्ता स्पेशल (Pista Special)
  {
    name: "Pista Loch",
    hindiName: "पिस्ता लोच",
    category: menuSubCategories[6],
    hindiCategory: "पिस्ता स्पेशल",
  },
  {
    name: "Pista Kamal",
    hindiName: "पिस्ता कमल",
    category: menuSubCategories[6],
    hindiCategory: "पिस्ता स्पेशल",
  },
  {
    name: "Pista Paan",
    hindiName: "पिस्ता पान",
    category: menuSubCategories[6],
    hindiCategory: "पिस्ता स्पेशल",
  },
  {
    name: "Pista Katli",
    hindiName: "पिस्ता कतली",
    category: menuSubCategories[6],
    hindiCategory: "पिस्ता स्पेशल",
  },
  {
    name: "Pista Stuff Angoor Roll",
    hindiName: "पिस्ता स्टफ अंगूर रोल",
    category: menuSubCategories[6],
    hindiCategory: "पिस्ता स्पेशल",
  },

  // * पेठा और गिलोरी (Petha and Gilori)
  {
    name: "Mango Gilori",
    hindiName: "मैंगो गिलोरी",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },
  {
    name: "Angoori Petha",
    hindiName: "अंगूरी पेठा",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },
  {
    name: "Kesar Angoori Petha",
    hindiName: "कंसर अंगूरी पेठा",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },
  {
    name: "Pineapple Petha Sandesh",
    hindiName: "पाईनेपन पेठा सदेश",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },
  {
    name: "Paan Gilori",
    hindiName: "पान गिलोरी",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },
  {
    name: "Mango Petha Sandwich",
    hindiName: "मंगो पेठा संण्डविच",
    category: menuSubCategories[7],
    hindiCategory: "पेठा और गिलोरी",
  },

  // * परंपरागत और अन्य मिठाइयाँ (Traditional and Other Sweets)
  {
    name: "Mawa Kachori",
    hindiName: "मावा कचौरी",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Diljani",
    hindiName: "दिलजानी",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Mohanthal",
    hindiName: "मोहनथाल",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Sohan Papdi",
    hindiName: "सोहन पपडी",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Chandragala",
    hindiName: "चन्द्रगला",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Barik Boondi Laddu",
    hindiName: "बारीक बूदी लड्डू",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Mini Ghevar Rabdi",
    hindiName: "मिनी घेवर रवडी",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Moti Pak",
    hindiName: "मोती पाक",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Mysore Pak",
    hindiName: "मैसर पाक",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Chougni Ka Laddu",
    hindiName: "चौगनी का लड्डू",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
  {
    name: "Dry Fruit Dessert",
    hindiName: "ड्राई फ्रूट डेजर्ट",
    category: menuSubCategories[8],
    hindiCategory: "परंपरागत और अन्य मिठाइयाँ",
  },
];

const  namkeenItems: MenuItem[] = [
  // * --- नमकीन (Namkeen) ---
  
  // * गरम नमकीन (Hot Namkeen)
  { name: "Matar Kachori", hindiName: "मटर कचौरी", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Dal Pakodi", hindiName: "दाल पकौड़ी", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Matar Potli", hindiName: "मटर पोटली", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Jhar ki Bhujia", hindiName: "झर की भुजिया", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Kaju Matar Samosa", hindiName: "काजू मटर समोसा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Aloo Matar Kofta", hindiName: "आलू मटर कोफ्ता", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Mix Pakoda", hindiName: "मिक्स पकौड़ा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Prem Prakash Samosa", hindiName: "प्रेम प्रकाश समोसा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Nargisi Kofta", hindiName: "नर्गिसी कोफ्ता", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Paneer Pakoda", hindiName: "पनीर पकौड़ा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Chinese Samosa", hindiName: "चाईनीज समोसा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Kalmi Bada", hindiName: "कलमी बड़ा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Dahi Samosa", hindiName: "दही समोसा", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },
  { name: "Dal Kachori", hindiName: "दाल कचारी", category: menuSubCategories[9], hindiCategory: "गरम नमकीन", popular: false },

  // * ड्राई नमकीन (Dry Namkeen)
  { name: "Dalmoth", hindiName: "दालमोठ", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },
  { name: "Chola Mogar", hindiName: "चौला मोगर", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },
  { name: "Pudina Chana Dal", hindiName: "पोदीना चना दाल", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },
  { name: "Aloo Lachha with Dry Fruits", hindiName: "आलू लच्छा विद् ड्राई फ्रूट्स", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },
  { name: "Malka Masur with Dry Fruits", hindiName: "मलका मसूर विद ड्राई फ्रूट्स", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },
  { name: "Corn Flakes with Dry Fruits", hindiName: "कॉर्न फ्लेक्स विद् ड्राई फ्रूट्स", category: menuSubCategories[10], hindiCategory: "ड्राई नमकीन", popular: false },

]

const vegetableItems: MenuItem[] = [
  // * --- सब्ज़ी (Vegetables) ---

  // * पनीर की सब्जियाँ (Paneer Dishes)
  { name: "Butter Paneer Masala", hindiName: "बटर पनीर मसाला", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: true },
  { name: "Matar Paneer", hindiName: "मटर पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Kadhai Paneer", hindiName: "कढ़ाई पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Shahi Paneer", hindiName: "शाही पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Palak Paneer", hindiName: "पालक पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Pudina Paneer", hindiName: "पोदीना पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Pasanda", hindiName: "पनीर पसंदा", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Katran", hindiName: "पनीर कतरन", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Bhurji", hindiName: "पनीर भुर्जी", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Tiranga Paneer", hindiName: "तिरंगा पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Zafrani", hindiName: "पनीर जाफरानी (केसर)", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Lachha Paneer", hindiName: "लच्छा पनीर", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Do Pyaza", hindiName: "पनीर दो प्याजा", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Tikka Lababdar", hindiName: "पनीर टिक्का लबाबदार", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Kashmiri Paneer", hindiName: "कश्मीरी पनीर (सफेद)", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },
  { name: "Paneer Takatak", hindiName: "पनीर टकाटक", category: menuSubCategories[11], hindiCategory: "पनीर की सब्जियाँ", popular: false },

  // आलू की सब्जियाँ (Potato Dishes)
  { name: "Dum Aloo", hindiName: "दम आलू", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },
  { name: "Stuff Aloo", hindiName: "स्टफ आलू", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },
  { name: "Chutney wala Aloo", hindiName: "चटनी वाला आलू", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },
  { name: "Achari Aloo", hindiName: "अचारी आलू", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },
  { name: "Aloo Zafrani", hindiName: "आलू जाफरानी (केसर)", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },
  { name: "Aloo Pyaz", hindiName: "आलू प्याज", category: menuSubCategories[12], hindiCategory: "आलू की सब्जियाँ", popular: false },

  // राजस्थानी सब्जियाँ (Rajasthani Vegetables)
  { name: "Phali Fry", hindiName: "फली फ्राई", category: menuSubCategories[18], hindiCategory: "राजस्थानी सब्जियाँ", popular: false },
  { name: "Hare Chane ki Sabzi", hindiName: "हरे चने की सब्जी", category: menuSubCategories[18], hindiCategory: "राजस्थानी सब्जियाँ", popular: false },
  { name: "Ker Sangri", hindiName: "कैर सांगरी", category: menuSubCategories[18], hindiCategory: "राजस्थानी सब्जियाँ", popular: true },
  { name: "Jodhpuri Mirchi Sabzi", hindiName: "जोधपुरी मिर्ची की सब्जी", category: menuSubCategories[18], hindiCategory: "राजस्थानी सब्जियाँ", popular: false },
  { name: "Rajasthani Kadhi", hindiName: "राजस्थानी कढ़ी", category: menuSubCategories[18], hindiCategory: "राजस्थानी सब्जियाँ", popular: false },

  // दाल (Dal)
  { name: "Dal Fry Jeera", hindiName: "दाल फ्राई (जीरा)", category: menuSubCategories[19], hindiCategory: "दाल", popular: false },
  { name: "Dal Panchmel", hindiName: "दाल पंचमेल", category: menuSubCategories[19], hindiCategory: "दाल", popular: false },
  { name: "Dal Bukhara", hindiName: "दाल बुखारा", category: menuSubCategories[19], hindiCategory: "दाल", popular: false },
  { name: "Dal Makhani", hindiName: "दाल मखानी", category: menuSubCategories[19], hindiCategory: "दाल", popular: true },
];

const menuItems: MenuItem[] = [...sweetsItems, ...namkeenItems, ...vegetableItems];

const menuItemsWithId: MenuItemWithId[] = menuItems.map((item, index) => ({
  ...item,
  id: index.toString(),
}));

export { menuCategories, menuSubCategories, menuItems, menuItemsWithId };
