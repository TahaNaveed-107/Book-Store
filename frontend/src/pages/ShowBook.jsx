import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


export default function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setLoading(false);
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Id</span>
            <span>{book.id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Author</span>
            <span>{book.author}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400 ">Last Updated At</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// export default ShowBook;
