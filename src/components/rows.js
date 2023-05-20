const rowTemplate = () => {
    return <row className="row">
        <div className="col">{requestedIdea}</div>
        <div className="col">{requestor}</div>
        <div className="col">{projectStatus}</div>
        <div className="col">{daysSinceRequested}</div>
        <FontAwesomeIcon icon={faHeart} color='green' size="xl" />
    </row>
}