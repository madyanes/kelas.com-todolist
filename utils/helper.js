const ObjectKeysToString = (obj) => {
  const objectKeys = Object.keys(obj);
  return objectKeys.join(', ');
};

const ObjectKeysToStringForUpdate = (obj) => {
  const objectKeys = Object.keys(obj);
  return objectKeys.map((key) => key + ' = ?').join(', ');
};

const ObjectValues = (obj) => {
  return Object.values(obj);
};

export { ObjectKeysToString, ObjectKeysToStringForUpdate, ObjectValues };
