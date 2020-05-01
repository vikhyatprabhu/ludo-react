import React  from "react";
import './DieFace.css';

const Pip  = () => <span className="pip" />;


const Face = ({children}:FaceProps) => <div className="face">{children}</div>;

type DieFaceProps={
    value:number
}

type FaceProps={
    children: any[]|null
}

const DieFace = ({value} :DieFaceProps ) => {
	let pips = Number.isInteger(value)
		? Array(value)
				.fill(0)
				.map((_, i) => <Pip key={i} />)
		: null;
	return <Face>{pips}</Face>;
};

export default DieFace;

