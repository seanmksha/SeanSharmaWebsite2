  //gulpfile.js
  var gulp = require('gulp');
  var compress_images = require('compress-images');
  
      gulp.task('default', function(){
        // Default task code
        compress_images('./public/images/**/*.{jpg,JPG,jpeg,JPEG}', './public/images-build/', {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'webp', command: false}},
        {png: {engine: false, command: false}},
        {svg: {engine: false, command: false}},
        {gif: {engine: false, command: false}}, function(err){ 
if(err == null){                                     
//[jpg] ---to---> [jpg(jpegtran)] WARNING!!! autoupdate  - recommended turn off, he is not needed here - autoupdate: false
compress_images('./public/images/**/*.{jpg,JPG,jpeg,JPEG}', './public/images-build/', {compress_force: false, statistic: true, autoupdate: false}, false,
                        {jpg: {engine: 'jpegtran', command: false}},
                        {png: {engine: false, command: false}},
                        {svg: {engine: false, command: false}},
                        {gif: {engine: false, command: false}}, function(){
}); 
}else{
console.error(err);
}
});
      });
      gulp.task('compress_images', function() {
        //[jpg] ---to---> [webp]
        compress_images('./public/images/**/*.{jpg,JPG,jpeg,JPEG}', './public/images-build/', {compress_force: false, statistic: true, autoupdate: true}, false,
                                                    {jpg: {engine: 'webp', command: false}},
                                                    {png: {engine: false, command: false}},
                                                    {svg: {engine: false, command: false}},
                                                    {gif: {engine: false, command: false}}, function(err){ 
                if(err == null){                                     
                    //[jpg] ---to---> [jpg(jpegtran)] WARNING!!! autoupdate  - recommended turn off, he is not needed here - autoupdate: false
                    compress_images('./public/images/**/*.{jpg,JPG,jpeg,JPEG}', './public/images-build', {compress_force: false, statistic: true, autoupdate: false}, false,
                                                                    {jpg: {engine: 'jpegtran', command: false}},
                                                                    {png: {engine: false, command: false}},
                                                                    {svg: {engine: false, command: false}},
                                                                    {gif: {engine: false, command: false}}, function(){
                    }); 
                }else{
                    console.error(err);
                }
        });
    });