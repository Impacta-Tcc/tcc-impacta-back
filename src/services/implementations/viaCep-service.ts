import axios from "axios";
import { ViacepResult, viaCepService } from "../viaCep-service";

export class ViaCepService implements viaCepService {
  async getCepByZipCode(cep: string): Promise<ViacepResult[]> {
    const Url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await axios.get<ViacepResult[]>(Url);
    return response.data
  }
}


import { ConnectionPool } from "mssql";

const config = {
  user: "sa",
  password: "@k]rHSdfbKW0",
  server: "localhost,1433",
  database: "tcc-impacta",
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
};

const pool = new ConnectionPool(config);

pool
  .connect()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Database connection failed: ", err);
  });
