import Comparable from '../comparable';
import Package from '../package';

class List<T extends Comparable<T>> implements Package<List<T>> {
  private _elements: T[];
  private _processedElements: T[];

  constructor(elements: T[]) {
    this._elements = elements;
    this._processedElements = [];
  }

  split(parts: number): List<T>[] {
    let lists = [];
    let myArray = this._elements;

    while (myArray.length) {
      lists.push(myArray.splice(0, parts));
    }

    const result = lists.map(list => {
      return new List<T>(list);
    });
    return result;
  }

  process(): List<T> {
    this._processedElements = this.mergeSort(this._elements);
    return this;
    // throw new Error('Method not implemented.');
  }

  // Split the array into halves and merge them recursively
  private mergeSort(arr: T[]): T[] {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr;
    }

    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  // compare the arrays item by item and return the concatenated result
  private merge(left: T[], right: T[]): T[] {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft].compare(right[indexRight]) < 0) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }

  public get elements(): T[] {
    return this._elements;
  }

  public get processedElements(): T[] {
    return this._processedElements;
  }
}

export default List;
