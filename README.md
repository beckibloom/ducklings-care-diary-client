# Ducklings Care Diary Client

<img width="900" alt="landing page screenshot" src=".\src\images\landingpage.png">

[Live App](https://ducklings-care-diary.beckibloom.now.sh/)

Sending home classroom reports on paper can create quite a hassle. Ducklings Care Diary would like to introduce a new way to keep notes on each of your students all in one place, and give parents access to view their student reports and progress.

Teachers are able to create their class and register their students, maintaining a diary for each student containing notes on their activities or progress each day.

After parents emails have been entered by the teacher, parents can view their student's diary and see their growth based on the teacher's notes over time.

> View the server for Ducklings Care Diary [here](https://github.com/beckibloom/ducklings-care-diary-api)

## Table of Contents

1. [Usage](#Usage)
    1. [Teacher](#Teacher)
    1. [Parent](#Parent)
1. [Technologies](#Technologies)
1. [Screenshots](#Screenshots)

## Usage
### Teacher
> - From the landing page, register as a teacher first to create student profiles, each including a parent e-mail address. (Parent e-mail addresses will link parent accounts to each student)
> - Teachers may leave entries in a student's diary, and these appear on the "Student Diary" page, along with the current date of each note. Notes are shown with the most recent at the top.
> - A teacher would then instruct a parent to register for an account with Ducklings Care Diary using the same e-mail they have provided to the school. Once registered, they can log in to view their student's diary page.
> - To see a teacher account with some active students, you may log in as demo teacher user **hello@teacher.com** with password **Hello!456**. Once you are successfully logged in, you will be taken to the class list page where you can view or edit any of your students and their diaries.

### Parent
> - From the landing page, you may choose to either register as a parent user with an e-mail you have created from a teacher account, or you may choose to click the "Log in" button in the upper right and log in with the demo parent user **supermom@email.com** with password **Hello!456**.
> - Once successfully logged in you will be taken to the student diary and any posted diary entries will appear on this page.

## Technologies

- React
- HTML
- CSS
- Node
- Express
- PostgreSQL
- Mocha/Chai/Jest
- Heroku/Now CLI
- Zeit

## Screenshots

### Landing Page
<img width="900" alt="landing page screenshot" src=".\src\images\landingpage.png">

### Login
<img width="900" alt="landing page screenshot" src=".\src\images\loginpage.png">

### Class List
<img width="900" alt="landing page screenshot" src=".\src\images\classlistpage.png">

### Student Diary
<img width="900" alt="landing page screenshot" src=".\src\images\studentdiarypage.png">

### Edit Student
<img width="900" alt="landing page screenshot" src=".\src\images\editstudentpage.png">
