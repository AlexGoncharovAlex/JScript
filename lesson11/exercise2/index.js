function sortContacts(array, direction = true) {
  if (!Array.isArray(array)) {
    return null;
  }

  let result = direction
    ? array.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    : array.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
  return result;
}

const contacts = [
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Ann', phoneNumber: '555-55-55' },
  { name: 'Oleg', phoneNumber: '222-22-22' },
];
console.log(sortContacts(contacts, false));
