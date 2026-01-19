/**
 * Copyright (c) 2026 Manchao Catrers, Kumar Jain
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type {
    MenuCategoryItem,
    MenuSubCategoryItem,
    MenuCategory,
    MenuSubCategory,
    MenuItem,
    MenuItemWithId,
} from '@/types';

const menuCategoriesItems: MenuCategoryItem[] = [
    { name: 'All', hindiName: 'सभी' },
    { name: 'Sweets', hindiName: 'मिठाई' },
    { name: 'Namkeen', hindiName: 'नमकीन' },

    { name: 'Vegetables', hindiName: 'सब्ज़ी' },
    { name: 'Breads, Rice & Dal', hindiName: 'रोटी, चावल और दाल' },
    { name: 'Rajasthani Cuisine', hindiName: 'राजस्थानी व्यंजन' },

    {
        name: 'Floating/Snacks & Stalls',
        hindiName: 'फ्लोटिंग/स्नैक्स और स्टॉल',
    },
    { name: 'Accompaniments', hindiName: 'साथ में दिए जाने वाले खाने' },
    { name: 'Appetizers', hindiName: 'अपेटाइजर्स' },

    { name: 'Drinks', hindiName: 'द्राइंक्स' },
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
        name: 'Popular Sweets',
        hindiName: 'लोकप्रिय मिठाइयाँ',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Rabri and Kheer',
        hindiName: 'रबड़ी और खीर',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Seasonal Dishes',
        hindiName: 'मौसमी व्यंजन',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Hot Sweets and Halwa',
        hindiName: 'गरम मिठाइयाँ और हलवा',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Makhana Special',
        hindiName: 'मक्खन स्पेशल',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Badam and Kaju Special',
        hindiName: 'बादाम और काजू स्पेशल',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Pista Special',
        hindiName: 'पिस्ता स्पेशल',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Petha and Gilori',
        hindiName: 'पेठा और गिलोरी',
        parentCategory: menuCategories[1],
    },
    {
        name: 'Traditional and Other Sweets',
        hindiName: 'परंपरागत और अन्य मिठाइयाँ',
        parentCategory: menuCategories[1],
    },

    // Namkeen Subcategories
    {
        name: 'Hot Namkeen',
        hindiName: 'गरम नमकीन',
        parentCategory: menuCategories[2],
    },
    {
        name: 'Dry Namkeen',
        hindiName: 'ड्राई नमकीन',
        parentCategory: menuCategories[2],
    },

    // Vegetable Subcategories
    {
        name: 'Paneer Dishes',
        hindiName: 'पनीर की सब्जियाँ',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Potato Dishes',
        hindiName: 'आलू की सब्जियाँ',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Seasonal Vegetables',
        hindiName: 'मौसमी सब्जियाँ',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Dry Vegetables',
        hindiName: 'ड्राई सब्जियाँ',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Special Vegetables',
        hindiName: 'स्पेशल सब्जियाँ',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Baked Dishes',
        hindiName: 'बेक्ड डिश',
        parentCategory: menuCategories[3],
    },
    {
        name: 'Rajasthani Vegetables',
        hindiName: 'राजस्थानी सब्जियाँ',
        parentCategory: menuCategories[3],
    },

    // * Breads, Rice & Dal Subcategories
    {
        name: 'Tandoor & Roti',
        hindiName: 'तंदूर और रोटी',
        parentCategory: menuCategories[4],
    },
    { name: 'Breads', hindiName: 'रोटी', parentCategory: menuCategories[4] },
    { name: 'Dal', hindiName: 'दाल', parentCategory: menuCategories[4] },

    // * Rajasthani Cuisine Subcategories
    {
        name: 'Kachhi Rasoi',
        hindiName: 'कच्ची रसोई (राजस्थानी)',
        parentCategory: menuCategories[5],
    },
    { name: 'Churma', hindiName: 'चूरमा', parentCategory: menuCategories[5] },
    { name: 'Bati', hindiName: 'बाटी', parentCategory: menuCategories[5] },
    {
        name: 'Other Rajasthani Accompaniments',
        hindiName: 'अन्य राजस्थानी संगत',
        parentCategory: menuCategories[5],
    },

    // * Stalls Subcategories
    {
        name: 'South Indian',
        hindiName: 'साउथ इंडियन',
        parentCategory: menuCategories[6],
    },
    {
        name: 'Chaat/Stalls',
        hindiName: 'चाट/स्टॉल्स',
        parentCategory: menuCategories[6],
    },

    // * Accompaniments
    {
        name: 'Raita',
        hindiName: 'रेता',
        parentCategory: menuCategories[7],
    },
    {
        name: 'Salad',
        hindiName: 'सलाड',
        parentCategory: menuCategories[7],
    },
    {
        name: 'Papad',
        hindiName: 'पपड़',
        parentCategory: menuCategories[7],
    },
    {
        name: 'Chutney & Achar',
        hindiName: 'चटनी और अचार',
        parentCategory: menuCategories[7],
    },

    // * Appetizers
    {
        name: 'Hot Appetizers',
        hindiName: 'गरम अपेटाइजर्स',
        parentCategory: menuCategories[8],
    },
    {
        name: 'Cold Appetizers',
        hindiName: 'ठंडे अपेटाइजर्स',
        parentCategory: menuCategories[8],
    },

    // * Drinks
    {
        name: 'Shake',
        hindiName: 'शैक',
        parentCategory: menuCategories[9],
    },
    {
        name: 'Juice',
        hindiName: 'जुइस',
        parentCategory: menuCategories[9],
    },
    {
        name: 'Mojito',
        hindiName: 'मोहिटो',
        parentCategory: menuCategories[9],
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
        name: 'Stuff Rasgulla',
        hindiName: 'स्टफ रसगुल्ला',
        imageSrc:
            'https://indian.community/wp-content/uploads/2025/09/Blog-Ic-2025-09-11T105325.628.png',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malai Goli',
        hindiName: 'मलाई गोरी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Byneeze Rasgulla',
        hindiName: 'बाईनीज रसगुल्ला',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Rajbhog',
        hindiName: 'राजमोग',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Berry Cream Rajbhog',
        hindiName: 'बैरी क्रीम राजमोग',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malai Chap',
        hindiName: 'मलाई चाप',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Bengali Sweets (Undi)',
        hindiName: 'बंगाली मिठाईयाँ (उण्डी)',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Fruit Rainbow',
        hindiName: 'फूट रेनको',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Diamond Rasgulla',
        hindiName: 'डायमण्ड रसगुल्ला',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Gudka Rasgulla',
        hindiName: 'गुडका रसगुल्ला',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malai Paan',
        hindiName: 'मलाई पान',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Neelam Badam',
        hindiName: 'नीलम बादाम',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Pakeeza',
        hindiName: 'पाकीजा',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malai Gori',
        hindiName: 'मलाई गोरी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Anarkali',
        hindiName: 'अनारकली',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Fancy Shiromani',
        hindiName: 'फेन्सी शिरोमणी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Badam Bhog',
        hindiName: 'बादाम भोग',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Chenna Poyas',
        hindiName: 'छेना पॉयस',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Mango Pakeeza',
        hindiName: 'आमपाकिजा',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Kesar Rasmalai',
        hindiName: 'केसर रसमालाई',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Chenna Paan',
        hindiName: 'छैना पान',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Mango Kalakand',
        hindiName: 'आम कलाकन्द',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Strawberry Rasmalai',
        hindiName: 'स्ट्रविरी रसमलाई',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Chenna Toast',
        hindiName: 'छना टोस्ट',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Lychee Rabdi',
        hindiName: 'लीच्ची खरडी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Indrani',
        hindiName: 'इन्वाणी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Sheer Sagar',
        hindiName: 'सीर सागर',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Rasbhari',
        hindiName: 'रसमरी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Pantua',
        hindiName: 'पन्तुआ',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Gulab Jamun',
        hindiName: 'गुलाब जामुन',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Kala Jamun',
        hindiName: 'काता जामुन',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malpua',
        hindiName: 'मालपुआ',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Kesar Jalebi',
        hindiName: 'केसर जलेबी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Kesar Kangan',
        hindiName: 'केसर कंगन',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Chenna Jalebi',
        hindiName: 'छैना जलेबी (असोरटेड सिरप)',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Shahi Jalebi',
        hindiName: 'स्वही जलेबी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Tiranga Halwa',
        hindiName: 'तिरंगा हलवा',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Live Gulabsakri',
        hindiName: 'लाईव गुलाबसकरी',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Gondpak',
        hindiName: 'गोन्दपाक',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Amrit Bhog',
        hindiName: 'अमृत भोग',
        category: 'Popular Sweets',
        hindiCategory: 'लोकप्रिय मिठाइयाँ',
        popular: false,
    },

    // * रबड़ी और खीर (Rabdi and Kheer)
    {
        name: 'Rabdi',
        hindiName: 'रवडी',
        category: 'Rabri and Kheer',
        hindiCategory: 'रबड़ी और खीर',
    },
    {
        name: 'Sitaphal Rabdi',
        hindiName: 'सीताफल रबडी',
        category: 'Rabri and Kheer',
        hindiCategory: 'रबड़ी और खीर',
    },
    {
        name: 'Sabudana Kheer',
        hindiName: 'साबुदाना खीर',
        category: 'Rabri and Kheer',
        hindiCategory: 'रबड़ी और खीर',
    },
    {
        name: 'Paneer Kheer',
        hindiName: 'पनीर खीर',
        category: 'Rabri and Kheer',
        hindiCategory: 'रबड़ी और खीर',
    },
    {
        name: 'Kheer',
        hindiName: 'खीर',
        category: 'Rabri and Kheer',
        hindiCategory: 'रबड़ी और खीर',
    },

    // * मौसमी व्यंजन (Seasonal Dishes)
    {
        name: 'Aag Khadi (Seasonal)',
        hindiName: 'आग खड़ी (सीजनल)',
        category: 'Seasonal Dishes',
        hindiCategory: 'मौसमी व्यंजन',
    },
    {
        name: 'Gajar Halwa (Seasonal)',
        hindiName: 'गाजर हलवा (सीजनल)',
        category: 'Seasonal Dishes',
        hindiCategory: 'मौसमी व्यंजन',
    },

    // * गरम मिठाइयाँ और हलवा (Hot Sweets and Halwa)
    {
        name: 'Baked Gulab Jamun',
        hindiName: 'बेक्ड गुलाब जामुन',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Baked Malpua',
        hindiName: 'बेक्ड मालपुआ',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Moong Dal Halwa',
        hindiName: 'मुंग दाल हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Moong Badam Halwa',
        hindiName: 'मुंग बादाम हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Akhrot Halwa',
        hindiName: 'अखरोट हलया',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Kesar Badam Mishri Mawa',
        hindiName: 'केसर बादाम मिश्री मावा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Mishri Mawa',
        hindiName: 'मिश्री मावा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Khadi Ghevar',
        hindiName: 'खड़ी घेवर',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Mango Halwa',
        hindiName: 'मैंगो हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Mango Mishri Mawa',
        hindiName: 'मैंगो मिश्री मावा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Suji Halwa',
        hindiName: 'सुजी हलया',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Fruit Halwa',
        hindiName: 'फूट हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Matar Halwa',
        hindiName: 'मटर हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Pineapple Halwa',
        hindiName: 'पाईनएप्पल हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },
    {
        name: 'Badam Halwa',
        hindiName: 'बादाम हलवा',
        category: 'Hot Sweets and Halwa',
        hindiCategory: 'गरम मिठाइयाँ और हलवा',
    },

    // * मक्खन स्पेशल (Makkhan Special)
    {
        name: 'Makkhan Samosa',
        hindiName: 'मक्खन समोसा',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Rainbow',
        hindiName: 'मक्खन रेनबो',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Tarbooj',
        hindiName: 'मक्खन तरबूज',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Sev',
        hindiName: 'मक्खन सेव',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Anar',
        hindiName: 'मक्खन अनार',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Mewa Bati',
        hindiName: 'मक्खन मेवा बाटी',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },
    {
        name: 'Makkhan Fruit Sandwich',
        hindiName: 'मक्खन फ्रूट संण्डविध',
        category: 'Makhana Special',
        hindiCategory: 'मक्खन स्पेशल',
    },

    // * बादाम और काजू स्पेशल (Badam and Kaju Special)
    {
        name: 'Phirni',
        hindiName: 'फिरनी',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Kiwi Malai Gori',
        hindiName: 'कीवी मलाई गोरी',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Pista Halwa',
        hindiName: 'बादाम पिस्ता हलवा',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Kaju Pista Badam Katli',
        hindiName: 'काजू पिस्ता बादाम कतली',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Baked Badam Katli',
        hindiName: 'बेक्ड बादाम कतली',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Katli',
        hindiName: 'बादाम कतली',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Tirangi Katli',
        hindiName: 'तिरंगी कतली',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Pista Roll',
        hindiName: 'बादाम पिस्ता रोल',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Pista Sandwich',
        hindiName: 'बादाम पिस्ता संण्डविच',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Kaju Jalebi',
        hindiName: 'काजू जलेबी',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Kaju Kalash',
        hindiName: 'काजू कलश',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Kaju Pista Paan',
        hindiName: 'काजू पिस्ता पान',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Softy',
        hindiName: 'बादाम सॉफ्टी',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },
    {
        name: 'Badam Bati',
        hindiName: 'बादाम बाटी',
        category: 'Badam and Kaju Special',
        hindiCategory: 'बादाम और काजू स्पेशल',
    },

    // * पिस्ता स्पेशल (Pista Special)
    {
        name: 'Pista Loch',
        hindiName: 'पिस्ता लोच',
        category: 'Pista Special',
        hindiCategory: 'पिस्ता स्पेशल',
    },
    {
        name: 'Pista Kamal',
        hindiName: 'पिस्ता कमल',
        category: 'Pista Special',
        hindiCategory: 'पिस्ता स्पेशल',
    },
    {
        name: 'Pista Paan',
        hindiName: 'पिस्ता पान',
        category: 'Pista Special',
        hindiCategory: 'पिस्ता स्पेशल',
    },
    {
        name: 'Pista Katli',
        hindiName: 'पिस्ता कतली',
        category: 'Pista Special',
        hindiCategory: 'पिस्ता स्पेशल',
    },
    {
        name: 'Pista Stuff Angoor Roll',
        hindiName: 'पिस्ता स्टफ अंगूर रोल',
        category: 'Pista Special',
        hindiCategory: 'पिस्ता स्पेशल',
    },

    // * पेठा और गिलोरी (Petha and Gilori)
    {
        name: 'Mango Gilori',
        hindiName: 'मैंगो गिलोरी',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },
    {
        name: 'Angoori Petha',
        hindiName: 'अंगूरी पेठा',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },
    {
        name: 'Kesar Angoori Petha',
        hindiName: 'कंसर अंगूरी पेठा',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },
    {
        name: 'Pineapple Petha Sandesh',
        hindiName: 'पाईनेपन पेठा सदेश',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },
    {
        name: 'Paan Gilori',
        hindiName: 'पान गिलोरी',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },
    {
        name: 'Mango Petha Sandwich',
        hindiName: 'मंगो पेठा संण्डविच',
        category: 'Petha and Gilori',
        hindiCategory: 'पेठा और गिलोरी',
    },

    // * परंपरागत और अन्य मिठाइयाँ (Traditional and Other Sweets)
    {
        name: 'Mawa Kachori',
        hindiName: 'मावा कचौरी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Diljani',
        hindiName: 'दिलजानी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Mohanthal',
        hindiName: 'मोहनथाल',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Sohan Papdi',
        hindiName: 'सोहन पपडी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Chandragala',
        hindiName: 'चन्द्रगला',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Barik Boondi Laddu',
        hindiName: 'बारीक बूदी लड्डू',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Mini Ghevar Rabdi',
        hindiName: 'मिनी घेवर रवडी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Moti Pak',
        hindiName: 'मोती पाक',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Mysore Pak',
        hindiName: 'मैसर पाक',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Chougni Ka Laddu',
        hindiName: 'चौगनी का लड्डू',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Dry Fruit Dessert',
        hindiName: 'ड्राई फ्रूट डेजर्ट',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
    },
    {
        name: 'Fried Kaju',
        hindiName: 'फ्राईड काजू',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Fried Badam',
        hindiName: 'फ्राईड बादाम',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Chenna Balls',
        hindiName: 'छैना बॉल्स',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Kesar Barfi',
        hindiName: 'केसर बर्फी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Sandesh Lychee',
        hindiName: 'संदेश लीची',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Sandesh Strawberry',
        hindiName: 'संदेश स्ट्रॉबेरी',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Pista Loch',
        hindiName: 'पिस्ता लोच',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: false,
    },
    {
        name: 'Malai Paan',
        hindiName: 'मलाई पान',
        category: 'Traditional and Other Sweets',
        hindiCategory: 'परंपरागत और अन्य मिठाइयाँ',
        popular: true,
    },
];

const namkeenItems: MenuItem[] = [
    // * --- नमकीन (Namkeen) ---

    // * गरम नमकीन (Hot Namkeen)
    {
        name: 'Matar Kachori',
        hindiName: 'मटर कचौरी',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Dal Pakodi',
        hindiName: 'दाल पकौड़ी',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Matar Potli',
        hindiName: 'मटर पोटली',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Jhar ki Bhujia',
        hindiName: 'झर की भुजिया',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Kaju Matar Samosa',
        hindiName: 'काजू मटर समोसा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Aloo Matar Kofta',
        hindiName: 'आलू मटर कोफ्ता',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Mix Pakoda',
        hindiName: 'मिक्स पकौड़ा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Prem Prakash Samosa',
        hindiName: 'प्रेम प्रकाश समोसा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Nargisi Kofta',
        hindiName: 'नर्गिसी कोफ्ता',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Paneer Pakoda',
        hindiName: 'पनीर पकौड़ा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Chinese Samosa',
        hindiName: 'चाईनीज समोसा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Kalmi Bada',
        hindiName: 'कलमी बड़ा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Dahi Samosa',
        hindiName: 'दही समोसा',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },
    {
        name: 'Dal Kachori',
        hindiName: 'दाल कचारी',
        category: 'Hot Namkeen',
        hindiCategory: 'गरम नमकीन',
        popular: false,
    },

    // * ड्राई नमकीन (Dry Namkeen)
    {
        name: 'Dalmoth',
        hindiName: 'दालमोठ',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
    {
        name: 'Chola Mogar',
        hindiName: 'चौला मोगर',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
    {
        name: 'Pudina Chana Dal',
        hindiName: 'पोदीना चना दाल',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
    {
        name: 'Aloo Lachha with Dry Fruits',
        hindiName: 'आलू लच्छा विद् ड्राई फ्रूट्स',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
    {
        name: 'Malka Masur with Dry Fruits',
        hindiName: 'मलका मसूर विद ड्राई फ्रूट्स',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
    {
        name: 'Corn Flakes with Dry Fruits',
        hindiName: 'कॉर्न फ्लेक्स विद् ड्राई फ्रूट्स',
        category: 'Dry Namkeen',
        hindiCategory: 'ड्राई नमकीन',
        popular: false,
    },
];

const vegetableItems: MenuItem[] = [
    // * --- सब्ज़ी (Vegetables) ---

    // * पनीर की सब्जियाँ (Paneer Dishes)
    {
        name: 'Butter Paneer Masala',
        hindiName: 'बटर पनीर मसाला',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: true,
    },
    {
        name: 'Matar Paneer',
        hindiName: 'मटर पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Kadhai Paneer',
        hindiName: 'कढ़ाई पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Shahi Paneer',
        hindiName: 'शाही पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Palak Paneer',
        hindiName: 'पालक पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Pudina Paneer',
        hindiName: 'पोदीना पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Pasanda',
        hindiName: 'पनीर पसंदा',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Katran',
        hindiName: 'पनीर कतरन',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Bhurji',
        hindiName: 'पनीर भुर्जी',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Tiranga Paneer',
        hindiName: 'तिरंगा पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Zafrani',
        hindiName: 'पनीर जाफरानी (केसर)',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Lachha Paneer',
        hindiName: 'लच्छा पनीर',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Do Pyaza',
        hindiName: 'पनीर दो प्याजा',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Tikka Lababdar',
        hindiName: 'पनीर टिक्का लबाबदार',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Kashmiri Paneer',
        hindiName: 'कश्मीरी पनीर (सफेद)',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Paneer Takatak',
        hindiName: 'पनीर टकाटक',
        category: 'Paneer Dishes',
        hindiCategory: 'पनीर की सब्जियाँ',
        popular: false,
    },

    // आलू की सब्जियाँ (Potato Dishes)
    {
        name: 'Dum Aloo',
        hindiName: 'दम आलू',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Stuff Aloo',
        hindiName: 'स्टफ आलू',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Chutney wala Aloo',
        hindiName: 'चटनी वाला आलू',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Achari Aloo',
        hindiName: 'अचारी आलू',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Aloo Zafrani',
        hindiName: 'आलू जाफरानी (केसर)',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },
    {
        name: 'Aloo Pyaz',
        hindiName: 'आलू प्याज',
        category: 'Potato Dishes',
        hindiCategory: 'आलू की सब्जियाँ',
        popular: false,
    },

    // राजस्थानी सब्जियाँ (Rajasthani Vegetables)
    {
        name: 'Phali Fry',
        hindiName: 'फली फ्राई',
        category: 'Rajasthani Vegetables',
        hindiCategory: 'राजस्थानी सब्जियाँ',
        popular: false,
    },
    {
        name: 'Hare Chane ki Sabzi',
        hindiName: 'हरे चने की सब्जी',
        category: 'Rajasthani Vegetables',
        hindiCategory: 'राजस्थानी सब्जियाँ',
        popular: false,
    },
    {
        name: 'Ker Sangri',
        hindiName: 'कैर सांगरी',
        category: 'Rajasthani Vegetables',
        hindiCategory: 'राजस्थानी सब्जियाँ',
        popular: true,
    },
    {
        name: 'Jodhpuri Mirchi Sabzi',
        hindiName: 'जोधपुरी मिर्ची की सब्जी',
        category: 'Rajasthani Vegetables',
        hindiCategory: 'राजस्थानी सब्जियाँ',
        popular: false,
    },
    {
        name: 'Rajasthani Kadhi',
        hindiName: 'राजस्थानी कढ़ी',
        category: 'Rajasthani Vegetables',
        hindiCategory: 'राजस्थानी सब्जियाँ',
        popular: false,
    },

    // दाल (Dal)
    {
        name: 'Dal Fry Jeera',
        hindiName: 'दाल फ्राई (जीरा)',
        category: 'Dal',
        hindiCategory: 'दाल',
        popular: false,
    },
    {
        name: 'Dal Panchmel',
        hindiName: 'दाल पंचमेल',
        category: 'Dal',
        hindiCategory: 'दाल',
        popular: false,
    },
    {
        name: 'Dal Bukhara',
        hindiName: 'दाल बुखारा',
        category: 'Dal',
        hindiCategory: 'दाल',
        popular: false,
    },
    {
        name: 'Dal Makhani',
        hindiName: 'दाल मखानी',
        category: 'Dal',
        hindiCategory: 'दाल',
        popular: true,
    },
];

const tandoorItems = [
    // --- Tandoor & Roti ---
    {
        name: 'Tawa Chapati',
        hindiName: 'तवा चपाती',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Rumali Roti',
        hindiName: 'रुमाली रोटी',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Tandoori Roti',
        hindiName: 'तन्दूरी रोटी',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Missi Roti',
        hindiName: 'मिस्सी रोटी',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Baby Naan',
        hindiName: 'बेबी नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Family Naan',
        hindiName: 'फैमिली नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Podana Naan',
        hindiName: 'पोदाना नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Stuff Naan',
        hindiName: 'स्टफ नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Kandhari Naan',
        hindiName: 'कन्धारी नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Biscuit Naan',
        hindiName: 'बिस्कुट नान',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Lachha Paratha',
        hindiName: 'लच्छा परांठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Stuff Kulcha',
        hindiName: 'स्टफ कुलचा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Paneer Paratha',
        hindiName: 'पनीर परांठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Dal Paratha',
        hindiName: 'दाल परांठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Methi Paratha',
        hindiName: 'मेथी परांठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Aloo Paratha',
        hindiName: 'आलू पराठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },
    {
        name: 'Gobhi Paratha',
        hindiName: 'गोभी परांठा',
        category: 'Tandoor & Roti',
        hindiCategory: 'तंदूर और रोटी',
        popular: false,
    },

    // --- Rice/Pulao ---
    {
        name: 'Plain Rice',
        hindiName: 'प्लेन राईस',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Jeera Rice',
        hindiName: 'जीरा राईस',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Kesar Rice',
        hindiName: 'केसर राईस',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Gatta Pulao',
        hindiName: 'गट्टा पुलाव',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Corn Peas Pulao',
        hindiName: 'कॉर्न पीज पुलाव',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Kashmiri Pulao',
        hindiName: 'कश्मीरी पुलाव',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Hyderabadi Biryani with Raita',
        hindiName: 'हैदराबादी बिरयानी विद् रायता',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: true,
    },
    {
        name: 'Lemon Coriander Rice',
        hindiName: 'लेमन कॉरिऐन्डर राईस',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Matar/Shahi Pulao',
        hindiName: 'मटर/शाही पुलाव',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Kabuli Pulao',
        hindiName: 'काबुली पुलाव',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Veg Biryani',
        hindiName: 'वेज बिरयानी',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
    {
        name: 'Hara Bhara Rice',
        hindiName: 'हरा भरा राईस',
        category: 'Breads',
        hindiCategory: 'रोटी',
        popular: false,
    },
];

const saladItems = [
    // --- Salad ---
    {
        name: 'Green Salad',
        hindiName: 'ग्रीन सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Sprouted Salad',
        hindiName: 'अंकुरित सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Kachumber Salad',
        hindiName: 'कचूम्बर सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Macaroni Salad',
        hindiName: 'मैकरॉनी सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Hawaiian Salad',
        hindiName: 'हवाईन सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Podina Aloo Chaat',
        hindiName: 'पोदीना आलू चाट',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Rajma Salad',
        hindiName: 'राजमा सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Peanut Salad',
        hindiName: 'मूंगफली सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Paneer Pineapple Salad',
        hindiName: 'पनीर पाईनएप्पल सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
    {
        name: 'Russian Salad',
        hindiName: 'रशियन सलाद',
        category: 'Salad',
        hindiCategory: 'सलाड',
        popular: false,
    },
];

const rajasthanItems = [
    // --- Rajasthan Food (Kachhi Rasoi & Bati) ---
    {
        name: 'Rajasthani Kadhi',
        hindiName: 'राजस्थानी कढ़ी',
        category: 'Kachhi Rasoi',
        hindiCategory: 'कच्ची रसोई (राजस्थानी)',
        popular: true,
    },
    {
        name: 'Gatta',
        hindiName: 'गट्टा',
        category: 'Kachhi Rasoi',
        hindiCategory: 'कच्ची रसोई (राजस्थानी)',
        popular: false,
    },
    {
        name: 'Papad Choori',
        hindiName: 'पापड़ चूरी',
        category: 'Kachhi Rasoi',
        hindiCategory: 'कच्ची रसोई (राजस्थानी)',
        popular: false,
    },
    {
        name: 'Lehsun ki Chutney',
        hindiName: 'लहसुन की चटनी',
        category: 'Kachhi Rasoi',
        hindiCategory: 'कच्ची रसोई (राजस्थानी)',
        popular: true,
    },
    {
        name: 'Sada Bati',
        hindiName: 'सादा बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Bafla Bati',
        hindiName: 'बाफला बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: true,
    },
    {
        name: 'Masala Bati',
        hindiName: 'मसाला बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Aloo Matar Bati',
        hindiName: 'आलू मटर बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Paneer Bati',
        hindiName: 'पनीर वाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Mewa Bati',
        hindiName: 'मेवा बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Fruit Bati',
        hindiName: 'फ्रूट बाटी',
        category: 'Bati',
        hindiCategory: 'बाटी',
        popular: false,
    },
    {
        name: 'Chach',
        hindiName: 'छाछ',
        category: 'Other Rajasthani Accompaniments',
        hindiCategory: 'अन्य राजस्थानी संगत',
        popular: true,
    },
    {
        name: 'Rabri (Drink)',
        hindiName: 'राबड़ी',
        category: 'Other Rajasthani Accompaniments',
        hindiCategory: 'अन्य राजस्थानी संगत',
        popular: false,
    },
    {
        name: 'Lemon',
        hindiName: 'नींबू',
        category: 'Other Rajasthani Accompaniments',
        hindiCategory: 'अन्य राजस्थानी संगत',
        popular: false,
    },
];

const raitaItems = [
    // --- Raita ---
    {
        name: 'Plain Curd',
        hindiName: 'प्लेन दही',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: false,
    },
    {
        name: 'Kesar Curd',
        hindiName: 'केसर दही',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: false,
    },
    {
        name: 'Boondi/Aloo Raita',
        hindiName: 'बूंदी/आलू रायता',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: true,
    },
    {
        name: 'Kheer Raita',
        hindiName: 'खीर रायता',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: false,
    },
    {
        name: 'Vegetable Raita',
        hindiName: 'वेजीटेबल रायता',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: false,
    },
    {
        name: 'Fruit Raita',
        hindiName: 'फ्रूट रायता',
        category: 'Raita',
        hindiCategory: 'रेता',
        popular: false,
    },
];
const pickleItems = [
    // --- Pickle & Chutney ---
    {
        name: 'Kairi Achar',
        hindiName: 'कैरी आचार',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
    {
        name: 'Nimbu Achar',
        hindiName: 'नींबू आचार',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
    {
        name: 'Mix Achar',
        hindiName: 'मिक्स अचार',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
    {
        name: 'Hari Chutney',
        hindiName: 'हरी चटनी',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
    {
        name: 'Meethi Chutney',
        hindiName: 'मीठी चटनी',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
    {
        name: 'Lehsun Chutney',
        hindiName: 'लहसुन चटनी',
        category: 'Chutney & Achar',
        hindiCategory: 'चटनी और अचार',
        popular: false,
    },
];

const stallItems = [
    {
        name: 'Masala Dosa',
        hindiName: 'मसाला डोसा',
        category: 'South Indian',
        hindiCategory: 'साउथ इंडियन',
        popular: true,
    },
    {
        name: 'Idli',
        hindiName: 'इडली',
        category: 'South Indian',
        hindiCategory: 'साउथ इंडियन',
        popular: false,
    },
    {
        name: 'Sambhar Vada',
        hindiName: 'सांभर वडा',
        category: 'South Indian',
        hindiCategory: 'साउथ इंडियन',
        popular: false,
    },
    {
        name: 'Uttapam',
        hindiName: 'उत्तपम',
        category: 'South Indian',
        hindiCategory: 'साउथ इंडियन',
        popular: false,
    },
    {
        name: 'Gol Gappa',
        hindiName: 'गोल गप्पा',
        category: 'Chaat/Stalls',
        hindiCategory: 'चाट/स्टॉल्स',
        popular: true,
    },
    {
        name: 'Aloo Tikia',
        hindiName: 'आलू टिकिया',
        category: 'Chaat/Stalls',
        hindiCategory: 'चाट/स्टॉल्स',
        popular: false,
    },
    {
        name: 'Pav Bhaji',
        hindiName: 'पाव-भाजी',
        category: 'Chaat/Stalls',
        hindiCategory: 'चाट/स्टॉल्स',
        popular: true,
    },
    {
        name: 'Chola Bhatura',
        hindiName: 'छोला भटूरा',
        category: 'Chaat/Stalls',
        hindiCategory: 'चाट/स्टॉल्स',
        popular: true,
    },
    {
        name: 'Fruit Chaat',
        hindiName: 'फ्रूट चाट',
        category: 'Chaat/Stalls',
        hindiCategory: 'चाट/स्टॉल्स',
        popular: false,
    },
];

const appetizerItems = [
    // --- Hot Appetizers ---
    {
        name: 'French Fries',
        hindiName: 'फ्रेंच फ्राईज',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: false,
    },
    {
        name: 'Spring Roll',
        hindiName: 'स्प्रिंग रोल',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: true,
    },
    {
        name: 'Veg Cutlet',
        hindiName: 'वेजीटेबल कटलेट',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: false,
    },
    {
        name: 'Paneer Tikka',
        hindiName: 'पनीर टिक्का',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: true,
    },
    {
        name: 'Cheese Ball',
        hindiName: 'चीज बॉल',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: false,
    },
    {
        name: 'Dry Manchurian',
        hindiName: 'ड्राई मन्चूरियन',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: true,
    },
    {
        name: 'Chilli Paneer',
        hindiName: 'चिली पनीर',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: true,
    },
    {
        name: 'Paneer 65',
        hindiName: 'पनीर 65',
        category: 'Hot Appetizers',
        hindiCategory: 'गरम अपेटाइजर्स',
        popular: false,
    },
];

const drinksItems = [
    // --- Shakes ---
    {
        name: 'Vanilla Shake',
        hindiName: 'वेनिला शेक',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: false,
    },
    {
        name: 'Chocolate Shake',
        hindiName: 'चॉकलेट शेक',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: true,
    },
    {
        name: 'Strawberry Shake',
        hindiName: 'स्ट्रॉबेरी शेक',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: false,
    },
    {
        name: 'Mango Shake',
        hindiName: 'मैंगो शेक',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: true,
    },
    {
        name: 'Cold Coffee with Ice Cream',
        hindiName: 'कोल्ड कॉफी विद आइसक्रीम',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: true,
    },
    {
        name: 'Butterscotch Shake',
        hindiName: 'बटरस्कॉच शेक',
        category: 'Shake',
        hindiCategory: 'शैक',
        popular: false,
    },

    // --- Juices ---
    {
        name: 'Mixed Fruit Juice',
        hindiName: 'मिक्स फ्रूट जूस',
        category: 'Juice',
        hindiCategory: 'जुइस',
        popular: true,
    },
    {
        name: 'Pineapple Juice',
        hindiName: 'पाइनएप्पल जूस',
        category: 'Juice',
        hindiCategory: 'जुइस',
        popular: false,
    },
    {
        name: 'Orange Juice',
        hindiName: 'ऑरेंज जूस',
        category: 'Juice',
        hindiCategory: 'जुइस',
        popular: false,
    },
    {
        name: 'Watermelon Juice',
        hindiName: 'तरबूज का जूस',
        category: 'Juice',
        hindiCategory: 'जुइस',
        popular: false,
    },
    {
        name: 'Ganga Jamuna Juice',
        hindiName: 'गंगा जमुना जूस',
        category: 'Juice',
        hindiCategory: 'जुइस',
        popular: false,
    },

    // --- Mohito & Refreshments ---
    {
        name: 'Virgin Mojito',
        hindiName: 'वर्जिन मोहिटो',
        category: 'Mojito',
        hindiCategory: 'मोहिटो',
        popular: true,
    },
    {
        name: 'Green Apple Mojito',
        hindiName: 'ग्रीन एप्पल मोहिटो',
        category: 'Mojito',
        hindiCategory: 'मोहिटो',
        popular: false,
    },
    {
        name: 'Blue Lagoon',
        hindiName: 'ब्लू लगून',
        category: 'Mojito',
        hindiCategory: 'मोहिटो',
        popular: true,
    },
    {
        name: 'Mint Lemonade',
        hindiName: 'मिंट लेमोनेड',
        category: 'Mojito',
        hindiCategory: 'मोहिटो',
        popular: false,
    },
    {
        name: 'Fresh Lime Soda',
        hindiName: 'फ्रेश लाइम सोडा',
        category: 'Mojito',
        hindiCategory: 'मोहिटो',
        popular: false,
    },
];

const menuItems: MenuItem[] = [
    ...sweetsItems,
    ...namkeenItems,
    ...vegetableItems,
    ...tandoorItems,
    ...saladItems,
    ...rajasthanItems,
    ...raitaItems,
    ...pickleItems,
    ...stallItems,
    ...appetizerItems,
    ...drinksItems,
];

const menuItemsWithId: MenuItemWithId[] = menuItems.map((item, index) => ({
    ...item,
    id: index.toString(),
}));

export { menuCategories, menuSubCategories, menuItems, menuItemsWithId };
