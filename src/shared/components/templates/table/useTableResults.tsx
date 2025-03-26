import { useEffect, useState } from "react";
import { IParams } from "../../../context/interfaces/params";
import { useUser } from "../../../context/UserContext";
import { getUserApi } from "../../../api/getUsers";
import { Icontent } from "../../../context/interfaces/users";

export const useTableResults = () => {

    const { users, handleSetUser, params, handleSetParams } = useUser();

    const [isLoading, setIsLoading] = useState(false);
    const [usersFiltered, setUsersFiltered] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);
  
    const handleChangeSizePage = (event: any) => {
      const paramsurl: IParams = {
        ...params,
        results: event.target.value,
      }
      setIsLoading(true);
      getUserApi(paramsurl).then((res:Icontent)=>{
            handleSetUser(res.results!);
        }).catch((e: Error)=> {
            console.log(e);
        }).finally(()=>{
            setIsLoading(false);
        })

      handleSetParams(paramsurl)
    };
    
    const handleChangePage = (event: any, newPage: number) => {
      const paramsurl: IParams = {
        ...params,
        page: newPage,
      }
      setIsLoading(true);
      getUserApi(paramsurl).then((res:Icontent)=>{
        handleSetUser(res.results!);
        }).catch((e: Error)=> {
            console.log(e);
        }).finally(()=>{
            setIsLoading(false);
        })
      handleSetParams(paramsurl)
      
    };
  
    const filterContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length > 0 ? 
        setUsersFiltered(users?.filter(item => `${item.name.first} ${item.name.last}`.toLocaleLowerCase().includes(e.target.value.trim())) || [])
        : setUsersFiltered([]);
    }

    useEffect(() => {
        const orderData = ()=> {
            if (usersFiltered.length > 0) return usersFiltered
            return users
        } 
        setData(orderData)
    }, [usersFiltered, users])
    
  
    return {
      isLoading,
      data,
      params,
      usersFiltered,
      handleChangePage,
      handleChangeSizePage,
      filterContent,
    }
  }