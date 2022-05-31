import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
let test = Math.random(10);

//? DEBUG=express-locallibrary-tutorial:* npm run devstart

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import catalogRouter from './routes/catalog.js';
// Add catalog routes to middleware chain.


var app = express();
//Set up mongoose connection
import mongoose from 'mongoose';
//var mongoDB = 'mongodb://localhost:27017/local_library';
//var mongoDB = 'mongodb://localhost:27017/local_library?appName=mongodb-vscode+0.9.3&directConnection=true&serverSelectionTimeoutMS=2000';
var dev_db_url = 'mongodb+srv://maxwell:Password001@cluster0.gcq5h.mongodb.net/local_library?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
//routes and all
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;