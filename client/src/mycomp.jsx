import react from 'react'

const MyComp = (props) => {
    return <div style={{backgroundColor: props.t%2==0 ? "#82CD47" : "#0008C1" ,margin: '20px',padding: '10px',borderRadius: '20px'}}>

        <div >{props.data}</div>
    </div>
}

const MyComp2 = () => {
    return <div> Second Component</div>
}

export { MyComp, MyComp2 };