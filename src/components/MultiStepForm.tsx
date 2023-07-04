import axios from 'axios';
import { useState } from 'react';

const MultiStepFormPage = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    file: null | File;
    files: File[];
  }>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    file: null,
    files: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prevFormData) => ({
      ...prevFormData,
      files,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Create a new FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('pincode', formData.pincode);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('file', formData.file || '');

      // Append each file from the files array to the FormData object
      formData.files.forEach((file) => {
        formDataToSend.append('files', file);
      });

      // Make an API call to submit the form data
      const response = await axios.post('YOUR_API_ENDPOINT_URL', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response and display an appropriate message to the user
      if (response.data.success) {
        // Update UI to show success message or navigate to a success page
        console.log('Form submitted successfully');
      } else {
        // Update UI to show error message or handle the error appropriately
        console.error('Form submission failed:', response.data.error);
      }

      // Placeholder code for demo purposes
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <div className="multi-step-form-container">
      <h1>Multi-Step Form Page</h1>
      {/* TODO: Implement the form steps and fields */}
      <form>
        {/* Step 1: Basic Details */}
        <h2>Step 1: Basic Details</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Other fields for Step 1: Email, Phone Number */}

        {/* Step 2: Address */}
        <h2>Step 2: Address</h2>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Other fields for Step 2: City, State, Pincode, Country */}

        {/* Step 3: File Upload */}
        <h2>Step 3: File Upload</h2>
        <div className="form-group">
          <label>Upload File (PNG/PDF):</label>
          <input
            type="file"
            accept=".png,.pdf"
            onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, file: e.target.files?.[0] || null }))}
            required
          />
        </div>

        {/* Step 4: Multi File Upload */}
        <h2>Step 4: Multi File Upload</h2>
        <div className="form-group">
          <label>Upload Files (PNG/PDF):</label>
          <input
            type="file"
            accept=".png,.pdf"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>
        {/* Other fields for Step 4: Geolocation Status */}

        {/* Step 5: Status */}
        <h2>Step 5: Status</h2>
        {/* Placeholder for status message */}

        {/* Submit button */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiStepFormPage;
