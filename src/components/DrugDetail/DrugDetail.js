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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DrugDetail({ value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver detalhes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {value.drugName} {value.dosage}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              alt={"Medicamento" + value.drugName}
              src={drugimage}
              width={150}
            />
            <p>R$ {value.price}</p>
            <p>{value.lab}</p>
            <p>{value.type}</p>
            <p>{value.description}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
