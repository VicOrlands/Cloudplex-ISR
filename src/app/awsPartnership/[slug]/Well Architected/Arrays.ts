import Operationalicon from "../../../assets/images/well-architected/aws-well-architected-operational-excellence.png";
import SustainabilityIcon from "../../../assets/images/well-architected/aws-well-architected-sustainability.png";
import PerformanceIcon from "../../../assets/images/well-architected/aws-well-architected-performance.png";
import CostIcon from "../../../assets/images/well-architected/aws-well-architected-cost-optimization.png";
import ReliabilityIcon from "../../../assets/images/well-architected/aws-well-architected-reliability.png";
import securityIcon from "../../../assets/images/well-architected/aws-well-architected-security.png";

export const pillars = [
  {
    title: "Security",
    icon: securityIcon,
    body: "The security pillar centers on safeguarding information and systems. Key areas of focus involve ensuring data confidentiality and integrity, effectively managing user permissions, and implementing controls to identify security incidents.",
  },
  {
    title: "Reliability",
    icon: ReliabilityIcon,
    body: "The reliability pillar places its emphasis on workloads consistently fulfilling their intended functions and swiftly recovering from failures to meet demands. Key areas of focus encompass designing distributed systems, devising recovery strategies, and adapting to evolving requirements.",
  },
  {
    title: "Operational Excellence",
    icon: Operationalicon,
    body: "The operational excellence pillar prioritizes the management and monitoring of systems while continuously enhancing processes and procedures. Vital areas of emphasis involve automating modifications, responding to incidents, and establishing standards to govern daily operations.",
  },
  {
    title: "Performance Efficiency",
    icon: PerformanceIcon,
    body: "The performance efficiency pillar emphasizes the organized and efficient allocation of IT and computing resources. Essential areas of concern encompass choosing resource types and sizes tailored to workload demands, closely monitoring performance, and sustaining efficiency as business requirements evolve.",
  },
  {
    title: "Cost Optimization",
    icon: CostIcon,
    body: "The cost optimization pillar centers on cost-efficiency, aiming to eliminate unnecessary expenditures. Vital areas encompass comprehending spending trends and managing budget allocation, choosing the appropriate type and quantity of resources, and scaling to match business requirements without exceeding the budget.",
  },
  {
    title: "Sustainability",
    icon: SustainabilityIcon,
    body: "The sustainability aspect emphasizes reducing the environmental footprint of operating cloud workloads. It encompasses crucial areas like a shared responsibility model for sustainability, comprehending impact, and optimizing utilization to minimize resource needs and mitigate downstream consequences.",
  },
];

export const reviews = [
  {
    title: "Initial Review",
    points: [
      "Key Roles: Cloud architects, IT managers, project managers.",
      "Description: Begin by selecting the workload to review and assemble a team of stakeholders. Choose a specific application or system within your cloud environment for evaluation.",
    ],
  },
  {
    title: "Well-Architected Review",
    points: [
      "Key Roles: Cloud architects, security experts, system administrators.",
      "Description: Conduct a comprehensive evaluation of the workload based on the five pillars of the framework: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. Identify strengths and weaknesses in each pillar.",
    ],
  },
  {
    title: "Findings + Reports:",
    points: [
      "Key Roles: Cloud architects, project managers, business analysts.",
      "Description: Analyze the results of the Well-Architected Review, prioritize findings, and develop an action plan to address weaknesses and make improvements. Create comprehensive reports summarizing the assessment and action plan. Assign responsibilities and set timelines for implementing changes based on the findings.",
    ],
  },
  {
    title: "Keep in Touch:",
    points: [
      "Key Roles: Cloud architects, IT operations teams, stakeholders.",
      "Description: Implement the planned changes and improvements. Continuously monitor progress, measure the impact of changes, and make iterative adjustments. Maintain regular communication with stakeholders to ensure ongoing optimization and adherence to best practices. Repeat the Well-Architected Review process periodically (e.g., every quarter or as needed) to sustain and enhance the health and efficiency of your cloud workloads.",
    ],
  },
];
