import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img
                        src="https://i.ibb.co/K6H4VR5/Untitled2.png"
                        alt="avatar"
                        style={{height: '300px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Artem Shalamov</h2>
                    <h4 style={{color: 'grey'}}>Front end Developer</h4>
                    {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi? Optio ad dolorem ea voluptatum quidem, suscipit quia voluptas hic sint voluptatem mollitia tempora fugiat! Amet dolor debitis aliquam nam.</p> */}
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Adress</h5>
                    <p>Russia, Tyumen</p>
                    <h5>Phone</h5>
                    <p>+79995402657</p>
                    <h5>Email</h5>
                    <p>iart1756@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                        startYear={2013}
                        endYear={2020}
                        schoolName="My University"
                        schoolDescription="В 2013г. году поступил в Тюменский Архитектурно-Строительный Университет по направлению инженер строитель систем водоснабжения и водоотведения. В 2018г. поступил в магистратуру по тому же направлению и учусь в настоящее время. Так же в 2017 году поступил в ТГУ по направлению 'Переводчик в сфере профессиональных коммуникаций'." 
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Experience</h2>
                        <Experience
                        startYear={2019}
                        jobName="Self-education"
                        jobDescription="Разработкой веб-интерфейсов увлекся летом 2019г. Немного освоив HTML и CSS, перешел к изучению JavaScript. В октябре 2019г. поступил на бесплатные курсы WEB разработчика при Тюменском Технопарке и успешно закончил в декабре 2019г. Всё это время изучаю Frontend самостоятельно и хочу развиваться дальше, изучая актуальные технологии."
                        />
                        <Experience
                        startYear={2018}
                        endYear={2020}
                        jobName="Job"
                        jobDescription="С 2018 года до начала 2020 года, работал инженером в строительной компании."
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Skills</h2>
                        <p style={{fontSize: "20px", textAlign: "center"}}>HTML/CSS | JavaScript | React  | Redux</p>
                        {/* <Skills skill='JavaScript'/>
                        <Skills skill="HTML/CSS"/>
                        <Skills skill="React"/>
                        <Skills skill="Redux"/> */}
                    </Cell>
            </Grid>
        </div>
        )
    }
}
export default Resume 
