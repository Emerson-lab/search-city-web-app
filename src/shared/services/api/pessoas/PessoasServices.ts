import { Enviroment } from "../../../environments";
import { Api } from "../axios-config";

interface IListagemPessoa {
  id: number;
  cidadeId: number
  nomeCompleto: string;
  email: string;
}

interface IDetalhePessoa {
  id: number;
  cidadeId: number
  nomeCompleto: string;
  email: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa =
      `/pessoas?_page=${page}&
      _limit=${Enviroment.LIMITE_DE_LINHAS}&
      nomeCompleto_like${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHAS)
      };
    }

    return new Error('Erro ao listar os registros.');

  } catch (error) {
    console.log('[catch-error]', error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {

    const { data } = await Api.get(`/pessoas/${id}`);

    if (data) {
      return data
    }

    return new Error('Erro ao consultar registro.');

  } catch (error) {
    console.log('[catch-error]', error);
    return new Error((error as { message: string }).message || 'Erro ao consultar registro.');
  }
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {

  try {

    const { data } = await Api.post<IDetalhePessoa>(`/pessoas`, dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar registro.');

  } catch (error) {
    console.log('[catch-error]', error);
    return new Error((error as { message: string }).message || 'Erro ao criar registro.');
  }
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  try {

    await Api.put(`/pessoas/${id}`, dados);

  } catch (error) {

    console.log('[catch-error]', error);

    return new Error((error as { message: string }).message || 'Erro ao editar registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {

    await Api.delete(`/pessoas/${id}`);

  } catch (error) {

    console.log('[catch-error]', error);

    return new Error((error as { message: string }).message || 'Erro ao deletar registro.');
  }
};

export const PessoasServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}