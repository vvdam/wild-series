// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions
// Declare the action
const browse = (req, res) => {
  if (req.query.q != null) {
    const filteredcategories = categories.filter((program) =>
      program.name.includes(req.query.q)
    );

    res.json(filteredcategories);
  } else {
    res.json(categories);
  }
};
//----------------------------------------

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else

module.exports = { browse, read };

// Export them to import them somewhere else
