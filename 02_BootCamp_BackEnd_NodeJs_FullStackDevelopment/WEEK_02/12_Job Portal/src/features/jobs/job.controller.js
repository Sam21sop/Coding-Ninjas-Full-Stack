// // Please don't change the pre-written code
// // Import the necessary modules here
// import { customErrorHandler } from "../../middlewares/errorHandler.js";
// import { applyJobRepo, createNewJob, findJobRepo } from "./job.repository.js";

// export const postJob = async (req, res, next) => {
//   // Enhance the functionality of this controller to ensure that only users of the 'recruiter' type can post a new job.

//   try {
//     // Access user type from the req object
//     const userType = req.user.type;

//     console.log("from job controller: ", + userType);

//     // Check if the user is a recruiter
//     if (userType !== "recruiter") {
//       return res.status(403).json({ success: false, msg: "Only recruiters can post jobs." });
//     };

//     const resp = await createNewJob(req.body);
//     if (resp) {
//       res.status(201).json({
//         success: true,
//         msg: "job posted successfully with ",
//         job_description: resp,
//       });
//     } 
//     else {
//       res.status(400).json({ success: false, msg: "bad request" });
//     }
//   } catch (error) {
//     next(new customErrorHandler(400, error));
//   }
// };


// export const applyJob = async (req, res, next) => {
//   const job_id = req.params.id;
//   const user_id = req.user._id;
//   try {
//     const job_description = await findJobRepo(job_id);
//     if (!job_description) {
//       return next(new customErrorHandler(400, "job not found"));
//     }
//     const resp = await applyJobRepo(job_id, user_id);
//     if (resp) {
//       res
//         .status(201)
//         .json({ success: true, msg: "job applied successfully", resp });
//     } else {
//       res
//         .status(400)
//         .json({ success: false, msg: "you have already applied for this job" });
//     }
//   } catch (error) {
//     next(new customErrorHandler(400, error));
//   }
// };
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import { likeRepo } from "../like/like.repository.js";
import { applyJobRepo, createNewJob, findJobRepo } from "./job.repository.js";

export const postJob = async (req, res, next) => {
  if (req.user.type !== "recruiter") {
    return res.status(400).json({
      success: false,
      msg: "sorry! only recruiter is allowed to post jobs!",
    });
  }
  try {
    const resp = await createNewJob(req.body);
    if (resp) {
      res.status(201).json({
        success: true,
        msg: "job posted successfully with ",
        job_description: resp,
      });
    } else {
      res.status(400).json({ success: false, msg: "bad request" });
    }
  } catch (error) {
    next(new customErrorHandler(400, error));
  }
};
export const applyJob = async (req, res, next) => {
  const job_id = req.params.id;
  const user_id = req.user._id;
  try {
    const job_description = await findJobRepo(job_id);
    if (!job_description) {
      return next(new customErrorHandler(400, "job not found"));
    }
    const resp = await applyJobRepo(job_id, user_id);
    if (resp) {
      res
        .status(201)
        .json({ success: true, msg: "job applied successfully", resp });
    } else {
      res
        .status(400)
        .json({ success: false, msg: "you have already applied for this job" });
    }
  } catch (error) {
    next(new customErrorHandler(400, error));
  }
};
