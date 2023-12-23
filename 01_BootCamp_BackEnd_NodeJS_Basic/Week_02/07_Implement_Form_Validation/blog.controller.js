// // Please don't change the pre-written code

// export const validateBlog = (req, res) => {

//   // Retrieve form data from request body
//   const { title, description, image } = req.body;
//   // console.log(image)

//   // Initialize an array to store error messages
//   const errors = [];

//   // Validate the "Title" Field
//   if (!title) {
//     errors.push("Title cannot be empty");
//   }  
//   if (title.length < 3) {
//     errors.push("Title should have a minimum length of three characters");
//   }

//   // Validate the "Description" Field
//   if (!description) {
//     errors.push("Description cannot be empty");
//   }  
//   if (description.length < 10) {
//     errors.push("Description should have a minimum length of ten characters");
//   }

//   // Validate the "Image URL" Field
//   try {
//     const validUrl = new URL(image);
//   } catch (err) {
//     errors.push("Please enter a valid image URL")
//   }

//   // Check if there are any validation errors
//   if (errors.length > 0) {
//       // Render the addBlog view with error messages
//       return res.render('addBlog', { errors });
//   }

//   res.status(201).render("addBlog", { errors: null, success:true });
// };



// export const renderBlogForm = (req, res) => {
//   res.render("addBlog", { errors: null, success: false });
// };
export const validateBlog = (req, res) => {
  const { title, description, image } = req.body;
  title.trim();
  description.trim();
  image.trim();
  const errors = [];
  try {
    new URL(image);
  } catch (err) {
    errors.push("The image URL provided should be a valid URL");
  }
  if (!title) {
    errors.push("The title field should not be empty");
  }
  if (title.length < 3) {
    errors.push("The title field should contain at least 3 characters");
  }
  if (!description) {
    errors.push("The description field should not be empty");
  }
  if (description.length < 10) {
    errors.push("The description field should contain at least 10 characters");
  }
  if (errors.length > 0) {
    res.status(401).render("addBlog", { errors, success: false });
  }
  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
