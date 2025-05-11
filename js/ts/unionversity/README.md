# Unionversity

Education has finally reached its pinnacle with the establishment of a new-wave educational institution named  *Unionversity* . At Unionversity, learners join together and combine their knowledge to gain a higher understanding of the world around them. While it’s changing the way we think about learning, Unionversity does have one interesting requirement: all students must write a type-safe program that enrolls them in their own courses and study groups.

This program must be able to search courses and study groups from a list, enroll in them, and print a list of currently enrolled events. Let’s test our skills of TypeScript to get enrolled. As we say at Unionversity, “ts-c you in class”!

## Usage

```sh
tsc && node index.js
```

## Expected output

```sh
Search Results: [
  {
    id: 1,
    studyGroupId: 1,
    title: 'Improvisational Arts Lab',
    keywords: [ 'improv', 'art', 'performance', 'lab' ],
    eventType: 'course'
  },
  {
    id: 3,
    studyGroupId: 3,
    title: '19th Century Art',
    keywords: [ '1800s', 'art', 'history' ],
    eventType: 'course'
  }
]
Enrolled Events: [
  {
    id: 1,
    studyGroupId: 1,
    title: 'Improvisational Arts Lab',
    keywords: [ 'improv', 'art', 'performance', 'lab' ],
    eventType: 'course'
  }
]
```
