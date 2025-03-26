import { render } from "@testing-library/react";
import { describe, test, expect, vi, afterEach, beforeEach } from "vitest";
import App from "../App";
import { getUserApi } from "../shared/api/getUsers";

describe('Pruebas en App.tsx', () => { 

    const mockFetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              { id: 1, name: "Laura Woods", gender: "female" },
              { id: 2, name: "Marten Faber", gender: "male" },
            ]),
        })
    );

    const setup = ()=> {
        render(
            <App />
        )
    }

    beforeEach(()=>{
        setup();
    })

    afterEach(()=>{
        vi.restoreAllMocks();
    })


    test('Simular la propagacion del contexto en el componente hijo, debe llamar la api con los parametros iniciales', async() => { 

        vi.stubGlobal("fetch", mockFetch);
        const params = {
            page:1,
            results: 50,
            totalElements: 1000
          }
        await getUserApi(params);

        expect(mockFetch).toHaveBeenCalledWith("https://randomuser.me/api/?seed=abc&page=1&results=50&totalElements=1000");
        
     })

    test('Debe retornar los valores Laura Woods y Marten Faber simulados', async() => { 
        vi.stubGlobal("fetch", mockFetch);

        const params = {
            page:1,
            results: 50,
            totalElements: 1000
          }
        const users = await getUserApi(params);

        expect(users).toHaveLength(2);
        expect(users[0].name).toBe("Laura Woods");
        expect(users[1].name).toBe("Marten Faber");
     })
 })