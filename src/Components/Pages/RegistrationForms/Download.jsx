import React from 'react'

const Download = () => {
  return (
    <>
      <div className='sm:h-[40rem] h-[100vh]'>
        <div className='flex'>
          <button className='bg-[#00CC88] mx-auto text-white px-3 py-3 my-1  items-center rounded'  >Download / Print : Confirmation Page</button>
        </div>
        <div className='md:grid md:grid-cols-2 mt-4' >
          <div className=''>
            <label htmlFor="ragistration" class=' px-4 text-center text-2xl'> Registration </label>
            <div className='md:grid md:grid-flow-col'>
              <div class="grid grid-cols-2 md:grid-cols-1 gap-2 mx-3 py-2  ">
                <div className='   rounded-md divide-y divide-solid bg-white py-2 px-2 drop-shadow-lg' >
                  <div className='py-2 text-lg'>Form Status</div>
                  <div className='py-2 text-sm'>Apply for Online Registration
                    <div className='py-2 sm:px-2 text-sm text-[#525F7F]'>Fill Online Application Form</div>
                    <div className='py-2 sm:px-2 text-sm text-[#525F7F]'>Pay Examination Fee </div>
                  </div>
                </div>

                <div className='rounded-md drop-shadow-lg divide-y divide-solid bg-white py-2 px-2' >
                  <div className='py-2 text-lg'>Quick Links</div>
                  <div className='py-2 text-sm'>Mobile Number (Verified)
                    <div className='py-2 text-sm  '>Verify Email ID (Verified) </div>
                  </div>

                  <div>
                    <div className='py-2 text-sm px-2 text-[#5C60F5] '>My Payments</div>
                    <div className='py-2 text-sm px-2 text-[#5C60F5] '>Need Help?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='rounded-md drop-shadow-lg divide-y divide-solid bg-white py-2 px-2' >
            <div className='py-2 text-2xl'>quiz competition</div>
            <div className='px-2'>

              <div className='py-2 text-sm'>Welcome, Quiz competition - 2023 Applicant!</div>
              <div className='py-2 text-sm  '>You can apply and track your Quiz competition - 2023 application here. </div>
              <div className='py-2 text-sm'>Your application number is XXXXXXXXXXXXXXXX and your application status is
                <label className='bg-[#00CC88] px-1 rounded ml-1'> SUBMITTED</label >
              </div>
            </div>
            <div>
              <div className=' flex '><button className='bg-[#00CC88] text-white mx-auto  my-3 px-1 py-1   rounded'  >Download / Print : Confirmation Page</button></div>
            </div>
          </div>
        </div>

      </div >



    </>
  )
}

export default Download
