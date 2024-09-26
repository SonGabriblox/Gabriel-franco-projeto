const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.jso'

async function vizualizaInfomacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

}
