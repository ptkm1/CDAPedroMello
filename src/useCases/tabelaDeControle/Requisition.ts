import { api } from "../../infra/services/api"

class RequisitionTable {

  public async getTableFromDataBase() {

    const data_escolhida = sessionStorage.getItem("CDAdataControle")

    try {
      
      const { data } = await api.post("/cda/listarcolunas", { data_prestacao: data_escolhida })

      if(!data) throw new Error()

      return data

    } catch (error) {

      alert(error.response.data.mensagem)

    }

  }

}

export default new RequisitionTable()