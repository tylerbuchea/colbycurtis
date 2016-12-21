import React, {
  Component,
} from 'react';

export default class Header extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-restricted">
        <header className="header row">
          <h1><a href="http://tylerbuchea.com">Colby Curtis</a></h1>
          <h2>Personal Trainer</h2>

          <hr className="divider" />

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">

                <li className="navbar-item">
                  <a className="icon navbar-link" href="http://blog.colbycurtis.fitness">
                    <i className="fa fa-pencil"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://instagram.com/icurtisalmighty">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://facebook.com/colby.curtis1">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://twitter.com/colbycurtis19">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="https://www.youtube.com/channel/UCmh86hJFJ2W150dxr0JAcRA">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </header>

        <section className="content row" role="main">
          <article className="content-item content-contact">

            <h3 className="title is-2">
              Every journey begins with a single step.<br />
              Contact me to start yours.
            </h3>
            <ul className="contact-list">
              <li>
                <i className="fa fa-calendar"></i> <a href="https://calendly.com/colbycurtis" onClick={() => window.ga('send', 'event', 'Contact Request', 'Calendly', 'Tried to schedule a calendly meeting')}>Schedule a meeting</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i> <a href="mailto:colby@colbycurtis.fitness" target="_blank" onClick={() => window.ga('send', 'event', 'Contact Request', 'Email', 'Tried to contact me via email')}>Send me an email</a>
              </li>
              <li>
                <form action="//formspree.io/colby@colbycurtis.fitness" method="POST">
                  <input type="email" name="_replyto" placeholder="your-email@example.com" style={{ fontSize: 12.5 }} />
                  &nbsp;
                  <input type="submit" value="SEND" />
                </form>
              </li>
            </ul>

          </article>

          <article className="content-item content-direct">
            <div className="about">
              <div className="about-copy">
                <h2 className="title is-2">Welcome,</h2>
                <p style={{ marginRight: 10 }}>
                  I’m Colby Curtis, a NASM certified fitness professional with
                  a desire to help you along your path to a healthier you.
                  Health isn’t just having a self installed washboard or arms
                  that don’t allow for sleeved shirts, it’s about being
                  physically and mentally energetic while living a satisfied
                  and happy life. All anyone really wants is to find happiness,
                  and I believe fitness done the right way for the right
                  reasons to be an excellent tool to help accomplish that goal.
                </p>
              </div>
              <img src="img/icon-avatar.png" className="icon-avatar" role="presentation" />
            </div>
            <hr />
          </article>

        </section>
      </div>
    );
  }

}
