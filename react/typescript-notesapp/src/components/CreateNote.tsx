import * as React from 'react';
import {Button, Form, Alert, Card} from 'react-bootstrap';
import { Note } from '../Models/Models';
interface ICreateNoteProps {
    notes : Note[],
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<ICreateNoteProps> = ({notes, setNotes}) => {
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const hanldeSubmit = (e:React.FormEvent<HTMLFormElement>): void=> {
            e.preventDefault();
            if(titleRef.current?.value === "" || textRef.current?.value === ""){
                return setError("All Fields are Mandatory");
            }
            setError("");
            setNotes([...notes, {
                id : (new Date).toString(),
                title: (titleRef.current as HTMLInputElement).value,
                text: (textRef.current as HTMLTextAreaElement).value,
                color: (colorRef.current as HTMLInputElement).value,
                date: (new Date).toString()
            }]);

            (titleRef.current as HTMLInputElement).value = "";
            (textRef.current as HTMLTextAreaElement).value = "";
            (colorRef.current as HTMLInputElement).value = "#dfdfdf";
    };
  return (
      <Card className="p-3 shadow-sm">
        <h2>Create Note</h2>
        <Form className="mb-3 mt-3" onSubmit={(e)=> hanldeSubmit(e)}>
            { error && <Alert variant="danger">{error}</Alert>}
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title For the Note" ref={ titleRef }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Text For the Note" ref={ textRef }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" placeholder="Choose your color" ref={ colorRef }/>
            </Form.Group>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </Card>
  );
};

export default CreateNote;
