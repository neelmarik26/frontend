"use client";
import React, { useState } from 'react'
import Navbar_front from '@/components/front_page_all/front_nav/Navbar_front'
import { useForm } from 'react-hook-form'
import './newconnection.css'

const NewConnection = () => {
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm()

  // email and mobile verify
  const [emaiveried, setEmailveried] = useState(false)
  const [numveried, setNumveried] = useState(false)


  // variables write here 
  const [showEmailOtp, setShowEmailOtp] = useState(false)
  const [verifyotp, setVerifyotp] = useState(false)

  const [closeEmail, setCloseEmail] = useState(false)
  const [closeMobile, setCloseMobile] = useState(false)
  const [locksubmit, setLocksubmit] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;



  const onSubmit = async (data) => {
    console.log(data)
    if (emaiveried && numveried) {
      setLocksubmit(true)
      const responce = await fetch(API_URL + "/new_user/new_registration/ok", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const response_json = await responce.json();
      console.log(response_json)
      if (!response_json.success) {
        setLocksubmit(false)
      }
      else{
        // goo to new pagee 
      }
    }
    
  }
  // verify email and send otp
  const handleEmailVerify = async () => {
    const isValid = await trigger("email")
    if (isValid) {
      setCloseEmail(true)
      const email = getValues("email")
      // write the post request here 
      console.log(API_URL)
      const response = await fetch(API_URL + "/new_user/new_registration/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const response_json = await response.json();
      console.log(response_json)
      if (response_json.otpSent) {
        setShowEmailOtp(true)
      }
    }
  }

  // function to send user otp back and verify
  const handleEmailotpVerify = async () => {
    const isValid = await trigger("otp")
    if (isValid) {
      const otp = getValues("otp")
      const email = getValues("email")
      // write here the post request to verify the otp
      const response = await fetch(API_URL + "/new_user/new_registration/email-verify", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp: otp, email: email })
      })
      const response_json = await response.json();
      console.log(response_json)

      // if the otp verify then verify otp is true else it is false
      if (response_json.otpVerified) {
        setVerifyotp(true)
        setEmailveried(true)
      }


    }
  }

  const handelmobile = async () => {
    const isValid = await trigger("phone_number")

    if (isValid && emaiveried) {
      setCloseMobile(true)
      const mobile_num = getValues("phone_number")
      setNumveried(true)
    }
  }


  return (
    <>
      <Navbar_front />
      <div className="page-wrapper">
        <div className="connection-container">
          <div className="form-card">
            <h1 className="form-title">Create New Home</h1>
            <p className="form-subtitle">Register your admin account details below.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="connection-form">

              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  placeholder='Enter your full name'
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "Name must be at least 3 characters" },
                    maxLength: { value: 50, message: "Name must be less than 50 characters" }
                  })}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-msg">{errors.name.message}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-btn">
                  <input
                    id="email"
                    type="email"
                    disabled={closeEmail}
                    placeholder='Enter your email'
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={errors.email ? "input-error" : ""}
                  />
                  <button type="button" className={emaiveried ? "verify-btn green" : "verify-btn"} onClick={handleEmailVerify}>{emaiveried ? "Verified" : "Verify"}</button>
                </div>
                {errors.email && <span className="error-msg">{errors.email.message}</span>}

                {/* this line show the otp box in the page  */}

                {(showEmailOtp && !verifyotp) && (
                  <div className="otp-container">
                    <input
                      id='otp'
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter OTP"
                      onInput={(e) =>
                        e.target.value = e.target.value.replace(/\D/g, "")
                      }
                      maxLength={6}
                      {...register("otp", { required: "OTP is required", minLength: { value: 6, message: "OTP must be 6 digits" } })}
                      className={errors.otp ? "input-error" : ""}
                    />
                    {errors.otp && <span className="error-msg">{errors.otp.message}</span>}

                    <button type="button" className="confirm-otp-btn" onClick={handleEmailotpVerify}>Confirm</button>
                  </div>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder='Create a secure password'
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                  className={errors.password ? "input-error" : ""}
                />
                {errors.password && <span className="error-msg">{errors.password.message}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="phone_number">Phone Number</label>
                <div className="input-with-btn">
                  <input
                    id="phone_number"
                    type="tel"
                    placeholder='Enter phone number'
                    disabled={closeMobile}
                    onInput={(e) =>
                      e.target.value = e.target.value.replace(/\D/g, "")
                    }
                    maxLength={10}
                    {...register("phone_number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]*$/,
                        message: "Invalid phone number format"
                      },
                      minLength: { value: 10, message: "Phone number is too short" }
                    })}
                    className={errors.phone_number ? "input-error" : ""}
                  />
                  <button type="button" className={numveried ? "verify-btn green" : "verify-btn"} onClick={handelmobile}>{numveried ? "Verified" : "Verify"}</button>
                </div>
                {errors.phone_number && <span className="error-msg">{errors.phone_number.message}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  placeholder='Enter full address'
                  {...register("address", {
                    required: "Address is required",
                    minLength: { value: 10, message: "Address should be detailed" }
                  })}
                  className={errors.address ? "input-error" : ""}
                  rows={3}
                />
                {errors.address && <span className="error-msg">{errors.address.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={locksubmit}>
                Register Connection
              </button>
            </form>
          </div>
        </div >
      </div >
    </>
  )
}

export default NewConnection
