import { useState } from 'react';
import { createSnippet } from '../utils/axios';
import { redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import { COLORS } from '../utils/constants';
import { ValidSnippet } from '../utils/zodValidation';
import { z, ZodIssue } from 'zod';


export const CreateSnippet = () => {
  const [textVal, setTextVal] = useState('');
  const [signVal, setSignVal] = useState('');

  const textValChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextVal(event.target.value);
  }

  const signValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignVal(event.target.value);
  }

  const formSubmit = async () => {
    try  {
      const snippetObj = {
        sign: signVal,
        text: textVal
      }
      ValidSnippet.parse(snippetObj); // zod validation

    } catch (e: any) {
      if (e instanceof z.ZodError) {
        console.log(e.flatten((issue: ZodIssue) => ({
          message: issue.message,
          errorCode: issue.code
        })));
      }
    }
    console.log(textVal);
    console.log(signVal);
    //await createSnippet(textVal, signVal);
    //redirect('/');
  }

  return (
    <SnippetContainer>
      <InputLabel>Snippet Text</InputLabel>
      <TextInput onChange={textValChange} />
        <SnippetHelperWrapper>
          <Stretcher />
          <InputHelper>x chars. remaining</InputHelper>
        </SnippetHelperWrapper>
      <InputLabel>Author Signature</InputLabel>
      <SignInput onChange={signValChange} />
        <SnippetInputHelperWrapper>
          <Stretcher />
          <InputHelper>Leave blank to remain anonymous</InputHelper>
        </SnippetInputHelperWrapper>
      <FormSubmit onClick={formSubmit}>Create Snippet</FormSubmit>
    </SnippetContainer>
  )
}

/** Top level snippet container */
const SnippetContainer = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-color: ${COLORS.inputHighlight};
  border-radius: 5px;
  border-width: thin;
`;

/** Snippet TextArea Box */
const TextInput = styled.textarea`
  min-width: 300px;
  height: 100px;
  padding: 5px 10px 5px 10px;
  color: ${COLORS.text};
  background-color: ${COLORS.bg};
  border: solid;
  border-color: ${COLORS.outline};
  border-width: thin;
  border-radius: 5px;
  transition-duration: 0.4s;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${COLORS.inputHighlight};
  }
`;

/** Snippet Signature Input Box */
const SignInput = styled.input`
  width: 200px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  color: ${COLORS.text};
  background-color: ${COLORS.bg};
  border: solid;
  border-color: ${COLORS.outline};
  border-width: thin;
  border-radius: 5px;
  transition-duration: 0.4s;
  &:focus {
    outline: none;
    border-color: ${COLORS.inputHighlight};
  }
`;

/** Snippet Input Label */
const InputLabel = styled.label`
  color: ${COLORS.text};
  margin: 5px 5px 5px 5px;
`;

/** Wrapper for input helper so it sticks to the right side */
const SnippetHelperWrapper = styled.div`
  margin: 0px 0px 10px 0px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SnippetInputHelperWrapper = styled.div`
  margin: 0px 0px 10px 0px;
  width: 200px;
  display: flex;
  align-items: center;
`;

/** Extra description info for Snippet Input */
const InputHelper = styled.div`
  font-size: 12px;
`;

/** Fake component to make sign text align right  */
const Stretcher = styled.div`
  flex-grow: 1;
`;

/** Snippet form submit button */
const FormSubmit = styled.button`
  padding: 5px 10px 5px 10px;
  margin: 10px 0px 10px 0px;
  background-color: ${COLORS.buttons};
  border: solid;
  border-color: ${COLORS.outline};
  border-width: thin;
  border-radius: 5px;
  color: ${COLORS.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${COLORS.inputHighlight};
    cursor: pointer;
  }
  &:active {
    background-color: ${COLORS.buttons};
  }
`;