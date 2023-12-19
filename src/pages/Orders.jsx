import React from "react";

// import styles from "../style";
import { useState, useEffect } from "react";
import DropDown from "../components/DropDown";
import axios from "axios";

const states = ["Tamil Nadu", "Goa", "Maharastra"];

const district = [
  "Ariyalur",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kancheepuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Salem",
  "Sivagangai",
  "Thanjavur",
  "Theni",
  "Thiruvarur",
  "Tirunelveli",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Trichy",
  "Tuticorin",
  "Vellore",
  "Villupuram",
  "Virudhunagar",
];
const label1 = "State";
const label2 = "District";

const Orders = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [allStates, setAllStates] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.post(
          "https://backend-fpo-sih.onrender.com/api/fpos",
          {
            state: selectedState,
            district: selectedDistrict,
          }
        );
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [selectedState, selectedDistrict]);

  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const response = await axios.get(
          "https://backend-fpo-sih.onrender.com/api/documents"
        );
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching all documents:", error);
      }
    };

    fetchAllDocuments();
  }, []);

  console.log(documents);

  useEffect(() => {
    const fetchAllStates = async () => {
      try {
        const response = await axios.get(
          "https://backend-fpo-sih.onrender.com/api/distinct-states"
        );
        setAllStates(response.data);
      } catch (error) {
        console.error("Error fetching all states:", error);
      }
    };

    fetchAllStates();
  }, []);
  console.log(allStates);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="mr-2 h-8 mt-1"
          />
        </div>
        <div className="flex justify-end items-center gap-4  mr-2 ">
          <DropDown options={allStates} label={label1} />
          <DropDown options={district} label={label2} />
        </div>
      </div>
      <div className="flex flex-col">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="max-h-[400px] overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b ">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        State
                      </th>
                      <th scope="col" className="px-6 py-4">
                        District
                      </th>
                      <th scope="col" className="px-6 py-4">
                        FPO Name
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y ">
                    {documents.map((item, index) => (
                      <tr key={item._id} className="border-b ">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item["State Name"]}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.District}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item["FPO Name"]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Orders;
