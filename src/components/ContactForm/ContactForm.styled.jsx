import styled from "styled-components";

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid;
  padding: 16px;
  margin-left: 20px;
  border-radius: 5px;
  gap: 8px;
  `;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  font-weight: 500;
`;

export const FormInput = styled.input`
  margin: 8px 0;
  width: 180px;
  height: 18px;
`;

export const Button = styled.button`
  width: 130px;
  height: 28px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #999999;
  cursor: pointer;
  :hover {
    background-color: #1212;
  }
`;

export const Wrapper = styled.div`
padding-left: 24px;
`;