<h1 align="center">babel-plugin-umi-css-modules</h1>

## 项目由来

umi通用解决方案 [issue](https://github.com/umijs/umi/issues/1417)

**主要功能**

```
// Input:
import styles from './a.css';
import './b.css';

// Output:
import styles from './a.css?cssModules';
import './b.css';
```

## 安装

```
// npm
npm install --save-dev @babel-plugins/umi-css-modules

// yarn

yarn add --dev @babel-plugins/umi-css-modules
```

## 使用

添加插件到你的babel配置文件中

```

{
  "plugins": [
    ["@babel-plugins/umi-css-modules"]
  ]
}
```


