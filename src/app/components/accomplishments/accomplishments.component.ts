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
      description: 'A 4-course, on-demand Specialization authorized by University of California, Irvine Extension, and offered through Coursera.',
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
        'UX (User Experience) Capstone'
      ]
    },
    {
      title: 'Chứng chỉ Coursera',
      url: 'https://coursera.org/share/caeffb1f2e88072c5046307602b74c0c',
      issueDate: '2024',
      description: 'Mô tả về khóa học',
    },
    {
      title: 'Chứng chỉ Coursera',
      url: 'https://coursera.org/share/caeffb1f2e88072c5046307602b74c0c',
      issueDate: '2024',
      description: 'Mô tả về khóa học',
    },
  ];

  openCertificate(url: string): void {
    window.open(url, '_blank');
  }
}
