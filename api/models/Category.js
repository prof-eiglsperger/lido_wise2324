// api/models/Category.js
module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
        ordernumber: {
            type: 'number',  
            columnType: 'integer',  
            required: true,
            min: 0,
            max: 100,
            unique: true
        },
        meals: {
            collection: 'meal',
            via: 'category'
        }
    }
  };