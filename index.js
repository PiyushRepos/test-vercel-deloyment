const app = require("express")();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.status(200).json({ message: "All is well." }));

app.get("/users", (req, res) => {
  fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json({ err }));
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
