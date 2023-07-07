import React from 'react'

export default function TrusteeMessage() {
  return (
    <div>
    <div className="main-layout rounded-2xl mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl grid-cols-1 md:grid-cols-6 m-3">
        <div className="card-img md:flex">
        <figure>
          <img
            src="http://mgmmumbai.ac.in/mgmcet/sites/default/files/inline-images/chairman_0_0.jpg" alt="Album" className="h-56 w-48 md:justify-center md:items-center m-12 rounded-2xl" />
        </figure>
        </div>
        <div className="card-body col-span-5">
          <h2 className="card-title ">Trustee's Message</h2>
          <h4 className="card-title ">Dr. S. N. Kadam & Dr. N. N. Kadam</h4>
          <p className="md:text-md">   We are happy to place on record our sincere and hearty greetings to you. Here we mention with great pride that we are paving out way to the desired goal of helping the cause of economic and industrial growth of the country through technical manpower development. Keeping in view the quality and standard of technical education our group of teachers and other staff are striving hard to impart value based technical education at College of Engineering and Technology, Kamothe, Navi Mumbai.Imbibing a sense of commitment and adhering to it is the work culture of the college at all levels of activities resulting in sense of satisfaction and fulfilment. The teaching and learning process adopted has the efficiency maximised to the extent that the students from the college are well received by industry, Public & Private sector organisations, defence services and others. We look forward for an effective Industry Institute interaction and collective efforts to realise an industrially advanced nation..</p>
        </div>
      </div>
    </div>
    </div>
  )
}
