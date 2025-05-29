
import React from 'react';
import Navbar from '@/components/Navbar';
import UserForm from '@/components/UserForm';
import Footer from '@/components/Footer';

const FormPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Get Your Personalized Roadmap</h1>
            <p className="text-gray-600 mt-2">
              Fill out the form below to create a customized learning path based on your background and interests.
            </p>
          </div>
          
          <UserForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
