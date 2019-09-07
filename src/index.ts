import { ConfigAPI, PluginObj } from '@babel/core';
import { NodePath } from '@babel/traverse';
import { isImportDeclaration } from '@babel/types';
import { declare } from '@babel/helper-plugin-utils';
import { IPluginOptions } from './types';
import { isStyleFilePath, getStyleFilePath } from './utils';

const BABEL_VERSION = 7;

export default declare((
  api: ConfigAPI,
  options: IPluginOptions
): PluginObj => {
  api.assertVersion(BABEL_VERSION);

  return {
    visitor: {
      ImportDeclaration(path: NodePath) {
        const node = path.node;

        if (isImportDeclaration(node)) {
          const specifiers = node.specifiers;
          const value = node.source.value;

          // 处理类 import style from './a.less'; 样式文件
          if (specifiers.length && isStyleFilePath(value)) {
            node.source.value = getStyleFilePath(value);
          }
        }
      },
      Identifier(path) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar';
        }
      }
    }
  }
})
