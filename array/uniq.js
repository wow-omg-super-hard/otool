/**
 * @desc 数组去重
 * 过滤掉数组里的普通类型(undefined、number(NaN)、boolean、string)和引用类型(null、object、array)
 * 不支持Error、RegExp等对象的去重
 */

export default function uniq (target) {
  const result = {}, key;

  return target.filter(item => {
    key = typeof item + (isNaN(item) ? 'NaN' : JSON.stringify(item));

    return result.hasOwnProperty(key) ? false : (result[ key ] = true);
  });
}
