import React, { useState } from 'react';
import axios from 'axios';

function MultiStepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    fileUpload: null,
    multiFileUpload: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      // Make API call to submit form data (Replace API_ENDPOINT with the actual URL)
      const response = await axios.post('https://example.com/api/submit-form', formData);
      if (response.data.success) {
        // Handle successful form submission
      } else {
        // Handle form submission failure
      }
    } catch (error) {
      // Handle form submission error
    }
    setIsLoading(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Step 1: Basic Details</h2>
            {/* Render your Step 1 form fields here */}
            {/* Example:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
            />
            */}
          </div>
        );
      case 2:
        return (
          <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Step 2: Address</h2>
            {/* Render your Step 2 form fields here */}
            {/* Example:
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Address"
            />
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="City"
            />
            */}
          </div>
        );
      case 3:
        return (
          <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Step 3: File Upload</h2>
            {/* Render your Step 3 form fields here */}
            {/* Example:
            <input
              type="file"
              onChange={(e) => setFormData({ ...formData, fileUpload: e.target.files[0] })}
            />
            */}
          </div>
        );
      case 4:
        return (
          <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Step 4: Multi File Upload</h2>
            {/* Render your Step 4 form fields here */}
            {/* Example:
            <input
              type="file"
              multiple
              onChange={(e) => setFormData({ ...formData, multiFileUpload: e.target.files })}
            />
            */}
          </div>
        );
      case 5:
        return (
          <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Step 5: Status</h2>
            {/* Render your Step 5 form fields here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-3xl font-bold mb-6">Multi Step Form</h1>
        <div className="flex items-center mb-6">
          <div className="w-2/3 bg-gray-200 rounded-full mr-4">
            <div className="bg-indigo-500 rounded-full" style={{ width: `${((currentStep - 1) / 5) * 100}%` }}></div>
          </div>
          <div className="text-xl font-bold">Step {currentStep} of 5</div>
        </div>
        {renderStep()}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Previous
            </button>
          )}
          {currentStep < 5 ? (
            <button
              onClick={handleNextStep}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleFormSubmit}
              disabled={isLoading}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepFormPage;
