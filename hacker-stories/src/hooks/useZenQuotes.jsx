import { useState, useEffect, useRef } from 'react';

export default function useZenQuotes(apiKey, refreshIntervalMs = 3600_000) {
  const [quotes, setQuotes] = useState([]);
  const intervalRef = useRef(null);

  const fetchQuotes = async () => {
    try {
      const res = await fetch(`https://zenquotes.io/api/random`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setQuotes(data);
    } catch (err) {
      console.error('ZenQuotes fetch error:', err);
    }
  };

  useEffect(() => {
    fetchQuotes();                            // initial load
    intervalRef.current = setInterval(fetchQuotes, refreshIntervalMs);
    return () => clearInterval(intervalRef.current);
  }, [refreshIntervalMs]);

  return quotes;
}
