import React from "react";

// import styles from "../style";
import { useState, useEffect } from "react";

const NavLink = ({ href, label, current, icon, onClick }) => {
  const baseClasses =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const activeClasses =
    "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

  return (
    <li>
      <a
        href={href}
        className={current ? activeClasses : baseClasses}
        aria-current={current ? "page" : undefined}
        onClick={onClick}
      >
        {icon && <span className="sr-only">{label}</span>}
        {icon && icon}
        {!icon && label}
      </a>
    </li>
  );
};

const Orders = () => {
  const [responseData, setResponseData] = useState([]);
  const [userId, setuserId] = useState(1);

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setResponseData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);

  // Example data for the request body
  const requestBody = {
    state: "Bihar",
  };

  // Fetch call to get distinct districts for a state
  async function fetchDistinctDistricts() {
    try {
      const response = await fetch(
        "https://backend-fpo-sih.onrender.com/api/distinct-district",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      console.log("Distinct Districts:", data);
    } catch (error) {
      console.error("Error fetching distinct districts:", error);
    }
  }
  // Fetch call to get all documents
  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch(
          "https://backend-fpo-sih.onrender.com/api/documents"
        );
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }

    fetchDocuments();
  }, []);
  async function fetchDistinctStates() {
    try {
      const response = await fetch(
        "https://backend-fpo-sih.onrender.com/api/distinct-states"
      );
      const data = await response.json();
      console.log("Distinct States:", data);
      // Process data as needed
    } catch (error) {
      console.error("Error fetching distinct states:", error);
    }
  }

  console.log("Documents:", documents);

  // Call the function
  fetchDistinctStates();

  // Call the function
  fetchDistinctDistricts();

  return (
    <div className="min-h-screen">
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="max-h-[calc(100vh-100px)] ">
                    {/* Wrapping tbody in a div with overflow-y-auto */}
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            FPO Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            State
                          </th>
                          <th scope="col" className="px-6 py-3">
                            District
                          </th>
                          {/* <th scope="col" className="px-6 py-3">
                            hdshj
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
                        {documents.map((document, index) => (
                          <tr
                            key={document._id}
                            className="bg-white dark:bg-gray-800"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              {document["FPO Name"]}
                            </th>
                            <td className="px-6 py-4 text-sm">
                              {document["State Name"]}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              {document.District}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
