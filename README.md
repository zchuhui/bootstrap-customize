# 官网 [Bootstrap](http://getbootstrap.com)

# 快速构建

### 1.下载到本地

```
git clone xxx
```

### 2. 安装依赖

```
npm i
```

### 3. 编译

```
grunt dist
```

> 源样式文件在less里面，可以在里面修改你想要的样式，然后 `grunt dist` 后文件将会编译到dist文件夹里面，即可拿来使用。


### 4.添加 js 文件
添加`js`模块时，需要在`Gruntfile.js`的`grunt.initConfig > concat > bootstrap > src`里面引入模块，才能一起打包。


