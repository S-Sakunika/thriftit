require('dotenv').config({ path: __dirname + '/../.env' });

// Connect to MongoDB database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Database connected'))
    .catch((error) => console.log(error))

async function setup() {
    try {
        // Import the Category model
        const Category = require('../models/Category')

        // Define an array of categories
        const categories = [
            {
                name: "Women's",
                slug: 'womens'
            },
            {
                name: "Men's",
                slug: 'mens'
            },
            {
                name: 'Dresses',
                imageFileName: 'dresses.jpg',
                slug: 'dresses',
            },
            {
                name: 'Tops',
                imageFileName: 'tops.jpg',
                slug: 'tops',
            },
            {
                name: 'Pants',
                imageFileName: 'pants.jpg',
                slug: 'pants',
            },
            {
                name: 'Skirts',
                imageFileName: 'skirts.jpg',
                slug: 'skirts',
            },
            {
                name: 'Accessories',
                imageFileName: 'womens-accessories.jpg',
                slug: 'womens-accessories',
            },
            {
                name: 'Bags',
                imageFileName: 'bags.jpg',
                slug: 'bags',
            },
            {
                name: 'Shoes',
                imageFileName: 'womens-shoes.jpg',
                slug: 'womens-shoes',
            },
            {
                name: 'Shirts',
                imageFileName: 'shirts.jpg',
                slug: 'shirts',
            },
            {
                name: 'T-shirts',
                imageFileName: 'tshirts.jpg',
                slug: 'tshirts',
            },
            {
                name: 'Trousers',
                imageFileName: 'trousers.jpg',
                slug: 'trousers',
            },
            {
                name: 'Jackets',
                imageFileName: 'jackets.jpg',
                slug: 'jackets',
            },
            {
                name: 'Shorts',
                imageFileName: 'shorts.jpg',
                slug: 'shorts',
            },
            {
                name: 'Accessories',
                imageFileName: 'mens-accessories.jpg',
                slug: 'mens-accessories',
            },
            {
                name: 'Shoes',
                imageFileName: 'mens-shoes.jpg',
                slug: 'mens-shoes',
            },
        ]

        // Define subcategories for Women's and Men's categories
        const womensCategories = ['dresses', 'tops', 'pants', 'skirts', 'womens-accessories', 'bags', 'womens-shoes']
        const mensCategories = ['shirts', 'tshirts', 'trousers', 'jackets', 'shorts', 'mens-accessories', 'mens-shoes']

        // Check if the categories already exist in the database
        const isExisiting = await Category.find({slug: {$in: categories.map(category => category.slug) }})
        if(isExisiting.length === 0) {
            // Insert categories into the database
            const createdCategories =  await Category.insertMany(categories)

            // Assign parentCategory to subcategories of Women's
            womensCategories.map(async (category) => {
                const womensCategory = createdCategories.find(category => category.slug === "womens");
                await Category.findOneAndUpdate({ slug: category }, {$set: {parentCategory: womensCategory._id}});
            })

            // Assign parentCategory to subcategories of Men's
            mensCategories.map(async (category) => {
                const mensCategory = createdCategories.find(category => category.slug === "mens");
                await Category.findOneAndUpdate({ slug: category }, {$set: {parentCategory: mensCategory._id}});
            })

            console.log('Categories created')
        } else {
            console.log('Categories already exist')
        }
    } catch (e) {
        console.log(e)
    }
}

setup()