export const initialState =
    {
        currentValue: "0",
        operator: null,
        previousValue: "0",
    };

const resetState = {
    operator: null,
    previousValue: null,
};


export const handleNumber = (value, prevState) =>
{
    // Bug #1
    // Pressing "." more than once causes silent crash
    if (prevState.currentValue.includes(".") && value === ".")
    {
        return;
    }

    if (prevState.currentValue === "0" && value === 0)
    {
        return {
            currentValue: `${value}`
        };
    }
    else
    {
        return {
            currentValue: `${prevState.currentValue}${value}`
        }
    }

};

export const handleEquals = (prevState) =>
{
    const {currentValue, previousValue, operator} = prevState;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    if (operator === "/")
    {
        return {
            currentValue: `${previous / current}`,
            ...resetState,
        }
    }
    if (operator === "*")
    {
        return {
            currentValue: `${previous * current}`,
            ...resetState,
        }
    }
    if (operator === "-")
    {
        return {
            currentValue: `${previous - current}`,
            ...resetState,
        }
    }
    if (operator === "+")
    {
        return {
            currentValue: `${previous + current}`,
            ...resetState,
        }
    }

    return prevState;
};

export const Calculator = (type, value, prevState) =>
{
    switch (type)
    {
        case "number":
            return handleNumber(value, prevState);
        case "operator":
            return {
                operator: value,
                previousValue: prevState.currentValue,
                currentValue: "0",
            };
        case"equals":
            return handleEquals(prevState);
        case "clear":
            return initialState;
        case "posneg":
        {
            // Bug #2
            // Fix string interpolation consistency throughout the app
            return {
                currentValue: prevState.currentValue === "0" ? "0" : `${parseFloat(prevState.currentValue * -1)}`,
            }
        }
        case "percent":
        {
            // Bug #2
            // Fix string interpolation consistency throughout the app
            return {
                currentValue: prevState.currentValue === "0" ? null : `${parseFloat(prevState.currentValue / 100)}`,
                ...resetState,
            }
        }
        default:
            return prevState;
    }
}


export default Calculator;
