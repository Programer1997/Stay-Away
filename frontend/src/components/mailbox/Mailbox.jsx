import "./mailbox.css";

const Mailbox = () => {
  return (
    <div className="mailboxPart">
      <h1 className="mailTitle">You can contact us!</h1>
      <span className="mailDescription">Sign up and we can send you the best deals</span>

    <div className="mail">
      <input type="text" placeholder="welcome@gmail.com" />
      <button>Subscribe</button>
    </div>
    </div>
  )
}

export default Mailbox
