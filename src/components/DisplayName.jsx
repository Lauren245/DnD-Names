import "./displayName.css";

const DisplayName = ({name}) => {
    return (
        <>
            <h2 className="name-display-box">{name}</h2>
        </>
    );
};

export default DisplayName;