export type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: 'course';
};

const cources: Course[] = [
    {
        id: 1,
        studyGroupId: 1,
        title: 'Improvisational Arts Lab',
        keywords: ['improv', 'art', 'performance', 'lab'],
        eventType: 'course',
    },
    {
        id: 2,
        studyGroupId: 2,
        title: 'Research Methods 1',
        keywords: ['lab', 'research', 'science', 'self-study'],
        eventType: 'course',
    },
    {
        id: 3,
        studyGroupId: 3,
        title: '19th Century Art',
        keywords: ['1800s', 'art', 'history'],
        eventType: 'course',
    },
];

export default cources
