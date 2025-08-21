window.loadedQuiz = [
  {
    category: "Amazon Aurora",
    question: "What type of database engine does Amazon Aurora support?",
    choices: ["MySQL and PostgreSQL", "Oracle and SQL Server", "MongoDB and Cassandra", "Redis and Memcached"],
    answer: 0,
    explanation: "Amazon Aurora is compatible with MySQL and PostgreSQL engines."
  },
  {
    category: "Amazon DynamoDB",
    question: "What type of database is Amazon DynamoDB?",
    choices: ["Relational", "Graph", "Key-value and document", "Time series"],
    answer: 2,
    explanation: "DynamoDB is a fully managed NoSQL database that supports key-value and document data models."
  },
  {
    category: "Amazon ElastiCache",
    question: "Which caching engines are supported by Amazon ElastiCache?",
    choices: ["Redis and Memcached", "Aurora and DynamoDB", "Neptune and Timestream", "Cassandra and MongoDB"],
    answer: 0,
    explanation: "ElastiCache supports Redis and Memcached for in-memory data caching."
  },
  {
    category: "Amazon Keyspaces",
    question: "Amazon Keyspaces is compatible with which open-source database?",
    choices: ["MongoDB", "Cassandra", "Redis", "PostgreSQL"],
    answer: 1,
    explanation: "Amazon Keyspaces is a scalable, managed database service compatible with Apache Cassandra."
  },
  {
    category: "Amazon MemoryDB",
    question: "What is Amazon MemoryDB designed for?",
    choices: ["Time series data", "Graph queries", "Durable in-memory Redis-compatible database", "Relational analytics"],
    answer: 2,
    explanation: "MemoryDB is a Redis-compatible, durable, in-memory database for ultra-fast performance."
  },
  {
    category: "Amazon Neptune",
    question: "What type of database is Amazon Neptune?",
    choices: ["Relational", "Graph", "Document", "Key-value"],
    answer: 1,
    explanation: "Amazon Neptune is a fully managed graph database service."
  },
  {
    category: "Amazon RDS",
    question: "Which engines are supported by Amazon RDS?",
    choices: ["MySQL, PostgreSQL, Oracle, SQL Server, MariaDB", "Redis, Memcached", "MongoDB, Cassandra", "Neptune, Timestream"],
    answer: 0,
    explanation: "Amazon RDS supports MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB engines."
  },
  {
    category: "Amazon RDS for Db2",
    question: "What is unique about Amazon RDS for Db2?",
    choices: ["It supports graph queries", "It is optimized for IBM Db2 workloads", "It runs only on VMware", "It is Redis-compatible"],
    answer: 1,
    explanation: "Amazon RDS for Db2 is a managed relational database service optimized for IBM Db2 workloads."
  },
  {
    category: "Amazon RDS on VMware",
    question: "What does Amazon RDS on VMware enable?",
    choices: ["Running RDS databases on-premises", "Caching data in-memory", "Graph analytics", "Time series storage"],
    answer: 0,
    explanation: "Amazon RDS on VMware allows users to run RDS databases in on-premises VMware environments."
  },
  {
    category: "Amazon Timestream",
    question: "What is Amazon Timestream optimized for?",
    choices: ["Caching", "Graph queries", "Time series data", "Document storage"],
    answer: 2,
    explanation: "Amazon Timestream is a purpose-built time series database for IoT and operational applications."
  },
  {
    category: "Amazon DocumentDB",
    question: "Amazon DocumentDB is compatible with which database API?",
    choices: ["Cassandra", "MongoDB", "Redis", "SQL Server"],
    answer: 1,
    explanation: "Amazon DocumentDB is a managed document database service compatible with MongoDB."
  },
  {
    category: "Amazon Lightsail",
    question: "Which feature is offered by Amazon Lightsail managed databases?",
    choices: ["Complex analytics", "Simple setup and management", "Graph processing", "Time series ingestion"],
    answer: 1,
    explanation: "Lightsail managed databases offer simplified setup and management for small-scale applications."
  },
  {
    category: "Amazon Aurora",
    question: "What is a key benefit of Amazon Aurora over traditional RDS engines?",
    choices: ["In-memory caching", "Serverless scaling", "Graph queries", "Time series optimization"],
    answer: 1,
    explanation: "Aurora offers serverless scaling and high performance with MySQL/PostgreSQL compatibility."
  },
  {
    category: "Amazon DynamoDB",
    question: "Which feature allows DynamoDB to automatically adjust throughput capacity?",
    choices: ["Auto Scaling", "Elastic Cache", "TimeStream Sync", "Neptune Boost"],
    answer: 0,
    explanation: "DynamoDB Auto Scaling adjusts read/write throughput based on traffic patterns."
  },
  {
    category: "Amazon ElastiCache",
    question: "Which use case is ideal for ElastiCache?",
    choices: ["Long-term archival", "Real-time leaderboard", "Graph traversal", "Time series ingestion"],
    answer: 1,
    explanation: "ElastiCache is ideal for real-time use cases like leaderboards and session management."
  },
  {
    category: "Amazon Keyspaces",
    question: "What query language does Amazon Keyspaces use?",
    choices: ["SQL", "CQL", "Gremlin", "SPARQL"],
    answer: 1,
    explanation: "Amazon Keyspaces uses Cassandra Query Language (CQL)."
  },
  {
    category: "Amazon MemoryDB",
    question: "Which durability feature does MemoryDB offer?",
    choices: ["Multi-AZ replication", "Cold storage", "Snapshot archiving", "Tape backup"],
    answer: 0,
    explanation: "MemoryDB offers Multi-AZ replication for high availability and durability."
  },
  {
    category: "Amazon Neptune",
    question: "Which graph models are supported by Neptune?",
    choices: ["Property Graph and RDF", "Document and Key-Value", "Time Series and Relational", "Columnar and OLAP"],
    answer: 0,
    explanation: "Neptune supports Property Graph (via Gremlin) and RDF (via SPARQL)."
  },
  {
    category: "Amazon RDS",
    question: "Which feature allows automatic backups in Amazon RDS?",
    choices: ["Snapshot Scheduler", "Backup Gateway", "Automated Backups", "TimeVault"],
    answer: 2,
    explanation: "Amazon RDS provides automated backups for point-in-time recovery."
  },
  {
    category: "Amazon RDS for Db2",
    question: "Which deployment model does RDS for Db2 use?",
    choices: ["Serverless", "Managed on AWS", "On-premises only", "Edge computing"],
    answer: 1,
    explanation: "Amazon RDS for Db2 is a fully managed database service hosted on AWS."
  },
  {
    category: "Amazon RDS on VMware",
    question: "Which benefit does RDS on VMware provide?",
    choices: ["Cloud-native analytics", "Hybrid cloud database management", "Graph database support", "Document indexing"],
    answer: 1,
    explanation: "RDS on VMware enables hybrid cloud database management across AWS and on-premises."
  },
  {
    category: "Amazon Timestream",
    question: "Which feature makes Timestream efficient for time series data?",
    choices: ["Columnar storage", "In-memory caching", "Automatic data tiering", "Graph traversal"],
    answer: 2,
    explanation: "Timestream automatically tiers data between memory and magnetic storage for performance and cost-efficiency."
  },
  {
    category: "Amazon DocumentDB",
    question: "Which use case is ideal for DocumentDB?",
    choices: ["Relational analytics", "Caching", "Document-based applications", "Time series ingestion"],
    answer: 2,
    explanation: "DocumentDB is ideal for applications that require flexible, document-based data models."
  },
  {
    category: "Amazon Lightsail",
    question: "Which database engines are supported by Lightsail managed databases?",
    choices: ["MySQL, PostgreSQL", "MongoDB, Cassandra", "Redis, Memcached", "Neptune, Timestream"],
    answer: 0,
    explanation: "Lightsail supports MySQL and PostgreSQL for simple managed database deployments."
  },
  {
    category: "Amazon Aurora",
    question: "Which feature allows Aurora to scale compute capacity automatically?",
    choices: ["Aurora Auto Scaling", "Aurora Serverless", "Aurora Boost", "Aurora Elastic"],
    answer: 1,
    explanation: "Aurora Serverless automatically adjusts compute capacity based on application needs."
  },
  {
    category: "Amazon DynamoDB",
    question: "Which feature in DynamoDB provides point-in-time recovery?",
    choices: ["Snapshots", "TimeVault", "PITR", "Backup Gateway"],
    answer: 2,
    explanation: "Point-in-time recovery (PITR) allows restoration of DynamoDB tables to any second within the retention period."
  },
 {
    category: "Amazon Neptune",
    question: "Which query language is used for RDF data in Neptune?",
    choices: ["Gremlin", "SPARQL", "SQL", "CQL"],
    answer: 1,
    explanation: "SPARQL is used for querying RDF data in Amazon Neptune."
  },
  {
    category: "Amazon Timestream",
    question: "Which use case is best suited for Amazon Timestream?",
    choices: ["E-commerce catalog", "Sensor data from IoT devices", "Social media graph", "Document storage"],
    answer: 1,
    explanation: "Amazon Timestream is optimized for time series data such as sensor readings from IoT devices."
  },
  {
    category: "Amazon DocumentDB",
    question: "Which feature allows DocumentDB to scale read operations?",
    choices: ["Read replicas", "Auto scaling", "Graph traversal", "Time tiering"],
    answer: 0,
    explanation: "DocumentDB supports read replicas to scale read operations and improve performance."
  },
  {
    category: "Amazon Lightsail",
    question: "What is a key benefit of using Lightsail managed databases?",
    choices: ["Advanced analytics", "Low-latency caching", "Simplified deployment for small apps", "Graph data modeling"],
    answer: 2,
    explanation: "Lightsail managed databases are ideal for small applications needing simple deployment and management."
  },
  {
    category: "Amazon Aurora",
    question: "Which Aurora feature improves availability across regions?",
    choices: ["Aurora Global Database", "Aurora Auto Scaling", "Aurora Cache Boost", "Aurora PITR"],
    answer: 0,
    explanation: "Aurora Global Database enables cross-region replication for high availability and disaster recovery."
  }
];
