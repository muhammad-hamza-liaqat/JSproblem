// find the object ahmed and return it via map method

const person = [
    {
        name: "Alice",
        age: 30,
        religion: "Islam",
        courses: [
            {
                title: "Science",
                pages: 50
            }, 
            {
                title: "Science-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2"
                ]
            } 
        ]
    },
    {
        name: "Bob",
        age: 40,
        religion: "Hindu",
        courses: [
            {
                title: "Biology",
                pages: 50
            }, 
            {
                title: "Biology-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2"
                ]
            } 
        ]
    }
    ,
    {
        name: "Ahmed",
        age: 50,
        religion: "Islam",
        courses: [
            {
                title: "Maths",
                pages: 50
            } ,
            {
                title: "Maths-1",
                pages: 50,
                topics:[
                    "topic-1", "topic-2" , "testTopic-3"
                ]
            } 
        ]
    }
    // ,{
    //     name: "Ahmed",
    //     age: 50,
    //     religion: "Islam",
    //     courses: [
    //         {
    //             title: "Maths",
    //             pages: 50
    //         } ,
    //         {
    //             title: "Maths-1",
    //             pages: 50,
    //             topics:[
    //                 "topic-1", "topic-2"
    //             ]
    //         } 
    //     ]
    // }
];
let toFind="Ahmed";
// let ahmedObject =[];
var result=[];
let ahmedObject = person.find((findAhmedName) => findAhmedName.name === toFind);

if (ahmedObject) {
  const courses  = ahmedObject.courses;

  
  courses.map((course, courseIndex) => {
    const courseTitle = course.title;
    // courseTitle.toString(courseTitle);
    result.push((`title#${courseIndex +1} : ${courseTitle}`));
    // console.log(`title#${courseIndex +1} : ${courseTitle}`);
    
    if (course.topics) {
    
      course.topics.map((topic, topicIndex) => {
        result.push(`topic#${topicIndex + 1} : ${topic}`);
      });
    }
  });
} 
else {
  console.log(`${toFind} not found in the array.`);
}
console.log(result);