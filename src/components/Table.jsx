import { Spinner } from "./Spinner";

export const Table = ({ lista, loading }) => {
  return (
    <div className="">
      <table className="text-sm text-left text-gray-500 w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Job
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="10" className="p-2">
                <Spinner />
              </td>
            </tr>
          ) : (
            lista?.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.job}</td>
                <td className="px-6 py-4">{item.size}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.age}</td>

                
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
