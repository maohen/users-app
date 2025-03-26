import { useEffect, useState } from "react";
import { useUser } from "../../../context/UserContext";
import { getUserApi } from "../../../api/getUsers";
import { TableComponent } from "../../templates/table/Table.component";
import { columnsTable } from "../../../helpers/columsTable";
import { Spinner } from "../../ui";
import { Icontent } from "../../../context/interfaces/users";

export default function Users() {
    const { users, handleSetUser, params } = useUser();
    const valuesResultsPages = [ 50, params.totalElements/5, params.totalElements/2, params.totalElements ];
    const [ isSearch, setIsSearch ] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getUserApi(params).then((res:Icontent)=>{
        handleSetUser(res.results!);
      }).catch((e: Error)=> {
        console.log(e);
      }).finally(()=>{
        setIsLoading(false);
      })
    }, [])
    
    return (
      <>
      {
        isLoading ?
          <Spinner />
          :
          <TableComponent
            columns={columnsTable()}
            valuesResultsPages={valuesResultsPages}
            isSearch={isSearch}
            title="Listado de Usuarios"
          />

      
      }
      </>
    )
  }