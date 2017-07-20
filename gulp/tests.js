var gulp = require( 'gulp' );
var KarmaServer = require( 'karma' ).Server;

gulp.task( 'test',  ( done ) => {
  new KarmaServer( {
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, () => {
    done();
  } ).start();
} )

gulp.task( 'watch-test', ( done ) => {
  new KarmaServer( {
    configFile: __dirname + '/karma.conf.js'
  }, () => {
    done();
  } ).start();
} )

gulp.task( 'test:watch', ['watch-test'])
