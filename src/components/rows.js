import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from 'react-query'
import { fetchRequests, postNewUpvotes } from '../functions/apifetch';

const FormattedRows = () => {
    const { data, error, isError, isLoading } = useQuery('userRequests', fetchRequests);

    const handleClick = async (e, id, currentUpvotes) => {
        e.preventDefault();
        const newUpvotes = currentUpvotes + 1;
        try {
            await postNewUpvotes(id, newUpvotes);
        } catch (error) {
            console.error('Error posting upvotes:', error);
        }
    }

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
                        {row.upvotes === 0 ?
                            <div>
                                <FontAwesomeIcon icon={faHeart} className="up-vote" onClick={(e) => handleClick(e, row.uid, row.upvotes)} />
                            </div> :
                            <div>
                                {row.upvotes}
                                <FontAwesomeIcon icon={faHeart} className="up-vote" onClick={(e) => handleClick(e, row.uid, row.upvotes)} />
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormattedRows;