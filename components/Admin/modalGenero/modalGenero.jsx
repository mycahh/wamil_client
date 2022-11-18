import ModalBase from '../../modals/modalBase'
import FormGenero from '../FormGenero'

import '../modalBook/modal-book.css'


export default function ModalAuthor() {

    return <ModalBase isOpen={true} class_name="modal-book">
        <FormGenero />
    </ModalBase>
}