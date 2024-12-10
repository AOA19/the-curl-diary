const Journal = require("../models/Journal");

module.exports = {
  getJournal: async (req, res) => {
     try {
       const journals = await Journal.find().sort({ createdAt: "desc" });
       // console.log(galleries)
       res.render("journal.ejs", { journals: journals, user: req.user });
     } catch (err) {
       console.log(err);
     }
  },
  createEntry: async (req, res) => {
    try {
      console.log(req.body)
      await Journal.create({
        title: req.body.title,
        entry: req.body.entry,
        user: req.user.id,
        
      });
       console.log("Entry added!");
       res.redirect("/journal");
    } catch (err) {
      console.log(err);
      res.redirect("/journal")
    }
  },
  editEntry : async (req, res) => {
    try {
      await Journal.findByIdAndUpdate(req.params.id,
        {}
      );
      console.log("Entry updated!")
      res.redirect("/journal")
    } catch (err) {
      console.log(err);
      res.redirect("/journal");
    }
  },
  deleteEntry: async (res, req) => {
    try {
      console.log(req.params)
      // Find entry by id
      // const entries = await JournalEntry.findById(req.params.id);
      // Delete entry from db
      await Journal.findOneAndDelete({_id:req.params.id});
      console.log("Deleted Photo");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
      res.redirect("/journal")
    }
  }
};