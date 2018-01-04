/**
 * 数组扁平化
 * @param { Array } input 源数组
 * @param { Boolean } shallow 是否只扁平1层
 * @param { Array } output 当前扁平操作后传递的数组
 */
export default function flatten (input, shallow = false, output = []) {
  let idx = output.length;
  let i, l;

  input.forEach((item) => {
    if (Array.isArray(item)) {
      if (shallow) {
        i = 0, l = item.length;

        while (i < l) {
          output[ idx++ ] = item[ i++ ];
        }
      } else {
        flat(item, shallow, output);
      }
    } else {
      output[ idx++ ] = item;
    }
  });

  return output;
}
