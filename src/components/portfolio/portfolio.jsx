import {useState} from 'react';

const Portfolio = ({users}) => {
    const {portfolio} = users.data;

    const [selected, setSelected] = useState(0);

    const moveNext = (portfolio) => {
        if(portfolio.length > 3) {
            {
                portfolio.filter((port, idx) => 3 < idx < portfolio.length)
                         .map(port => (
                <img key={port.id} src={port.wImg} />
                ))
            }
        } 
    }
    return (
        <div>
            <p id="portfolio">Portfolio</p>
            <div>
                {
                    portfolio.filter((port, idx) => idx < 3)
                             .map(port => (
                    <img key={port.id} src={port.wImg} />
                    ))
                }
            <div onClick={moveNext}>Load more</div>
            </div>
        </div>
    );
}

export default Portfolio;