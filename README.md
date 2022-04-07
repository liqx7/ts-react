# ts_react

```
npm init
```

```
tsc --init
```

yarn add --dev webpack webpack-cli webpack-dev-server


添加webpack.config.js

引入ts文件需要加ts-loader
```
yarn add --dev ts-loader typescript
```

webpack中加插件
webpack.base.config.js
```
yarn add --dev html-webpack-plugin
```
webpack.dev.config.js

webpack.pro.config.js
```
yarn add --dev clean-webpack-plugin
```
webpack.config.js
```
yarn add --dev webpack-merge
```


配置webpack
entry src/index.ts
output app.js
resolve
module rules
plugins new HtmlWebpackPlugin



npm script


react
```
yarn add react react-dom
yarn add --dev @types/react @types/react-dom
```
配置react开发
ts.config 
  jsx

webpack打包把业务文件和库文件拆开
拆包
optimization