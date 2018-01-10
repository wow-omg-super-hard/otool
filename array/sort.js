/**
 * 数组排序
 */

export function ascSort (target = [], diffKey) {
  return [ ...target.sort((prevItem, nextItem) => {
    if (diffKey) {
      return prevItem[ diffKey ] - nextItem[ diffKey ] < 0;
    }

    return prevItem - nextItem < 0;
  }) ];
}

export function descSort (target = [], diffKey) {
  return ascSort(target, ruleFn).reverse();
}
