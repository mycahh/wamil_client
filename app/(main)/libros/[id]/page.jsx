import Image from "next/image"
import Comentario from '../../../../components/comentario'

export default function BookByIdPage({ params }) {

    const { id } = params

    return (
        <div>
            <div class="book__layout">
                <div class="book__image">
                    <Image src="/portadas/unmundofeliz.webp" width={225} height={335} />
                </div>
                <div class="book_description">
                    <h3>Un Mundo Feliz</h3>
                    <h4>Aldous Huxley</h4>
                    <span class="rating"><strong>Rating: </strong> 4.5/5.0</span> <span class="count">(116) de comentarios</span>
                    <div class="genero"> <strong>Genero:</strong> <span className="genero_tag">Distopia</span>
                    </div>
                    <div class="book_summary">
                        <h3>Resumen de <strong>Mundo de Feliz</strong></h3>
                        <p>Los peores vaticinios del capitalismo se han cumplido: triunfan los dioses del consumo y la comodidad, y el orbe se divide en diez zonas en apariencia seguras y estables. Los humanos ya no procrean, el sexo se ha convertido solo en una diversión y las letras del alfabeto griego se han pervertido para clasificar a los seres humanos por castas. Todos aceptan su lugar en la nueva jerarquía social, perfectamente ordenada. Los valores humanos esenciales no tienen cabida en este mundo y los habitantes se crean in vitro con una técnica concebida a imagen y semejanza de una cadena de montaje. El soma, la droga por excelencia en este mundo distópico que propone Huxley, ayuda a los habitantes a escapar de la rutina. A cambio de este orden pulcro, la libertad de expresión y el pensamiento crítico han sido erradicados. Bernard Marx, el protagonista de la novela, inconformista e inteligente, deberá probar los límites de la sociedad que lo ha engendrado, iniciando un viaje más allá de las fronteras distópicas de su universo.</p>
                    </div>
                </div>
                <div class="book_buttons">
                    <p>Opciones</p>
                    <button className="btn btn-reporte">Generar Reporte</button>
                </div>
            </div>
            <div className="colección_comentario">
                <div className="Comentarios">
                    <h1>Comentarios (4)</h1>
                    <button class="btn btn-agregar">Añadir Comentario</button>
                </div>
                <hr />
                <Comentario />
                <Comentario />
                <Comentario />
                <Comentario />
            </div>
        </div>
    )
}