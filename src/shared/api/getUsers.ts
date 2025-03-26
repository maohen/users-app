
export const getUserApi = async(params:any) =>{
    const uri = "https://randomuser.me/api/?seed=abc&"
    const queryString = new URLSearchParams(params).toString();
    const data = await fetch(`${uri}${queryString}`,);
    const response = data.json();
    return response;
  }