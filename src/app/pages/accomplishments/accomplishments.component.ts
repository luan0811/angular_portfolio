import { Component } from '@angular/core';

interface Certificate {
  title: string;
  url: string;
  issueDate?: string;
  description?: string;
  courses?: string[]; // Thêm array cho danh sách khóa học
}

@Component({
  selector: 'app-accomplishments',
  imports: [],
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.scss',
})
export class AccomplishmentsComponent {
  certificates: Certificate[] = [
    {
      title: 'Project Management Principles and Practices',
      url: 'https://coursera.org/share/7ebe23ce3863b571f47da92561e4ffaa',
      issueDate: '2024',
      description: 'Course Certificates Completed',
      courses: [
        'Initiating and Planning Projects',
        'Budgeting and Scheduling Projects',
        'Managing Project Risks and Changes',
        'Project Management Project',
      ],
    },
    {
      title: 'User Experience Research and Design',
      url: 'https://coursera.org/share/7892cbe8b5118d1486170cbd38eec41a',
      issueDate: '2024',
      description: 'Course Certificates Completed:',
      courses: [
        'Introduction to User Experience Principles and Processes',
        'Understanding User Needs',
        'Evaluating Designs with Users',
        'UX Design: From Concept to Prototype',
        'UX Research at Scale: Surveys, Analytics, Online Testing',
        'UX (User Experience) Capstone',
      ],
    },
    {
      title: 'Software Development Lifecycle',
      url: 'https://coursera.org/share/caeffb1f2e88072c5046307602b74c0c',
      issueDate: '2023',
      description: 'Course Certificates Completed:',
      courses: [
        'Software Development Processes and Methodologies',
        'Agile Software Development',
        'Lean Software Development',
        'Engineering Practices for Building Quality Software',
      ],
    },
    {
      title: 'CertNexus Certified Ethical Emerging Technologist',
      url: 'https://coursera.org/share/39777c8534e4a9eafb283210d68882a6',
      issueDate: '2023',
      description: 'Course Certificates Completed:',
      courses: [
        'Promote the Ethical Use of Data-Driven Technologies',
        'Turn Ethical Frameworks into Actionable Steps',
        'Detect and Mitigate Ethical Risks',
        'Communicate Effectively about Ethical Challenges in Data-Driven Technologies',
        'Create and Lead an Ethical Data-Driven Organization',
        'Preparing for Your CertNexus Certification Exam',
      ],
    },
    {
      title: 'Academic English: Writing',
      url: 'https://coursera.org/share/c1452589d072ff1ad596e9cfbdb25161',
      issueDate: '2024',
      description: 'Course Certificates Completed:',
      courses: [
        'Course Certificates Completed',
        'Grammar and Punctuation',
        'Getting Started with Essay Writing',
        'Advanced Writing',
        'Introduction to Research for Essay Writing',
        'Project: Writing a Research Paper',
      ],
    },
    {
      title: 'Chứng chỉ Coursera',
      url: 'Web Design for Everybody: Basics of Web Development & Coding',
      issueDate: '2023',
      description: 'Course Certificates Completed:',
      courses: [
        'Introduction to HTML5',
        'Introduction to CSS3',
        'Interactivity with JavaScript',
        'Advanced Styling with Responsive Design',
        'Web Design for Everybody Capstone',
      ],
    },
    {
      title: 'Computer Communications',
      url: 'https://coursera.org/share/ba8021f5916d262c88a5823eb7e18183',
      issueDate: '2022',
      description: 'Course Certificates Completed:',
      courses: [
        'Fundamentals of Network Communication',
        'Peer-to-Peer Protocols and Local Area Networks',
        'Packet Switching Networks and Algorithms',
        'TCP/IP and Advanced Topics',
      ],
    },
    {
      title: 'Academic Skills for University Success',
      url: 'https://coursera.org/share/80d672187f842e27718d90b79f44851e',
      issueDate: '2022',
      description: 'Course Certificates Completed:',
      courses: [
        'Information & Digital Literacy for University Success',
        'Problem-Solving Skills for University Success',
        'Critical Thinking Skills for University Success',
        'Communication Skills for University Success',
        'Academic Skills for University Success: Capstone',
      ],
    },
  ];

  openCertificate(url: string): void {
    window.open(url, '_blank');
  }
}
