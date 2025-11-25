import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
  const faqData = [
    {
      value: "item-1",
      question: "What is Respondrz?",
      answer: "Respondrz is a unified emergency network that aggregates ambulance fleets from various NGOs, hospitals, and government agencies. We connect reliable organizations to a single platform to ensure the nearest ambulance reaches the patient, regardless of which organization owns it."
    },
    {
      value: "item-2",
      question: "How can my organization partner with Respondrz?",
      answer: "NGOs and government bodies can partner with us by integrating their ambulance fleets into our dispatch system. We provide the technology to manage your fleet efficiently and route emergency requests from our user base directly to your drivers."
    },
    {
      value: "item-3",
      question: "How does the system decide which ambulance to send?",
      answer: "Our smart dispatch algorithm identifies the precise location of the emergency and automatically alerts the nearest available ambulance from our network of partners. This minimizes travel time and saves lives by ignoring organizational boundaries."
    },
    {
      value: "item-4",
      question: "Can individuals use their personal vehicles to volunteer?",
      answer: "No. To ensure professional medical standards and patient safety, Respondrz acts exclusively as a platform for verified organizations (NGOs, Rescue 1122, etc.). We do not accept individual volunteer drivers; we only onboard established ambulance fleets."
    },
    {
      value: "item-5",
      question: "Is there a cost for organizations to join the network?",
      answer: "Our primary goal is social impact. We offer various partnership models designed to help organizations optimize their fleet usage without financial burden. Please contact our partnership team for specific details on integration."
    }
  ];

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-[900px]">
        <h1 className="flex justify-center items-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6">
          FAQs
        </h1>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white shadow-xl rounded-xl p-4 sm:p-6"
          defaultValue="item-1"
        >
          {faqData.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700 text-sm sm:text-base">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQs