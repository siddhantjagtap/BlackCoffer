const Json = require('./json.model');

const api = async (req, res) => {
  try {
    const insights = await Json.find();
    res.json(insights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {api};