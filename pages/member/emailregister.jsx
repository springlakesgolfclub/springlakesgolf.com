import { useRouter } from 'next/router'

import Page, { Animation } from '../../components/Page'
import Loader from '../../components/utils/Loader'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import EmailAuth from '../../components/EmailAuth'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function EmailSignup() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return auth.loading ? <Page><Loader /></Page> : (
    <Page
      className="EmailSignup"
      pageName="Sign Up with Email"
      slug="/member/emailregister"
    >
      { auth.user ? <div /> : (
        <Animation>
          <header>
            <Navbar auth={auth} invert mainNav />
          </header>

          <main>
            <EmailAuth auth={auth} />
          </main>
        
          <footer>
            <FooterSection />
          </footer>
        </Animation>
      )}
    </Page>
  )
}

function FooterSection() {
  return (
    <Footer.Wrapper>
      <Content.Public>
        <Footer.Public />
      </Content.Public>

      <Content.Members>
        <Footer.Members />
      </Content.Members>
    </Footer.Wrapper>
  )
}