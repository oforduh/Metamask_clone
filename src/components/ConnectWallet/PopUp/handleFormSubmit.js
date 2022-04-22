import { toast } from "react-toastify";

export const handleFormSubmit = ({ e, state, setImportWallet, message }) => {
  e.preventDefault();
  const id = toast.loading("Processing...");
  if (message.length < 40) {
    return toast.update(id, {
      render: "This field cannot be less 40 characters",
      type: "warning",
      isLoading: false,
      autoClose: 1000,
    });
  }
  setImportWallet(true);
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

  console.log(obj);

  //   if (!initializePayment.status) {
  //     return toast.update(id, {
  //       render: initializePayment.message || "An error occurred. Try again later",
  //       type: "error",
  //       isLoading: false,
  //       autoClose: 2000,
  //     });
  //   }
  //   if (initializePayment.status) {
  //     toast.update(id, {
  //       render: "Processing",
  //       type: "success",
  //       isLoading: false,
  //       autoClose: 2000,
  //     });

  //   }
  //   console.log(obj);
};
