# ClientTask

# API Project
- First run command 'npm i'.
- Then run command 'npm start', it will start API Project.
- It should be run on port 5000.

# UI Project
- First run command 'npm i'
- Then run command 'ng s -o', it will run UI project.
- It should be run on port 4200. If its have port different then you can use command 'ng s -o --port 4200'

# Login Credentials
    Email : avnish@mailinator.com
    Password : Avnish@123

# Tasks which completed 
- In this, implemented CORS origin for only http://localhost:4200 because our UI project will run on port 4200.
- Implemented JWT authentication
    - login url is non-protected. With this url, if user creds is correct then it will generate authorization token else shown error.  
    - menu url is protected, without authentication token it should be not work.
- Implemented Socket communication from UI to API.
    - when you will login in the system, then at left top have wabel icon when you will click it then click on Chat related menu.
    - On chat page, it will have Emit event button when you will click it, it will emit event to nodejs app. and nodejs will gave response. Sent & received messages are logged on the chat screen.

# Steps to investigate login failure issue
- First, i will check its cors configuration at API.
- I think in CORS configuration have something miss.