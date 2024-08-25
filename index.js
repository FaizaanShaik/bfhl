const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ "is_success": false, "message": "Invalid input, array expected." });
    }

    const user_id = "your_name_ddmmyyyy";
    const email = "your_email@example.com";
    const roll_number = "your_roll_number";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highest_lowercase_alphabet = lowercaseAlphabets.sort().slice(-1);

    res.json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highest_lowercase_alphabet
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});