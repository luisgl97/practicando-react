import { useEffect, useState } from "react";
import { charactersBuscar, charactersList } from "../api/charactersApi";
import { Table } from "../components/Table";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

export const Prueba = () => {
  const { auth } = useAuth();
  console.log('auth', auth);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [buscador, setBuscador] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const [listaPersonajes, setListaPersonajes] = useState([]);

  const obtenerListaPersonajes = async () => {
    setLoading(true);
    const { personajes } = await charactersList();
    setLoading(false);
    setListaPersonajes(personajes);
  };

  const onBuscar = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (buscador == "" && age == "") {
      obtenerListaPersonajes();
      setLoading(false);
    } else {
      const { personajes } = await charactersBuscar(buscador, age);
      setLoading(false);
      setListaPersonajes(personajes);
    }
  };

  useEffect(() => {
    obtenerListaPersonajes();
  }, []);

  return (
    <main className="container py-10">
      <form className="sm:w-[500px] mx-auto" onSubmit={onBuscar}>
        <div className="mb-5 flex items-center">
          <label
            htmlFor="inputBuscador"
            className="block mb-2 text-sm font-medium text-gray-900 w-1/3"
          >
            Ingresar nombre
          </label>
          <input
            type="text"
            id="inputBuscador"
            name="inputBuscador"
            value={buscador}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese nombre"
            onChange={(e) => setBuscador(e.target.value)}
          />
        </div>

        <div className="mb-5 flex items-center">
          <label
            htmlFor="inputBuscador"
            className="block mb-2 text-sm font-medium text-gray-900 w-1/3"
          >
            Ingresar edad
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese edad"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[200px] px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
      <br />
      <div className="mx-auto">
        <Table lista={listaPersonajes} loading={loading} />
      </div>

      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      </div>
    </main>
  );
};
