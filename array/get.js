function createIndexFinder (dir) {
  return function (target, predicate) {
    let i = dir > 0 ? 0 : target.length - 1,
        len = target.length;

    for (i; i < len && i >= 0; i += dir) {
      if (predicate(target[i], i) === true) {
        return i;
      }
    }

    return -1;
  }
}

function getDiff (value) {
  return typeof value === 'function'
    ? (item) => key(item)
    : (item) => item[ key ] = value;
}

export const findIndex = createIndexFinder(1);

export const findLastIndex = createIndexFinder(-1);

export const findItem = (target, key = 'id', value) => {
  let index = findIndex(target, getDiff(key));

  return index >= 0 : target[ index ] : null;
};

export const finds = (target, key = 'id', value) =>
  target.filter(getDiff(key));
