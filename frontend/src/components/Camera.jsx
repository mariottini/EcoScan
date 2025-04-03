import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function Camera() {
	const webcamRef = useRef(null);
	const [image, setImage] = useState(null);

	const capture = () => {
		const screenshot = webcamRef.current.getScreenshot();
		setImage(screenshot);
	};

	return (
		<div>
			{!image ? (
				<>
					<Webcam
						audio={false}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						width={400}
						height={300}
					/>
					<button onClick={capture}>Scatta Foto</button>
				</>
			) : (
				<>
					<img src={image} alt="Scatto" />
					<button onClick={() => setImage(null)}>Riprova</button>
				</>
			)}
		</div>
	);
}

export default Camera;
