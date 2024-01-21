import React, { memo } from "react";

const MemoFunctionalComponent = (props) => {
    console.log('memo')
    return (
        <div>
            {props.name}
        </div>
    )
}

export default memo(MemoFunctionalComponent)