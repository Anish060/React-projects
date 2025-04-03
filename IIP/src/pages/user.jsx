import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function user() {
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("userEmail");

  const [law, setLaw] = useState([]);
  

  // Fetch lawyer details on mount

  const [conte,setConte]=useState({
    contextt:"",
    issu:"",
    catt:"",
    name:email
  })
  
 
  async function geans() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAgaxmNhCv8mD4OoUijls12OVMev3t82Kc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: conte.issu + " analyse it and give the response as a single word whether it's Infrastructure, Health, Education, or Tax problem." }] }],
        },
      });

      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.log(error);
      return "Unknown";  // Return a fallback category in case of error
    }
  }

  const handleSubmit = async () => {
    try {
      //setConte( { ...conte, name:email })
      const category = await geans();  // Wait for AI category
      const updatedConte = { ...conte, catt: category };  // Create a new object with updated category
      
      const response = await axios.post("http://localhost:8081/sen", updatedConte);
      console.log("Response:", response.data);

      setConte({ contextt: "", issu: "", catt: "" ,name:email});  // Clear input only on success
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  
  return (
    <div className="flex flex-col bg-white min-h-[screen]">
      <div className="flex gap-1 items-center p-2.5 border border-b">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
          alt=""
          className="w-[42px] h-[42px]"
        />
        <div className="flex flex-1 gap-11 items-center">
          <Link to="/usersent">
          <div className="text-base text-black">Sent</div>
          </Link>
          <div className="text-base text-black">Response</div>
          <div className="ml-auto text-base text-black">Send</div>
           <Link to="/">
                    <div className="gap-2.5 pl-2.5 text-base text-black">Log out</div>
                    </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 mx-auto w-full max-w-[600px]">
        <div className="flex flex-col gap-2">
          <div className="text-base text-stone-900">Context</div>
          <input
            type="text"
            placeholder="Value"
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-zinc-300 text-zinc-400"
            onChange={(e)=>setConte({...conte,contextt:e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base text-stone-900">Issue</div>
          <textarea
            placeholder="Value"
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid resize-none border-zinc-300 min-h-20 text-zinc-400"
            onChange={(e)=>setConte({...conte,issu:e.target.value})}
          />
        </div>
        <Link to="/usersent" state={{email}}>
        <button className="p-3 w-full text-base rounded-lg bg-stone-900 text-neutral-100" onClick={ handleSubmit}>
          Submit
        </button>
        </Link>
      </div>
    </div>
  )
}
