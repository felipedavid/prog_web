import { Component } from 'react';
import './table.styles.css'

class Table extends Component {
    render() {
        return (
           <table border="1">
                <thead id="t_header">
                    <tr>
                        <th>Titulo</th>
                        <th>Ano</th>
                        <th>Score</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody id="t_body">
                    {
                        this.props.animes.map(a => {
                            return (
                                <tr key={a.url}>
                                    <td><a target="_blank" rel="noopener noreferrer" href={a.url}>{a.title}</a></td>
                                    <td>{a.start_date == null ? "Desconhecido" : a.start_date.substring(0, 4)}</td>
                                    <td>{a.score}</td>
                                    <td><button onClick={(event) => this.props.setImage(event, a.image_url)}>Carregar</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;