import { db } from './database.js';
import _ from 'lodash';

class Product{
    constructor(id, {name}){
        this.id = id
        this.name = name
    }
}

const productDatabase = {}
const resolvers = {
    getProductById: async({id}) => { 
        const {results} =  await db.query('select * from product where id ='+id);
        return new Product(id, results[0]);        
    },

    getProducts: async() => {
        const {results} = await db.query('select * from product');
        let products = [];
        _.map(results, (product) => {
            products.push(new Product(product.id, {name: product.name}));
        })
        return products;
    },

    createProduct: ({input}) => {    
        let product = new Product(id, input);
    }

}

export default resolvers;