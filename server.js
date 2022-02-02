const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config();

const app = express()

//connect db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,    
    useUnifiedTopology: true    
})
.then(() => console.log('DB CONNECTED SUCCESSFULLY'))
.catch(err => console.log('DB CONNECTION ERROR', err))

//Init middleware
app.use(express.json({ extended: false }))

//DEFINE ROUTES
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))