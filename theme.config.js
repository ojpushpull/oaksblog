import MailchimpSubscribe from "react-mailchimp-subscribe"

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
    
      <small>
        <time>{YEAR}</time> © Okera Johnson.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  main: {
    children: <MailchimpSubscribe className="mailbox"></MailchimpSubscribe>
   
  } 
}
