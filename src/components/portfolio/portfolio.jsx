import {useState} from 'react';

const More = ({users}) => {
    const {portfolio} = users.data;
    
    return (
        <div>
        {
            portfolio.slice(3).map(port => (
            <img key={port.id} src={port.wImg} />
            ))
        }
        </div>
    )
}

const PortfolioComp = ({users}) => {
    const {portfolio} = users.data;
    
    const [hide, setHide] = useState(true);
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
    }

    function hideShow() {
        setHide(wasShow => !wasShow);
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
                <div> 
                
                    <div onClick={toggle}>
                        
                        <p onClick={hideShow}>
                            {
                            hide ? <p>Show More </p> : null
                            }
                        </p>
                    </div>
                    {isOpened && (
                        <div className="boxContent">
                             <More users={users} />
                        </div>
                    )}
                </div>
                                
            </div>
        </div>
    );
}

export default PortfolioComp;