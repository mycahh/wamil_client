import ModalBase from '../../modals/modalBase'
import FormAuthor from '../FormAuthor'

import '../modalBook/modal-book.css'

export default function ModalAuthor() {


    return <ModalBase isOpen={true} class_name="modal-book">
        <FormAuthor />
    </ModalBase>
}