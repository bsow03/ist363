export default function QuoteBlock({ quote }) {
    return (
      <div className="mt-2 mb-4 p-4 italic border-l-4 border-gray-400 bg-gray-100 text-black">
        <p>{quote.quote}</p>
        <p className="mt-2 text-right">— {quote.author}</p>
      </div>
    );
  }