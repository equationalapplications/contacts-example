"use client";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<FormData>();
  const [searchTerm, setSearchTerm] = useState('');


  const onSubmit = (data: FormData) => {
    axios.post('http://localhost:5000/contacts', data)
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <input {...register('firstName')} placeholder="First Name" className="border p-2 mb-2 w-full text-black bg-white" />
        <input {...register('lastName')} placeholder="Last Name" className="border p-2 mb-2 w-full text-black bg-white" />
        <input {...register('company')} placeholder="Company" className="border p-2 mb-2 w-full text-black bg-white" />
        <input {...register('jobTitle')} placeholder="Job Title" className="border p-2 mb-2 w-full text-black bg-white" />
        <input {...register('email')} placeholder="Email" className="border p-2 mb-2 w-full text-black bg-white" />
        <input {...register('phoneNumber')} placeholder="Phone Number" className="border p-2 mb-2 w-full text-black bg-white" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Contact</button>
      </form>
    </div>
  );
}
