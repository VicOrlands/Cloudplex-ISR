import {
  unix,
  java,
  nosql,
  cloud,
  azure,
  github,
  testing,
  python,
  devops,
  bigdata,
  awsImg,
  powerbi,
  machine,
  database,
  computing,
  integration,
  networking,
  kubernetes,
  datascience,
  bigdataspark,
  bigdatabeginner,
} from "./Images";

export const CourseDescriptionList = [
  {
    thumbnail: github,
    title: "Introduction To Version Control With Git/GitHub",
    courseLink: "intro-to-version-control",
    seoTitle: "Git & GitHub Version Control Course - CloudPlexo",
    seoDesc:
      "Master Git and GitHub for real-world coding. Learn Git Essentials, installing Git on Windows, essential Git commands, creating a GitHub account, and pushing code to remote repositories.",
    seoKeywords:
      "Version control, Git Essentials, Installing Git, Essential Git commands, GitHub account, Pushing code, Remote repositories",
    courseDescription: `Git is an essential tool for work in any code-related field, from data science to game development to machine learning. This course
            covers everything you need to know to start using Git and Github in
            the real-world today! We start off with Git Essentials. The goal of
            this unit is to give you all the essential Git tools you need for
            daily use. We start off talking about version control software, what
            it is, why it matters, and the history of Git.`,
    moduleList: [
      "Introduction to Version control system",
      "Installing Git on Windows",
      "Git Commands",
      "Creating Account on GitHub and Pushing code to the remote repository",
    ],
  },
  {
    thumbnail: computing,
    title:
      "Edge Computing: Driving The Next Evolution of Internet and Technology",
    courseLink: "edge-computing",
    seoTitle: "",
    seoDesc: "",
    seoKeywords: "",
    courseDescription: `This conference or lecture will help you overcome critical
            challenges - reducing latency, building quality infrastructure, and
            decreasing costs - with real-time data processing. Learn from key
            players in the Cloud ecosystem and build partnerships that will
            drive edge computing to the next level.`,
    moduleList: [
      "Introduction to Cloud Computing and Edge Computing(Xpress Payments Limited)",
      "Business Problems that can be solved using Edge Computing (Co-Founder and CTO Datacrest)",
      "Edge and its use cases (AWS Community Hero And Head of Infrastructure and Data Protection Indicina)",
    ],
  },
  {
    thumbnail: python,
    title: "Python For Data Science",
    courseLink: "python-for-data-science",
    seoTitle:
      "Python for Data Science Course - Analyze Data with Python - CloudPlexo",
    seoDesc:
      "Kickstart your journey to becoming a Data Scientist with our comprehensive Python for Data Science course. Solve intriguing global problems with Data Science",
    seoKeywords:
      "Data Scientist, Python fundamentals, Arithmetic functions, Variable handling, Data types, Lists, String manipulation, Python packages, NumPy arrays",
    courseDescription: `Are you ready to start your path to becoming a Data Scientist! This comprehensive course will be your guide to learning how to use the power of Python to analyze data. Data Scientist has been ranked the
            number one job on Glassdoor and the average salary of a data
            scientist is over $120,000 in the United States according to Indeed!
            Data Science is a rewarding career that allows you to solve some of
            the world's most interesting problems! This course is designed for
            beginners with no or some programming experience.`,
    moduleList: [
      "Introduction to Python in Data Science",
      "Arithmetic Functions",
      "Defining Storing Variables and Datatypes",
      "Working with Data Types",
      "PRACTICE",
      "Introduction to Lists",
      "SLICING",
      "Accessing List Values",
      "Sub setting Lists",
      "Advanced List Operations",
      "Built in Functions",
      "Built in Functions part 2",
      "Function Arguments",
      "Function Arguments Part 2",
      "Introduction to String Methods",
      "Introduction to String Methods Part 2",
      "Importing Python Packages",
      "Introduction to String Methods Part 3",
      "Subsetting and Comparing Arrays",
      "Introduction to NumPy Arrays",
      "Subsetting and Comparing Arrays",
    ],
  },
  {
    thumbnail: networking,
    title: "Networking CCNA",
    courseLink: "networking-ccna",
    seoTitle:
      "Networking CCNA Course - Prepare for Cisco CCNA Certification - CloudPlexo",
    seoDesc:
      "Master networking fundamentals and prepare for the Cisco CCNA certification with our comprehensive course. Ideal for CCENT and CCNA candidates or anyone interested in networking",
    seoKeywords:
      "Cisco CCNA certification, Networking fundamentals, Cisco routers, Dynamic routing, VLANs, Spanning tree protocol, Access control lists, IPv6 addressing, OSI model, Troubleshooting, Advanced security, IP services",
    courseDescription: `This course would introduce you to the world of networking. The Course would prepare you to achieve the Cisco CCNA certification. The course would start with the very basic of networking and
            thereafter go further deep dive into core networking. The course is
            good for Cisco CCENT and CCNA certification candidates or anyone
            interested in learning networking. In addition, the course is also
            useful to anyone interested in entering a career in network
            technologies.`,
    moduleList: [
      "Introduction",
      "TCP IP addressing",
      "Subnetting FLSM",
      "Subnetting VLSM",
      "Subnetting Questions",
      "Introduction to Cisco-Routers",
      "Basic Commands",
      "Dynamic Routing RIPv2",
      "Dynamic Routing EIGRP",
      "Dynamic Routing OSPF",
      "Basic Switching",
      "VLAN And Trunking",
      "VLAN Trunking protocol",
      "Spanning Tree Protocol",
      "STP optimization",
      "Access control List",
      "Network Address Translation",
      "IPv6 addressing",
      "OSI Model and TCPIP protocols",
      "TCP IP addressing",
      "Troubleshooting Switching",
      "Troubleshooting Routing",
      "Advance Security",
      "IP services",
    ],
  },
  {
    thumbnail: machine,
    title: "Machine Learning",
    courseLink: "machine-learning",
    seoTitle: "",
    seoDesc: "",
    seoKeywords: "",
    courseDescription: `Learn Machine and Data Science, then get hired. This comprehensive and project based course will introduce you to all of the modern
            skills of a Data Scientist and along the way, we will build many
            real world projects to add to your portfolio.
            Data Scientist has been ranked the number one job on Glassdoor and
            the average salary of a data scientist is over $120,000 in the
            United States according to Indeed! Data Science is a rewarding
            career that allows you to solve some of the world's most interesting
            problems.`,
    moduleList: [
      "Introduction to AI",
      "Introduction to ML - Supervised and Unsupervised Learning",
      "ML KNN - Lp Norms",
      "ML KNN - Euclidean and Manhattan Distance",
      "ML KNN - Minkowski, Hamming and Cosine Distance",
      "ML Over and Under Fitting - Cross Validation and K-Fold CV",
      "Project 1 Creating the First Model using KNN and finding the Accuracy",
      "ML Linear Regression ",
      "Project 2 based on SIMPLE LINEAR REGRESSION",
      "Project 3 based on MULTIPLE LINEAR REGRESSION",
      "ML HYPOTHESIS TESTING Statistics Fundamentals",
      "ML Decision Tree with Gini Index",
      "ML Decision Tree with Information Gain",
      "Project 4 CASE STUDY based on DECISION TREE",
    ],
  },
  {
    thumbnail: nosql,
    title: "Non Relational Databases - NoSQL And MongoDB",
    courseLink: "non-relational-database",
    seoTitle:
      "Non-Relational Databases - NoSQL and MongoDB Course - CloudPlexo",
    seoDesc:
      "Master MongoDB, one of the most popular NoSQL databases, with our comprehensive course. Become a MongoDB expert with hands-on skills",
    seoKeywords:
      "MongoDB training, NoSQL database concepts, CRUD operations, Data modeling, MongoDB expert, Aggregation framework, MapReduce",
    courseDescription: `This course will help you to master one of the most popular NoSQL databases MongoDB. In this course, we will start by learning basic concepts non-relational databases, core concepts of MongoDB, MongoDB
            installation process on different operating systems, creating
            databases, Collections, CRUD opertaions and Indexing. This course is
            designed to provide knowledge and hands on skills to become a
            successful MongoDB expert.`,
    moduleList: [
      "Introduction to NoSQL Database",
      "Getting started installation configuration",
      "Basics of MongoDB",
      "MongoDB CRUD Operations",
      "Performance tuning with indexes in MongoDB",
      "ObjectIds in MongoDB",
      "Aggregation framework in mongoDB",
      "Data modelling in MongoDB",
      "Relationships in MongoDB",
      "User role management in MongoDB",
      "Clarification Section Course discussions",
      "Reguler expressions in MongoDB",
      "MapReduce in MongoDB",
      "MongoDB samples",
    ],
  },
  {
    thumbnail: datascience,
    title: "Complete Data Science And Machine Learning With R",
    courseLink: "data-science-and-ml",
    seoTitle: "Complete Data Science and Machine Learning with R - CloudPlexo",
    seoDesc:
      "Master Data Science and Machine Learning with R. Learn R programming, machine learning fundamentals, data visualization and more",
    seoKeywords:
      "Complete data science course, Machine learning with R, R programming, Data visualization with R, Applied statistics for ML, ML fundamentals, ANOVA with R, Logistic regression with R, Dimension reduction with principal component analysis, Clustering with K Means, Tree-based models CART technique, KNN, Naive Bayes, Neural networks with R",
    courseDescription: `This course has been designed by professional Data Scientists so that we can share their knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. The course would
            walk you step-by-step into the World of Machine Learning. With every
            tutorial, you will develop new skills and improve your understanding
            of this challenging yet lucrative sub-field of Data Science. This
            course is fun and exciting, but at the same time, we dive deep into
            Machine Learning. Data Scientist has been ranked the number one job
            on Glassdoor and the average salary of a data scientist is over
            $120,000 in the United States according to Indeed! Data Science is a
            rewarding career that allows you to solve some of the world's most
            interesting problems!`,
    moduleList: [
      "Introduction",
      "Hands on R Programming",
      "Machine learning Fundamentals",
      "Data visualisation with R",
      "Applied statistics for ML",
      "ML fundamentals",
      "ANOVA With R",
      "Logistic Regression with R",
      "Dimension reduction technique with principal component analysis",
      "Clustering With K Means",
      "Tree based models CART technique and Random-Forest",
      "KNN K Nearest Model",
      "Naive Bayes",
      "Neural Networks With R",
    ],
  },
  {
    thumbnail: database,
    title: "Relational Databases And PostgreSQL",
    courseLink: "database-and-postgresql",
    seoTitle: "Relational Databases and PostgreSQL Course - CloudPlexo",
    seoDesc:
      "Unlock the power of PostgreSQL, a top pick for databases, with our comprehensive course. Master PostgreSQL for your next big project",
    seoKeywords:
      "PostgreSQL database course, Data retrieval in PostgreSQL, PostgreSQL joins, Query optimization, DML operations in PostgreSQL, Relational database management",
    courseDescription: `Every app in the world needs to store information in a database. Although there are many different databases you can use, PostgreSQL
            has been a number-one pick for decades, offering scalable
            performance, rock-solid uptime, and flexible design systems. This
            course will teach you everything you need to know about PostgreSQL
            to use it on your next big project!`,
    moduleList: [
      "Introduction",
      "Retrieve data using select statement",
      "Data filter in select",
      "Data exploration using select",
      "Joins",
      " Set Operators",
      "Aggregate function",
      "Group Data",
      "Build compress quieries",
      "String and number builtin functions",
      "Date and time built in functions",
      "Datatype conversion builtin functions",
      "Sub-query",
      "DML Operations",
    ],
  },
  {
    thumbnail: devops,
    title: "Devops With Ansible",
    courseLink: "devops-with-ansible",
    seoTitle: "DevOps with Ansible Course - CloudPlexo",
    seoDesc:
      "Embark on your DevOps journey with our Ansible for DevOps course. Learn how to automate your daily tasks, work with ad-hoc commands, playbooks, variables, inventory, and roles.",
    seoKeywords:
      "Ansible automation course, DevOps skills with Ansible, Ansible playbooks and variables, Speeding up Ansible, DevOps career training",
    courseDescription: `Are you just started working on your DevOps career? Or looking to learn and transition to devops? Then this course is for you. Ansible
            for DevOps course would help you to understand how Ansible works and
            automate your day to day activities. The course would discuss
            various topics like ad-hoc commands, playbooks, variables,
            inventory, roles with examples.`,
    moduleList: [
      "Introduction to Ansible",
      "How to work with Ansible and AWS",
      "Dynamic Inventories, playbooks, variables",
      "Managing and securing information",
      "Speed up your Ansible run times",
    ],
  },
  {
    thumbnail: cloud,
    title: "Leveraging Cloud Solutions For Business Growth",
    courseLink: "leveraging-cloud-solutions",
    seoTitle:
      "Leveraging Cloud Solutions for Business Growth Course - CloudPlexo",
    seoDesc:
      "Join our webinar course led by FinTech experts to explore how cloud computing can drive business growth. Discover real-time industry use-cases and insights from CEOs, CTOs",
    seoKeywords:
      "Cloud adoption in business, Cloud innovation, Cloud agility, Cloud security, Cost reduction with cloud, Real-time industry use-cases",
    courseDescription: `This course is a webinar delivered by FinTech companies leveraging cloud for business growth. Learn how Cloud Computing is leveraged to
            boost innovation, agility and application development, as well as
            reducing infrastructure costs by 20-30% from CEOs and CTOs
            discussing actual industry use-cases. Leveraging cloud security and
            resilience aspects can also reduce costs of downtime and breaches.`,
    moduleList: [
      "Cloud Adoption and Real-Time Cases( CTO - Patricia Technologies)",
      "Cloud Adoption and Real-Time Cases(Head of Engineering - RenMoney)",
      "Cloud Adoption and Cloud Financial Management (AWS Community Hero And Head of Infrastructure and Data Protection Indicina)",
    ],
  },
  {
    thumbnail: kubernetes,
    title: "Kubernetes",
    courseLink: "kubernetes",
    seoTitle: "Kubernetes Course - CloudPlexo",
    seoDesc:
      "Learn Kubernetes deployment, networking, autoscaling, use cases, commands, best practices, and more for your next big project",
    seoKeywords:
      "Container management, Kubernetes Deployment, Kubernetes Networking, Autoscaling, Kubernetes Use cases, Kubernetes Commands, Kubernetes Best Practices, Istio best practices",
    courseDescription: `Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both
            declarative configuration and automation. It has a large, rapidly
            growing ecosystem. This course will teach you everything you need to
            know about Kubernetes to use it on your next big project!.`,
    moduleList: [
      "Introduction",
      "Kubernetes Deployment",
      "Kubernetes Networking",
      "Autoscaling in Kubernetes",
      "Usecases in Kubernetes",
      "Kubernetes Commands Walkover",
      "Networking Services",
      "Rolling over updates and new features",
      "Kubernetes best practices and istio best practices",
    ],
  },
  {
    thumbnail: unix,
    title: "Unix Shell Scripting",
    courseLink: "unix-shell-scripting",
    seoTitle:
      "Unix Shell Scripting Course - Master Unix Commands and Shell Scripting - CloudPlexo",
    seoDesc:
      "Enhance your IT skills with our Unix Shell Scripting course. Learn essential Unix and Linux commands, shell scripting, log file analysis, file and folder operations, content and memory searches, CPU processing, and more",
    seoKeywords:
      "Unix commands, Linux environment, Shell scripting, Log file analysis, File operations, Content search, Memory commands, CPU processing, Interview questions",
    courseDescription: `Unix Shell Scripting is often a must have skill for any IT
            Professional. In most job profile, you will find it mandatory to
            have skills to Work in Unix or Linux Environment. In today's
            competitive environment, companies need professionals who are having
            good understand of Unix/Linux command and shell scripting. In
            Telecom, Big Data processing and Cloud Computing Domain, Unix
            commands and shell scripting are basic prerequisite to start
            working. - Here we will cover Unix commands which we can use in
            daily activities and also we have covered many interview question
            which are asked in interviews.`,
    moduleList: [
      "Unix Basics",
      "Basic commands",
      "Check Log Files",
      "Basic files and folder operation",
      "File Search",
      "Content Search",
      "Memory related commands",
      "CPU Processing",
      "Merging of command outputs",
      "Practice questions",
    ],
  },
  {
    thumbnail: java,
    title: "Java Programming",
    courseLink: "java-programming",
    seoTitle: "Java Programming Course - CloudPlexo",
    seoDesc: `Master Java, one of the most popular programming languages, with our hands-on course. Whether you're new to programming or a beginner`,
    seoKeywords:
      "Java programming for beginners, Java classes and objects, Java methods, Loops in Java, Exception handling in Java, File handling in Java, Java collections",
    courseDescription: `Java is one of the most popular programming languages. Java offers both object-oriented and functional programming features. We take a
            hands-on approach. This course assumes no previous programming or
            Java experience. If you never programmed a computer before, or if
            you already have experience with another programming language and
            want to learn Java, this is a perfect course for you. The course for
            individuals with ZERO programming experience and want to learn Java
            Programming or a Beginner at Java Programming and want to Learn to
            write Great Java Programs.`,
    moduleList: [
      "Introduction to java and installing Java Windows OS",
      "MAC-OS-X Installing Java and configuring enviornment variables",
      "Classes and Objects",
      "Basic Java programming and features Part 1",
      "Basic Java programming and features Part 2",
      "Basic Java programming and features Part 3",
      "Java Methods Part 1",
      "Java Methods Part 2",
      "Java Methods Part 3",
      "Java Methods Part 4",
      "Java Methods Part 5 Predefined Methods",
      "Java Methods Part 6 Static and Non Static Mathods",
      "IF and Else Statements",
      "Loops While Loop",
      "Loops Do While Loop",
      "Loops For Loop",
      "Loops Nested Loops",
      "Loops Break and Continue statements",
      "If Else statements and Switch Case",
      "Arrays and Methods",
      "OOPS Static and Non Static",
      "OOPS Part 2",
      "OOPS Object oriented programming Part 3",
      "Exception Handling Part 1",
      "Exception Handling Part 2",
      "Packages and Access Modifiers",
      "Reading Properties files",
      "Java Streams Writing in TXT and CSV files",
      "Java Stream Writing HTML Files and Reading files",
      "Java Stream Apache POI Creating and Writing Excel Files",
      "Classes and Objects",
      "Java Stream Apache POI Reading Excel Files Extended Loops",
      "Reading Notepad file",
      "Reading Excel Files and Generating logs through Log4J API",
      "Java Collections",
      "Reflection API",
      "Difference between equal to operator and Singleton design pattern",
      "Apache Log4J API Console and File Appenders",
      "Apache Log4J API SMTPAppender",
      "Apache Log4J API HTMLAppender",
    ],
  },
  {
    thumbnail: integration,
    title: "Introduction to Continous Integration CI Jenkins",
    courseLink: "intro-to-continous-integration-ci-jenkins",
    seoTitle: "",
    seoDesc: ``,
    seoKeywords: "",
    courseDescription: `Jenkins is a powerful and flexible automation tool; It is used to automate almost anything. Learn how to build strong automated
            processes like Pipelines, CI/CD Workflows and more! In the DevOps
            World, Jenkins is one of the best and most popular tools. This
            course is for you if you interested in DevOps and Jenkins`,
    moduleList: [
      "Introduction to Continuous Integration and configuring Jenkins",
      "Creating a free style Jenkins project",
      "Jenkins execution with Batch file",
      "Executing Appium Test through Jenkins",
      "Configuring Emails and Test Reports with Jenkins",
    ],
  },
  {
    thumbnail: bigdataspark,
    title: "Big Data With Spark",
    courseLink: "big-data-with-spark",
    seoTitle: "Big Data with Spark Course - CloudPlexo",
    seoDesc: `Master the art of analyzing big data with Spark and Scala. Discover how Spark provides batch and streaming capabilities for lightning-fast Big Data Analysis`,
    seoKeywords:
      "Spark and Scala for Big Data, Real-time data analysis, Big Data Analysis with Spark, Scala and Spark skills",
    courseDescription: `Spark and Scala work together to analyze big data. Spark, however is
            unique in providing batch as well as streaming capabilities, thus
            making it a preferred choice for lightening fast Big Data Analysis
            platforms. Scala and Spark are two of the most in demand skills
            right now, and with this course you can learn them quickly and
            easily! This course comes packed with content.`,
    moduleList: [
      "Introduction to Scala",
      "Spark Practicals",
      "Spark SQL",
      "Spark SQL Practicals",
      "Kafka",
      "Kafka Practicals",
      "Spark Streaming",
      "Spark Streaming Practicals",
    ],
  },
  {
    thumbnail: bigdatabeginner,
    title: "Big Data Beginner Hadoop Ecosystem",
    courseLink: "big-data-beginner-hadoop-ecosystem",
    seoTitle: "Big Data Beginner Hadoop Ecosystem Course - CloudPlexo",
    seoDesc: `Start your journey in Big Data and Hadoop with our beginner course. Learn about Hadoop, Python, Linux, HDFS, MapReduce, Pig, Hive, and more`,
    seoKeywords:
      "Hadoop introductory course, Beginner Big Data training, Hadoop ecosystem basics, Big Data and Hadoop fundamentals",
    courseDescription: ` Do you find Big Data and Hadoop confusing? Aspire to become a Big Data or Hadoop professional? But not sure which course to enroll?
            Then this course is for you ! In this course you will learn Big Data
            using the Hadoop Ecosystem. Why Hadoop? It is one of the most sought
            after skills in the IT industry. The average salary in the US is
            $112,000 per year, up to an average of $160,000 in San Fransisco
            (source: Indeed). You will learn how to use the most popular
            software in the Big Data industry at moment, using batch processing
            as well as realtime processing. This course will give you enough
            background to be able to talk about real problems and solutions with
            experts in the industry.`,
    moduleList: [
      "Hadoop introduction",
      "Hadoop introduction Part 2",
      "Python Practicals",
      "Linux Practicals",
      "HDFS",
      "HDFS Practicals",
      "MapReduce",
      "MapReduce Practicals",
      "Pig",
      " Pig Practical",
      " Hive",
      " Hive Practicals",
    ],
  },
  {
    thumbnail: bigdata,
    title: "Big Data Advanced Hadoop Ecosystem",
    courseLink: "big-data-advanced-hadoop-ecosystem",
    seoTitle: "Big Data Advanced Hadoop Ecosystem Course - CloudPlexo",
    seoDesc: `Advance your career in Big Data and Hadoop with our comprehensive course. Learn about Big Data, NoSQL databases, Hbase, Sqoop, Flume, Oozie, and more`,
    seoKeywords:
      "Hadoop professional training, Advanced Big Data course, Hadoop ecosystem skills, Big Data and NoSQL",
    courseDescription: `Aspiring to become a Big Data or Hadoop professional? But not sure which course to enroll? Then this course is for you ! This Course is
            a conitnuation of the Big Data Beginner Hadoop Ecosystem. In this
            course you will learn Big Data using the Hadoop Ecosystem. Why
            Hadoop? It is one of the most sought after skills in the IT
            industry. The average salary in the US is $112,000 per year, up to
            an average of $160,000 in San Fransisco (source: Indeed). You will
            learn how to use the most popular software in the Big Data industry
            at moment, using batch processing as well as realtime processing.
            This course will give you enough background to be able to talk about
            real problems and solutions with experts in the industry.`,
    moduleList: [
      "BigData and NoSQL",
      "BigData and NoSQL Part 2",
      "Hbase",
      "Hbase 2",
      "Hbase Practical",
      "Sqoop",
      "Sqoop Practicals",
      "Flume",
      "Flume Practical",
      "Oozie",
      "Oozie Practicals",
    ],
  },
  {
    thumbnail: testing,
    title: "Automated Software Testing Using Selenium",
    courseLink: "automated-software-testing",
    seoTitle: "Selenium Automated Software Testing Course - CloudPlexo",
    seoDesc: `Master Selenium, the web testing tool for automated software testing. Learn Selenium IDE, Java essentials, RC Remote Control, Xpath, CSS Locators, Webdriver basics, and advanced techniques`,
    seoKeywords:
      "Automated software testing, Selenium IDE, Java essentials for Selenium, Selenium RC Remote Control, Xpath vs CSS Locators, Selenium Webdriver basics, Selenium Webdriver advanced techniques",
    courseDescription: `Selenium is a web testing tool which uses simple scripts to run tests directly within a browser. In simple terms, “it automates
            browsers”.. Do you want to master the automated process of testing
            using Selenium? We are here to guide you on the journey to mastery.`,
    moduleList: [
      "Introduction of the course",
      "Core Java Essentials for Selenium",
      "Selenium IDE",
      "Selenium RC Remote Control 1_0 API Deprecated",
      "Xpath VS CSS Locators",
      "Selenium Webdriver 2_0 Basics",
      "Selenium Webdriver 2_0 Advance",
    ],
  },
  {
    thumbnail: powerbi,
    title: "Microsoft Power BI Data Analyst",
    courseLink: "powerbi-analytics",
    seoTitle: "Master Microsoft Power BI for Data Analysis - CloudPlexo",
    seoDesc: `Enhance your data analysis skills with our Microsoft Power BI course. Get started with Microsoft data analytics and become a Power BI expert`,
    seoKeywords:
      "Data analysis, Power BI, Data modeling, DAX, Model performance, Reports, Dashboards, Data acquisition, Data transformation, Workspace management, Data security",
    courseDescription: `This course will discuss the various methods and best
                      practices that are in line with business and technical
                      requirements for modelling, visualising, and analysing
                      data with Power BI. The course will also show how to
                      access and process data from a range of data sources
                      including both relational and non-relational data. This
                      course will also explore how to implement proper security
                      standards and policies across the Power BI spectrum
                      including datasets and groups. The course will also
                      discuss how to manage and deploy reports and dashboards
                      for sharing and content distribution. \n\nWe are here to guide you on the journey to mastery.`,
    moduleList: [
      "Get Started with Microsoft Data Analytics",
      "Getting Data in Power BI",
      "Cleaning, Transforming, and Loading Data in Power BI",
      "Design a Data Model in Power BI",
      "Create Model Calculations using DAX in Power BI",
      "Optimize Model Performance in Power BI",
      "Create Reports in Power BI",
      "Create Dashboards in Power BI",
      "Identify Patterns and Trends in Power BI",
      "Create and Manage Workspaces in Power BI",
      "Manage Files and Datasets in Power BI",
      "Row-level Security in Power BI",
    ],
  },
  {
    thumbnail: awsImg,
    title: "AWS Certified Cloud Practitioner",
    courseLink: "aws-cloud-practitioner",
    seoTitle: "AWS Certified Cloud Practitioner Course - CloudPlexo",
    seoDesc: `Start your journey to becoming an AWS Certified Cloud Practitioner with our comprehensive course. Get ready for the future of cloud computing`,
    seoKeywords:
      "Cloud computing certification, AWS cloud practitioner training, Cloud services course, Cloud platform skills",
    courseDescription: `AWS Certified Cloud Practitioner is an easy certification to get your journey started with AWS. Do you want to become an AWS
            Certified Cloud Practitioner? Are you ready to take the next step of
            your career? We are here to help you start your journey to AWS Certified Cloud Practitioner. Cloud Computing is the future. We focus on helping you
            understand the cloud. Once you understand cloud well, you will be
            able to use your skills on AWS or any cloud platform.
              `,
    moduleList: [
      "Introduction To Cloud Computing",
      "Amazon Web Services Overview",
      "AWS Global Infrastucture",
      "Compute Services",
      "Storage Services",
      "Networking Services",
      "Database Services",
      "Security and Compliance Services",
      "Cost Management Services",
      " Management and Governance Service",
      " Cloud Deployment Services",
    ],
  },
  {
    thumbnail: azure,
    title: "Microsoft Azure Fundamentals",
    courseLink: "microsoft-azure-fundamentals",
    seoTitle: "Microsoft Azure Fundamentals - CloudPlexo",
    seoDesc: `Learn the basics of cloud computing and Microsoft Azure. Explore Azure core services, cloud concepts, core solutions, security, identity governance and more`,
    seoKeywords:
      "Azure basics, Cloud computing introduction, Azure core services, Cloud concepts, Core solutions, Azure security, Identity governance, Privacy and compliance in Azure, Azure pricing, SLAs",
    courseDescription: `This course introduces you to the basics of cloud computing and Azure. \n\n We are here to guide you on the journey to mastery.`,
    moduleList: [
      "Introduction of the course",
      "Azure Core Services",
      "Cloud Concepts",
      "Azure Core Solutions",
      "Security in Azure",
      "Identity governance privacy and compliance",
      "Pricing Cost SLAs",
    ],
  },
];
