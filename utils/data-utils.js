export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (object) => {
  const mappedObject = {
    id: object._id.toString(),
    ...object,
  };
  return mappedObject;
};

export const isDateInBetween = (date, from, to) => {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
};

export const getDayDeference = (from, to) => {
  return (
    (new DataTransfer(to).getTime() - new Date(from).getTime()) /
      (24 * 60 * 60 * 1000) +
    1
  );
};
