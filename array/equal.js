/**
 * @desc 判断两个数组是否相等
 *
 * @param { Array } target 目标数组
 * @param { Array } source 源数组
 * @param { Boolean }
*/

// 根据类型相等、长度相等、值相等进行判断
export default function equal (target, source) {
  if (Object.getPrototypeOf(target) !== Object.getPrototypeOf(source)) {
    return false;
  }

  if (target.length !== source.length) {
    return false;
  }

  if (!target.every((value, idx) => {
    let temp = source[ idx ];

    if (value !== temp && !(temp instanceof Array)) {
      return false;
    } else if (temp instanceof Array) {
      return equal(value, temp);
    }

    return true;
  })) {
    return false;
  }

  return true;
}
