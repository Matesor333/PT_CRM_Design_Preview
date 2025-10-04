import { useNavigate } from 'react-router-dom';

function TotalClients(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/clients');
    };

    return(
        <div 
            className="TotalClientsCard" 
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <h3>Total Clients</h3>
            <h2>10</h2>
            <p>100 % up last month</p>
        </div>
    );
};
export default TotalClients;
