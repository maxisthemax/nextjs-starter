import Container from "@mui/material/Container";
import { ColorButtonText } from "components/Buttons";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <ColorButtonText
        variant="contained"
        color="primary"
        innerText="Hellow World"
        onClick={() => alert("123")}
      />
    </Container>
  );
}
