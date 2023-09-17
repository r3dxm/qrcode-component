import logo from "./logo.svg";
import "./App.css";
import Qrcode from "./components/Qrcode";
import qrimage from "./images/image-qr-code.png";

function App() {
	return (
		<div className="App">
			<Qrcode image={qrimage} />
		</div>
	);
}

export default App;
