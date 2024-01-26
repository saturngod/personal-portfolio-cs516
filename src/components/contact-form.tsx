"use client"

import React, { useState } from 'react';
import axios from 'axios';
import {sha1} from '@/lib/utils';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [sum, setSum] = useState('');
  const [num1,setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2,setNum2] = useState(Math.floor(Math.random() * 10));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!name || !subject || !message || !sum || parseInt(sum) !== num1 + num2) {
      alert('All fields are required and the sum must be correct');
      return;
    }

    const timestamp = Date.now()
    const hash = await sha1(name + subject + message + "secrectData" + timestamp);

    const formData = {
      name,
      subject,
      message,
      timestamp,
      hash
    };
  
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'https://sendmail.htainlinshwe.xyz/send',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      
    } catch (error) {
      console.error(error);
    }
    finally {
      alert("Email has been sent successfully");

      setName("");
      setSubject("");
      setMessage("");
      setSum("");
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
      setIsSubmitting(false);
    }

  };

  return (
    <form className="w-full mt-6" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
            Name
          </label>
          <input value={name}  onChange={e => setName(e.target.value)}  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Your Name" />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">
            Subject
          </label>
          <input value={subject}  onChange={e => setSubject(e.target.value)}  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-subject" type="text" placeholder="Subject" />
        </div>

        <div className="w-full px-3 pt-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subject">
          What is {num1} + {num2} ?
          </label>
          <input value={sum}  onChange={e => setSum(e.target.value)}  className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-subject" type="text" placeholder="Answer" />
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
            Message
          </label>
          <textarea  value={message}  onChange={e => setMessage(e.target.value)} className="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="grid-message">{}</textarea>
        </div>
      </div>

      
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button disabled={isSubmitting} className="shadow bg-black hover:bg-zinc-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
};

export default ContactForm;
