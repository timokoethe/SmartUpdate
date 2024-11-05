import { useState, useEffect } from "react";
import InfoView from "./InfoView";
import SolutionView from "./SolutionView";

const QuizView = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSolutionVisible, setIsSolutionVisible] = useState(false);

    const navigateToSolution = (answers) => {
        setSelectedOptions(answers)
        console.log('Answers: ' + answers)
        console.log('SelectedOptions: ' + selectedOptions)
        setIsSolutionVisible(true)
    }

    useEffect(() => {
        console.log('SelectedOptions: ' + selectedOptions)
    }, [selectedOptions])

    const navigateBack = () => {
        setSelectedOptions([])
        setIsSolutionVisible(false)
    }

    return (
        <>
            { isSolutionVisible && selectedOptions.length > 0? 
            <SolutionView selectedOptions={selectedOptions} navigateBack={navigateBack} /> : 
            <InfoView navigateToSolution={navigateToSolution} />}
        </>
    )
}

export default QuizView;