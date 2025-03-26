import { ITableElement } from "../components/interfaces/table.interface"
import { IUser } from "../context/interfaces/users"

export const columnsTable = ():ITableElement<any>[] => {

    return [
        {
            field: 'thumbnail',
            headerName: 'Imagen',
            minWidth: 70,
            renderCell(params:IUser) {
                return (<img src={params.picture.thumbnail} alt="avatar" width="40" height="40" loading='lazy'/>)
            }
        },
        {
            field: 'name',
            headerName: 'Nombre completo',
            minWidth: 160,
            renderCell(params:IUser) {
                return (<div>{`${params.name.first} ${params.name.last}`}</div>)
            }
        },
        {
            field: 'gender',
            headerName: 'Género',
            minWidth: 160,
            renderCell(params:IUser) {
                return (<div>{params.gender}</div>)
            }
        },
        {
            field: 'email',
            headerName: 'Correo electrónico',
            minWidth: 160,
            renderCell(params:IUser) {
                return (<div>{params.email}</div>)
            }
        },
        {
            field: 'phone',
            headerName: 'Teléfono',
            minWidth: 160,
            renderCell(params:IUser) {
                return (<div>{params.phone}</div>)
            }
        },
        {
            field: 'location',
            headerName: 'Residencia',
            minWidth: 160,
            renderCell(params:IUser) {
                return (<div>{params.location.country}</div>)
            }
        },
    ]

}