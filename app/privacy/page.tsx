import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/ui/accordion";

const PrivacyPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700">Privacy Policy</h1>
      <div className="py-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              User privacy and data protection
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>User privacy and data protection are human rights</li>
                <li>We have a duty of care to the people within our data</li>
                <li>
                  Data is a liability, it should only be collected and processed
                  when absolutely necessary
                </li>
                <li>
                  We will never sell, rent or otherwise distribute or make
                  public your personal information
                </li>
                <li>We loathe spam as much as you do!</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Relevant legislation</AccordionTrigger>
            <AccordionContent>
              <p>
                Along with our business and internal computer systems, this
                website is designed to comply with the following national and
                international legislation with regards to data protection and
                user privacy:
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PrivacyPage;
