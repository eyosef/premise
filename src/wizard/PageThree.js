import React from 'react'

const PageThree = ({ recommendScore, textAreaValue }) => {
    return (
        <div className="page-three-container">
            <div className="survey-response-container">
                <h4>Your Survey Response:</h4>
                <p className="response-label">
                    Likely to recommend the product:
                    <span className="response"> {recommendScore}/10</span>
                </p>
                {textAreaValue.length ? (
                    <p className="response-label">
                        Additional feedback:{' '}
                        <span className="response">{textAreaValue}</span>
                    </p>
                ) : null}
            </div>
            <br />
            <h4>Thank you</h4>
            <p>
                We value our customers and take their feedback seriously. Thank
                you for completing this survey.
            </p>
        </div>
    )
}

export default PageThree
