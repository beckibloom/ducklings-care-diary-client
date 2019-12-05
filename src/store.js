const STORE = {
  "users": [
    {
      "id": 1,
      "first": "Miss",
      "last": "Teacher",
      "username": "TeacherUser",
      "password": "TeacherPass",
      "type": "teacher",
    },
    {
      "id": 2,
      "first": "Ruth",
      "last": "Dakin-Altgeld",
      "username": "parent1@email.com",
      "password": "Parent1",
      "type": "parent",
    },
    {
      "id": 3,
      "first": "Matilda",
      "last": "Altgeld",
      "username": "parent2@email.com",
      "password": "Parent2",
      "type": "parent",
    },
  ],
  "students": [
    {
      "id": 1,
      "class_id": 1,
      "student_first": "Lily",
      "student_last": "Altgeld",
      "birthdate": "12/03/2017",
      "note": "Allergy to peanuts.",
      "parent-1-first": "Ruth",
      "parent-1-last": "Dakin-Altgeld",
      "parent-1-email": "parent1@email.com",
      "parent-1-relationship": "Mother",
      "parent-2-first": "Matilda",
      "parent-2-last": "Altgeld",
      "parent-2-email": "parent2@email.com",
      "parent-2-relationship": "Mother",
    },
    {
      "id": 2,
      "class_id": 1,
      "student_first": "Molly",
      "student_last": "Blackhawk",
      "birthdate": "08/29/2017",
      "note": "None",
      "parent-1-first": "Charles",
      "parent-1-last": "Blackhawk",
      "parent-1-email": "charles@blackhawk.com",
      "parent-1-relationship": "Father",
      "parent-2-first": "Georgina",
      "parent-2-last": "Blackhawk",
      "parent-2-email": "georgina@blackhawk.com",
      "parent-2-relationship": "Mother",
    },
    {
      "id": 3,
      "class_id": 1,
      "student_first": "Charlotte",
      "student_last": "Cornelia",
      "birthdate": "11/19/2016",
      "note": "Shellfish allergy.",
      "parent-1-first": "Claire",
      "parent-1-last": "Fullerton",
      "parent-1-email": "supermom@email.com",
      "parent-1-relationship": "Mother",
      "parent-2-first": "Anthony",
      "parent-2-last": "Cornelia",
      "parent-2-email": "workingdad@email.com",
      "parent-2-relationship": "Father",
    },
    {
      "id": 4,
      "class_id": 1,
      "student_first": "Lance",
      "student_last": "Dayton",
      "birthdate": "01/13/2017",
      "note": "Asthma",
      "parent-1-first": "Seth",
      "parent-1-last": "Dayton",
      "parent-1-email": "dad@email.com",
      "parent-1-relationship": "Father",
      "parent-2-first": "Christine",
      "parent-2-last": "Swanson",
      "parent-2-email": "christine@company.com",
      "parent-2-relationship": "Mother",
    },
    {
      "id": 5,
      "class_id": 1,
      "student_first": "Alisa",
      "student_last": "Eastman",
      "birthdate": "09/03/2017",
      "note": "None",
      "parent-1-first": "Shirley",
      "parent-1-last": "Eastman",
      "parent-1-email": "shirley@email.com",
      "parent-1-relationship": "Mother",
    },
    {
      "id": 6,
      "class_id": 1,
      "student_first": "Bobby",
      "student_last": "Fremont",
      "birthdate": "07/30/2017",
      "note": "None",
      "parent-1-first": "Glenn",
      "parent-1-last": "Fremont",
      "parent-1-email": "gfremont@email.com",
      "parent-1-relationship": "Father",
      "parent-2-first": "Mark",
      "parent-2-last": "Fremont",
      "parent-2-email": "mfremont@email.com",
      "parent-2-relationship": "Father",
    },
    {
      "id": 7,
      "class_id": 1,
      "student_first": "Nathaniel",
      "student_last": "Glenwood",
      "birthdate": "03/05/2016",
      "note": "None",
      "parent-1-first": "Kirk",
      "parent-1-last": "Glenwood",
      "parent-1-email": "kglenwood@email.com",
      "parent-1-relationship": "Father",
    },
  ],
  "notes": [
    {
      "id": 4,
      "student_id": 1,
      "date": "Monday, November 25, 2019",
      "comment": "Lily had fun building with blocks today!",
      "meals": {
        "am_snack": "try",
        "lunch": "most",
        "pm_snack": "try",
        "ac_snack": "all",
      },
      "nap": 1.5,
      "bathroom": {
        1: {
          "time": "00:00",
          "type": "Wet",
        },
        2: {
          "time": "00:00",
          "type": "Wet",
        },
        3: {
          "time": "00:00",
          "type": "Dry, Ointment Applied",
        },
        4: {
          "time": "00:00",
          "type": "Soiled",
        },
        5: {
          "time": "00:00",
          "type": "Dry",
        },
        6: {
          "time": "00:00",
          "type": "Wet",
        },
      },
      "next-time": "Bring more diapers",
    },
    
    {
      "id": 3,
      "student_id": 1,
      "date": "Tuesday, November 26, 2019",
      "comment": "Lily had fun building with blocks today!",
      "meals": {
        "am_snack": "try",
        "lunch": "most",
        "pm_snack": "try",
        "ac_snack": "all",
      },
      "nap": 1.5,
      "bathroom": {
        1: {
          "time": "00:00",
          "type": "Wet",
        },
        2: {
          "time": "00:00",
          "type": "Wet",
        },
        3: {
          "time": "00:00",
          "type": "Dry, Ointment Applied",
        },
        4: {
          "time": "00:00",
          "type": "Soiled",
        },
        5: {
          "time": "00:00",
          "type": "Dry",
        },
        6: {
          "time": "00:00",
          "type": "Wet",
        },
      },
      "next-time": "Bring more diapers",
    },

    {
      "id": 2,
      "student_id": 1,
      "date": "Monday, December 2, 2019",
      "comment": "Lily had fun building with blocks today!",
      "meals": {
        "am_snack": "try",
        "lunch": "most",
        "pm_snack": "try",
        "ac_snack": "all",
      },
      "nap": 1.5,
      "bathroom": {
        1: {
          "time": "00:00",
          "type": "Wet",
        },
        2: {
          "time": "00:00",
          "type": "Wet",
        },
        3: {
          "time": "00:00",
          "type": "Dry, Ointment Applied",
        },
        4: {
          "time": "00:00",
          "type": "Soiled",
        },
        5: {
          "time": "00:00",
          "type": "Dry",
        },
        6: {
          "time": "00:00",
          "type": "Wet",
        },
      },
      "next-time": "Bring more diapers",
    },

    {
      "id": 1,
      "student_id": 1,
      "date": "Tuesday, December 3, 2019",
      "comment": "Lily had fun building with blocks today!",
      "meals": {
        "am_snack": "try",
        "lunch": "most",
        "pm_snack": "try",
        "ac_snack": "all",
      },
      "nap": 1.5,
      "bathroom": {
        1: {
          "time": "00:00",
          "type": "Wet",
        },
        2: {
          "time": "00:00",
          "type": "Wet",
        },
        3: {
          "time": "00:00",
          "type": "Dry, Ointment Applied",
        },
        4: {
          "time": "00:00",
          "type": "Soiled",
        },
        5: {
          "time": "00:00",
          "type": "Dry",
        },
        6: {
          "time": "00:00",
          "type": "Wet",
        },
      },
      "next-time": "Bring more diapers",
    },
  ],
};

export default STORE;