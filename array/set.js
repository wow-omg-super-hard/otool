import uniq from './uniq';
import { findIndex, getDiff } from './get';

export function add (target, waitItem) {
  const waits = waitItem instanceof Array
    ? waitItem
    : [].slice.apply(arguments, 1);

  return uniq([ ...target, ...waits ]);
}

export function update (target, updateItem, findKey, findValue) {
  const index = findIndex(target, getDiff(findKey, findValue));
  let findItem, layerKeys, updateValue, res, temp;

  if (index < 0) {
    return;
  }

  findItem = target[ index ];
  layerKeys = Object.keys(updateItem)[0].split('.');
  updateValue = updateItem[ layerKeys.join('.') ];
  res = layerKeys.reduce((fi, currKey) => {
    temp = fi[ currKey ];

    if (Object.getPrototypeOf(temp) === Object.prototype) {
      return temp;
    }

    fi[ currKey ] = updateValue;
  }, findItem);

  target[ index ] = { ...findItem };

  return [ ...target ];
}

export function delete (target, findKey, findValue) {
  const index = findIndex(target, getDiff(findKey, findValue));

  return [ ...target.splice(index, 1) ];    
}
