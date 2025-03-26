import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, afterEach, beforeEach } from "vitest";
import { getUserApi } from "../../shared/api/getUsers";

describe('Pruebas en Api.ts', () => { 

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

    const params = {
        page:1,
        results: 50,
        totalElements: 1000
      }


    afterEach(()=>{
        vi.restoreAllMocks();
    })


    test('deben llegar los params a la funcion y debe llamar la api con los parametros iniciales', async() => { 

        vi.stubGlobal("fetch", mockFetch);

        await getUserApi(params);

        expect(mockFetch).toHaveBeenCalledWith("https://randomuser.me/api/?seed=abc&page=1&results=50&totalElements=1000");
        
     })

    test('Debe retornar los valores Laura Woods y Marten Faber simulados', async() => { 
        vi.stubGlobal("fetch", mockFetch);

        
        const users = await getUserApi(params);

        expect(users).toHaveLength(2);
        expect(users[0].name).toBe("Laura Woods");
        expect(users[1].name).toBe("Marten Faber");
     })

     test("Debe mostrar un error si la api responde con error", async () => {
        vi.stubGlobal("fetch", vi.fn(() =>
          Promise.resolve({
            ok: false,
          })
        ));
    
        await expect(getUserApi(params)).rejects.toThrow("data.json is not a function");
    
        vi.restoreAllMocks();
      });
 })