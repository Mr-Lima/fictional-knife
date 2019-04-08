interface Package<T> {
  process(): T;
  split(parts: number): T[];
}

export default Package;
