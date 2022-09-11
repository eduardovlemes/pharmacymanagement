export default function PharmacyForm() {
  return(
    <>
    <form>
      <label>
        Razão Social <input required />
      </label>

      <label>
        CNPJ <input required />
      </label>

      <label>
        Nome Fantasia <input required />
      </label>

      <label>
        E-mail <input required />
      </label>

      <label>
        Telefone <input required />
      </label>

      <label>
        Celular <input required />
      </label>

      <label>Endereço</label>
      <label>
        CEP <input required />
      </label>

      <label>
        Logradouro <input required />
      </label>

      <label>
        Número <input required />
      </label>

      <label>
        Bairro <input required />
      </label>

      <label>
        Cidade <input required />
      </label>

      <label>
        Estado <input required />
      </label>

      <label>
        Complemento <input />
      </label>

      <label>
        Latitude <input required />
      </label>

      <label>
        Longitude <input required />
      </label>

      <button>Limpar</button>
      <button>Salvar</button>
    </form>
    </>
  );
}
