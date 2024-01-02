import React from "react";
import "./App.css";
 
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://rvtk.edu.kz/images/content/logo.png%20-%20-400.png#joomlaImage://local-images/content/logo.png%20-%20-400.png?width=150&height=150"
                        />
                    </div>
                    <li>
                        <a href="#courses">Courses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Tutorials</a>
                    </li>
                    <li>
                        <a href="#jobs">Jobs</a>
                    </li>
                    <li>
                        <a href="#student">Student</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                        There are a lot of professions in our college
                      
                        </h1>
                        <p class="text-small">
                        We have many professions for any of our applicants, some of them are very in demand nowadays. 
                        For example: Programmer, Telecommunications Engineer, Oil and Gas and Auto Mechanics.
                         We are always happy to welcome new students to the doors of our college. 
                        Every year a huge number of students enter our college and they all like it in our college.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        About the college
                        </h1>
                        <p class="text-small">
                        Republican Extracurricular Technical School College (RVTK) is located in the city of Uralsk, in Kazakhstan.
                         The college was founded in 1969 and has been successfully operating in the field of vocational education for many years.
                         RVTK offers educational programs of secondary vocational education in various specialties.
                         Among the main areas of study at the college are: technical specialties, specialties in the field of economics and management, as well as specialties in the field of public catering and services.
                         The college is equipped with modern classrooms and laboratories, and also provides its students with the opportunity to undergo internships at enterprises and organizations. 
                         RVTK students can receive secondary vocational education, and also have the opportunity to continue their studies in higher educational institutions after graduating from college.

                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        Courses
                        </h1>
                        <p class="text-small">
                        At our college you have the opportunity to take courses:
                     Engineering graphics AutoCAD; PC (personal computer) operator; Clerk; Computer design, Photoshop, Corel draw Robotics club for schoolchildren (from 8 to 18);
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        The most popular profession in our college is a programmer
                        </h1>
                        <p class="text-small">
                        A programmer is a person who specializes in creating and developing software. It uses various programming languages ​​to write code that determines how the computer should function and perform certain tasks.
                         Programmers are also responsible for debugging, testing, and optimizing program code. They can work as individuals or as part of a development team, depending on the size and complexity of the project.
                         Programmers can also specialize in various areas such as web development, mobile development, databases, artificial intelligence, and more.
                      
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}
 
export default App;
