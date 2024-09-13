import { api } from "./configApi";

export const charactersList = async () => {
  try {

    const res = await api.get();
    console.log("res", res);
    return {
        status: 1,
        personajes: res.data,
        msg: "Listado de productos"
    }
  } catch (error) {
    if (error.response) {
      return {
        status: 0,
        msg: "Error al obtener los personajes",
      };
    }

    return {
      status: -1,
      msg: "Error en el servidor",
    };
  }
};

export const charactersBuscar = async (parametro= "", age="") => {
  try {

    const parametroGet = `/search/?name=${parametro}&age=${age}`
    console.log('parametroGet', parametroGet)
    const res = await api.get(parametroGet);
    console.log("res", res);
    return {
        status: 1,
        personajes: res.data,
        msg: "Listado de productos"
    }
  } catch (error) {
    if (error.response) {
      return {
        status: 0,
        msg: "Error al obtener los personajes",
      };
    }

    return {
      status: -1,
      msg: "Error en el servidor",
    };
  }
};