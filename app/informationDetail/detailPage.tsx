import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch data from API
      axios
        .get(`/api/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  console.log(data);

  return (
    data && (
      <div className="my-20">
        <div className="grid grid-cols-2 mx-40 py-10 ">
          <div>
            {/* for image */}
            <img className="max-w-full rounded-lg" 
            // src={data.image} 
            alt="" />
          </div>
          <div className="my-auto mx-10 items-center">
            <h1 className="mt-auto mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              {/* for title */}
              {/* {data.title} */}
            </h1>
            <p className="mb-4 text-2xl bold text-justify">
              {/* for 
              {data} */}
            </p>

            <p className="mb-4 bold text-justify">
              {/* for caption */}
              {/* {data.caption} */}
              </p>
            <p className="mb-4 bold text-justify">
              {/* for post link */}
              {data}</p>
            <p className="mb-4 bold text-justify">
              {/* Qualification: {data} */}
              </p>
          </div>
        </div>
      </div>
    )
  );
};

export default DetailPage;
