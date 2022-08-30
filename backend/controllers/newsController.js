const News = require('../models/News')

//Add News
exports.addNews = async (req, res) => {
    let { message, anime } = req.body;
    message = message.toLowerCase();
    const findNews= await News.findOne({ message })
    if (findNews) {
       return  res.status(400).send({ errors: [{ msg: ` This news already exists` }] })
    }   try {
            const news = new News({
               message,
               anime,
            })
            await news.save();
            res.status(201).send(` ${message} added`)
        } catch (error) {
            res.status(400).send("Sorry, can't add this news")
        }
    
}

//Remove News
exports.removeNews = async (req, res) =>{
    const { id } = req.params
    try {
        await News.findByIdAndDelete(id, { new: true })
        res.status(200).send("News remouved")
    } catch (error) {
        res.status(500).send("Not found")
    }
}
//List News
exports.listNews = async (req, res) =>{
    try {
        const news = await News.find();
        res.status(200).send({ msg: "list of news ", news})
    } catch (error) {
        res.status(500).send("Not found")
    }
}
//One News
exports.oneNews = async (req, res) =>{
    const { id } = req.params;
  try {
    const onenew = await News.findById(id);
    res.status(200).send(onenew);
  } catch (error) {
    res.status(500).send("Not found")
}
}
//update News
exports.updateNews = async(req, res) =>{
    const { id } = req.params;
    try {
        const news = await News.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
        res.status(200).send({ msg: "Updated !", news })

    } catch (error) {
        res.status(500).send("Not found")
    }
}

//add comment

