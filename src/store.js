// changing API student object to respond with birth_date rather than birthdate

const STORE = {
  "users": [
    {
      "id": 1,
      "username": "TeacherUser",
      "password": "password",
      "type": "teacher",
    },
    {
      "id": 2,
      "username": "parent1@email.com",
      "password": "Parent1",
      "type": "parent",
    },
    {
      "id": 3,
      "username": "parent2@email.com",
      "password": "Parent2",
      "type": "parent",
    },
  ],
  "students": [
    {
      "id": 1,
      "teacher_id": 1,
      "student_first": "Lily",
      "student_last": "Altgeld",
      "birthdate": `12/03/2017`,
      "parent_email": "parent1@email.com",
    },
    {
      "id": 2,
      "teacher_id": 1,
      "student_first": "Molly",
      "student_last": "Blackhawk",
      "birthdate": "08/29/2017",
      "parent_email": "parent2@email.com",
    },
    {
      "id": 3,
      "teacher_id": 1,
      "student_first": "Charlotte",
      "student_last": "Cornelia",
      "birthdate": "11/19/2016",
      "parent_email": "supermom@email.com",
    },
    {
      "id": 4,
      "teacher_id": 1,
      "student_first": "Lance",
      "student_last": "Dayton",
      "birthdate": "01/13/2017",
      "parent_email": "dad@email.com",
    },
    {
      "id": 5,
      "teacher_id": 1,
      "student_first": "Alisa",
      "student_last": "Eastman",
      "birthdate": "09/03/2017",
      "parent_email": "shirley@email.com",
    },
    {
      "id": 6,
      "teacher_id": 1,
      "student_first": "Bobby",
      "student_last": "Fremont",
      "birthdate": "07/30/2017",
      "parent_email": "gfremont@email.com",
    },
    {
      "id": 7,
      "teacher_id": 1,
      "student_first": "Nathaniel",
      "student_last": "Glenwood",
      "birthdate": "03/05/2016",
      "parent_email": "kglenwood@email.com",
    },
    {
      "id": 8,
      "teacher_id": 1,
      "student_first": "Katherine",
      "student_last": "Halsted",
      "birthdate": "05/06/2017",
      "parent_email": "parent@email.com",
    },
    {
      "id": 9,
      "teacher_id": 1,
      "student_first": "Audrey",
      "student_last": "Irving",
      "birthdate": "05/06/2017",
      "parent_email": "parent@email.com",
    },
    {
      "id": 10,
      "teacher_id": 1,
      "student_first": "Charlie",
      "student_last": "Jarvis",
      "birthdate": "05/06/2017",
      "parent_email": "parent@email.com",
    },
    {
      "id": 11,
      "teacher_id": 1,
      "student_first": "Johnny",
      "student_last": "Lakewood",
      "birthdate": "05/06/2017",
      "parent_email": "parent@email.com",
    },
  ],



  "notes": [
    {
      "id": 4,
      "student_id": 1,
      "date": "Monday, November 25, 2019",
      "comment": "Lily had fun building with blocks today!",
    },
    
    {
      "id": 3,
      "student_id": 1,
      "date": "Tuesday, November 26, 2019",
      "comment": "Lily had a hard time today in dance class and cried for most of the session.",
    },

    {
      "id": 2,
      "student_id": 1,
      "date": "Monday, December 2, 2019",
      "comment": "Lily made a new friend today - she and Charles had fun playing dress up together.",
    },

    {
      "id": 1,
      "student_id": 1,
      "date": "Tuesday, December 3, 2019",
      "comment": "After drop off Lily was upset so she spent some time cuddling her teddy bear to help her feel better.",
    },
    {
      "id": 8,
      "student_id": 3,
      "date": "Monday, November 25, 2019",
      "comment": "Charlotte had fun building with blocks today!",
    },
    
    {
      "id": 7,
      "student_id": 3,
      "date": "Tuesday, November 26, 2019",
      "comment": "Charlotte had a hard time today in dance class and cried for most of the session.",
    },

    {
      "id": 6,
      "student_id": 3,
      "date": "Monday, December 2, 2019",
      "comment": "Charlotte made a new friend today - she and Charles had fun playing dress up together.",
    },

    {
      "id": 5,
      "student_id": 3,
      "date": "Tuesday, December 3, 2019",
      "comment": "After drop off Charlotte was upset so she spent some time cuddling her teddy bear to help her feel better.",
    },
  ],
};

export default STORE;