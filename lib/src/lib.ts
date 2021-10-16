export function forEach<T>(array: ArrayLike<T>, action: (value: T) => void) {
  for (let i = 0; i < array.length; i++) action(array[i]);
}

export function stuff() {

}
