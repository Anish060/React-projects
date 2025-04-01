import React from 'react'

export default function administrator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All\n");

  const filters = ["All\n", "Infrastructure\n", "Health\n", "Education\n","Taxproblems\n"];
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/mes').then(res=>res.json()).then(data=>setdata(data)).catch(err=>console.log(err));
  })
  return (
    <div className="p-2.5 w-full bg-white min-h-[screen]">
    <div className="flex flex-col w-full bg-white shadow-sm h-[955px] max-w-[1371px]">
      <div className="flex gap-1 items-center p-2.5">
        <div className="flex gap-11 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
            alt=""
            className="w-[42px] h-[42px]"
          />
          <div className="text-base text-black">Sent</div>
          <div className="gap-2.5 text-base text-black">Response</div>
          <Link to="/user">
          <div className="gap-2.5 pl-2.5 text-base text-black">Send</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end px-5 mt-5">
        <div className="flex gap-1 items-center px-1 py-0.5 rounded bg-zinc-950">
           <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-zinc-950 text-white rounded"
      >
        Filter
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-lg">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${
                selectedFilter === filter ? "bg-gray-300 font-bold" : ""
              }`}
              onClick={() => {
                setSelectedFilter(filter);
                setIsOpen(false);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"18:1557\" layer-name=\"arrow_drop_down\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[24px] h-[24px]\"> <path d=\"M12 15L7 10H17L12 15Z\" fill=\"#FEF7FF\"></path> </svg>",
              }}
            />
          </div>
        </div>
        <table className="w-full border-collapse border border-black bg-zinc-50">
            {/* Table Header */}
            <thead className="bg-gray-200 border-b border-black">
              <tr className="text-base text-black">
                <th className="p-3 border border-black">User</th>
                <th className="p-3 border border-black">Context</th>
                <th className="p-3 border border-black">View</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-center border-b border-black">
                    {(selectedFilter==="All\n" || item.Category === selectedFilter)  && (
    <>
      <td className="p-3 border border-black">{"A1" || "N/A"}</td>
      <td className="p-3 border border-black">{item.Context || "N/A"}</td>
      <td className="p-3 border border-black">
        <Link to="/ussent" state={{ item }}>
          <button onClick={() => se(item)} className="px-4 py-2 bg-black text-white rounded-md">
            View
          </button>
        </Link>
      </td>
    </>
  )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-3 text-center border border-black text-gray-500">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div> 
      </div>
    </div>
 
  )
}
