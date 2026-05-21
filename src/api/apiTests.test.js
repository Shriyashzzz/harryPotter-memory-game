import { fetchCharachters } from "./fetchApi";
import { expect, test, vi } from "vitest";

//unit test
// tests if the fetch funciton works
test("test the fetch function", async () => {
  const mockFetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve([{ name: "Harry Potter" }, { name: "Hermione" }]),
  });

  vi.stubGlobal("fetch", mockFetch);

  const data = await fetchCharachters().then((response) => response.json());

  expect(Array.isArray(data)).toBe(true);
  expect(mockFetch).toHaveBeenCalledWith(
    "https://hp-api.onrender.com/api/characters",
  );
  vi.unstubAllGlobals();
});

//tests if the api call works

test("if the server returns http 200", async () => {
  const response = await fetchCharachters();

  expect(response.status).toBe(200);
});
