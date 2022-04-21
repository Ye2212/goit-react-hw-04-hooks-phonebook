import propTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';

class ContactForm extends Component {
    static propTypes = {
        onSubmitProp: propTypes.func,
    }

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        // console.log({ [e.currentTarget.name]: e.currentTarget.value });
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("form: ", this.state);
        this.props.onSubmitProp(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    render() {
        // const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    <Text>Name</Text>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    <Text>Number</Text>
                    <Input
                        placeholder='+XX XXX XXX XX XX'
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <AddContactBtn type="submit">Add contact</AddContactBtn>
            </Form >
        );
    }
}


export default ContactForm;
