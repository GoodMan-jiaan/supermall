# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 对应文件夹的作用
* assets文件夹用来存放css文件与img图片
* components文件夹使用来存放组件
  > common文件夹存放的是一些公用的主键，在其他项目中也是可以用到的
    >> navbar文件夹是封装好的导航，就是这个项目的头部（最顶部）
     scroll文件夹是根据bertter-scroll封装好的滚动组件
     swiper文件是封装好的轮播图组件
     tabbar文件是根据router封装好的菜单文件

  > content文件夹存放的是一些在当前项目使用到的组件
    >> backTop文件夹是封装好的反对滚动顶部的小按钮，里面的功能有1、当滚动一定高度时按钮出现
       goods文件夹是封装好的图片展示组件
       mainTabbar是对上面的tabbar文件进行运用封装
       tabControl是对首页点款式换商品进行封装

* network文件夹是对网络请求有关的文件进行整合
     >> home文件是对views中home首页的网络请求进行封装
        request文件是对axios框架的网络请求进行封装

* router文件夹是存放路由的文件
    >>index文件是对路由的一系列配置

* views文件夹存放的是一些页面的文件，每个问价里又有子文件夹放置一些分离出来的组件
  > cart,category,home,profile都是主要开发文件
    >> RecommendView文件是对中间图片的分离封装使用
    >> HomeSwiper文件是对首页轮播图的分离封装使用
    >> FeatureView文件是对首页的推荐信息进行分离封装

* App.vue文件是程序运行的首页页面

* main.js文件是程序最先运行的js文件，而App.vue文件是在main.js中被调用的

* .browserslistrc文件是浏览器相关的配置，里面有大于1%的市场份额，最后两个版本，不能ie小于8

* .editorconfig文件对这个代码的规范进行设置

* .gitignore是忽略文件，一些不想上传github的就在那填写忽略

* babel.config.js是对babel的配置，是个比较复杂的东西，一般不动

* package.json是配置文件，管理node里面的包，对一些版本进行管理

* package-lock.json与package.json文件形成映射，记录真实的版本

* vue.config.js









