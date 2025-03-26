import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Input } from "../../../../shared/components";

describe("Pruebas en Input.tsx", () => {

    const handleSearchMock = vi.fn();
    const setup = ()=> {
        render(
            <Input type="text" placeholder="Buscar por nombre" handleSearch={handleSearchMock} />
        )
    }

    test("Debe renderizar el input con el placeholder y tipo correctos", () => {
      setup();
  
      const input = screen.getByPlaceholderText("Buscar por nombre");
  
      expect(input).toBeTruthy();
      expect(input).toHaveProperty("type", "text");
    });
  
    test("Debe llamar a handleSearch cuando el usuario escribe", () => {
      setup();
  
      const input = screen.getByPlaceholderText("Buscar por nombre");
      
      fireEvent.change(input, { target: { value: "Woods" } });
  
      expect(handleSearchMock).toHaveBeenCalledTimes(1);
    });
  
    test("Debe mostrar el icono de búsqueda", () => {
      setup();
  
      const icon = screen.getByRole("img");
  
      expect(icon).toBeTruthy();
    });
  });