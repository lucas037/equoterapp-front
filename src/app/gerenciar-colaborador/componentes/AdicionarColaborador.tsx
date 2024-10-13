import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function AdicionarColaborador() {

    const handleNavigation = () => {
        window.location.href = "/cadastro-colaborador";
    }
    return (

        <div className=" border-2 border-black rounded-md p-2">
            <button onClick={handleNavigation} className='space-x-1'> <AddCircleOutlineIcon/>  Adicionar colaborador  </button>
        </div>
    );
}