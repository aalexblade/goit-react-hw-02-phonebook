import { Component } from "react";
import {
    Form,
    Lamble,
    Imput,
    Button,
} from "./ContactForm..styled";

export class ContactForm extends Component { 
   state = {
    name: '',
    number: '',
  };
    
    render() { 

        return (
            <Form>
                <Lamble>
                    Name
                    <Imput />
                </Lamble>
            </Form>
            
            <Form>
                <Lamble>
                    Number
                    <Imput />
                </Lamble>
                    <Button>
                        Add contact
                    </Button>
           </Form>
        )
    };
};

