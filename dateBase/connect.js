const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jeux_koreaa',
{useNewUrlParser: true, 
useUnifiedTopology: true,

})
.then(()=>console.log('Successfully connected to database.'))
.catch((e)=>console.error('Error in connection',e));

module.exports = mongoose;