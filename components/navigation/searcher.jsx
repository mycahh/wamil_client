'user client'
import Image from 'next/image'

export default function SearcherComponent() {

    return(
        <div className="searcher">
            <input type="text" placeholder="Coloca por nombre de autor, género o titulo"/>
            <button className="searcher_button">
                <Image src="/Search.svg" width={18} height={18} alt="seacher icon"/>
            </button>
        </div>
    )
}