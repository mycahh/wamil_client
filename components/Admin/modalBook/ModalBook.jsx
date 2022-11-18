import ModalBase from '../../modals/modalBase'
import FormBook from '../FormBook'

import './modal-book.css'

export default function ModalBook() {


    return <ModalBase isOpen={true} class_name="modal-book">
        <FormBook />
    </ModalBase>
}