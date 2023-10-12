const ObjectKeysToString = (obj) => {
  const objectKeys = Object.keys(obj);
  return objectKeys.join(', ');
};

const ObjectValues = (obj) => {
  return Object.values(obj);
};

export { ObjectKeysToString, ObjectValues };
