// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

/*
Create a schema for recording job applications in the same "src/features/jobs/schema" directory.
Fields:
jobId (ObjectID reference to 'Job', mandatory): Store the job the applicant is applying for.
userId (ObjectID reference to 'User', mandatory): Identify the applicant. 
*/


export const applyJobSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "job id required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId of the applicant is required"],
  },
});



