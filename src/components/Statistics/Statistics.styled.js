import styled from "styled-components";

export const StatSection = styled.section`
margin: 0 auto;
text-align: center;
width: 300px;
border: 1px solid #;
background-color: #f4f4f4;
`;

export const StatList = styled.ul`
//   display: flex;
//   margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 0;
//   border-bottom: 1px solid #ccc;
 display: flex;
  flex-direction: column;
  text-align: center;
`;