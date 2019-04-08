import Name from './packages/name';
import List from './packages/list';

const n1 = new Name('thiago');
const n2 = new Name('andre');
const n3 = new Name('millana');

const names = new List([n1, n2, n3]);
names.process();
console.log(names.processedElements);
