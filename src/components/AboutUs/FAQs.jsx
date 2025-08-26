import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Accordion
        type="single"
        collapsible
        className="w-[900px] bg-white shadow-md rounded-xl p-6"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            What is Respondrz?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi delectus in,
              maiores et fugit unde eaque dignissimos, quibusdam ratione incidunt, iste molestias
              quod aperiam enim dicta? Fugiat tempora rem delectus?
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Who we Help?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ullam repellendus amet
              inventore saepe. Laboriosam, facilis. Explicabo, saepe earum. Delectus iusto quam
              natus sequi esse quas vero aliquid tempore. Minima.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            How can You Reach Us?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col justify-center gap-4 leading-relaxed text-gray-700">
            <p>
              We stand behind our products with a comprehensive 30-day return policy. If you&apos;re
              not completely satisfied, simply return the item in its original condition.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQs
