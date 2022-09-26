import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

function SelectInput({options, placeholder}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const style = {
    dropdownIndicator: (provided) => ({
      ...provided,
      "svg": {
        fill: "var(--clr-black)"
      }
    }),
  }

  return (
    <Wrapper>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={<div className="select-placeholder-text">{placeholder}</div>}
        components={{
          IndicatorSeparator: () => null
        }}
        styles={style} 
      />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .select-placeholder-text {
    font-family: 'Jost';
    font-size: 16px;
    font-weight: 300;
    color: var(--clr-black);
  }
`

export default SelectInput;