const app = require("../src/app.js");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.status).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      //   console.log(response);
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/123456789").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Credenciales Validas, access: true", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login/?email=ejemplo@gmail.com&password=123456"
        )
      ).body;
      //   console.log(response);
      expect(response.access).toBeTruthy();
    });
    it("Credenciales Invalidas, access: false", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login/?email=ejemplo@gmail.com&password=12345"
        )
      ).body;
      //   console.log(response);
      expect(response.access).toBeFalsy();
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const char1 = {
      id1: 1,
      name1: "Rick",
    };
    const char2 = {
      id: 2,
      name: "Morty",
    };
    it("Devuelve un JSON con lo enviado por body"),
      async () => {
        const response = await agent.post("/rickandmorty/fav").send(char1);
        expect(response.body).toContainEqual(char1);
      };
  });
});
