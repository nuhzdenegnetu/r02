import React from "react";

const Message = ({ text }) => {
    return <p>{text}</p>;
};

const Stateless = () => {
    return (
        <div>
            <Message text="Це статичне повідомлення!" />
        </div>
    );
};

export default Stateless;