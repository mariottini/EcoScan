import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function Camera() {
	const webcamRef = useRef(null);
	const [image, setImage] = useState(null);

	const capture = () => {
		const screenshot = webcamRef.current.getScreenshot();
		setImage(screenshot);
	};

	const loadImage = () => {
		console.log("Image loded!");
	};

	return (
		<div className="webcam-container">
			{!image ? (
				<>
					<Webcam
						audio={false}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						className="webcam"
						screenshotQuality={1}
					/>
					<button onClick={capture} className="snap-btn">
						<img src="/img/fotocamera.svg" alt="" />
					</button>
				</>
			) : (
				<>
					<img src={image} alt="Scatto" className="webcam" />
					<button onClick={() => loadImage()} className="snap-btn">
						<img src="/img/check.svg" alt="" />
					</button>
					<button onClick={() => setImage(null)} className="cancel-btn">
						<img src="/img/cancel.svg" alt="" />
					</button>
				</>
			)}
		</div>
	);
}

export default Camera;
