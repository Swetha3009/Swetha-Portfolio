import voicePrescriptionImg from '../assets/Voice_prescription.png';
import llmPlatformImg from '../assets/llm-platform.png';
import salaryDynamicsImg from '../assets/salary-dynamics.png';

const projects = [
  {
    title: 'Voice Prescription',
    description: `A voice-enabled application designed to assist doctors in generating digital prescriptions by converting real-time voice input to structured text.`,
    tech: ['Python', 'SpeechRecognition', 'Tkinter', 'PyPDF2', 'ReportLab'],
    image: voicePrescriptionImg,
    github: 'https://github.com/Swetha3009/Voice-Prescription',
  },
  {
    title: 'Multi-LLM Integration Platform',
    description: `Built a full-stack platform that compares responses from LLMs (ChatGPT, Gemini, Claude) with model switching and AWS EKS deployment.`,
    tech: ['React', 'Redis', 'FastAPI', 'AWS EKS', 'Docker'],
    image: llmPlatformImg,
    github: 'https://github.com/Swetha3009/LLM-Aggregation-Platform',
  },
  {
    title: 'Deciphering Salary Dynamics',
    description: `Analyzed salary trends using pandas, seaborn, and sklearn across industries. Cleaned data, performed feature engineering, and applied regression models to identify salary growth factors.`,
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    image: salaryDynamicsImg,
    github: 'https://github.com/Swetha3009/Deciphering-Salary-Dynamics',
  },
];

export default projects;
