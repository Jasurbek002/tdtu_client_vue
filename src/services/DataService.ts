import { api } from "@/utils/api";

class DataService {
  constructor() {}
  async getData() {
    try {
      const {} = api.get("");
    } catch (error) {
      console.log(error);
    }
  }

  async getOneData(id: number) {
    try {
      const {} = api.get(`${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DataService();
