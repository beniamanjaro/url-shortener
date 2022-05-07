const ShortUrl = require("../models/ShortUrl");

const { nanoid } = require("nanoid");
const yup = require("yup");

const newUrlSchema = yup.object().shape({
  slug: yup
    .string()
    .trim()
    .matches(/^[\w\-]+$/i),
  url: yup.string().trim().url().required(),
});

const redirect = async (req, res) => {
  const { id: alias } = req.params;
  try {
    const url = await ShortUrl.findOne({ alias });
    if (url) {
      return res.redirect(url.url);
    } else {
      return res.status(404).send({ message: "invalid url" });
    }
  } catch (error) {
    return res.status(404).send({ message: "invalid url" });
  }
};

const store = async (req, res, next) => {
  let { alias, url } = req.body;
  try {
    await newUrlSchema.validate({ alias, url });
    if (!alias) {
      alias = nanoid(5);
    } else {
      const existing = await ShortUrl.findOne({ alias });
      if (existing) {
        throw new Error("Alias already in use");
      }
    }
    alias = alias.toLowerCase();
    const newShortUrl = { alias, url };
    const created = await ShortUrl.create(newShortUrl);
    res.json(created);
  } catch (error) {
    next(error);
  }
};

module.exports = { redirect, store };
