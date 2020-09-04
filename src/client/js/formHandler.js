import { nameChecker } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()
    //console.log(":testtttttttttttttttt1:");

    // check what text was put into the form field
    const url = document.getElementById('name').value

    if (nameChecker(url)) {

        console.log("test2")
        fetch('//localhost:8081/testing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
            .then(res => res.json())
            .then(function (res) {

                document.getElementById('polarity').innerHTML = res.polarity;
                document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
                document.getElementById('subjectivity').innerHTML = res.subjectivity;
                document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
                document.getElementById('text').innerHTML = res.text;
            })


    } else {

        return;
    }

}


export { handleSubmit }
