import type {Categoria} from "../types/Categoria"
import {api} from "./api"

const categoriaService = {
    async listen() {
        const resposta = await api.get<Categoria[]>('categorias');
        return resposta.data; 

    }
}

export default categoriaService; 