import React from 'react';

function FAQItem({ question, answer }) {
  return (
    <div className="my-4">
      <h3 className="font-bold text-xl">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default FAQItem;
