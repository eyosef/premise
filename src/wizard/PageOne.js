import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const PageOne = ({ recommendScore, setRecommendScore }) => {
  const range = [...Array(10).keys()];

  return (
    <div className="page-two-container">
      <FormControl required={true}>
        <FormLabel component="rate-your-satisfaction">
          One a scale of 1 (least likely) to 10 (most likely), how likely are
          you to reccommend this app to a friend?
        </FormLabel>
        <RadioGroup
          aria-label="rate-your-satisfaction"
          name="rate-your-satisfaction"
          value={recommendScore}
          onChange={(e) => setRecommendScore(Number(e.target.value))}
        >
          {range.map((number) => (
            <FormControlLabel
              key={number}
              value={number + 1}
              control={<Radio />}
              label={number + 1}
              checked={recommendScore === number + 1}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PageOne;
