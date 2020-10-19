export const getDetails = (value) => {
  console.log(value);
  return {
    type: "PAGINATION",
    payload: {
      value
    }
  };
};
