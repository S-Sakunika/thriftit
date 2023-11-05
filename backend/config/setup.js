require('dotenv').config({ path: __dirname + '/../.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Database connected'))
    .catch((error) => console.log(error))

async function setup() {
    try {
        const category = require('../models/Category')

        await new category([
            {
                name: "Women's",
                slug: 'womens',
            },
            {
                name: "Men's",
                slug: 'mens',
            },
            {
                name: 'Dresses',
                parentCategory: '',
                imageFileName: '',
                slug: 'dresses',
            }
        ]).create();

        console.log('Categories created')
    } catch (e) {
        console.log(e)
    }
}

setup()