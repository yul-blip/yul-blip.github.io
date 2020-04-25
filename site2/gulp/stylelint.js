/*stylelint no-process-exit:0 */

'use strict';

import path from 'path';
import gulpif from 'gulp-if';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // ESLint
  gulp.task('stylelint', () => {
    gulp.src([
      path.join(dirs.source, '**/*.scss')
    ])
    .pipe(plugins.stylelint({
        fix: true,
        reporters: [
            {
                formatter: 'string',
                console: true
            }
        ]
    }))
    .on('error', function() {
      if (!browserSync.active) {
        process.exit(1);
      }
    })
    .pipe(gulp.dest(dirs.source));
  });
}
