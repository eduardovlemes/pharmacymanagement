export default function DrugForm() {
  return (
    <>
      <form>
        <label>
          Medicamento <input required />
        </label>

        <label>
          Laboratório <input required />
        </label>

        <label>
          Dosagem <input required />
        </label>

        <label>
          Tipo <input required />
        </label>

        <label>
          Preço Unitário <input required />
        </label>

        <label>
          Descrição <input required />
        </label>

        <button>Limpar</button>
        <button>Salvar</button>
      </form>
    </>
  );
}
