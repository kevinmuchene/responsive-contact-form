type SubmittedDetailsProps = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
  };
};

const SubmittedDetailsComponent: React.FC<SubmittedDetailsProps> = ({
  data,
}) => {
  const { firstName, email, country } = data;
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Submitted Details
        </h2>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">First Name:</span> {firstName}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Country:</span> {country}
        </p>
      </div>
    </div>
  );
};

export default SubmittedDetailsComponent;
