import React from "react";
import "../../styles/home/ProgressBar.css";
import ProgressBar from 'react-bootstrap/ProgressBar'
class ProgressBarExample extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0,
            nextStep: "Find your apartment",
            variant: "danger"
        }

        this.nextStep = this.nextStep.bind(this)
    }

    nextStep() {
        if (this.state.percentage === 100) return
        this.setState(prevState => ({ percentage: prevState.percentage + 25 }))
        if (this.state.percentage === 25) {
            this.setState(prevState => ({ percentage: prevState.percentage, nextStep: "Connect with your leaser", variant: "danger" }))
        } else if (this.state.percentage === 50) {
            this.setState(prevState => ({ percentage: prevState.percentage, nextStep: "Schedule a Tour", variant: "warning" }))
        } else if (this.state.percentage === 75) {
            this.setState(prevState => ({ percentage: prevState.percentage, nextStep: "Sign your lease!", variant: "info" }))
        } else if (this.state.percentage === 100) {
            this.setState(prevState => ({ percentage: prevState.percentage, nextStep: "Congratulations! Check Move in date!", variant: "success" }))
        }
    }

    render() {
        return (
            <div >
                <h3> {this.state.nextStep} </h3>
                <div>
                    <ProgressBar now={this.state.percentage} label={`${this.state.percentage}%`} variant={this.props.variant} />
                </div>


                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={this.nextStep}
                    >
                        Next Step
                    </button>
                </div>

                {/* <div style={{ marginTop: '10px', color: 'blue', marginBottom: '15px' }} onClick={() => this.setState({ percentage: 0 })}>
                    Reset
                </div> */}
            </div>
        )
    }
}

// const ProgressBar = (props) => {
//     return (

//         <div className="progress-bar" >
//             <Filler percentage={props.percentage} />
//         </div>
//     )
// }

// const Filler = (props) => {
//     return <div className="filler" style={{ width: `${props.percentage}%` }} />
// }


export default ProgressBarExample;