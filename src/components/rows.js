import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "react-query";
import { fetchRequests, postNewUpvotes } from "../functions/apifetch";

const FormattedRows = (props) => {
  const { data, error, isError, isLoading } = useQuery(
    "userRequests",
    fetchRequests
  );

  const handleClick = async (e, index, id, currentUpvotes) => {
    e.preventDefault();
    const newUpvotes = currentUpvotes + 1;
    try {
      await postNewUpvotes(id, newUpvotes);
    } catch (error) {
      console.error("Error posting upvotes:", error);
    }
    document.getElementById("heart" + index).classList.add("color-changed");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  function handleRowClick(index) {
    // if(isAuthenticated){props.openAdminModal()}
    // I think this is how auth0 will work?
    props.setSelectedObject(data[index]);
    props.openAdminModal();
  }

  return (
    <div className="data-wrapper">
      {data.map((row, index) => (
        <div className="row" key={index}>
          <div
            className="row-data"
            onClick={(row) => handleRowClick(index)}
            title={row.description}
          >
            <div className="col">{row.request}</div>
            <div className="col">{row.requestor}</div>
            <div className="col">{row.status}</div>
            <div className="col">{row.dateopened}</div>
          </div>
          <div className="up-vote-container">
            {/* I'm sorry for taking away your ternary operator, but it was complicating things*/}
            {row.upvotes}
            <FontAwesomeIcon
              icon={farHeart}
              className="up-vote"
              id={"heart" + index}
              onClick={(e, index) =>
                handleClick(e, index, row.uid, row.upvotes)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormattedRows;
