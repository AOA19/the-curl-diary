const Journal = require("../models/Journal");

module.exports = {
  getJournal: async (req, res) => {
    try {
      const journals = await Journal.find({ user: req.user }).sort({ createdAt: "desc" });
      // console.log(galleries)
      res.render("journal.ejs", { journals: journals, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      console.log(req.body);
      await Journal.create({
        title: req.body.title,
        entry: req.body.entry,
        user: req.user.id,
      });
      console.log("Entry added!");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
      res.redirect("/journal");
    }
  },
  updateEntry: async (req, res) => {
    // console.log("This is the is of journal:" ,req.params.id,  "This is the info in form:",req.body)
    const entryId = req.params.id;
    const title = req.body.editTitle;
    const entry = req.body.editEntry;
    
    try {
     const updateJournalEntry = await Journal.findOneAndUpdate({ _id: entryId }, { title: title, entry: entry }, { new: true, upsert: true });
      // console.log("Updated journal", updateJournalEntry.title, updateJournalEntry.entry)
      console.log("Entry updated!");
      res.redirect("/journal",);
    } catch (err) {
      console.log(err);
      res.redirect("/journal");
    }
  },
  deleteEntry: async (req, res) => {
    try {
      // Find entry by id
      // Delete entry from db
      await Journal.findOneAndDelete({ _id: req.params.id });
      console.log("Delete entry");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
      res.redirect("/journal");
    }
  },
};