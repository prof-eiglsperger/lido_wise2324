// api/models/Meal.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
        image: { type: 'string', columnType: 'varchar(128)' },
        category: {
            model: 'category'
        },
    },        
  };