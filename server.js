const express = require('express');

const app = express();

const PORT = process.env.PORT || 3300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require stuff here 

app.listen(PORT,() => {
    console.log(`App listening on PORT: ${PORT}`);
});