import { Title } from "./Components";
import styles from "./App.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Styles() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title className="text-3xl text-red-400">{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
      <p>{process.env.REACT_APP_API_URL}</p>
      <p>{console.log(process.env.REACT_APP_API_URL)}</p>
      hello world
      {process.env.NODE_ENV === "production" && (
        <>
          <div>Merhaba dünya</div>
        </>
      )}
    </div>
  );
}

export default Styles;
