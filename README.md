<h1 align='center'>Brick Design</h1>

[![build status](https://travis-ci.org/brick-design/react-visual-editor.svg?branch=brickd)](https://travis-ci.org/github/brick-design/react-visual-editor)
[![npm version](https://img.shields.io/npm/v/@brickd/react.svg?style=flat-square)](https://www.npmjs.com/package/brickd)
[![npm downloads](https://img.shields.io/npm/dm/brickd.svg?style=flat-square)](https://www.npmjs.com/package/brickd)
[![codecov](https://codecov.io/gh/brick-design/react-visual-editor/branch/master/graph/badge.svg)](https://codecov.io/gh/brick-design/react-visual-editor)

## SNAPSHOT
![brickd1](https://user-images.githubusercontent.com/15995127/85188005-7e4de100-b2d6-11ea-9441-2bd5570b14a9.gif)
![brickd2](https://user-images.githubusercontent.com/15995127/85187856-86595100-b2d5-11ea-883e-e45313797fb3.gif)
![brickd3](https://user-images.githubusercontent.com/15995127/85187862-92451300-b2d5-11ea-8394-a6c06b45de97.gif)

## 描述
基于React组件之间原始约束设计，还原真实开发中组件编码过程，所见即所得。当前版本还在开发中，新功能持续更新.....欢迎关注！


###  📦 Install
```sh
yarn add @brickd/react  @brickd/react-web
```
OR
```sh
npm install @brickd/react @brickd/react-web
```
## Usage
```jsx
import {createElement} from 'react';
import {BrickDesign,BrickTree,BrickProvider} from '@brickd/react';
import {BrickPreview} from '@brickd/react-web';
import brickRender from '@brickd/render';
const plugins=[(vDom,componentConfig)=>vDom];
const App = () => (
  <BrickProvider initState={{}} customReducer={(state,action)=>state} config={{...}}>
<div>
    <BrickPreview/>
    <BrickDesign />
{brickRender(pageConfig,createElement,plugins)}
<BrickTree/>
</div>
  </BrickProvider>

);
```
### example

```
yarn  install

npm run start:example
```

### 技术交流

 <img src="./docs/QQ.jpeg" width="300" />

## LICENSE

MIT
