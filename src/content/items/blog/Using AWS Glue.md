---
title: Using AWS Glue
description: Tried learning, got stuck :(
image: ../../../images/resized_IMG_0668-EDIT.jpg.webp
imageAlt: The pool area at a hotel in Phoenix
link: 
draft: false
createdDate: 2023-09-25T15:54:57Z
tags:
  - computer
---
I have a project at work in which I'm re-designing the process that a legacy application is ingesting data from another product offered by my company. When talking with a coworker, he stressed that the area of expertise for this project is Data Engineering. While I still don't really have all the details about what distinguishes this category of engineering from general Software Engineering, I do know about AWS services and wondered if **AWS Glue** could be a good solution.

## What is AWS Glue?

AWS Glue is a service that AWS offers that they also manage, which means that as the customer, you don't need to provision computers to run software or really even worry about the software. It is also "serverless" which specifically has to do with the not provisioning computers part. AWS takes responsibility for making sure that there is some computing hardware or device available to run whatever it is that you want to do with the computer.

Basic definitions out of the way, AWS Glue is what is known as an "Extract, Transform, and Load" service, or ETL. "Extract" is for how the service pulls data from a data source with some particular settings. "Transform" is for processes that are used to manipulate or change the data. Finally, "Load" is for placing the changed data onto a new data location. Altogether, ETL processes are commonly used for maintaining and organizing data as well as for analytics.

AWS Glue is not the only ETL service offered by AWS. They also offer:
1. AWS Data Pipelines: 
    - similar to Glue in that it is used for orchestrating ETL workflows, moving and changing data between AWS services and/or data sources outside of AWS (on premises)
    - different in that it is less managed than Glue. Users must configure and control their computing services. This allows it to be more configurable than Glue
    - As of September 2023, Data Pipelines aren't accessible from the console and are in "maintenance mode"
2. AWS Batch
    - not explicitly for ETL, but used for batch processing and can be used for ETL processes
    - also less managed than Glue, users must provision resources such as EC2 instances, et al. Once again this allows more areas that are customizable in workflows
3. Amazon Kinesis Data Firehose
    - used for real-time data analytics
    - can't perform as complex transformations as Glue, better suited for broadcasting event streams and changes
4. Amazon EMR (Elastic MapReduce)
    - "Big data" cluster computing, ideal for processing big huge amounts of data
5. AWS Lambda
    - on-demand computing and function execution, so not specifically for ETL but because of the ease at which it can be configured with other AWS services and resources, ETL processes can be set up on the code level
    - great for a little task

Some facets of AWS Glue that distinguishes it from other ETL services:
- Data Catalog: manages schema and metadata about data sources
- Code Generation: with simple cases in the console, can just use a visual editor instead of writing scripts
- Scheduler: capable of scheduling ETL processes with a built-in scheduling component


