const path = require('path');
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(compression());
app.use(helmet());
const Routes = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Routes);

app.use(errorController.get404);

app.listen(process.env.PORT || 3000)
