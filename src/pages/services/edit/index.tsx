import Link from "next/link"
import clsx from 'clsx'
import { useState, useEffect } from "react"
//import { Button, buttonClass } from 'src/components/buttons/button'



export default function ResearchPage() {
  return (
    <>
      <h1>Myosotis Editing Services</h1>
      <h2>
        <Link href="/">	← Return</Link>
      </h2>
      <h2>

      </h2>
      <li>
        <Link href="/services/edit/brendan">Brendan Finan</Link>
      </li>

      <h3> You can join this team! Email info@myosot.is to learn more.</h3>

    </>
  );
}
