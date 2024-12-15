const createUser = (req, res) => {
  try{
    console.log(req.body)
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }
}

module.exports = {
  createUser
}