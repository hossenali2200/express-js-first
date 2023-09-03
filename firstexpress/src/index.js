const app = require('./src/app'); // Adjust the path as needed

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
