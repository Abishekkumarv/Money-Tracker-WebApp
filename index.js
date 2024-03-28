const express = require('express');
const connectDb = require('./dbconn');
const router = require('./routes/Transactions')

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDb()

//middlewares
app.use(express.json())
app.use(express.static('src'))

// Routes
app.use('/api/transactions', router);

app.get("/",(req,res)=>{

  res.sendFile("index.html")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

