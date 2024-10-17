import { TextField } from "@mui/material";
import React, { useState } from "react";

interface BuscarColaboradorProps {
  onSearch: (value: string) => void;
}

const BuscarColaborador: React.FC<BuscarColaboradorProps> = ({ onSearch }) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      onSearch(value); 
    }, 500);

    setTimeoutId(newTimeoutId);
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
