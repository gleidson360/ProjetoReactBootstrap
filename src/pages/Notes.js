import React, { useState } from 'react';
import { Container, Button, Modal, InputGroup, Form } from 'react-bootstrap';
import Note from '../components/Note';

const Notes = () => {
    const [show, setShow] = useState(false);
    const [noteList, setNoteList] = useState([]);

    const [note, setNote] = useState({
        date:'',
        title:'',
        description:''
    });

    function toggleShow()
    {
        setShow(!show)
    }

    function handleInputChange(event)
    {    
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value
        });
    };

    function SaveNote() {
        if (!note.date || !note.title || !note.description) {
            alert("Por favor, preencha todos os campos antes de adicionar a anotação.");
            return;
        }

        setNoteList([...noteList, note]);
        // setNoteList((prevList) => [...prevList, note]);

        toggleShow();

        setNote({
            date: '',
            title: '',
            description: ''
        });
    }
 
    return (
        <>
            <Container className="p-5 my-4 bg-light rounded-3">
                <h1>Minhas Anotações</h1>
                <p>
                    Use essa janela para adicionar anotações, lembretes ou qualquer tipo de informação!
                </p>
                <Button variant='success' onClick={ toggleShow } >Criar nova anotação</Button>
            </Container>

            <Container>
                {noteList.map(item => <Note title={item.title} date={item.date} description={item.description}/>)}
            </Container>

            <Modal show={show} >
                <Modal.Header>
                    <Modal.Title>Nova anotação  {note.title} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>Data</InputGroup.Text>
                        <Form.Control 
                            type='date' 
                            name="date" 
                            value={note.date} 
                            onChange={handleInputChange} 
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Título</InputGroup.Text>
                        <Form.Control 
                            name="title" 
                            value={note.title} 
                            onChange={handleInputChange} 
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                        <Form.Control 
                            as="textarea" 
                            name="description" 
                            value={note.description} 
                            onChange={handleInputChange} 
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={ toggleShow } > Cancelar </Button>
                    <Button  variant='primary' onClick={SaveNote}> Adicionar </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Notes;
