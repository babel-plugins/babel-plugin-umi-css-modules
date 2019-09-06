import { ConfigAPI, PluginObj } from '@babel/core';
import { declare } from '@babel/helper-plugin-utils';
import { IPluginOptions } from './types';

const BABEL_VERSION = 7;

export default declare((
  api: ConfigAPI,
  options: IPluginOptions
): PluginObj => {
  api.assertVersion(BABEL_VERSION);

  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar';
        }
      }
    }
  }
})
