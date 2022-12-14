const Comment  = require('../models/Comment')

//Add comment
exports.addComment = async (req, res) => {
    let { commentaire} = req.body;
    let {id}=req.params
    console.log(id)
      try {
            const comment = new Comment({
                commentaire, 
                userId:req.user.id,
                newsId:id
            })
            await comment.save();
            res.status(201).send(` ${commentaire} added`)
        } catch (error) {
            res.status(400).send("Sorry, comment can't be added")
        }
    
}

//Remove Comment
exports.removeComment = async (req, res) =>{
    const { id } = req.params
    try {
        await Comment.findByIdAndDelete(id, { comment: true })
        res.status(200).send("Comment remouved")
    } catch (error) {
        res.status(500).send("Not found")
    }
}
//List Comment
exports.listComment = async (req, res) =>{
    try {
        const comments = await Comment.find({newsId:req.params.newsId}).populate("userId", ["email"]);
        res.status(200).send({ msg: "list of comments ", comments })
    } catch (error) {
        res.status(500).send("Not found")
    }
}
//One Comment
exports.oneComment = async (req, res) =>{
    const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send("Not found")
}
}
//update Comment
exports.updateComment = async(req, res) =>{
    const { id } = req.params;
    try {
        const comment = await Comment.findByIdAndUpdate(id, { $set: { ...req.body } }, { comment: true })
        res.status(200).send({ msg: "Updated !", comment })

    } catch (error) {
        res.status(500).send("Not found")
    }
}



