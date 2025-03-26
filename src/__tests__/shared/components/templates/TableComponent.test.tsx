import { describe, test, expect, vi, Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TableComponent } from "../../../../shared/components/templates/table/Table.component.tsx";
import { columnsTable } from "../../../../shared/helpers/columsTable.tsx";
import { useTableResults } from "../../../../shared/components/templates/table/useTableResults.tsx";


vi.mock("../../../../shared/components/templates/table/useTableResults.tsx", () => ({
    useTableResults: vi.fn(),
  }));


describe("Pruebas en TableComponent.tsx", () => {

    const setup = ()=> {
        render(
            <TableComponent
                columns={columnsTable()}
                title="Lista de Usuarios"
                valuesResultsPages={[5, 10, 20]}
            />
        )
    }


  test("Debe mostrar la tabla cuando data tiene elementos", () => {
      
    (useTableResults as unknown as { mockReturnValue: Function }).mockReturnValue({
        isLoading: false,
        data: [{ id: 1, name: "Laura Woods", gender: "female" }],
        params: { results: 1, totalElements: 10, page: 1 },
        handleChangePage: vi.fn(),
        handleChangeSizePage: vi.fn(),
        filterContent: vi.fn(),
    });

    setup();

    expect(screen.getByTestId("table-results")).toBeTruthy(); 
    expect(screen.getByTestId("table-cell2-thumbnail")).toBeTruthy(); 
  });

  test("Debe mostrar mensaje de no se encontraron resultados", () => {

    (useTableResults as unknown as { mockReturnValue: Function }).mockReturnValue({
      isLoading: false,
      data: [],
      params: { results: 0, totalElements: 0, page: 1 },
      handleChangePage: vi.fn(),
      handleChangeSizePage: vi.fn(),
      filterContent: vi.fn(),
    });

    setup();

    expect(screen.getByTestId("message_no_search")).toBeTruthy();
    expect(screen.getByText("No se encontraron resultados relacionados a su búsqueda")).toBeTruthy();
  });


  test("Debe mostrar el titulo si se pasa como prop", () => {
    (useTableResults as unknown as { mockReturnValue: Function }).mockReturnValue({
      isLoading: false,
      data: [],
      params: { results: 0, totalElements: 0, page: 1 },
      handleChangePage: vi.fn(),
      handleChangeSizePage: vi.fn(),
      filterContent: vi.fn(),
    });

    setup();

    expect(screen.getByText("Lista de Usuarios")).toBeTruthy();
  });
});