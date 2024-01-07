import ChildFunctionalComponent from "./ChildFunctionalComponent"

const ParentFunctionalComponent = () => {
    return(
        <div>
            <h1>Am from functional component</h1>
            <ChildFunctionalComponent names="jayasree" role="React developer"/>
        </div>
    )
}

export default ParentFunctionalComponent
