const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/message', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        }, {
            headers: {
                'Authorization': `Bearer sk-proj-PStG7784ZWV3XnSFMLpRT3BlbkFJQVYm9Ff1lztrPvIcqaSn`
            }
        });
        res.send(response.data.choices[0].message.content);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
