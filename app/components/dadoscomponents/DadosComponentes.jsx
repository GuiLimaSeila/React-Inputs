import Dados from "../dados/Dados";

const DadosComponentes = () => {
    return (
        <>
            <Dados dados={'Nome: '} text={'Guilherme'} />
            <Dados dados={'Idade: '} text={'16'} />
            <Dados dados={'Cidade: '} text={'Valinhos'} />
            <Dados dados={'Estado: '} text={'São Paulo'} />
            <Dados dados={'Comida Favorita: '} text={'Lasanha'} />
        </>
    )
}

export default DadosComponentes;