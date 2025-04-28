import { ResponseModel } from './model';

const hookApi = () => {

  //exemplo de implementação
  const postApi = async <T>({ apiName, url, body }: { apiName: string; url: string; body: any; }): Promise<ResponseModel<T>> => {
    console.log(apiName, url, body);

    const data = { name: 'teste' } as T;
    const response = new ResponseModel<T>({ data });
    return response;
  };

  // exemplo de implementação
  const getFileApi = async ({ apiName, url, body }: { apiName: string; url: string; body: any; }): Promise<ResponseModel<any>> => {

    const response = new ResponseModel({});
    return response;
  };

  return { postApi, getFileApi };
};

export default hookApi;
