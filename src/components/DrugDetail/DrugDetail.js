import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import drugimage from "../../assets/drugimage.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  alignItems: "center",
};

export default function DrugDetail({ value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="button-detail" onClick={handleOpen}>
        DETALHES
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <img
              alt={"Medicamento" + value.drugName}
              src={drugimage}
              width={150}
            />
            <h3>
              {value.drugName} {value.dosage}
            </h3>
            <p>{value.type}</p>
            <p className="lab">{value.lab}</p>
            <h4>
              <i>R$ {value.price}</i>
            </h4>
            <p className="description">{value.description}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
