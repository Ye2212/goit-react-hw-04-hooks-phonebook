import propTypes from 'prop-types';
import { ContactItem, DeleteBtn, Name, Number } from './Contact.styled';

function Contact({ name, number, contactId, onDeleteContact }) {
    return (
        <>
            <ContactItem><Name>{name}</Name><Number>{number}</Number></ContactItem>
            <DeleteBtn
                type="button"
                onClick={() => onDeleteContact(contactId)}
            >Delete</DeleteBtn>
        </>
    )
}

Contact.propTypes = {
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    contactId: propTypes.string.isRequired,
    onDeleteContact: propTypes.func.isRequired,
}
export default Contact;