<!--
 * @Description:
 * @Author: dnh
 * @Date: 2022-06-10 11:52:37
 * @LastEditors: dnh
 * @FilePath: \example\react\mobx\README.md
 * @LastEditTime: 2022-06-10 19:07:55
-->

### css-loader

```js
{
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        root: '/', //修改css中url指向的根目录, 默认值为/, 对于绝对路径, css-loader默认是不会对它进行处理的
        modules: false, //开启css-modules模式, 默认值为flase
        localIdentName: '[name]-[local]-[hash:base64:5]', //设置css-modules模式下local类名的命名
        minimize: false, //压缩css代码, 默认false
        camelCase: false, //导出以驼峰化命名的类名, 默认false
        import: true, //禁止或启用@import, 默认true
        url: true, //禁止或启用url, 默认true
        sourceMap: false, //禁止或启用sourceMap, 默认false
        importLoaders: 0, //在css-loader前应用的loader的数目, 默认为0
        alias: {} //起别名, 默认{}
      }
    }
  ]
}
```

### 解决 eslint 与 Prettier 之间的冲突

首先安装如下插件：

```
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

之后在 `.eslintrc.js` 中修改如下配置：

```js
{
  // ...
 - "extends": ["eslint:recommended", "standard"]
 + "extends": ["eslint:recommended", "standard",  "plugin:prettier/recommended"]
  // ...
}
```

### 解决路径别名 eslint 报错

首先安装如下插件：

```
yarn add eslint-import-resolver-webpack eslint-import-resolver-alias -D
```

增加一个与 rules 配置同级的 settings 配置：

```json
"settings": {
  "import/resolver": {
    "alias": {
      "map": [["@", "./src"]]
    }
  }
},
```

rules 增加如下配置：

```json
"rules": {
  "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"]
  }
}
```

https://jishuin.proginn.com/p/763bfbd3bb1c
