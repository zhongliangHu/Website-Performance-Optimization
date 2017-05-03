var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg|)')
    .pipe(imagemin({
       interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
       optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
       progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
       multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
       verbose: true
     }))
    .pipe(gulp.dest('img'));
});

//在命令行写入< gulp auto启动监听任务
gulp.task('auto', function(){
    gulp.watch('images/**/*.+(png|jpg|jpeg|gif|svg|)',['images']);
});

//使用gulp.task('default')定义默认任务
//在命令行输入< gulp 启动images任务和auto任务
gulp.task('default',['images','auto']);
