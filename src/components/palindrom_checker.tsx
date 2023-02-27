import React, { useState } from "react";
import "../App.css";
import InputField from "./inputField_component";
import ButtonHeader from "./button_header";
import { isVisible } from "@testing-library/user-event/dist/utils";

const PalindromChecker = () => {
	const [word, setWord] = useState<string>("");
	const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
	const [visible, setIsVisible] = useState<boolean>(false);
	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target as unknown as { value: string };
		setWord(value);
	};
	const resetWord = (e: MouseEvent) => {
		setWord("");
		setIsVisible(false);
	};

	const checkIsPalindrom = (e: MouseEvent) => {
		e.preventDefault();
		setIsVisible(true);
		//const reg = /[\W_]/g;
		//console.log("check for number :", typeof word);
		const reversed = word.split("").reverse().join("");
		if (reversed.toLowerCase() === word.toLowerCase()) {
			setIsPalindrome(true);
			console.log("true");
		} else {
			setIsPalindrome(false);
			console.log("false");
		}
	};

	const Result = () => {
		return visible === true ? (
			<div className="palindrome">
				<p>
					<p>
						{word} is {isPalindrome === true ? " a " : " not a "}palidrome
					</p>
				</p>
			</div>
		) : (
			<div></div>
		);
	};

	return (
		<>
			<div className="header">
				<div className="search-box">
					<InputField
						data={word}
						placeholder="Type a word"
						handleChange={handleTextChange}
					/>
				</div>
				<div className="btn-box">
					<ButtonHeader btnName="Check word" handleClick={checkIsPalindrom} />
				</div>
				<div className="btn-box">
					<ButtonHeader btnName="reset" handleClick={resetWord} />
				</div>
			</div>
			<Result />
		</>
	);
};

export default PalindromChecker;
