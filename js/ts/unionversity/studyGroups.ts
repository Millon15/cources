export type StudyGroup = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: 'group';
};

const studyGroups: StudyGroup[] = [
    {
        id: 1,
        courseId: 1,
        title: 'Improvisational Arts Lab Study Group',
        keywords: ['improv', 'art', 'performance', 'lab'],
        eventType: 'group',
    },
    {
        id: 2,
        courseId: 2,
        title: 'Research Methods 1 Study Group',
        keywords: ['lab', 'research', 'science', 'self-study'],
        eventType: 'group',
    },
    {
        id: 3,
        courseId: 3,
        title: '19th Century Art Study Group',
        keywords: ['1800s', 'art', 'history'],
        eventType: 'group',
    },
];

export default studyGroups