import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useQuery } from "react-query";
import { fetchRequests, postNewUpvotes } from "../functions/apifetch";
import React, { useEffect } from "react";

const FormattedRows = (props) => {
  const { data, error, isError, isLoading, refetch } = useQuery(
    "userRequests",
    fetchRequests
  );

  useEffect(() => {
    refetch();
  }, []);

  const handleClick = async (e, index, id, currentUpvotes) => {
    e.preventDefault();
    const newUpvotes = currentUpvotes + 1;

    try {
      await postNewUpvotes(id, newUpvotes);
      refetch();
    } catch (error) {
      console.error("Error posting upvotes:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  const completed_items = data.filter(object=>{
    return object.status === 'Completed'
  })

  function handleRowClick(index) {
    props.setSelectedObject(completed_items[index]);
    props.openAdminModal();
  }

  return (
    <div className="data-wrapper">
      {completed_items.map((row, index) => (
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
