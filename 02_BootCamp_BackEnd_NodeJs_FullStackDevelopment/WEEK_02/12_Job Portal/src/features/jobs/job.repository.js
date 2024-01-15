// // Please don't change the pre-written code
// // Import the necessary modules here
// import mongoose from "mongoose";
// import { jobSchema } from "./schema/newJob.schema.js";
// import { applyJobSchema } from "./schema/applyJob.schema.js";


// const newJobModel = mongoose.model("Job", jobSchema);
// const applyJobModel = mongoose.model("AplyJob", applyJobSchema)


// export const createNewJob = async (job) => {
//   // Write your code here
//   try {
//     const newJob = await newJobModel(job);
//     await newJob.save();
//     return newJob;
//   } 
//   catch (error) {
//     console.log("Something went wrong with createNewJob in job.repository.js.");
//     throw new Error(error.message)
//   }
// };


// export const applyJobRepo = async (jobId, userId) => {
//   // Write your code here
//   try {
//     // find existing application by jobId and userID
//     const existingApplication = await applyJobModel.findOne({
//       jobId: jobId,
//       userId: userId
//     });
//     // if existing appliccation present return appropriate message
//     if(existingApplication){
//       throw new Error("You have already applied for this job.");
//     };
//     // else create new application
//     const newApplication = new applyJobModel({jobId, userId});
//     await newApplication.save();
//     return newApplication;
//   } 
//   catch (error) {
//     console.log("Something went wrong with applyJobRepo in job.repository.js.");
//     throw new Error(error.message)
//   }
// };


// export const findJobRepo = async (_id) => {
//   // Write your code here
//   try {
//     const job = await newJobModel.findById(_id)
//     return job
//   } 
//   catch (error) {
//     console.log("Something went wrong with findJobRepo in job.repository.js.");
//     throw new Error(error.message)
//   }
// };



import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";

const JobModel = mongoose.model("Job", jobSchema);
const ApplyJobModel = mongoose.model("JobApplicants", applyJobSchema);

export const createNewJob = async (job) => {
  const newJob = new JobModel(job);
  return await newJob.save();
};

export const findJobRepo = async (_id) => {
  return await JobModel.findById(_id);
};

export const applyJobRepo = async (jobId, userId) => {
  const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
  if (checkIfAlreadyApplied) {
    return false;
  } else {
    // updateApplyJobModel
    await new ApplyJobModel({ jobId, userId }).save();

    // update jobModel applicants
    const filter = { _id: jobId };
    const update = { $push: { applicants: userId } };
    return await JobModel.findByIdAndUpdate(filter, update, {
      new: true,
    });
  }
};
