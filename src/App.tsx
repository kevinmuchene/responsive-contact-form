import { useState } from "react";
import FormComponent from "./components/FormComponent";
import SubmittedDetailsComponent from "./components/SubmittedDetailsComponent";
import { initialValues } from "./hooks/useFormikForm";
import ConfirmationComponent from "./components/ConfirmationComponent";

function App() {
  const [submittedData, setSubmittedData] = useState<
    typeof initialValues | null
  >(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (values: typeof initialValues) => {
    setSubmittedData(values);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <div className="p-3 min-h-screen">
      {submittedData && <ConfirmationComponent isSubmitted={isSubmitted} />}
      <div className="mb-4 md:mb-8 lg:mb-12">
        <FormComponent onSubmitCallback={handleFormSubmit} />
      </div>

      {submittedData && <SubmittedDetailsComponent data={submittedData} />}
    </div>
  );
}

export default App;
