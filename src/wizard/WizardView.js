import React, { useState, useEffect } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const WizardView = () => {
    const [page, setPage] = useState(0)
    const [recommendScore, setRecommendScore] = useState(0)
    const [textAreaValue, setTextAreaValue] = useState('')

    useEffect(() => {
        if (page === pages.length - 1) {
            console.log(`Likely to recommend the product: ${recommendScore}/10`)
            console.log(`Additional feedback: \n ${textAreaValue} \n`)
        }

        if (recommendScore >= 8) {
            setPage(pages.length - 1)
        }
    }, [page, recommendScore])

    const pages = [
        <PageOne
            recommendScore={recommendScore}
            setRecommendScore={setRecommendScore}
        />,
        <PageTwo
            textAreaValue={textAreaValue}
            setTextAreaValue={setTextAreaValue}
        />,
        <PageThree
            recommendScore={recommendScore}
            textAreaValue={textAreaValue}
        />,
    ]

    const validatePageOne = () => {
        return page === 1 && recommendScore === 0
    }

    return (
        <div className="wizard-container">
            <h3>Question or Feedback?</h3>
            <hr />
            <div className="page-container">{pages[page]}</div>
            {page < 2 && (
                <div className="required-container">
                    <span> * Field is required</span>
                </div>
            )}
            <div className="buttons-container">
                <div
                    className="prev-container"
                    onClick={() => setPage(page - 1)}
                >
                    {page > 0 && page < pages.length - 1 && (
                        <>
                            <NavigateBeforeIcon />
                            <button className="prev">Previous</button>
                        </>
                    )}
                </div>
                <div
                    className="next-container"
                    onClick={() => setPage(page + 1)}
                >
                    {page < pages.length - 2 && (
                        <>
                            <button
                                className="next"
                                disabled={validatePageOne()}
                            >
                                Next
                            </button>
                            <NavigateNextIcon />
                        </>
                    )}
                </div>
                <div
                    className="submit-container"
                    onClick={() => setPage(page + 1)}
                >
                    {page === pages.length - 2 && (
                        <button className="submit">Submit</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WizardView
