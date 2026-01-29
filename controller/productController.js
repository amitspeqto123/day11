export const createProduct = async (req, res) => {
  try {
    res.send("Admin product created successfully");
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllProduct = async (req, res) => {
  try {
    res.send("All Product fetched");
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    res.send("Product deleted..");
  } catch (error) {
    console.log(error.message);
  }
};
