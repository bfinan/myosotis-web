import Link from 'next/link';
import { BumpLink } from 'src/components/bumplink'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://dlwuvzvlhxguzprtnopf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsd3V2enZsaHhndXpwcnRub3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDE2MTEsImV4cCI6MTk5ODM3NzYxMX0.jSJTWbirr2o0oQ4k-eZLUSev3liJl1CBnQpL4FBQuX0')



export default function WikibumpPage() {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link> <br></br>
        <BumpLink title="Running" wikititle='https://www.wikipedia.org/wiki/Running'></BumpLink>
        <BumpLink title="Boston Marathon" wikititle='https://www.wikipedia.org/wiki/Boston_Marathon'></BumpLink>

      </h2>
    </>
  );
}