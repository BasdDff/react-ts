import React, {FC} from 'react';
import Card, {CardVariant} from "../components/Card";
import EventsExample from "../components/EventsExample";

const Test: FC = () => {
    return (
        <div>
            <Card width="200px" height="200px" variant={CardVariant.outlined} onClick={(num) => {console.log("click", num)}}>
                <button> Add </button>
            </Card>
            <EventsExample/>
        </div>
    );
};

export default Test;