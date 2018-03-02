import express from 'express';
import expstate from 'express-state';
import exphndlbars from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './config/routes.js';
import pageController from './controllers/pageController';
// import mongoose from './config/mongoose.js';

const app = express();

app.use(express.static('../public'));
expstate.extend(app);
app.set('state namespace', 'MyApp');
app.set('views', path.resolve(__dirname, './views'));
app.engine('handlebars', exphndlbars({ defaultLayout: 'index' }))
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
routes(app);

app.listen(3000, function() {
    console.log("listening...")
});
