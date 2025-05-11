import courses, {Course} from './courses';
import studyGroups, {StudyGroup} from './studyGroups';

// 6. SearchEventsOptions type
type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
};

// 4-13. searchEvents function
function searchEvents(options: SearchEventsOptions) {
  let events: Course[] | StudyGroup[];
  if (options.eventType === 'courses') {
    events = courses;
  } else {
    events = studyGroups;
  }

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    }
    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
    return false;
  });
}

// 17-18. Enrolled events array
let enrolledEvents: (Course | StudyGroup)[] = [];

// 16, 19. enroll function
function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

// 15. Test searchEvents
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
console.log('Search Results:', searchResults);

// 20. Enroll in an event
if (searchResults.length > 0) {
  enroll(searchResults[0]);
}

// 21. Print enrolled events
console.log('Enrolled Events:', enrolledEvents);
