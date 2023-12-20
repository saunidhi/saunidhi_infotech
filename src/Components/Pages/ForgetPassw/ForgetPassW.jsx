import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

function ForgetPassW() {

  const [formData, setformData] = useState({ email: '' })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      alert("please enter the valid email id")
    }
    else {
      setformData({ email: "" })
    }
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title = "Saunidhi InfoTech Forget Password"
  })

  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VB1ZSX32N1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VB1ZSX32N1');
          `}
        </script>
      </Helmet>

      <div className='bg-stone-300 h-[100vh] flex '>
        <div className='bg-white w-[95%] h-[20rem] md:w-[60%] xl:w-[35%] md:h-[25rem] mx-auto my-auto flex flex-col md:gap-4 rounded-lg shadow-md'>
          <h1 className='text-2xl ml-4 mt-5 md:text-3xl font-bold md:ml-10 md:mt-10'>Forget your password ?</h1>
          <h3 className='text-lg ml-4 md:ml-10 md:text-xl font-sans'>Please enter the email you used to sign in.</h3>

          <form className='mx-4 md:mx-10 md:mt-5 flex flex-col' onSubmit={handleSubmit}>
            <h3 className='my-2 font-medium'>Your work email </h3>
            <input type="email" name='email' required value={formData.email} onChange={handleInput} className='text-2xl border-b-2' placeholder='example@gmail.com' />
            <button className='bg-blue-700 w-fit mx-auto mt-10 text-white px-10 py-2 text-xl rounded-sm' type='submit' >Request password reset</button>
          </form>

          <Link to="/Login" className='my-4 md:my-2 mx-auto text-blue-700 font-medium text-lg'>Back to sign in</Link>
        </div>
      </div>
    </>
  )
}

export default ForgetPassW
