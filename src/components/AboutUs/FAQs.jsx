import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
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
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base sm:text-lg font-semibold">
              What is Respondrz?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700 text-sm sm:text-base">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi delectus in,
                maiores et fugit unde eaque dignissimos, quibusdam ratione incidunt, iste molestias
                quod aperiam enim dicta? Fugiat tempora rem delectus?
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base sm:text-lg font-semibold">
              Who we Help?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700 text-sm sm:text-base">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ullam repellendus amet
                inventore saepe. Laboriosam, facilis. Explicabo, saepe earum. Delectus iusto quam
                natus sequi esse quas vero aliquid tempore. Minima.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base sm:text-lg font-semibold">
              How can You Reach Us?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700 text-sm sm:text-base">
              <p>
                We stand behind our products with a comprehensive 30-day return policy. If you&apos;re
                not completely satisfied, simply return the item in its original condition.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQs
