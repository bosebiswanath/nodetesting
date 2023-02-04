const ProductService = require('../services/product-service');
const service = new ProductService();

module.exports = {
    GetProducts: async (req, res, next) => {
        try {
            //const { data} = await service.GetProducts();     
            const data = { id: 1, name: 'Hugo',  categories: [3, 5, 22]};
            return res.status(200).json(data);
        } catch (error) {
            next(err)
        }
    }, 
    CreateProduct: async (req, res, next) => {
        try { 
            const { name, desc, type, unit,price, available, suplier, banner } = req.body; 
            // validation
            const { data } =  await service.CreateProduct({ name, desc, type, unit,price, available, suplier, banner });
            return res.json(data);
                    
        }catch (error) {
            next(error)
        }
    }, 

}
