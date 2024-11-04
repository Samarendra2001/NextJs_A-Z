
const mongoose = require('mongoose');

const connectionToDB = async()=>{
    const mongoDbUrl = 'mongodb+srv://samrendrak882:Barick@2001@cluster0.itx2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    mongoose
        .connect(mongoDbUrl)
        .then(()=>console.log('blog app database connection is successful'))
        .catch((error)=>console.log(error))
};

export default connectionToDB;