
import { getCSS, tickConfig} from "./common.js"

async function QuantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const QuantidadeUsuarios = Object.values(dados)
}
    const data = [
        {
            x: nomeDasRedes,
            y: QuantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
       plot_bgcolor: getCSS('--bg-color'),
       paper_bgcolor: getCSS('--bg-color'),
       title: {
        text: 'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
           color: getCSS('--primaty-color'),
           family: getCSS('--font'),
           size: 30
        }
       },
       xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
       },
       yaxis: {
        tickfont: tickConfig,
        text: 'bilhões de usuários ativos',
        font: {
            color: getCSS('--secondary-color')
       }
    }

}

QuantidadeUsuarios()
