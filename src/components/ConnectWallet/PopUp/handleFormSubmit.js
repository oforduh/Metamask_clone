export const handleFormSubmit = ({ e, state, setImportWallet, message }) => {
  e.preventDefault();
  if (message.length < 20) return;
  console.log("continue");
  const keys = Object.keys(state);
  const values = Object.values(state);

  const obj = {};
  // loop through the values and get it's corresponding key if it is true
  values.map((item, idx) => {
    if (item) {
      obj[keys[idx]] = item;
    }
    return obj;
  });
  //   console.log(obj);
};
