import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Myosotis Blog</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      

      <body>
        <h1>Keep Receipts</h1>
        <h2>On why keeping receipts is helpful</h2>
        <h3>by Brendan Finan</h3>

        <p>Keeping receipts is an easy and useful way to keep track of where you`ve been and what you`ve done.</p>
      </body>
    </>
  );
}