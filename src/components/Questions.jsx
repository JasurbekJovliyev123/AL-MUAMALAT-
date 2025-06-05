import React, { useState } from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the Sign Up button and fill in the required information.",
  },
  {
    question: "I forgot my password. What should I do?",
    answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer: "Go to your profile settings and make the necessary changes.",
  },
  {
    question: "I forgot my password. What should I do?",
    answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer: "Go to your profile settings and make the necessary changes.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-5 mx-auto  md:p-4 p-2 gap-y-2">
      {faqs.map((faq, index) => (
        <div key={index} className="border w-full rounded shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-4 md:py-[30px] font-medium text-gray-800 flex justify-between items-center"
          >
            {faq.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
