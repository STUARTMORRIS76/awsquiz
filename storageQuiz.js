window.loadedQuiz = [
  {
    category: "S3 Basics",
    question: "What does S3 stand for in AWS?",
    choices: ["Simple Storage Service", "Secure Storage System", "Scalable Storage Solution", "Static Storage Service"],
    answer: 0,
    explanation: "S3 stands for Simple Storage Service, designed for scalable object storage."
  },
  {
    category: "Amazon EBS",
    question: "Which type of storage does Amazon EBS provide?",
    choices: ["Object Storage", "Block Storage", "File Storage", "Tape Storage"],
    answer: 1,
    explanation: "Amazon EBS provides block-level storage volumes for use with EC2 instances."
  },
  {
    category: "Amazon EFS",
    question: "What type of storage is Amazon Elastic File System (EFS)?",
    choices: ["Object Storage", "Block Storage", "File Storage", "Tape Storage"],
    answer: 2,
    explanation: "Amazon EFS is a scalable file storage service for use with AWS Cloud services and on-premises resources."
  },
  {
    category: "AWS Backup",
    question: "What is the primary purpose of AWS Backup?",
    choices: ["Data replication", "Data encryption", "Centralized backup management", "File sharing"],
    answer: 2,
    explanation: "AWS Backup provides centralized backup management across AWS services."
  },
  {
    category: "Amazon File Cache",
    question: "What does Amazon File Cache accelerate?",
    choices: ["Database queries", "File-based workloads", "Object storage access", "Tape archive retrieval"],
    answer: 1,
    explanation: "Amazon File Cache accelerates file-based workloads by caching data closer to compute resources."
  },
  {
    category: "Amazon FSx for Lustre",
    question: "Which workloads is Amazon FSx for Lustre optimized for?",
    choices: ["Web hosting", "Machine learning", "High-performance computing", "Backup and restore"],
    answer: 2,
    explanation: "FSx for Lustre is optimized for high-performance computing workloads."
  },
  {
    category: "Amazon FSx for NetApp ONTAP",
    question: "Which protocol does FSx for NetApp ONTAP support?",
    choices: ["NFS", "SMB", "iSCSI", "All of the above"],
    answer: 3,
    explanation: "FSx for NetApp ONTAP supports NFS, SMB, and iSCSI protocols."
  },
  {
    category: "Amazon FSx for OpenZFS",
    question: "What is a key feature of FSx for OpenZFS?",
    choices: ["Tape emulation", "Snapshots and clones", "Object tagging", "Cold storage"],
    answer: 1,
    explanation: "FSx for OpenZFS supports advanced features like snapshots and clones."
  },
  {
    category: "Amazon FSx for Windows File Server",
    question: "Which protocol does FSx for Windows File Server use?",
    choices: ["NFS", "SMB", "FTP", "SCP"],
    answer: 1,
    explanation: "FSx for Windows File Server uses the SMB protocol for file sharing."
  },
  {
    category: "AWS Storage Gateway",
    question: "What does AWS Storage Gateway enable?",
    choices: ["Cloud-native object storage", "Hybrid cloud storage integration", "Serverless computing", "Edge computing"],
    answer: 1,
    explanation: "AWS Storage Gateway enables hybrid cloud storage integration between on-premises environments and AWS."
  },
  {
    category: "Amazon EC2 Instance Store",
    question: "What is a limitation of EC2 instance store volumes?",
    choices: ["They are encrypted by default", "They persist after instance termination", "They are ephemeral", "They support snapshots"],
    answer: 2,
    explanation: "EC2 instance store volumes are ephemeral and data is lost when the instance is stopped or terminated."
  },
  {
    category: "Snowball Family",
    question: "Which service is part of the AWS Snowball Family?",
    choices: ["Snowcone", "Snowfox", "Snowflake", "Snowstorm"],
    answer: 0,
    explanation: "Snowcone is a lightweight edge computing and data transfer device in the Snowball Family."
  },
  {
    category: "Amazon S3",
    question: "Which storage class in S3 is best for infrequently accessed data?",
    choices: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier", "S3 Standard-IA"],
    answer: 3,
    explanation: "S3 Standard-IA is designed for infrequently accessed data with lower storage cost."
  },
  {
    category: "Amazon S3",
    question: "What feature in S3 allows automatic transition of objects between storage classes?",
    choices: ["Replication", "Lifecycle policies", "Versioning", "Encryption"],
    answer: 1,
    explanation: "Lifecycle policies in S3 allow automatic transition of objects between storage classes."
  },
  {
    category: "Amazon EBS",
    question: "Which EBS volume type is optimized for high IOPS?",
    choices: ["Cold HDD", "General Purpose SSD", "Provisioned IOPS SSD", "Magnetic"],
    answer: 2,
    explanation: "Provisioned IOPS SSD (io2/io1) is optimized for high-performance workloads requiring high IOPS."
  },
  {
    category: "AWS Backup",
    question: "Which AWS service is NOT natively supported by AWS Backup?",
    choices: ["Amazon RDS", "Amazon S3", "Amazon EFS", "Amazon DynamoDB"],
    answer: 1,
    explanation: "Amazon S3 is not natively supported by AWS Backup."
  },
  {
    category: "Amazon FSx",
    question: "Which FSx variant is designed for Windows-based applications?",
    choices: ["FSx for Lustre", "FSx for NetApp ONTAP", "FSx for Windows File Server", "FSx for OpenZFS"],
    answer: 2,
    explanation: "FSx for Windows File Server is designed for Windows-based applications requiring SMB protocol."
  },
  {
    category: "Amazon EFS",
    question: "Which protocol does Amazon EFS use?",
    choices: ["SMB", "NFS", "FTP", "SCP"],
    answer: 1,
    explanation: "Amazon EFS uses the NFS protocol for file system access."
  },
  {
    category: "Snowball Family",
    question: "What is the primary use case for AWS Snowball Edge?",
    choices: ["Cold storage", "Edge computing and data transfer", "Tape backup", "Web hosting"],
    answer: 1,
    explanation: "Snowball Edge is used for edge computing and secure data transfer to AWS."
  },
  {
    category: "Amazon S3",
    question: "What is the maximum object size supported by Amazon S3?",
    choices: ["5 GB", "50 GB", "5 TB", "50 TB"],
    answer: 2,
    explanation: "Amazon S3 supports objects up to 5 TB in size."
  },
  {
    category: "Amazon EBS",
    question: "Can EBS volumes be attached to multiple EC2 instances simultaneously?",
    choices: ["Yes, always", "No", "Only if using Multi-Attach", "Only in us-east-1"],
    answer: 2,
    explanation: "EBS Multi-Attach allows a single volume to be attached to multiple instances in the same AZ."
  },
  {
    category: "Amazon FSx for Lustre",
    question: "Which storage service can FSx for Lustre integrate with for fast data processing?",
    choices: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Backup"],
    answer: 0,
    explanation: "FSx for Lustre can integrate with Amazon S3 for fast processing of S3 data."
  },
  {
    category: "Amazon File Cache",
    question: "Which type of data does Amazon File Cache support?",
    choices: ["Structured data", "Unstructured file data", "Relational data", "Encrypted data only"],
    answer: 1,
    explanation: "Amazon File Cache supports unstructured file data for high-speed access."
  },
  {
    category: "AWS Storage Gateway",
    question: "Which gateway type enables backup of on-premises data to AWS?",
    choices: ["Volume Gateway", "Tape Gateway", "File Gateway", "Object Gateway"],
    answer: 1,
    explanation: "Tape Gateway emulates physical tape libraries and backs up data to AWS."
  },
  {
    category: "Amazon EC2 Instance Store",
    question: "Which EC2 instance type typically includes instance store volumes?",
    choices: ["T3", "M5", "C6g", "I3"],
    answer: 3,
    explanation: "I3 instances include high-speed NVMe instance store volumes."
  },
  {
    category: "Amazon FSx for NetApp ONTAP",
    question: "Which feature is unique to FSx for NetApp ONTAP?",
    choices: ["Data deduplication", "Lifecycle policies", "Object tagging", "Edge caching"],
    answer: 0,
    explanation: "FSx for NetApp ONTAP supports advanced features like data deduplication."
  },
  {
    category: "Amazon FSx for OpenZFS",
    question: "What is the underlying file system used by FSx for OpenZFS?",
    choices: ["NTFS", "ZFS", "EXT4", "XFS"],
    answer: 1,
    explanation: "FSx for OpenZFS uses the ZFS file system, known for its scalability and data integrity features."
  },
  {
    category: "AWS Elastic Disaster Recovery",
    question: "What is the main benefit of AWS Elastic Disaster Recovery?",
    choices: ["Data encryption", "Low-cost archiving", "Minimized downtime during outages", "File caching"],
    answer: 2,
    explanation: "AWS Elastic Disaster Recovery helps minimize downtime and data loss during disasters by quickly recovering applications."
  },
  {
    category: "AWS Elastic Disaster Recovery",
    question: "Which environments can AWS Elastic Disaster Recovery protect?",
    choices: ["Only AWS workloads", "Only on-premises workloads", "Both AWS and on-premises workloads", "Only EC2 instances"],
    answer: 2,
    explanation: "AWS Elastic Disaster Recovery supports both AWS and on-premises workloads for disaster recovery."
  },
  {
    category: "Amazon S3",
    question: "What feature in S3 allows multiple versions of an object to be stored?",
    choices: ["Replication", "Versioning", "Lifecycle", "Encryption"],
    answer: 1,
    explanation: "S3 Versioning enables you to preserve, retrieve, and restore every version of every object stored in a bucket."
  },
  {
    category: "AWS Backup",
    question: "Which feature allows AWS Backup to protect data across multiple AWS accounts?",
    choices: ["Cross-region replication", "Multi-account backup plans", "Lifecycle rules", "IAM roles"],
    answer: 1,
    explanation: "Multi-account backup plans in AWS Backup allow centralized backup management across AWS Organizations."
  },
  {
    category: "Amazon EFS",
    question: "Which performance mode is best for latency-sensitive workloads in Amazon EFS?",
    choices: ["General Purpose", "Max I/O", "Burst Mode", "Throughput Mode"],
    answer: 0,
    explanation: "General Purpose mode is ideal for latency-sensitive workloads in Amazon EFS."
  },
  {
    category: "Amazon FSx for NetApp ONTAP",
    question: "Which data management feature is supported by FSx for NetApp ONTAP?",
    choices: ["Data tiering", "Lifecycle policies", "Object tagging", "Cold storage"],
    answer: 0,
    explanation: "FSx for NetApp ONTAP supports automatic data tiering to lower-cost storage."
  },
  {
    category: "Snowball Family",
    question: "Which Snowball device is designed for rugged environments and edge computing?",
    choices: ["Snowcone", "Snowball Edge Compute Optimized", "Snowball Edge Storage Optimized", "Snowfox"],
    answer: 1,
    explanation: "Snowball Edge Compute Optimized is designed for edge computing in rugged environments."
  },
  {
    category: "Amazon S3",
    question: "Which S3 storage class is designed for archival data with retrieval times in minutes or hours?",
    choices: ["S3 Glacier", "S3 Standard", "S3 Intelligent-Tiering", "S3 One Zone-IA"],
    answer: 0,
    explanation: "S3 Glacier is designed for archival data with retrieval times ranging from minutes to hours."
  },
  {
    category: "AWS Storage Gateway",
    question: "Which Storage Gateway type allows on-premises applications to access cloud-backed file shares?",
    choices: ["Volume Gateway", "Tape Gateway", "File Gateway", "Object Gateway"],
    answer: 2,
    explanation: "File Gateway enables on-premises applications to access cloud-backed file shares using NFS or SMB."
  }
];
