import hero_map from "@/assets/cybersecurity/hero_map.png";
import threat from "@/assets/cybersecurity/icons/threat-icon.png";
import response from "@/assets/cybersecurity/icons/response-icon.png";
import monitoring from "@/assets/cybersecurity/icons/monitoring-icon.png";
import assistance from "@/assets/cybersecurity/icons/assistance.png";
import solutions from "@/assets/cybersecurity/icons/solutions-icon.png";
import training from "@/assets/cybersecurity/icons/training-icon.png";
import Partner9 from "@/assets/cybersecurity/partners/checkpoint.png";
import Partner8 from "@/assets/cybersecurity/partners/Sophos.png";
import Partner6 from "@/assets/cybersecurity/partners/Fortinet.png";
import Partner4 from "@/assets/cybersecurity/partners/tenable.png";
import Partner3 from "@/assets/cybersecurity/partners/traceable.png";
import Partner2 from "@/assets/cybersecurity/partners/zscaler.png";
import Partner7 from "@/assets/cybersecurity/partners/Cyberark.png";
import Partner1 from "@/assets/cybersecurity/partners/wiz.png";
import Partner5 from "@/assets/cybersecurity/partners/cequence.png";

export const imgArray = [
  Partner9,
  Partner8,
  Partner6,
  Partner4,
  Partner3,
  Partner2,
  Partner7,
  Partner1,
  Partner5,
];

export const featuresArray = [
  {
    img: threat,
    title: "Advanced Threat Detection",
    body: "We employ cutting-edge technology to identify and mitigate threats before they can impact your business.",
  },
  {
    img: monitoring,
    title: "24/7 Monitoring",
    body: "Our team is always vigilant, providing round-the-clock surveillance to ensure your systems stay secure.",
  },
  {
    img: solutions,
    title: "Customized Solutions",
    body: "Every business is unique, which is why we tailor our services to fit your specific needs and challenges.",
  },
  {
    img: assistance,
    title: "Compliance Assistance",
    body: `Stay ahead of regulatory requirements with our comprehensive compliance management solutions.`,
  },
  {
    img: training,
    title: "Employee Training and Awareness",
    body: `Equip your staff with the knowledge and skills to recognize and respond to potential security threats, reducing the risk of human error compromising your defenses.`,
  },
  {
    img: response,
    title: "Rapid Incident Response",
    body: ` In the event of a security breach, we act swiftly to minimize damage and restore normal operations.`,
  },
];

export const faq = [
  {
    id: 1,
    question: `What types of businesses do you serve?`,
    answer: `CloudPlexo caters to businesses of all sizes and industries. Whether you're a small startup, a mid-sized company, or a large enterprise, our cybersecurity solutions are designed to meet your unique needs.`,
  },
  {
    id: 2,
    question: `How does CloudPlexo protect my data from cyber threats?`,
    answer: `We employ a multi-layered approach to cybersecurity, including advanced threat detection, 24/7 monitoring, and rapid incident response. Additionally, we offer customized solutions tailored to your specific risk profile to ensure comprehensive protection for your digital assets.`,
  },
  {
    id: 3,
    question: `Can you help train my employees on cybersecurity best practices`,
    answer: `Absolutely! We offer employee training and awareness programs to educate your staff on cybersecurity risks and best practices. By empowering your employees with the knowledge they need, you can significantly reduce the likelihood of security breaches due to human error.`,
  },
  {
    id: 4,
    question: `How quickly can CloudPlexo respond to security incidents?`,
    answer: `Our team is equipped to respond to security incidents swiftly and decisively. With our 24/7 monitoring capabilities and rapid incident response protocols, we aim to minimize the impact of security breaches and restore normal operations as quickly as possible.`,
  },
];

export { hero_map, monitoring };
