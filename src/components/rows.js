import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from 'react-query'
import fetchRequests from './apifetch';


const RowTemplate = () => {
    const { data, error, isError, isLoading } = useQuery('userRequests', fetchRequests);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error! {error.message}</div>;
    }
    return (
        <div>
            {data.map((row, index) => (
                <div className="row" key={index}>
                    <div className="col">{row.request}</div>
                    <div className="col">{row.requestor}</div>
                    <div className="col">{row.status}</div>
                    <div className="col">{row.dateopened}</div>
                    <FontAwesomeIcon icon={faHeart} color="green" size="xl" />
                </div>
            ))}
        </div>
    );
};

export default RowTemplate;
