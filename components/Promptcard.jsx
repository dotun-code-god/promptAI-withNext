import { useState, useEffect } from 'react';

const Promptcard = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div>Promptcard</div>
  )
}

export default Promptcard