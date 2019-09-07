import qs from 'qs';

/**
 * 判断当前路径是否是样式文件路径
 * @param filePath
 */
export function isStyleFilePath(
  filePath: string
): boolean {
  return /\.(css|less|sass|scss)/.test(filePath);
}

/**
 *
 * @param filePath
 */
export function getStyleFilePath(
  filePath: string
): string {
  const items = filePath.split('/');

  if (items && items.length) {
    const fileName = items[items.length - 1];

    // 处理已包含查询查询的情况
    if (fileName.includes('?')) {
      const fileNameItems = fileName.split('?');
      const queryData = qs.parse(fileNameItems[1]);
      queryData.cssModules = '';
      fileNameItems[1] = qs.stringify(queryData);
      items[items.length - 1] = `${fileNameItems.join('?')}`;

      const newPath =  items.join('/');

      return newPath.substring(0, newPath.length - 1);

    } else {
      items[items.length - 1] = `${fileName}?cssModules`;

      return items.join('/');
    }
  }

  return filePath;
}
