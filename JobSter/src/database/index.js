
// const { default: mongoose } = require("mongoose");

// const connectToDB = async () => {
//   //const connectionURL = process.env.MONGODB_URL;
//   const connectionURL = "mongodb+srv://samrendrak882:Barick@2001@cluster0.rbhde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//   mongoose
//     .connect(connectionURL)
//     .then(() => console.log("job board database connection is successfull"))
//     .catch((error) => console.log(error));
// };

// export default connectToDB;
const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = "mongodb+srv://samrendrak882:Barick%402001@cluster0.rbhde.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0";
  
  mongoose
    .connect(connectionURL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("Job board database connection is successful"))
    .catch((error) => console.error("Database connection failed:", error));
};

export default connectToDB;

