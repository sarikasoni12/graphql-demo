import {buildSchema} from "graphql";

const schema = buildSchema(`
    type Query {
        getProductById(id: Int): Product
        getProducts: [Product]
    }

    type Store {
        name: String
    }
    type Product {
        id: Int
        name: String
    }

    input StoreInput {
        name: String
    }
    input ProductInput {
        id: ID
        name: String
        stores: [StoreInput]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;
