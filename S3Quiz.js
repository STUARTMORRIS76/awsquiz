window.loadedQuiz = [
  {
    category: "S3 Basics",
    question: "What does S3 stand for in AWS?",
    choices: ["Simple Storage Service", "Secure Storage System", "Scalable Storage Solution", "Static Storage Service"],
    answer: 0,
    explanation: "S3 stands for Simple Storage Service, designed for scalable object storage."
  },
  {
    category: "S3 Basics",
    question: "Which type of data does Amazon S3 store?",
    choices: ["Block storage", "File system data", "Object data", "Relational data"],
    answer: 2,
    explanation: "Amazon S3 is an object storage service, storing data as objects within buckets."
  },
  {
    category: "Storage Classes",
    question: "Which S3 storage class is best for long-term archival with infrequent access?",
    choices: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier", "S3 One Zone-IA"],
    answer: 2,
    explanation: "S3 Glacier is optimized for archival storage with retrieval times ranging from minutes to hours."
  },
  {
    category: "Storage Classes",
    question: "Which S3 storage class automatically moves objects between access tiers based on usage?",
    choices: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier Deep Archive", "S3 Reduced Redundancy"],
    answer: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects between frequent and infrequent access tiers."
  },
  {
    category: "Storage Classes",
    question: "Which S3 storage class is designed for data that is infrequently accessed but requires rapid access when needed?",
    choices: ["S3 Standard", "S3 Glacier", "S3 Standard-IA", "S3 Glacier Deep Archive"],
    answer: 2,
    explanation: "S3 Standard-IA is ideal for infrequently accessed data that still needs quick retrieval."
  },
  {
    category: "Storage Classes",
    question: "Which S3 storage class stores data in a single availability zone?",
    choices: ["S3 One Zone-IA", "S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier"],
    answer: 0,
    explanation: "S3 One Zone-IA stores data in one AZ, offering lower cost but less redundancy."
  },
  {
    category: "Lifecycle",
    question: "What is the purpose of an S3 lifecycle policy?",
    choices: ["To encrypt objects", "To replicate objects", "To automate transitions and deletions", "To monitor access logs"],
    answer: 2,
    explanation: "Lifecycle policies automate transitions between storage classes and object expiration."
  },
  {
    category: "Lifecycle",
    question: "Which action can be performed by an S3 lifecycle rule?",
    choices: ["Change object permissions", "Transition objects to Glacier", "Enable versioning", "Resize objects"],
    answer: 1,
    explanation: "Lifecycle rules can transition objects to cheaper storage classes like Glacier."
  },
  {
    category: "Lifecycle",
    question: "Can lifecycle rules apply to versioned objects?",
    choices: ["No", "Yes, only to current versions", "Yes, to both current and non-current versions", "Only to deleted objects"],
    answer: 2,
    explanation: "Lifecycle rules can target both current and non-current versions of objects."
  },
  {
    category: "Versioning",
    question: "What happens when you upload a new version of an object in a versioned S3 bucket?",
    choices: ["The old version is deleted", "The new version overwrites the old", "Both versions are stored", "The bucket is reset"],
    answer: 2,
    explanation: "S3 stores both versions of the object when versioning is enabled."
  },
  {
    category: "Versioning",
    question: "How do you permanently delete a versioned object in S3?",
    choices: ["Delete the bucket", "Use a lifecycle rule", "Delete all versions manually", "Disable versioning"],
    answer: 2,
    explanation: "To permanently delete a versioned object, you must delete each version explicitly."
  },
  {
    category: "Security",
    question: "Which feature allows you to restrict access to S3 buckets using conditions like IP or time?",
    choices: ["IAM roles", "Bucket ACLs", "Bucket policies", "CloudTrail"],
    answer: 2,
    explanation: "Bucket policies allow fine-grained access control using conditions."
  },
  {
    category: "Security",
    question: "What does enabling 'Block Public Access' on an S3 bucket do?",
    choices: ["Encrypts the bucket", "Prevents all public access", "Deletes public objects", "Enables versioning"],
    answer: 1,
    explanation: "Block Public Access prevents any public access to the bucket and its objects."
  },
  {
    category: "Security",
    question: "Which AWS service can be used to monitor S3 access and changes?",
    choices: ["CloudWatch", "CloudTrail", "IAM", "GuardDuty"],
    answer: 1,
    explanation: "CloudTrail logs API calls and changes made to S3 buckets and objects."
  },
  {
    category: "Performance",
    question: "Which S3 feature improves performance for frequently accessed objects?",
    choices: ["S3 Transfer Acceleration", "S3 Intelligent-Tiering", "S3 Replication", "S3 Caching"],
    answer: 0,
    explanation: "S3 Transfer Acceleration speeds up uploads and downloads using Amazon CloudFront edge locations."
  },
  {
    category: "Cost Optimization",
    question: "Which S3 storage class offers the lowest cost for archival data?",
    choices: ["S3 Glacier", "S3 Glacier Deep Archive", "S3 Standard-IA", "S3 One Zone-IA"],
    answer: 1,
    explanation: "S3 Glacier Deep Archive is the lowest-cost option for long-term archival storage."
  },
  {
    category: "Replication",
    question: "What does S3 Cross-Region Replication (CRR) do?",
    choices: ["Encrypts objects", "Replicates objects to another region", "Deletes old versions", "Monitors access logs"],
    answer: 1,
    explanation: "CRR automatically replicates objects to a bucket in another AWS region."
  },
  {
    category: "Replication",
    question: "Which requirement must be met to enable S3 replication?",
    choices: ["Buckets must be in the same region", "Versioning must be enabled", "Objects must be encrypted", "Lifecycle rules must be disabled"],
    answer: 1,
    explanation: "Versioning must be enabled on both source and destination buckets for replication."
  },
  {
    category: "Advanced",
    question: "Which S3 feature allows you to host a static website?",
    choices: ["S3 Transfer Acceleration", "S3 Static Hosting", "S3 Website Configuration", "S3 Bucket ACLs"],
    answer: 2,
    explanation: "S3 Website Configuration enables static website hosting directly from a bucket."
  },
  {
    category: "Advanced",
    question: "Which header must be set to enable CORS for S3 objects?",
    choices: ["Access-Control-Allow-Origin", "Content-Type", "Authorization", "X-Amz-Meta"],
    answer: 0,
    explanation: "Access-Control-Allow-Origin is required to enable cross-origin resource sharing (CORS)."
  }
];
