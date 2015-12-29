import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transipile", () => {
    return browserify("izvor/app.js")
        .transform("babelify")
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("kraj"));
});

//ovaj prvi transiple ce pozvati transiple pre watch-a
gulp.task("watch", ["transipile"], () => {
    gulp.watch("izvor/*.js", ["transipile"]);
});

gulp.task("default", ["transipile"]);