const List = require('./todo.js');

jest.mock('./localStorage.js');
let list = [
  { id: 1, description: 'first task', completed: false },
  { id: 2, description: 'second task', completed: false },
];

const todoList = new List(list);
const item = 'my task to add or remove';

describe('Add and delete function', () => {
  test('should add one item int the list', () => {
    list = todoList.addWork(item);
    expect(list.length).toBe(3);
  });
  test('should remove one item in the list', () => {
    list = todoList.deleteWork(item);
    expect(list.length).toBe(2);
  });
});