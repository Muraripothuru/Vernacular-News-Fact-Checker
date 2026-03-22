const { translateText } = require('../services/translateService');
const { factCheck } = require('../services/factCheckService');

exports.checkFact = async (req, res) => {
    try {
        const { text } = req.body;

        const translated = await translateText(text);
        const result = await factCheck(translated);

        res.json({
            original: text,
            translated,
            result
        });

    } catch (error) {
        res.status(500).json({ error: "Error processing request" });
    }
};
