import React from "react";
import { useFormikForm } from "../hooks/useFormikForm";
import CustomError from "./CustomErrorComponent";
import { useGetCountriesData } from "../hooks/useGetCountriesData";
import LoadingSpinner from "./LoadingSpinnerComponent";

const FormComponent: React.FC<{ onSubmitCallback: (values: any) => void }> = ({
  onSubmitCallback,
}) => {
  const { formik } = useFormikForm(onSubmitCallback);
  const { countries, loading, error } = useGetCountriesData();

  return (
    <div className="flex  justify-center">
      <div className="w-full max-w-md md:max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <h2>User Information</h2>

          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <CustomError>{formik.errors.firstName}</CustomError>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <CustomError>{formik.errors.lastName}</CustomError>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="123-456-7890"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <CustomError>{formik.errors.phoneNumber}</CustomError>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country of Birth
              </label>
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <p className="text-red-500">
                  Error loading countries. Please try again later.
                </p>
              ) : (
                <select
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Country</option>
                  {countries.map((country: any) => (
                    <option
                      key={country.name.common}
                      value={country.name.common}
                    >
                      {country.name.common}
                    </option>
                  ))}
                </select>
              )}
              {formik.touched.country && formik.errors.country ? (
                <CustomError>{formik.errors.country}</CustomError>
              ) : null}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#135D2D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
