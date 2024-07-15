import Pagination from "./pagination/Pagination";
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
} from "./courses/Images";

//create array of available posts
const posts = [
  {
    img: awsImg,
    link: "/aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner Course",
  },
  {
    img: azure,
    link: "/microsoft-azure-fundamentals",
    name: "Microsoft Azure Fundamentals",
  },
  {
    img: powerbi,
    link: "/powerbi-analytics",
    name: "Microsoft Power BI Data Analyst",
  },
  {
    img: bigdata,
    link: "/big-data-advanced-hadoop-ecosystem",
    name: "Big Data Advanced Hadoop Ecosystem",
  },
  {
    img: datascience,
    link: "/data-science-and-ml",
    name: "Complete Data Science and Machine Learning with R",
  },

  {
    img: database,
    link: "/database-and-postgresql",
    name: "Relational Databases & PostGRESQL",
  },
  {
    img: devops,
    link: "/devops-with-ansible",
    name: "Devops with Ansible",
  },

  {
    img: computing,
    link: "/edge-computing",
    name: "Edge Computing: Driving the next evolution of internet Technology",
  },
  {
    img: machine,
    link: "/machine-learning",
    name: "Machine Learning",
  },
  {
    img: networking,
    link: "/networking-ccna",
    name: "Networking CCNA",
  },
  {
    img: nosql,
    link: "/non-relational-database",
    name: "Non Relational Databases - NoSQL & MongoDB",
  },
  {
    img: testing,
    link: "/automated-software-testing",
    name: "Automated Software Testing Using Selenium",
  },
  {
    img: kubernetes,
    link: "/kubernetes",
    name: "Kubernetes",
  },
  {
    img: python,
    link: "/python-for-data-science",
    name: "Python for Data Science",
  },
  {
    img: github,
    link: "/intro-to-version-control",
    name: "Introduction to version control Git/Github",
  },
  {
    img: java,
    link: "/java-programming",
    name: "Java programming",
  },
  {
    img: cloud,
    link: "/leveraging-cloud-solutions",
    name: "Leveraging Cloud Solutions For Business Growth",
  },
  {
    img: integration,
    link: "/intro-to-continous-integration-ci-jenkins",
    name: "Introduction to Continous Integration CI-Jenkins",
  },
  {
    img: bigdatabeginner,
    link: "/big-data-beginner-hadoop-ecosystem",
    name: "Bigdata Beginner Hadoop ecosystem",
  },
  {
    img: bigdataspark,
    link: "/big-data-with-spark",
    name: "Bigdata with Spark",
  },
  {
    img: unix,
    link: "/unix-shell-scripting",
    name: "Unix Shell Scripting",
  },
];

function Courses() {
  return <Pagination data={posts} pageLimit={3} dataLimit={9} />
}

export default Courses;
