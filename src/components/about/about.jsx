import './about.scss';

const About = ({users}) => {
    const {about, skills} = users.data;

    return (
        <div>
            <p>{about}</p>
            <span>
                <p>Skills:</p>
                <div className="skills-span">
                    {
                        skills.map(skill => (
                        <p className="skill-p" key={skill.id}>{skill.name}</p>
                        ))
                    }
                </div>

            </span>
        </div>
    );
}

export default About;
