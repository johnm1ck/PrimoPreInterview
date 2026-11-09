/** Merges two ascending arrays and one descending array without modifying them. */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const first = i < collection_1.length ? collection_1[i] : Infinity;
    const second = j < collection_2.length ? collection_2[j] : Infinity;
    const third = k >= 0 ? collection_3[k] : Infinity;

    if (first <= second && first <= third) {
      result.push(first);
      i++;
    } else if (second <= third) {
      result.push(second);
      j++;
    } else {
      result.push(third);
      k--;
    }
  }

  return result;
}
