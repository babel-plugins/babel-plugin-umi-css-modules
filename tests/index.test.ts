import * as babel from '@babel/core';
import plugin from '@/index';

describe('babel-plugin-umi-css-modules', () => {
  it('work', () => {
    const example = `
      var foo = 1;
      if (foo) console.log(foo);
    `;

    const { code } = babel.transform(example, {
      plugins: [plugin]
    });

    console.log(code);

    expect(code).toMatchSnapshot();
  })
});
