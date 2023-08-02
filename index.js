const findMatching = (drivers,match) => {
    return drivers.filter((possibleMatch) => possibleMatch.toLowerCase() === match.toLowerCase())
}

const fuzzyMatch = (drivers,match) => {
    return drivers.filter((possibleMatch) => possibleMatch.toLowerCase().charAt(0) === match.toLowerCase().charAt(0))
}

const matchName = (drivers,match) => {
    return drivers.filter(
        (drivers) => drivers.name === match
    )
} 