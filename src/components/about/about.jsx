const About = ({users}) => {
    const {about, skills} = users.data;
    console.log(skills);
    return (
        <div>
            <p>{about}</p>
            <span>
                <p>Skills:</p>
                {
                    skills.map(skill => (
                    <p key={skill.id}>{skill.name}</p>
                    ))
                }
            </span>
        </div>
    );
}

export default About;
