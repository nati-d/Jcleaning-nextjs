import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  const faqs = [
    {
      question: "What types of corporate spaces do you clean?",
      answer: "We provide cleaning services for various corporate spaces, including offices, conference rooms, and common areas.",
    },
    {
      question: "Do you offer customized cleaning schedules?",
      answer: "Yes, we understand that each business has unique needs. We work with clients to create customized cleaning schedules that fit their requirements.",
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Absolutely. We prioritize the use of eco-friendly and non-toxic cleaning products to ensure a healthy and sustainable environment for your workplace.",
    },
    {
      question: "How experienced is your cleaning staff?",
      answer: "Our cleaning staff is highly experienced and trained to handle corporate cleaning tasks. We conduct regular training sessions to ensure they meet industry standards.",
    },
    {
      question: "Is your cleaning service available after office hours?",
      answer: "Yes, we offer flexible scheduling, including after office hours and weekends, to minimize disruption to your daily operations.",
    },
    {
      question: "What safety measures do you have in place during cleaning?",
      answer: "We prioritize safety and follow strict protocols during cleaning. Our staff is equipped with necessary safety gear, and we take precautions to avoid any damage to property.",
    },
  ];

  return (
    <div className="w-[98%] md:w-[60%] py-10 lg:w-[40%] m-auto">
      <h1 className="text-4xl lg:text-6xl text-center font-bold mb-10">FAQ</h1>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
