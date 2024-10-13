import { TextField } from "@mui/material";

export default function BuscarColaborador() {

    return (
        <div className="flex w-full">
            <TextField
                id="outlined-basic"
                label="Buscar colaborador"
                variant="outlined"
                size="small"
            />
        </div>
    );
}