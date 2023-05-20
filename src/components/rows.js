import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from 'react-query'
import fetchRequests from '../functions/apifetch';

const FormattedRows = () => {
    const { data, error, isError, isLoading } = useQuery('userRequests', fetchRequests);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error! {error.message}</div>;
    }
    return (
        <div className="data-wrapper">
            {data.map((row, index) => (
                <div className="row" key={index}>
                    <div className="row-data" title={row.description}>
                        <div className="col">{row.request}</div>
                        <div className="col">{row.requestor}</div>
                        <div className="col">{row.status}</div>
                        <div className="col">{row.dateopened}</div>
                    </div>
                    <div className="up-vote-container">
                        <FontAwesomeIcon icon={faHeart} className="up-vote" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormattedRows;
