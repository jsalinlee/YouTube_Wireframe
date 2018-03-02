import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

mongoose.connect('mongodb://localhost/YouTube');
const models_path = path.join(__dirname, '../models');

process.on('SIGINT', function() {
    mongoose.connection.close( function() {
        process.exit(0);
    });
});

fs.readdirSync( models_path ).forEach( function( file ) {
    if( file.indexOf( '.js' ) >= 0 ) {
        require( models_path + '/' + file );
    }
});
