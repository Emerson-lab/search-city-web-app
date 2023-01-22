import { Api } from "../axios-config";

export interface IVisita {
  id: number;
  dataDaVista: string;
  nrvisitas: number;
}

type TVisitas = {
  data: IVisita[];

}

const getAllVisitas = async (): Promise<TVisitas | Error> => {
  try {
    const { data } = await Api.get('/visitas');

    if (data) {
      return {
        data,
      };
    }

    return new Error('Erro ao listar os registros.');

  } catch (error) {
    console.log('[catch-error]', error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

export const VisitasServices = {
  getAllVisitas
}