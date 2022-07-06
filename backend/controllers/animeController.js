const Anime = require('../models/Anime')

//Add one anime
exports.addAnime = async (req, res) => {
    let { title, description, poster, rate, frameUrl } = req.body;
    rate = Number(rate);
    title = title.toUpperCase();
    const findAnime = await Anime.findOne({ title })
    if (findAnime) {
       return  res.status(400).send({ errors: [{ msg: ` The anime :  ${title}, already exists` }] })
    }   try {
            const anime = new Anime({
                title,
                description,
                poster,
                rate,
                frameUrl
            })
            await anime.save();
            res.status(201).send(` ${title} added`)
        } catch (error) {
            res.status(400).send("Sorry, can't add the anime")
        }
    
}
//Add many anime
exports.addManyAnime = async(req, res)=>{
    let [{ title, description, poster, rate, frameUrl }] = req.body;
    title = title.toUpperCase();
    try {    
        const found = await Anime.find({title});
 
        if (found) {
            return res.status(400).send(`erreur:  ${title}  already exists !`)
           }

        const anime = await Anime.create(req.body)
       return res.status(201).send({ msg: "All animes are Added", anime })

    } catch (error) {
        res.status(500).send("erreur d'ajout de ces animes")

    }
}
//Remove anime
exports.removeAnime = async (req, res) =>{
    const { id } = req.params
    try {
        await Anime.findByIdAndDelete(id, { new: true })
        res.status(200).send("Anime remouved")
    } catch (error) {
        res.status(500).send("Anime not found")
    }
}
//Anime List
exports.listAnime = async (req, res) =>{
    try {
        const animes = await Anime.find();
        res.status(200).send({ msg: "list of anime ", animes})
    } catch (error) {
        res.status(500).send("erreur d'importation")
    }
}
//One Anime
exports.oneAnime = async (req, res) =>{
    const { id } = req.params;
  try {
    const anime = await Anime.findById(id);
    res.status(200).send({ msg: "anime found", anime });
  } catch (error) {
    res.status(500).send("Anime not found");
  }
}
//update Anime
exports.updateAnime = async(req, res) =>{
    const { id } = req.params;
    try {
        const anime = await Anime.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
        res.status(200).send({ msg: "Updated !", anime })

    } catch (error) {
        res.status(500).send("Anime not found")
    }
}