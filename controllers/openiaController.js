const dotenv = require("dotenv");
const { OpenAI } = require("openai");

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OpenAI API key not configured" });
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `Summarize this \n${text}` }],
      model: "gpt-3.5-turbo",
    });
    console.log("result, ", chatCompletion.choices[0].message.content);
    const summary = chatCompletion.choices[0].message.content;
    return res.status(200).json({ summary });
  } catch (err) {
    res.status(500).json({ error: "Unexpected response from OpenAI API" });
    console.error(err);
  }
};
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OpenAI API key not configured" });
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: `write a detail paragraph about \n${text}` },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("result, ", chatCompletion.choices[0].message.content);
    const paragraph = chatCompletion.choices[0].message.content;
    return res.status(200).json({ paragraph });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OpenAI API key not configured" });
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Answer question similar to how yoda from star war would.
        Me: 'what is your name?'
         yoda: 'yoda is my name'
          Me: \n ${text}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("result, ", chatCompletion.choices[0].message.content);
    const chat = chatCompletion.choices[0].message.content;
    return res.status(200).json({ chat });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OpenAI API key not configured" });
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `/* convert these instruction into javascript code \n${text}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("result, ", chatCompletion.choices[0].message.content);
    const js = chatCompletion.choices[0].message.content;
    return res.status(200).json({ js });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.scifiImageController = async (req, res) => {
  console.log("reached scifiimage controlle2");
  try {
    const { text } = req.body;
    console.log("Input Text:", text);
    console.log(openai, typeof openai.images.generate, openai.images.generate);
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `generate a sci-fi image of ${text}`,
      n: 1,
      size: "512x512",
    });

    console.log("API Response:", response.data[0].url);
    if (response.data && response.data[0].url) {
      return res.status(200).json(response.data[0].url);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};
