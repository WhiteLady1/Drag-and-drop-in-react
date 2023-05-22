export interface ToDoListInerface {
  id: string;
  itemName: string;
  done: boolean;
}

export const TODO_DATA: ToDoListInerface[] = [
  {
    id: 'DKRT6555',
    itemName: 'Create demo',
    done: true,
  },
  {
    id: 'GTNJJ89',
    itemName: 'Fill TimeSheat',
    done: false,
  },
  {
    id: 'HGJ789',
    itemName: 'Call Anna',
    done: false,
  },
  {
    id: 'FGHL970',
    itemName: 'Go shoping',
    done: false,
  },
  {
    id: 'FGGLL8111',
    itemName: 'Buy cinema tickets',
    done: false,
  },
  {
    id: 'ASTMK1200',
    itemName: 'Repair the dishwasher',
    done: false,
  },
];
