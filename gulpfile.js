'use strict'

var gulp = require('gulp')
  , lr = require('tiny-lr')
  , jade = require('gulp-jade')
  , stylus = require('gulp-stylus')
  , watch = require('gulp-watch')
  , livereload = require('gulp-livereload')  

var server = lr()

// jade task
gulp.task('jade', function() {
  gulp.src([
    'assets/jade//**/*.jade'        
  ])
  .pipe(jade({
    pretty: true 
  }))
  .pipe(gulp.dest('.'))
  .pipe(livereload(server))
})

// stylus task
gulp.task('stylus', function() {
  gulp.src([
    'assets/stylus/**/*.styl',
    '!assets/stylus/partial/**'
  ])
  .pipe(stylus({
    set: ['firebug'] 
  }))
  .pipe(livereload(server))
  .pipe(gulp.dest('public/styles'))
})

gulp.task('stylus:build', function() {
  gulp.src([
    'assets/stylus/**/*.styl'        
    '!assets/stylus/partial/**'
  ])
  .pipe(stylus({
    set: ['compress'] 
  }))
  .pipe(gulp.dest('public/styles'))
}

// watch task
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) return console.log(err)
  })

  gulp.src(['app/assets/stylus/**/*.styl'])
    .pipe(watch(function(files) {
      return gulp.run('stylus')
    }))

  gulp.src(['app/assets/jade/**/*.jade'])
    .pipe(watch(function(files) {
      return gulp.run('jade')
    }))
})

// build task
gulp.task('build', function() {
  gulp.run('stylus:build')
})

// default task
gulp.task('default', function() {
  gulp.run('watch')
})
