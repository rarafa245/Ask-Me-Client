import React from 'react'

class QuestionGroup extends React.Component{
    constructor(){
        super()
        this.state={
            userImage: "",
            questions: "" 
        }
    }


    componentDidMount(){

        fetch("http://192.168.0.23:5000/userQuestions",{
            method: "GET",
            headers: new Headers({
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            })
        })
        .then(res => res.json())
        .then(res => {
            let receivedData, index
            let total_question = []
            receivedData = JSON.parse(res.message)

            for (index in receivedData){


                total_question.push(
                            <QuestionCard   key = {index}
                                            introduction={index}
                                            datePosted={receivedData[index].date_posted}
                                            title={receivedData[index].title}
                                            content={receivedData[index].content}/>)
            }

            this.setState({ questions: total_question })
        })
    }


    render(){
        return(
            <div className="scroll-small">
                <div>
                    <p className="m-2 opacity-3"><strong>Your Recent Questions!</strong></p>
                </div>
                <div className="card-body">
                    {this.state.questions}
                </div>
            </div>
        )
    }

}

const QuestionCard = (props) =>{

    return(
        <div className="d-inline-block mb-3 col-12 col-md-6">
            <div className="card">
                <h6 className="card-header text-white bg-steel truncate">{props.title}</h6>
                <div className="card-body cardheight">
                    <p className="card-text truncate">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionGroup
