import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { spinner } from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((response, error) => {
        console.log({ message: error.message });
        setLoading(false);
        return response;
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {
        loading ? <spinner /> : (
          <table className="">

          </table>
        )
      }
    </div>
  );
};
