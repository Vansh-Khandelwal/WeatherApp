import { API } from '../../api/api';

import { useState } from 'react';
import React from 'react'

const Form = ({ setWeather }) => {

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [error, setError] = useState(false);

  // Submit click Handle
  const submitHandle = async (event) => {
    setError(false);
    event.preventDefault();

    if (city === "" || country === "")
      setError(true);
    else {
      try {
        const response = await API(city, country);
        setWeather(response.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  }

  // Input change handle
  const change = (event) => {

    if (event.target.id === "country")
      setCountry(event.target.value);

    else
      setCity(event.target.value);
  }

  return (
    <div className="flex items-center justify-center rounded  shadow-lg bg-white">
      <div className="m-4 p-8 border border-slate-400">
        <div className="space-y-12 flex items-center justify-center">

          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-4xl font-bold leading-10 md:leading-7 text-gray-900 items-center justify-center mb-5">Location Information</h2>
            <hr />

            <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  *Country
                </label>
                <div className="mt-2">
                  <input type="text" id="country" placeholder="ex: India"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(change)} />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  *City
                </label>
                <div className="mt-2">
                  <input
                    type="text" id="city" placeholder="ex: Mumbai"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={change} />
                </div>
              </div>

            </div>

            <div className="text-red-700 mt-5 text-center"><u><i>Note:</i></u> '*' Marked are mandatory to fill</div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit" onClick={submitHandle}
            className="rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Submit
          </button>
        </div>

        {error ? <div className="text-red-500 mt-4 text-center">City or country not found</div> : <></>}

      </div>
    </div>
  )
}

export default Form