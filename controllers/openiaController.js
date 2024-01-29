const dotenv = require("dotenv");
const { OpenAI } = require("openai");

dotenv.config();

const openai = new OpenAI();

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const { data } = await openai.beta.completions.create({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
      if (data && data.choices && data.choices[0] && data.choices[0].text) {
      const summary = data.choices[0].text;
      return res.status(200).json({ summary });
    } else {
      return res.status(500).json({ error: 'Unexpected response from OpenAI API' });
    }
  } catch (err) {
    console.error(err);
    }
  };
