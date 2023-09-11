export const JsStringConversion = () => {
  function calcResolution(x, y) {
    const clearedX = x.replace('px', '');
    const clearedY = y.replace('px', '');

    return +clearedX * +clearedY;
  }

  function isEmpty(x) {
    return !!x;
  }

  return (
    <div>
      <p>calcResolution: {calcResolution('1080px', '1920px')}</p>
      <p>isEmpty: {isEmpty(NaN).toString()}</p>
    </div>
  );
};
