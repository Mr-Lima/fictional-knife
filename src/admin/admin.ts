import Name from '../shared/packages/name';
import List from '../shared/packages/list';
import axios from 'axios';

const n1 = new Name('thiago');
const n2 = new Name('andre');
const n3 = new Name('millana');
const n4 = new Name('joao');
const n5 = new Name('silva');
const n6 = new Name('caetano');

const names = new List([n1, n2, n3, n4, n5, n6]);
// names.process();
// console.log(names.processedElements);
const lists = names.split(2);
// console.log(JSON.stringify(lists[0].elements));
// console.log(JSON.stringify(lists[1].elements));
// console.log(JSON.stringify(lists[2].elements));
const sendList = async (names: List<Name>) => {
  const list = names.elements.map(element => element.name);
  // const data = new FormData();
  // data.append('json', JSON.stringify(list));
  const response = await axios({
    url: 'http://localhost:3001/list/name',
    method: 'post',
    data: {
      list
    }
  });
  const aux: Name[] = response.data.list.map((element: string) => {
    return new Name(element);
  });
  console.log(aux);
  names.setProcessedElements = aux;
};

sendList(lists[0]).then(() => {
  console.log(lists[0]);
});
