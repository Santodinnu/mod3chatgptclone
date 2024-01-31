// openaiRoutes.js
const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

// https://mod3projectbackend.onrender.com/api/openai/scifi-image

module.exports = router;