const express = require('express');
const bodyParser = require('body-parser');
const { userRoutes } = require('./src/routes/userRouter');
const { categoriesRoutes } = require('./src/routes/categoriesRouter');
const { postsRoutes } = require('./src/routes/postsRouter');

const app = express();

app.use(bodyParser.json());

app.use(userRoutes);

app.use(categoriesRoutes);

app.use(postsRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
