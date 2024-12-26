import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
      <p className="text-gray-600">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">123 Innovation Drive, Tech Valley, CA 94043</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">contact@zidio.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;