## 网站性能优化项目

优化目标：尽可能优化此在线项目的速度，开始前，将该项目代码库下载检查并上传至github，生成在线地址进行一系列的网站性能优化。

### Online Version: https://zhonglianghu.github.io/Website-Performance-Optimization/

### 指南

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分
目标：优化index.html的PageSpeed Insights得分达到90分以上。

1. 复制上面Online Version在线地址，然后通过google的PageSpeed Insights访问，进行配置、优化、检测。
2. 首先利用gulp构建工具进行自动化图片压缩，具体gulp的安装及自动化压缩图片操作可见个人学习总结过程：[Gulp安装及其自动化压缩图片的应用](https://zhuanlan.zhihu.com/p/26534023),再对图片的宽高设置成合理的大小。
3. 对web字体进行优化。
4. 将js进行异步加载、优化css加载等操作提高PageSpeed Insights检测分数。

* PS:[Remove node_modules from git repo(从git库中删除node_modules文件,在.gitignore中添加```node_modules```文件名，防止上传至git repo)](https://gist.github.com/paulallies/0052fab554b14bbfa3ef)
----

#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

目标：需要编辑 views/js/main.js 来优化 views/pizza.html，直到这个网页的 FPS 达到或超过 60fps；滑动滑块改变pizza大小时，时间小于5ms。

1. 将for循环遍历元素的offsetWidth所造成的布局抖动进行更改，提取需读取页面信息（offsetWidth）的语句至for循环外。
2. 将querySelector()、querySelectorAll()更改为getElementById()或getElementsByClassName()。
3. 用transform代替left去移动pizza，减少重新绘制pizza工作，提高网页帧数。
4. requestAnimationFrame()优化updatePositions背景pizza移动的动画。
5. 背景pizza的位置fixed,减少pizza个数至22个左右即可实现效果，从而减少计算量，提高FPS。

### 一些关于优化的诀窍
* [web 性能优化](https://developers.google.com/web/fundamentals/performance/ "web 性能")
* [分析关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "分析关键渲染路径")
* [优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "优化关键渲染路径！")
* [避免 CSS 渲染阻塞](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "css渲染阻塞")
* [优化 JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [通过 Navigation Timing 进行检测](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")。在前两个课程中我们没有学习 Navigation Timing API，但它对于自动分析页面性能是一个非常有用的工具。我强烈推荐你阅读它。
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">下载量越少，性能越好</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">减少文本的大小</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">优化图片</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP缓存</a>

### 使用 Bootstrap 并定制样式
这个项目基于 Twitter 旗下的 <a href="http://getbootstrap.com/">Bootstrap框架</a> 制作。所有的定制样式都在项目代码库的 `dist/css/portfolio.css` 中。

* <a href="http://getbootstrap.com/css/">Bootstrap CSS</a>
* <a href="http://getbootstrap.com/components/">Bootstrap组件</a>
