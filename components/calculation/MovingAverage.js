export default function MovingAverage (data, timeWin)
{
  let idxClosing = 3;
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (i < timeWin) {
      result.push("-");
      continue;
    }
    var sum = 0;

    for (let j = 0; j < timeWin; j++) {
      sum += data[i - j][idxClosing];
    }
    result.push(sum / timeWin);
  }
  return result;
};
