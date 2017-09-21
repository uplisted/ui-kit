const getPositionMap = (substrings) => {
  const result = [];

  for (let i = 0; i < substrings.length; i += 1) {
    result.push([substrings[i].offset, substrings[i].offset + substrings[i].length]);
  }

  return result;
};

const mapString = (str, positionMap) => {
  const result = [];

  const lastIndex = positionMap.length - 1;
  const first = positionMap[0];
  const last = positionMap[lastIndex];
  const strLength = str.length;

  // check for the first item
  if (first[0] !== 0) {
    result.push({
      isMatched: false,
      text: str.slice(0, first[0]),
    });
  }

  for (let i = 0; i < lastIndex; i += 1) {
    const current = positionMap[i];
    const next = positionMap[i + 1];

    result.push({
      isMatched: true,
      text: str.slice(current[0], current[1]),
    });

    if (current[1] !== next[0]) {
      result.push({
        isMatched: false,
        text: str.slice(current[1], next[0]),
      });
    }
  }

  result.push({
    isMatched: true,
    text: str.slice(last[0], last[1]),
  });

  // check for the last item next piece
  if (last[1] !== strLength) {
    result.push({
      isMatched: false,
      text: str.slice(last[1], strLength),
    });
  }

  return result;
};

const parseSubstr = (str, substrings) => {
  const posMap = getPositionMap(substrings);

  return mapString(str, posMap);
};

export default parseSubstr;
