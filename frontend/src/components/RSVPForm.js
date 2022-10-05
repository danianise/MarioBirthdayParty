import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'

function RSVPForm() {

    const initialState = {
        name: "",
        guestCount: "",
        message: " "
    }
    const [formState, setFormState] = useState(initialState)
    // const navigate = useNavigate()

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        //do something with the data in the component state
        console.log(formState)

        const url = 'localhost:8000/responses/'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }

        fetch(url, options)
            .then(res => {
                if(!res.ok){
                throw Error(res.status)
                }
                res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            // navigate(`/conversations/${topicForRoute}`)
            setFormState(initialState)
    }

  return (
    <div className='RSVPform'>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor='name'>
                Your Name:
            </label> */}
            <input
                placeholder='Your Name'
                id='name'
                type='text'
                onChange={handleChange}
                value={formState.name}
            />
            <br />

            {/* <label htmlFor='guestCount'>
                How many people will be coming? <br /> (include yourself!)
            </label> */}
            <input
                placeholder="How many people will be coming?"
                id='guestCount'
                type='text'
                onChange={handleChange}
                value={formState.guestCount}
            />
            <br />

            {/* <label htmlFor='message'>Leave a Message for the Hoeys:</label> */}
            <textarea
              id='message'
              placeholder='Leave a Message for the Hoeys (Optional)'
              onChange='handleChange'
              type='text'  
            />
            <br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RSVPForm