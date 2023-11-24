"use strict"
import { Model } from "sequelize"
export default (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate() {
            // define association here
        }
    }
    product.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "product",
        }
    )
    return product
}
