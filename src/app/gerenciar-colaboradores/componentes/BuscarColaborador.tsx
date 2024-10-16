import { TextField } from "@mui/material";

interface BuscarColaboradorProps {
  onSearch: (value: string) => void;
}

const BuscarColaborador: React.FC<BuscarColaboradorProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex w-full">
      <TextField
        id="outlined-basic"
        label="Buscar colaborador"
        variant="outlined"
        size="small"
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default BuscarColaborador;
