import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="absolute left-[50%] mt-[30vh] translate-x-[-50%] translate-y-[-50%]">
        <div>要登陆了你才能进到dashboard</div>
        <br />
        <div>
          <br />
          <Link href="/login">
            <Button>login in</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
