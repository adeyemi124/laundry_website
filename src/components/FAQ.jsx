import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "What range of services do you offer?",
      answer: "We offer a wide range of laundry services including washing, drying, starching, ironing, and folding for various types of clothing and fabrics. We also provide specialized services such as house fumigation and stain removal."
    },
    {
      question: "How long does it take to get my laundry back?",
      answer: "Our standard turnaround time is 3 days. However, we also offer express services for an additional fee if you need your laundry back sooner."
    },
    {
      question: "Do you offer pickup and delivery services?",
      answer: "Yes, we offer timely pickup and delivery services within Ogbomoso and surrounding areas. You can schedule a pickup through our website or by calling our customer service."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, and mobile money payments. You can pay upon delivery or deposit on pickup."
    },
    {
      question: "How do you handle delicate or special care items?",
      answer: "We have specialized processes for delicate items. Please inform us about any special care instructions when you submit your laundry, and we'll ensure they're handled appropriately."
    },
    {
        question: "Where is your office address?",
        answer: "We have specialized processes for delicate items. Please inform us about any special care instructions when you submit your laundry, and we'll ensure they're handled appropriately."
      },
  ]

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

