let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function findCourseStartDate(courses, courseId) {
  let foundCourseProp = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId == courseId) {
      foundCourseProp.push(courses[i].CourseId);
      foundCourseProp.push(courses[i].StartDate);
    }
  }

  return foundCourseProp;
}

function findCourseTittle(courses, courseId) {
  let foundCourseProp = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId == courseId) {
      foundCourseProp.push(courses[i].CourseId);
      foundCourseProp.push(courses[i].Title);
    }
  }
  return foundCourseProp;
}

function coursesNoMoreThanX(courses, maxCost) {
  let foundCourseProp = [];
  for (let i = 0; i < courses.length; i++) {
    if (+courses[i].Fee <= maxCost) {
      foundCourseProp.push(courses[i].Title);
    }
  }
  return foundCourseProp;
}

function findCoursesThatMeetInX(courses, classroom) {
  let foundCourseProp = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].Location == classroom) {
      foundCourseProp.push(courses[i].Title);
    }
  }
  return foundCourseProp;
}
console.log("Start Date Array:", findCourseStartDate(courses, "PROG200"));
console.log("Title Array:", findCourseTittle(courses, "PROJ500"));
console.log("Courses less than $50:", coursesNoMoreThanX(courses, 50));
console.log(
  "Courses That meet in classroom 1:",
  findCoursesThatMeetInX(courses, "Classroom 1")
);
