import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("male")
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  })
  const [resume, setResume] = useState("")
  const [url, setUrl] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [about, setAbout] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      selectedOption,
      about,
    }
    try{
      const res= await fetch("http://localhost:8080/submit",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      const result = await res.json()
      console.log(result)
      alert("Form Submitted Successfully.")
    }
    catch (err){
      console.log(err)
      alert("Failed to Submit form")

    }

  }
  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }))
  }
  const handleReset = () => {
    // Reset all the initial variable to empty
    setFirstName("")
    setLastName("")
    setEmail("")
    setContact("")
    setGender("male")
    setSubject({ english: true, maths: false, physics: false, })
    setResume("")
    setUrl("")
    setSelectedOption("")
    setAbout("")
  }

  return (
    <>
      <div className="App">
        <h1>Form using React</h1>
        <fieldset>
          <form action="#" method='get'>
            <label htmlFor="firstname">
              First Name*
            </label>
            <input type="text" name='firstname' id='firstname' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='Enter Your First Name' required />
            <label htmlFor="lastname">
              Last Name*
            </label>
            <input type="text" name='lastname' id='lastname' value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder='Enter Your Last Name' required />
            <label htmlFor="email">Enter Email*</label>
            <input type="text" id='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email' required />
            <label htmlFor="contact">Contact Number*</label>
            <input type="tel" name='contact' id='contact' value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder='Enter Your Mobile Number' required />
            <label htmlFor="gender">Gender*</label>
            <input type="radio" name='gender' value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
            Male
            <input type="radio" name='gender' value="female" id='female' checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
            Female
            <label htmlFor="lang">
              Your best subject
            </label>
            <input type="checkbox" name='lang' id='english' checked={subject.english === true} onChange={(e) => handleSubjectChange("english")} />
            English
            <input type="checkbox" name='lang' id='maths' checked={subject.maths === true} onChange={(e) => handleSubjectChange("maths")} />
            Maths
            <input type="checkbox" name='lang' id='physics' checked={subject.physics === true} onChange={(e) => handleSubjectChange("physics")} />
            Physics
            <label htmlFor="file"> Upload Resume</label>
            <input type="file" id='file' name='file' onChange={(e) => setResume(e.target.files[0])} />
            <label htmlFor="url">Enter Your LinkedIn/Github Url*</label>
            <input type="url" name='url' id='url' onChange={(e) => setUrl(e.target.value)} placeholder='Enter your URL' required />
            <label htmlFor="choice">Select Your Choice</label>
            <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="" disabled>Select Your Answers</option>
              <optgroup label='Beginers'>
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label='Advanced'>
                <option value="4">Reat</option>
                <option value="5">Node Js</option>
                <option value="6">MongoDB, Express</option>
                <option value="t">BootsStrap</option>
              </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea name="about" id="about" cols={30} rows={10} onChange={(e) => setAbout(e.target.value)} placeholder='About your self in a bit' required></textarea>
            <button type='reset' onClick={() => handleReset()}>Reset Form</button>
            <button type='submit' onClick={(e) => handleSubmit(e)}>Submit Form</button>
          </form>
        </fieldset>
      </div>
    </>
  )
}

export default App
