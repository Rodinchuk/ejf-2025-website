

const Emoji = ({ symbol, size = 20}) => (
  <img
    src={`https://emojicdn.elk.sh/${encodeURIComponent(symbol)}`}
    alt={symbol}
    width={size}
    height={size}
    style={{ verticalAlign: "middle" }}
  />
);

export default Emoji;
