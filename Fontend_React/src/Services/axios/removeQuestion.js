import axios from 'axios'

const axiosRemoveQuestion = (questionID) => {

    const confirmation = window.confirm("Confirm if you want to delete: ")

    if (confirmation == true) {

        const questionInfo = new FormData()
        questionInfo.append('id_question', questionID)

        axios.delete('http://localhost:5000/deleteQuestion', { 
            headers: {
                'Authorization': localStorage.getItem('AWT'),
                'UID': localStorage.getItem('UID')
            },
            data: questionInfo 
        })
        .then(res => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default axiosRemoveQuestion