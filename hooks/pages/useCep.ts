import axios from "axios";

//TYPES
type CEPResponse = {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
};

const useCep = () => {
  const handleGetCep = async (cep: any): Promise<CEPResponse | undefined> => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/unicode/`
      );
      const data: CEPResponse = response.data;
      return data;
    } catch (error) {
      return undefined;
    }
  };

  return {
    handleGetCep,
  };
};

export default useCep;
