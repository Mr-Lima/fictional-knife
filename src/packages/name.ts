import Comparable from '../comparable';

class Name implements Comparable<Name> {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  compare(obj: Name): number {
    if (this._name.charAt(0) < obj.name.charAt(0)) {
      return -1;
    } else if (this._name.charAt(0) > obj.name.charAt(0)) {
      return 1;
    } else {
      return 0;
    }
  }

  public get name(): string {
    return this._name;
  }
}

export default Name;
