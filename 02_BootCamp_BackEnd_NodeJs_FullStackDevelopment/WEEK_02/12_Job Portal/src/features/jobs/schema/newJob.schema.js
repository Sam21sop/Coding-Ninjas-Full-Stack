// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

/*
Create a schema for jobs in the "src/features/jobs/schema" directory.
Fields:
title (string, mandatory): This field should store the job title.
description (string, mandatory): This field is for the job description.
company (string, mandatory): Use this field to store the name of the company posting the job.
salary (number, mandatory): Store the job's salary in this field.
applicants (ObjectID reference to 'User', mandatory): This field links to applicants as references in the 'User' collection.
*/

export const jobSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Job title is required"] },
  description: {
    type: String,
    required: [true, "Job description is required"],
  },
  company: {
    type: String,
    required: [true, "name of the company posting this job is required"],
  },
  salary: { type: Number, required: [true, "salary for this job is required"] },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});