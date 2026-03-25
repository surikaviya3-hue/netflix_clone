import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [signState, setSignState] = useState("Sign In")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const BASE_URL = "https://netflix-backend-zb13.onrender.com"
    const url =
    signState === "Sign Up"
    ? `${BASE_URL}/auth/register`
    : `${BASE_URL}/auth/login`

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      })

      const data = await response.text()

      if (signState === "Sign In") {
        if (data === "Login Success!") {
          localStorage.setItem("isLoggedIn", "true")
          navigate("/")
        } else {
          alert(data)
        }
      } else {
        alert(data)
        setSignState("Sign In")
      }

    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong")
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form onSubmit={handleSubmit}>

          {signState === "Sign Up" &&
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          }

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{signState}</button>

          <div className="from-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign Up" ?
            <p>
              Already have account?
              <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
            </p>
            :
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
            </p>
          }
        </div>

      </div>
    </div>
  )
}

export default Login